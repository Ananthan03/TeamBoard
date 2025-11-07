import type { Request, Response } from 'express';

export const getTasks = (_req: Request, res: Response) => {
  const mockTasks = [
    { id: 1, title: 'Design database schema', status: 'In Progress' },
    { id: 2, title: 'Implement user login', status: 'Pending' },
    { id: 3, title: 'Set up CI/CD pipeline', status: 'Completed' },
  ];

  res.status(200).json(mockTasks);
};
