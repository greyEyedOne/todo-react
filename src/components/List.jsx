import ListItem from "./ListItem";

function List(props) {
  const taskList = props.tasks.map((task) => (
    <ListItem
      id={task.id}
      title={task.title}
      checked={task.checked}
      key={task.id}
    />
  ));
  return <ul>{taskList}</ul>;
}

export default List;
