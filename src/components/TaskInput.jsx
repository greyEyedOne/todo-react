function TaskInput(props) {
  function handleChange(e) {
    props.setNewTaskTitle(e.target.value);
  }

  return (
    <input
      type="text"
      id="newTask"
      value={props.newTaskTitle || props.title}
      onChange={handleChange}
    />
  );
}

export default TaskInput;
