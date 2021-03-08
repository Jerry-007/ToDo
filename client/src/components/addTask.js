import axios from "axios";

const AddTask = ({ setTasks, tasks }) => {
  const Submitted = async (e) => {
    e.preventDefault();
    if (e.target[0].value === "" || e.target[1].value === "") {
      alert("Pls Fill Out the details");
      return;
    }

    let date = new Date(e.target[2].value);
    date.setMinutes(date.getMinutes() + Number(e.target[3].value));
    date = date.toISOString();

    const newTask = {
      Name: e.target[0].value,
      Description: e.target[1].value,
      CreatedAt: e.target[2].value,
      RemoveAfter: date,
    };
    const res = await axios.post("api/tasks", newTask);
    setTasks([...tasks, res.data]);
    alert(`${res.data.Name} , Added`);
    
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
    e.target[3].value = "";
  };
  return (
    <form className="container mb-5 w-50" onSubmit={Submitted}>
      <div className="mb-3">
        <label htmlFor="Name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="Name"
          placeholder="Enter The Name Of The Task"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="Description" className="form-label">
          Description
        </label>
        <input
          type="textarea"
          className="form-control"
          id="Description"
          placeholder="Something About The Task . . ."
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="Date" className="form-label">
          Created At
        </label>
        <input type="datetime-local" className="form-control" id="Date"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="Duration" className="form-label">
          Duration
        </label>
        <input
          type="number"
          className="form-control"
          id="Duration"
          placeholder="In Mins"
        ></input>
      </div>
      <button className="mt-2 btn c-btn"> Submit </button>
    </form>
  );
};

export default AddTask;
