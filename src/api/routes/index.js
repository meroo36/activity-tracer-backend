import { Router } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";
import { specs, swaggerConfig } from "../../config/index.js";
import user from "./user.js";
import challenges from "./challenge.js";
import step from "./step.js";
import leaderboard from "./leaderboard.js";

const router = Router();

const specDoc = swaggerJsdoc(swaggerConfig);

router.use(specs, serve);
router.get(specs, setup(specDoc, { explorer: true }));

router.use("/user", user);
router.use("/challenges", challenges);
router.use("/step", step);
router.use("/leaderboard", leaderboard);

export default router;
