import Link from 'next/link';
import { getTodos } from '@/utils/getTodos';
import TodoList from '@/components/TodoList';

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>Todos</h1>
        <div className='flex gap-2'>
          <Link href='/new' className={styles.link}>
            New Todo
          </Link>
        </div>
      </header>
      <TodoList todos={todos} />
    </>
  );
}

const styles = {
  header: 'flex justify-between items-center mb-4',
  h1: 'text-2xl',
  link: 'border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none',
};
