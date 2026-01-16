import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [tasks, setTasks] = useState([
    { id: nanoid(), title: "First list item", checked: false },
    { id: nanoid(), title: "Second list item", checked: false },
    { id: nanoid(), title: "...", checked: false },
    { id: nanoid(), title: "PROFIT", checked: true },
  ]);

  return (
    <div className="min-w-md max-w-lg min-h-md max-h-lg p-2 bg-slate-500 shadow-sm rounded-md">
      <h1 className="text-3xl">ToDo</h1>
      <List tasks={tasks} />
      <Form tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
