import { prisma } from '@/app/db';

export async function toggleTodo(id: string, complete: boolean) {
  'use server';

  await prisma.todo.update({ where: { id }, data: { complete } });
}
