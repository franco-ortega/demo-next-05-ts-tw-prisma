import { prisma } from "@/app/db";

export async function deleteTodos() {
  'use server'
  
  return await prisma.todo.deleteMany();
}