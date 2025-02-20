import mongoose, { mongo } from "mongoose";

const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },
    shipperId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },
    totalPrice: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },
    status: {
        type: String,
        enum: ["pending", "paid", "shipping", "shipped", "cancelled"],
        default: "pending",
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                require: true,
            },
            quantity: { type: Number, require: true },
        },
    ],
    totalPrice: { type: Number, require: true },
});

export const Order = mongoose.model("Order", OrderSchema);
