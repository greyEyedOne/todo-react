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

  const storageButtonClasses =
    "border border-orange-400 hover:border-orange-700 h-[4.5rem] text-orange-800 dark:border-indigo-300 dark:text-indigo-200 dark:hover:border-indigo-200 sm:h-10";

  function saveItems() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function loadItems() {
    const savedData = localStorage.getItem("tasks");
    if (savedData) {
      const loadedTasks = JSON.parse(savedData);
      setTasks(loadedTasks);
    } else window.alert("Sorry, I didn't find any saved ToDo's");
  }

  function clearStorage() {
    localStorage.removeItem("tasks");
  }

  return (
    <>
      <div className="mainbox min-w-xs max-w-xxl! md:flex-1 min-h-md h-fit p-6 shadow-sm rounded-md m-4 border border-orange-400 dark:border-indigo-300">
        <h1 className="text-3xl m-8 font-extrabold">ToDo</h1>
        <List tasks={tasks} setTasks={setTasks} />
        <Form tasks={tasks} setTasks={setTasks} />
      </div>
      <div className="storage-buttons flex flex-row md:flex-col content-start max-w-xxl md:max-w-[16rem] gap-4 m-4">
        <button onClick={saveItems} className={storageButtonClasses}>
          Save
        </button>
        <button onClick={loadItems} className={storageButtonClasses}>
          Load latest
        </button>
        <button onClick={clearStorage} className={storageButtonClasses}>
          Clear Storage
        </button>
      </div>
    </>
  );
}

export default App;
