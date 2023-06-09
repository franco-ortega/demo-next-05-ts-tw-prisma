import { TodoItem } from './TodoItem';
import { toggleTodo } from '@/utils/toggleTodo';
import { deleteTodo } from '@/utils/deleteTodo';

type TodoListProps = {
  todos: { id: string; complete: boolean; title: string }[];
};

export default function TodoList({ todos }: TodoListProps) {
  return (
    <ul className='pl-4 flex flex-col gap-3 bg-slate-900 p-2 rounded'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
