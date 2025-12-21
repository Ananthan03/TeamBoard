import { useState } from "react";
import { taskApi } from "../api/tasks";
import type { Task } from "../types/task";

interface TaskFormProps {
  onTaskCreated: (task: Task) => void;
}

export function TaskForm({ onTaskCreated }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!title.trim()) {
      alert("Title is required");
      return;
    }

    setLoading(true);

    try {
      const newTask = await taskApi.create({
        title,
        description: description || undefined,
      });

      onTaskCreated(newTask);
      setTitle("");
      setDescription("");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1.5rem" }}>
      <h2>Create Task</h2>

      <div>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Add Task"}
      </button>
    </form>
  );
}
