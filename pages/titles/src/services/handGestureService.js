export default class HandGestureService {
  #gestureEstimator;
  #handPoseDetection;
  #handsVersion;
  #detector = null;
  #gestureStrings;

  constructor({
    fingerpose,
    handPoseDetection,
    handsVersion,
    knownGestures,
    gestureStrings,
  }) {
    this.#gestureEstimator = new fingerpose.GestureEstimator(knownGestures);
    this.#handPoseDetection = handPoseDetection;
    this.#handsVersion = handsVersion;
    this.#gestureStrings = gestureStrings;
  }
  async estimate(hand) {
    const prediction = await this.#gestureEstimator.estimate(
      this.#getLandMarksFromKeyPoints(hand.keypoints3D),
      // porcentagem de confiança do gesto exp 90%
      9
    );
    const handedness = hand.handedness;
    const predictions = {
      prediction,
      handedness,
    };

    return predictions;
  }

  async *detectGestures(predictions) {
    for (const hand of predictions) {
      if (!hand.keypoints3D) continue;

      const gesture = await this.estimate(hand);
      const handedness = gesture.handedness;

      const gestures = await gesture.prediction.gestures;
      if (!gestures.length) continue;

      const result = gestures.reduce((p, n) => (p.score > n.score ? p : n));
      const { x, y } = hand.keypoints.find(
        (keypoint) => keypoint.name == "index_finger_tip"
      );
      yield { event: result.name, x, y, handedness };
      // console.log("detected", this.#gestureStrings[result.name]);
    }
  }

  #getLandMarksFromKeyPoints(keypoints3D) {
    return keypoints3D.map((keypoint) => [keypoint.x, keypoint.y, keypoint.z]);
  }

  async estimateHands(video) {
    return this.#detector.estimateHands(video, {
      flipHorizontal: true,
    });
  }

  async initializeDetector() {
    if (this.#detector) return this.#detector;

    const detectorConfig = {
      runtime: "mediapipe", // or 'tfjs',
      solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/hands@${
        this.#handsVersion
      }`,
      // full é o mais pesado e o mais preciso
      modelType: "lite",
      maxHands: 2,
    };
    this.#detector = await this.#handPoseDetection.createDetector(
      this.#handPoseDetection.SupportedModels.MediaPipeHands,
      detectorConfig
    );

    return this.#detector;
  }
}
