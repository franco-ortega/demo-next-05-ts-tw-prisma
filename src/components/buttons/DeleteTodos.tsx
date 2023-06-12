// 'use client';

type DeleteTodosProps = {
  deleteTodos: () => void;
};

function DeleteTodos({ deleteTodos }: DeleteTodosProps) {
  return (
    <button onClick={deleteTodos} className={styles.button}>
      Delete Todos
    </button>
  );
}

export default DeleteTodos;

const styles = {
  button:
    'border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none',
};
