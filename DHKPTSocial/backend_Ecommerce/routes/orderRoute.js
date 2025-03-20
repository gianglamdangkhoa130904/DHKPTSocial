import express from 'express';
import { Order } from '../models/orderModel.js';
import  Cart  from '../models/cartModel.js';
import mongoose from 'mongoose';
const router = express.Router();

router.get("/store/:storeId", async (req, res) => {
    try {
        const { storeId } = req.params;

        // Kiểm tra xem storeId có hợp lệ không
        if (!mongoose.Types.ObjectId.isValid(storeId)) {
            return res.status(400).json({ message: "Invalid store ID" });
        }

        // Tìm tất cả đơn hàng có sản phẩm thuộc storeId
        const orders = await Order.find()
            .populate({
                path: "items.productId",
                populate: { path: "store" } 
            })
            .populate('customer').populate('shipper');

        // Lọc ra đơn hàng có ít nhất một sản phẩm thuộc storeId
        const filteredOrders = orders.filter(order =>
            order.items.some(item => item.productId.store.equals(storeId))
        );

        res.json(filteredOrders);
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.post("/", async (req, res) => {
    const { userId, items } = req.body;
  
    // Tạo đơn hàng
    const newOrder = new Order(req.body);
    await newOrder.save();

    const populatedOrder = await Order.findById(newOrder._id).populate("customer").populate("items.productId");
    // Gửi sự kiện và phản hồi
    req.io.emit("orderAdded", populatedOrder);
    res.status(201).json(newOrder);
  });

  router.put('/:id', async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .populate("customer")
            .populate({
                path: "items.productId", 
                select: "name price image" // Chỉ lấy các trường cần thiết
            })
            

        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }
        
        req.io.emit("orderUpdated", updatedOrder);

        return res.json({ 
            message: 'Order updated successfully', 
            order: updatedOrder 
        });

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

// Delete a product by ID (DELETE)
router.delete('/:id', async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);
        if (!deletedOrder) {
            return res.status(404).json({ message: 'Product not found' });
        }
        req.io.emit("orderDeleted", { orderId: req.params.id });

        res.json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
export default router;