import { useState } from "react";
import { nanoid } from "nanoid";
import TaskInput from "./TaskInput";

function Form(props) {
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
    setNewTaskTitle("Add something else?");
  }

  const [newTaskTitle, setNewTaskTitle] = useState(
    "Want to add something? Just type it here"
  );

  return (
    <>
      <form className="flex flex-col gap-4 p-3 pt-6 mx-0 mt-10 mb-0 border-t border-t-orange-600 dark:border-t-indigo-700 ">
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
