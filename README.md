# Task-Notification-App
A real-time task notification system.

## Project Structure
<pre>
    task-notification-app/
    │
    ├── backend/
    │   ├── server.js
    │   ├── socket.js
    │   ├── eventBus.js
    │   ├── task.service.js
    │   ├── notification.worker.js
    │   └── package.json
    │
    ├── frontend/
    │   ├── src/
    │   │   ├── App.jsx
    │   │   ├── socket.js
    │   │   └── main.jsx
    │   └── package.json
    │
    └── README.md
</pre>

### How it works (quick)

1. User triggers a task

2. Task completes → emits 'TASK_COMPLETED' event

3. Notification worker listens to event

4. Notification pushed to React UI via WebSocket

