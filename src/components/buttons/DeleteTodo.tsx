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
    <button
      onClick={onDeleteClick}
      className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
    >
      Delete Todo
    </button>
  );
}
