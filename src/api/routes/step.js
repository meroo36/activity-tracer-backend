import { Router } from "express";
const router = Router();
import { auth } from "../middlewares/index.js";
import { sendSteps, getWeeklySteps } from "../controllers/step/index.js";

router.put("/send", auth, sendSteps);
router.get("/weekly", auth, getWeeklySteps);

export default router;
