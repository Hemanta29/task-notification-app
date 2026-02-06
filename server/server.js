import express from 'express';
import http from 'http';
import { initSocket } from './socket.js';
import "./notification.worker.js"; // 👈 MUST load BEFORE tasks
import { completeTask } from './task.service.js';
import cors from 'cors';
const port = 3030;


const app = express();
app.use(cors());
const server = http.createServer(app);

initSocket(server);

app.get('/', (req, res) => {
  res.send('Welcome to Notification App!');
});

app.get("/run-task", async (_, res) => {
  await completeTask("task-"+Math.ceil(Math.random()* 10000), "user-2");
  res.send("Task executed");
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});