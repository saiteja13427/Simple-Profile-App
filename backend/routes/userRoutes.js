import express from "express";
import {
  login,
  getProfile,
  register,
  uploadPhoto,
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";
import {
  upload,
  storage,
  checkFileType,
} from "../middlewares/uploadMiddleware.js";

const router = express.Router();

router.post("/login", login);
router.post("/", register);
router
  .route("/profile")
  .get(protect, getProfile)
  .post(protect, upload.single("image"), uploadPhoto);
export default router;
