function TaskInput(props) {
  function handleChange(e) {
    props.setNewTaskTitle(e.target.value);
  }

  return (
    <input
      type="text"
      id="newTask"
      className="flex-1"
      value={props.newTaskTitle || props.title}
      onChange={(e) => handleChange(e)}
    />
  );
}

export default TaskInput;
