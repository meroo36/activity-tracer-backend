import { Router } from "express";
import {
  getGlobalLeaderboard,
  getChallengeLeaderboard,
} from "../controllers/leaderboard/index.js";

const router = Router();

router.get("/global/:limit", getGlobalLeaderboard);
router.get("/challenge/:challengeName/:limit", getChallengeLeaderboard);

export default router;
