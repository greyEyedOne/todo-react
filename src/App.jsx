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
    <div className="min-w-md max-w-xl min-h-md h-fit p-6 shadow-sm rounded-md m-4 border border-orange-400 dark:border-indigo-300">
      <h1 className="text-3xl m-8 font-extrabold">ToDo</h1>
      <List tasks={tasks} setTasks={setTasks} />
      <Form tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
