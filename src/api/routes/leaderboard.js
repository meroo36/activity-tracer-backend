import { Router } from "express";
import { catchAsyncHandler } from "../../utils/index.js";

import {
  getGlobalLeaderboard,
  getChallengeLeaderboard,
} from "../controllers/leaderboard/index.js";

const router = Router();

router.get("/global/:limit", catchAsyncHandler(getGlobalLeaderboard));
router.get(
  "/challenge/:challengeName/:limit",
  catchAsyncHandler(getChallengeLeaderboard)
);

export default router;
