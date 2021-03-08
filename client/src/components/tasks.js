import Task from "./task";
import axios from "axios"

const Tasks = ({setTasks, tasks }) => {
  const deleteTask = (id) => {
    axios.delete(`api/tasks/${id}`);
    setTasks((tasks) => tasks.filter((task) => task._id !== id));
  };

  return (
    <div className="container custom">
      {tasks.map((task) => (
        <Task deleteTask={deleteTask} task={task} key={task._id} />
      ))}
    </div>
  );
};

export default Tasks;
