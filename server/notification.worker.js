import { eventBus } from "./eventBus.js";
import { sendNotification } from "./socket.js";

eventBus.on("TASK_COMPLETED", ({ taskId, userId, message }) => {
  console.log("Sending notification...");

  sendNotification(userId, {
    title: `Task(${taskId}) Completed`,
    message: message,
    userId,
  });
});
