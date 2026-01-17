function TaskInput(props) {
  function handleChange(e) {
    props.setNewTaskTitle(e.target.value);
  }

  return (
    <input
      type="text"
      id="newTask"
      className="flex-1 cursor-pointer"
      value={props.newTaskTitle || props.title}
      onChange={(e) => handleChange(e)}
      onFocus={(e) => e.target.select()}
    />
  );
}

export default TaskInput;
