import { Router } from "express";
import { auth, imageUpload } from "../middlewares/index.js";
import { catchAsyncHandler } from "../../utils/index.js";

import {
  register,
  login,
  logout,
  verifyEmail,
  refreshToken,
  forgotPassword,
  sendVerificationCode,
  changePassword,
  editUser,
  getUser,
  deleteUser,
} from "../controllers/user/index.js";

const router = Router();

// AUTH
router.post("/register", catchAsyncHandler(register));
router.post("/login", catchAsyncHandler(login));
router.post("/logout", auth, catchAsyncHandler(logout));
router.post("/verify-email", catchAsyncHandler(verifyEmail));
router.post("/refresh-token", catchAsyncHandler(refreshToken));
router.post("/forgot-password", auth, catchAsyncHandler(forgotPassword));
router.post("/send-verification-code", catchAsyncHandler(sendVerificationCode));

// EDIT
router.post("/change-password", auth, changePassword);
// router.put('/', auth, imageUpload, editUser);

router.get("/getUser", auth, getUser);
router.delete("/", auth, deleteUser);

export default router;
