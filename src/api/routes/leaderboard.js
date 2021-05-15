import { Router } from "express";
import { getGlobalLeaderboard } from "../controllers/leaderboard/index.js";

const router = Router();

router.get("/global", getGlobalLeaderboard);

export default router;
