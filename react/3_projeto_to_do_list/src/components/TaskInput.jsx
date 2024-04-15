import { useState } from "react";

const TaskInput = ({ onAddTask }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim()) {
      onAddTask(input);
      setInput("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Adicione uma nova tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default TaskInput;
