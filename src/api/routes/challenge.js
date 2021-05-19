import { Router } from "express";
import { auth, imageUpload } from "../middlewares/index.js";
import { catchAsyncHandler } from "../../utils/index.js";

import {
  getChallenges,
  addChallenge,
  joinChallenge,
} from "../controllers/challenge/index.js";

const router = Router();

router.get("/", catchAsyncHandler(getChallenges));
router.put("/add", catchAsyncHandler(addChallenge));
router.put("/join", auth, catchAsyncHandler(joinChallenge));

export default router;
