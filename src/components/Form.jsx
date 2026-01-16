import { useState } from "react";
import { nanoid } from "nanoid";
import TaskInput from "./TaskInput";

function Form(props) {
  const [newTaskTitle, setNewTaskTitle] = useState("type something...");

  function handleSubmit(e) {
    e.preventDefault();
    const id = nanoid();
    const newTask = {
      id: id,
      key: id,
      title: newTaskTitle,
      checked: false,
    };

    props.setTasks([...props.tasks, newTask]);
  }

  return (
    <>
      <form className="flex flex-col gap-2 m-3 p-3 ">
        <TaskInput
          newTaskTitle={newTaskTitle}
          setNewTaskTitle={setNewTaskTitle}
        />
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Add Task
        </button>
      </form>
    </>
  );
}

export default Form;
