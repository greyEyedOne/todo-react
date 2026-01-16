import { useState } from "react";
import TaskInput from "./TaskInput";

function ListItem(props) {
  const [editModeOn, setEditMode] = useState(false);
  function switchEditMode(e) {
    e.preventDefault();
    setEditMode(!editModeOn);
    console.log(editModeOn);
  }

  const viewMode = (
    <li key={props.key} id={props.id} type="checkbox">
      <input type="checkbox" defaultChecked={props.checked}></input>
      <span>{props.title}</span>
      <button onClick={switchEditMode}>Edit</button>
    </li>
  );
  const editMode = (
    <li key={props.key} id={props.id} type="checkbox">
      <input type="checkbox" defaultChecked={props.checked}></input>
      <TaskInput title={props.title} />
      <button className="" onClick={switchEditMode}>
        Save
      </button>
    </li>
  );

  return editModeOn ? editMode : viewMode;
}
export default ListItem;
