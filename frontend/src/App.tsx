import { useEffect, useState } from "react";
import { taskApi } from "./api/tasks";
import type { Task } from "./types/task";
import { TaskList } from "./components/taskList";
import { TaskForm } from "./components/taskForm";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    taskApi
      .getAll()
      .then(setTasks)
      .finally(() => setLoading(false));
  }, []);

  function handleTaskCreated(task: Task) {
    setTasks((prev) => [task, ...prev]);
  }

  async function handleStatusChange(id: number, status: Task["status"]) {
    const updated = await taskApi.update(id, { status });

    setTasks((prev) => prev.map((task) => (task.id === id ? updated : task)));
  }

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "600px" }}>
      <h1>TeamBoard</h1>

      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskList tasks={tasks} onStatusChange={handleStatusChange} />
    </div>
  );
}

export default App;
