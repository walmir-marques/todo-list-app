const Todo = ({ todo, handleDelTodo, handleCompleteTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">{todo.category}</p>
      </div>
      <div>
        <button
          className="complete"
          onClick={() => handleCompleteTodo(todo.id)}
        >
          Completar
        </button>
        <button onClick={() => handleDelTodo(todo.id)} className="remove">
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
