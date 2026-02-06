import { useEffect, useState } from "react";
import { socket } from "./socket";

interface Notification {
  taskId: string;
  userId: string;
  message: string;
}

export default function App() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    socket.on("notification", (notification: Notification) => {
      console.log(notification);
      setNotifications((prev) => {
        return [...prev, notification];
      });
    });

    return () => {
      socket.off("notification");
    };
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>🔔 Notifications</h2>
      <button onClick={() => fetch("http://localhost:3030/run-task")}>
        Run Task
      </button>

      <ul>
        {notifications.map((n: any, i: number) => (
          <li key={i}>
            <strong>{n.title}</strong> – {n.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
