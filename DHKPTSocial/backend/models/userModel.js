import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        username:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        dob:{
            type: Date,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: false
        },
        avatar:{
            type: String,
            required: false
        },
        followers: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "User",
            },
          ],
        followings: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        status: {
            type: String,
            enum: ["active", "banned"], 
            default: "active",
          },
    }
);
export const User = mongoose.model('User', userSchema);
