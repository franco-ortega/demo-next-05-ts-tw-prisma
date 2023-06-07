import { prisma } from "@/app/db";

export async function deleteTodo(id: string) {
  'use server';
  await prisma.todo.delete({ where: { id } });
}
