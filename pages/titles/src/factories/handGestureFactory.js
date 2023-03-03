import Camera from "../../../../lib/shared/camera.js";
import HandGestureController from "../controllers/handGestureController.js";
import HandGestureService from "../services/handGestureService.js";
import {
  fingerLookupIndexes,
  gestureStrings,
  knownGestures,
} from "../utils/util.js";
import HandGestureView from "../views/handGestureView.js";

let styler = new PseudoStyler();
const camera = await Camera.init();

const factory = {
  async initialize() {
    return HandGestureController.initialize({
      camera,
      view: new HandGestureView({
        fingerLookupIndexes,
        styler,
      }),
      service: new HandGestureService({
        gestureStrings,
        knownGestures,
        fingerpose: window.fp,
        handPoseDetection: window.handPoseDetection,
        handsVersion: window.VERSION,
      }),
    });
  },
};

export default factory;
