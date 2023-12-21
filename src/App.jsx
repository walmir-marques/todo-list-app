import { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar Funcionalidade no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar react",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");

  const handleTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const handleDelTodo = (id) => {
    const newTodos = [...todos];
    const filterTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filterTodos);
  };

  const handleCompleteTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((item) =>
      item.id === id ? (item.isCompleted = !item.isCompleted) : item
    );
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <TodoForm handleTodo={handleTodo} />
      <Search search={search} setSearch={setSearch} />
      <div className="todo-list">
        {todos
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((todo) => (
            // eslint-disable-next-line react/jsx-key
            <Todo
              key={todo.id}
              todo={todo}
              handleDelTodo={handleDelTodo}
              handleCompleteTodo={handleCompleteTodo}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
