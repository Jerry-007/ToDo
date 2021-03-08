import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/header";
import Tasks from "./components/tasks.js";
import AddTask from "./components/addTask";
import axios from "axios";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const res = await axios.get("api/tasks");
      setTasks(res.data);
    };
    getTasks();
  }, []);
  const deleteTask = (id) => {
    axios.delete(`api/tasks/${id}`);
    setTasks((tasks) => tasks.filter((task) => task._id !== id));
  };
  return (
    <Router>
      <Route path="/" exact>
        <Header setShowAddTask={setShowAddTask} showAddTask={showAddTask} />
        {showAddTask ? (
          <AddTask deleteTask={deleteTask} setTasks={setTasks} tasks={tasks} />
        ) : (
          ""
        )}
        {tasks.length > 0 ? (
          <Tasks deleteTask={deleteTask} tasks={tasks} />
        ) : (
          <div className="text-center fs-5 container custom">
            No Tasks to Show
          </div>
        )}
      </Route>
    </Router>
  );
}

export default App;
