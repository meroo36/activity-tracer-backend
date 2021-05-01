import { Router } from "express";
import { auth, imageUpload } from "../middlewares/index.js";
import { getChallenges, addChallenge } from "../controllers/challenge/index.js";

const router = Router();

router.get("/", getChallenges);
router.put("/add", addChallenge);
// router.get("/:id", getPet);
// router.post("/byprovince", getPetsByProvince);
// router.post("/favorites", auth, getPetFavorites);
// router.put("/addtofavorites", auth, addPetToFavorites);

export default router;
