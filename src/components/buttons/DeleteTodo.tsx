'use client';

type DeleteTodoProps = {
  id: string;
  deleteTodo: (id: string) => void;
};

export default function DeleteTodo({ id, deleteTodo }: DeleteTodoProps) {
  function onDeleteClick() {
    deleteTodo(id);
  }

  return (
    <button onClick={onDeleteClick} className={styles.button}>
      Delete
    </button>
  );
}

const styles = {
  button:
    'text-slate-900 px-2 py-0 rounded bg-red-400 hover:bg-red-600 focus-within:bg-red-600 outline-none text-xs w-fit m-auto',
};
