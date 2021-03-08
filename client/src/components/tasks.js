import Task from "./task";

const Tasks = ({ deleteTask, tasks }) => {
  return (
    <div className="container custom">
      {tasks.map((task) => (
        <Task deleteTask={deleteTask} task={task} key={task._id} />
      ))}
    </div>
  );
};

export default Tasks;
