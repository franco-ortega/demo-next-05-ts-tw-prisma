'use client';

import DeleteTodo from './buttons/DeleteTodo';

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};

export default function TodoItem({
  id,
  title,
  complete,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) {
  return (
    <li className={styles.li}>
      <input
        id={id}
        type='checkbox'
        className='cursor-pointer peer col-span-1'
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label htmlFor={id} className={styles.label}>
        {title}
      </label>
      <DeleteTodo id={id} deleteTodo={deleteTodo} />
    </li>
  );
}

const styles = {
  li: 'grid grid-cols-[25px_auto_75px] items-center border rounded p-1',
  label:
    'cursor-pointer peer-checked:line-through peer-checked:text-slate-500 text-lg',
};
