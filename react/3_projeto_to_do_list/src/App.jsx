import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  console.log(tasks);

  const addTask = (task) => {
    //id text done

    setTasks([...tasks, { id: Date.now(), text: task, done: false }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <h1>Lista de tarefas</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </>
  );
}

export default App;
