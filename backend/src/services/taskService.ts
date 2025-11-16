import prisma from '../config/prismaClient.js';

export const taskService = {
  getAll: () => prisma.task.findMany(),
  getOne: (id: number) => prisma.task.findUnique({ where: { id } }),
  create: (data: { title: string; description?: string }) => prisma.task.create({ data }),
  update: (id: number, data: object) => prisma.task.update({ where: { id }, data }),
  remove: (id: number) => prisma.task.delete({ where: { id } }),
};
