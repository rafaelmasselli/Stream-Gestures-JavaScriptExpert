import Camera from "../../../../lib/shared/camera.js";
import HandGestureController from "../controllers/handGestureController.js";
import HandGestureService from "../services/handGestureService.js";
import HandGestureView from "../views/handGestureView.js";

const camera = await Camera.init();

const [rootPath] = window.location.href.split("/pages/");
const factory = {
  async initialize() {
    return HandGestureController.initialize({
      camera,
      view: new HandGestureView(),
      service: new HandGestureService({
        fingerpose: window.fp,
        handPoseDetection: window.handPoseDetection,
        handsVersion: window.VERSION,
      }),
    });
  },
};

export default factory;
