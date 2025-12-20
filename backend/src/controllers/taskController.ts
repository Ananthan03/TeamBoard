import type { Request, Response } from 'express';
import { taskService } from '../services/taskService.js';

export const taskController = {
  async getAll(req: Request, res: Response) {
    const tasks = await taskService.getAll();
    res.json(tasks);
  },

  async getOne(req: Request, res: Response) {
    const id = Number(req.params.id);
    const task = await taskService.getOne(id);
    res.json(task);
  },

  async create(req: Request, res: Response) {
    const { title, description } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }
    const newTask = await taskService.create({ title, description });
    res.status(201).json(newTask);
  },

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const updated = await taskService.update(id, req.body);
    res.json(updated);
  },

  async remove(req: Request, res: Response) {
    const id = Number(req.params.id);
    await taskService.remove(id);
    res.json({ message: 'Deleted successfully' });
  },
};
