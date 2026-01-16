import ListItem from "./ListItem";

function List(props) {
  const taskList = props.tasks.map((task) => (
    <ListItem
      tasks={props.tasks}
      id={task.id}
      title={task.title}
      checked={task.checked}
      key={task.id}
      setNewTaskTitle={props.setNewTaskTitle}
      setTasks={props.setTasks}
    />
  ));
  return <ul className="flex flex-col justify-start gap-1">{taskList}</ul>;
}

export default List;
