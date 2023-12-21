import { useState } from "react";
const TodoForm = ({ handleTodo }) => {
  const [title, setTitle] = useState("");
  const [category, setGategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category) return;
    handleTodo(title, category);
    setTitle("");
    setGategory("");
  };

  return (
    <div className="todo-form">
      <h2>Criar Tarefa: </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o titulo ... "
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <select onChange={(e) => setGategory(e.target.value)} value={category}>
          <option value="">Selecione uma Categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Estudos">Estudos</option>
          <option value="Pessoal">Pessoal</option>
        </select>
        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
