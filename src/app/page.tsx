import { TodoItem } from '@/components/TodoItem';
import { prisma } from './db';
import Link from 'next/link';

function getTodos() {
  return prisma.todo.findMany();
}

export default async function Home() {
  const todos = await getTodos();
  // await prisma.todo.create({ data: { title: 'test', completed: false } });
  // await prisma.todo.deleteMany();

  return (
    <>
      <header className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl'>Todos</h1>
        <Link
          href='/new'
          className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
        >
          New Todo
        </Link>
      </header>
      <ul className='pl-4'>
        {todos.map((todo) => (
          <TodoItem {...todo} />
        ))}
      </ul>
    </>
  );
}
