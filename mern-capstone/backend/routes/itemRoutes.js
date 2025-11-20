import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getItems, createItem } from "../controllers/itemController.js";

const router = express.Router();

router.route("/").get(protect, getItems).post(protect, createItem);

export default router;
