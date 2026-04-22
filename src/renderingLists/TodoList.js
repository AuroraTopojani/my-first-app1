import { useState } from "react";

export default function ToDoList() {
  const [todoTask, setTodoTask] = useState(["Learn React", "Create Project"]);
  const [newTask, setNewTask] = useState("");

  const addNewTask = () => {
    if (newTask.trim() !== "") {
      setTodoTask([...todoTask, newTask]);
      setNewTask("");
    }
  };
  const removeTask = (indexToRemove) => {
    setTodoTask(todoTask.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="WRITE A TASK"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />
      <button onClick={addNewTask}>ADD NEW TASK</button>
      <ul>
        {todoTask.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>REMOVE</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
