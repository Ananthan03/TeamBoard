import api from "./axios";
import type { Task } from "../types/task";

export interface CreateTaskDTO {
  title: string;
  description?: string;
}

export interface UpdateTaskDTO {
  title?: string;
  description?: string;
  status?: Task["status"];
}

export const taskApi = {
  getAll: async (): Promise<Task[]> => {
    const res = await api.get<Task[]>("/tasks");
    return res.data;
  },

  getById: async (id: number): Promise<Task> => {
    const res = await api.get<Task>(`/tasks/${id}`);
    return res.data;
  },

  create: async (data: CreateTaskDTO): Promise<Task> => {
    const res = await api.post<Task>("/tasks", data);
    return res.data;
  },

  update: async (id: number, data: UpdateTaskDTO): Promise<Task> => {
    const res = await api.put<Task>(`/tasks/${id}`, data);
    return res.data;
  },

  remove: async (id: number): Promise<void> => {
    await api.delete(`/tasks/${id}`);
  },
};
