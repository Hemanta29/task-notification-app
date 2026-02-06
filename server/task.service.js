import { eventBus } from "./eventBus.js";

const completeTask = async(taskId, userId) => {
  console.log("Processing task...");
  await new Promise((r) => setTimeout(r, 2000));
  console.log("TASK_COMPLETED", {
    taskId,
    userId,
    message: "Your task completed successfully 🎉"
  });
  
  eventBus.emit("TASK_COMPLETED", {
    taskId,
    userId,
    message: "Your task completed successfully 🎉"
  });
};

export { completeTask };
