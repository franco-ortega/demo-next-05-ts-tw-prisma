import Link from 'next/link';
import { getTodos } from '@/utils/getTodos';
import { TodoItem } from '@/components/TodoItem';
import { toggleTodo } from '@/utils/toggleTodo';
import { deleteTodo } from '@/utils/deleteTodo';

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <header className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl'>Todos</h1>
        <div className='flex gap-2'>
          <Link
            href='/new'
            className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
          >
            New Todo
          </Link>
        </div>
      </header>
      <ul className='pl-4'>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
}
