import express from "express";
import routes from "../routes";
import { uploadVideo } from "../middlewares";
import {
  getUpload,
  postUpload,
  videoDetail,
  getEditVideo,
  postEditVideo,
  deleteVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

//upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

//video detail
videoRouter.get(routes.videoDetail(), videoDetail);

//video edit
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

//delete Videl
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
