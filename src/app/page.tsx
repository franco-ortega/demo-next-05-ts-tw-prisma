import { getTodos } from '@/utils/getTodos';
import Header from '@/components/Header';
import TodoList from '@/components/TodoList';

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <Header />
      <main>
        <TodoList todos={todos} />
      </main>
    </>
  );
}
