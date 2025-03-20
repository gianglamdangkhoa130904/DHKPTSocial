import express from 'express';
import {
  loginShipper,
  getAllShippers,
  updateDeliveryStatus,
  createShipper
} from '../controllers/shipperController.js';

const router = express.Router();

router.post('/login', loginShipper);
router.get('/', getAllShippers);
router.post('/', createShipper);
router.put('/:id/delivery-status', updateDeliveryStatus);

export default router;
