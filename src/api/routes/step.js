import { Router } from "express";
const router = Router();
import { auth } from "../middlewares/index.js";
import { sendSteps, getWeeklySteps } from "../controllers/step/index.js";
import { catchAsyncHandler } from "../../utils/index.js";

router.put("/send", auth, catchAsyncHandler(sendSteps));
router.get("/weekly", auth, catchAsyncHandler(getWeeklySteps));

export default router;
