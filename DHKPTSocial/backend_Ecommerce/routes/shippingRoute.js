import express from "express";
import {
  getAllShippings,
  updateShippingStatus,
  addShippingStage
} from "../controllers/shippingController.js";

const router = express.Router();

router.get("/", getAllShippings);
router.patch("/:id/status", updateShippingStatus);
router.post("/:id/stage", addShippingStage);

export default router;
