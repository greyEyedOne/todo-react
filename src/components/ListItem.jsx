import { useState } from "react";
import deleteButton from "../../src/images/delete_white.svg";

function ListItem(props) {
  const [taskTitle, setNewTaskTitle] = useState(props.title);
  const [checked, setCheck] = useState(props.checked);
  const [editMode, setEditMode] = useState(false);

  function checkSwitch() {
    setCheck(!checked);
  }

  function taskEdit(e) {
    setEditMode(true);
    return e.target.select();
  }

  function deleteTask() {
    const cleanedTaskList = props.tasks.filter((item) => item.id !== props.id);
    props.setTasks(cleanedTaskList);
  }
  function handleBlur() {
    if (taskTitle) {
      setEditMode(false);
    } else deleteTask();
  }

  const inputClasses = `sm:flex-1 leading-[2.5rem] text-left  ${checked ? "line-through" : ""} ${editMode ? "cursor-text" : "cursor-pointer"}`;

  return (
    <>
      <li
        id={props.id}
        className="flex flex-row justify-start content-center gap-1 md:gap-4 flex-nowrap"
      >
        <input
          type="checkbox"
          className="h-[2.5rem] mb-auto"
          defaultChecked={checked}
          onChange={checkSwitch}
        ></input>

        <label htmlFor={props.id} className="hidden">
          {taskTitle}
        </label>
        <input
          className={inputClasses}
          value={taskTitle}
          id={props.id}
          onChange={(e) => {
            setNewTaskTitle(e.target.value);
          }}
          onFocus={(e) => taskEdit(e)}
          onBlur={handleBlur}
        />

        <button
          onClick={() => {
            deleteTask();
          }}
          className="edit ml-auto h-[2.5rem] min-w-[2rem] w-[2.5rem] p-[5px] bg-orange-600 hover:bg-orange-800 dark:bg-indigo-800 dark:hover:bg-indigo-500"
        >
          <img src={deleteButton} alt="Edit" />
        </button>
      </li>
    </>
  );
}
export default ListItem;
