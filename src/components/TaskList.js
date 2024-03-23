const TaskList = (props) => {
  const { taskList } = props;
  return (
    <div>
      {taskList.map((task) => (
        <div>{task}</div>
      ))}
    </div>
  );
};

export default TaskList;
