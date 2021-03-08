const Task = ({deleteTask, task }) => {

  return (
    <div className="d-flex custom-item justify-content-between align-items-center">
      <div className="d-flex flex-column justify-content-center overflow-auto h-100">
        <h6>{task.Name}</h6>
        <p className="overflow-auto mb-2">{task.Description}</p>
      </div>
      <button className="btn btn-del ms-3" onClick={()=>{
          deleteTask(task._id)
      }}>
        Delete
      </button>
    </div>
  );
};

export default Task;
