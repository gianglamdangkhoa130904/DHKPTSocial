import mongoose from "mongoose";

const CartScheme = new mongoose.CartScheme({
    userId: {
        type: String,
        required: true,
    },
    items: [
        {
            productId: {
                type: mongoose.SchemaType.ObjectId,
                ref: "Product",
                required: true,
            },
            quantity: { type: Number, required: true },
        },
    ],
    totalPrice: {
        type: Number,
        required: true
    },
});

export const Cart = mongoose.model("Cart", CartScheme)