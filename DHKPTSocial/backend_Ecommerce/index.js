import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const server = http.createServer(app); // Tạo server HTTP
const io = new Server(server, {
    cors: {
        origin: "https://dkkptsocial.netlify.app", // Đảm bảo đúng cổng của frontend
        credentials: true,
    },
});

// Middleware
app.use(express.json());
app.use(
    cors({
        origin: "https://dkkptsocial.netlify.app",
        credentials: true,
    })
);

// API Routes
app.get("/", (request, response) => {
    console.log(request);
    return response.status(200).send("Welcome to DHKPT Shop API");
});

//app.use("/users", userRoute);


// **Socket.IO Logic**
io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    // Lắng nghe sự kiện 'sendMessage' từ client
    socket.on("sendMessage", (message) => {
        console.log("Tin nhắn mới từ client:", message);

        // Phát tin nhắn mới đến tất cả các client
        io.emit("newMessage", message);
    });

    // Xử lý khi client ngắt kết nối
    socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
    });
});

// Kết nối đến MongoDB và khởi động server
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log(`Đã kết nối đến MongoDB!`);
        server.listen(PORT, () => {
            console.log(`Server đang lắng nghe trên cổng: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("Lỗi kết nối MongoDB:", error);
    });
