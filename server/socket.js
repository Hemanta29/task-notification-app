
import { Server } from "socket.io";

let io;

export const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "*",
    },
  });
  
  io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;
    socket.join(userId);
    console.log(`User ${userId} connected`);

    socket.on("disconnect", () => {
      console.log(`User ${userId} disconnected`);
    });
  });
}

export const sendNotification = (userId, message) => {
  io.to(userId).emit("notification", message);
}