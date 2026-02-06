import { eventBus } from "./eventBus.js";
import { sendNotification } from "./socket.js";

console.log("✅ Notification worker loaded");

eventBus.on("TASK_COMPLETED", (event) => {
  const { taskId, userId, message } = event;
  console.log("📨 Event received:", event);

  sendNotification(userId, {
    title: `Task(${taskId}) Completed`,
    message: message,
    userId,
  });
});
