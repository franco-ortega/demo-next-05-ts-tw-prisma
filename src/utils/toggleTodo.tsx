import { prisma } from '@/app/db';

export async function toggleTodo(id: string, complete: boolean) {
  'use server';

  console.log(id, complete);

  await prisma.todo.update({ where: { id }, data: { complete } });
}
