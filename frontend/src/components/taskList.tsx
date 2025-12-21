import type { Task } from "../types/task";

interface TaskListProps {
  tasks: Task[];
  onStatusChange: (id: number, status: Task["status"]) => void;
}

export function TaskList({ tasks, onStatusChange }: TaskListProps) {
  if (tasks.length === 0) {
    return <p>No tasks yet</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ marginBottom: "1rem" }}>
          <strong>{task.title}</strong> <span>({task.status})</span>
          {task.description && <p>{task.description}</p>}
          <div style={{ marginTop: "0.5rem" }}>
            {task.status !== "pending" && (
              <button onClick={() => onStatusChange(task.id, "pending")}>
                Pending
              </button>
            )}
            {task.status !== "in-progress" && (
              <button onClick={() => onStatusChange(task.id, "in-progress")}>
                In Progress
              </button>
            )}
            {task.status !== "done" && (
              <button onClick={() => onStatusChange(task.id, "done")}>
                Done
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
