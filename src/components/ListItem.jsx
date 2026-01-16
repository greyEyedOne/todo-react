import { useState } from "react";
import deleteButton from "../../src/images/delete_white.svg";

function ListItem(props) {
  const [taskTitle, setNewTaskTitle] = useState(props.title);
  const [checked, setCheck] = useState(props.checked);

  function checkSwitch() {
    setCheck(!checked);
  }

  function deleteTask(e) {
    const cleanedTaskList = props.tasks.filter((item) => item.id !== props.id);
    props.setTasks(cleanedTaskList);
  }

  const inputClasses = `inline leading-[2rem] text-left ${checked ? "line-through" : ""}`;

  return (
    <>
      <li
        key={props.key}
        id={props.id}
        className="flex flex-row justify-start content-center gap-4 flex-nowrap"
      >
        <input
          type="checkbox"
          className="h-[2rem] mb-auto"
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
            console.log(e.target.value);
            setNewTaskTitle(e.target.value);
          }}
          onFocus={(e) => e.target.select()}
        />

        <button
          onClick={(e) => {
            deleteTask(e);
          }}
          className="edit ml-auto h-[2.5rem] w-[2.5rem] p-[5px] bg-orange-600! hover:bg-orange-800! dark:bg-indigo-800! dark:hover:bg-indigo-500!"
        >
          <img src={deleteButton} alt="Edit" />
        </button>
      </li>
    </>
  );
}
export default ListItem;
