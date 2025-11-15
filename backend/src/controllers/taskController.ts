import type { Request, Response } from 'express';
import prisma from '../config/prismaClient.js';

export const getTasks = async (_req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};
