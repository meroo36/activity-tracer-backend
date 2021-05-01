import { Router } from "express";
const router = Router();
import { auth } from "../middlewares/index.js";
import { sendSteps } from "../controllers/step/index.js";

router.put("/send", auth, sendSteps);

export default router;
