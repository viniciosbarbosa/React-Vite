const TaskList = ({ tasks }) => {
  console.log(tasks == undefined);
  return (
    <>
      <div>
        test
        {tasks &&
          tasks.map((task) => (
            <span style={{ display: "block" }} key={task.id}>
              {task.text}
            </span>
          ))}
        {tasks == undefined ||
          (tasks.length == 0 && <span>Nao tem dados</span>)}
      </div>
    </>
  );
};

export default TaskList;
