const Header = ({ setShowAddTask, showAddTask }) => {
  return (
    <div className="contanier d-flex justify-content-evenly align-items-center mb-4">
      <h3>TO DO LIST</h3>
      <button
        className="btn c-btn"
        onClick={() => {
          setShowAddTask(!showAddTask);
        }}
      >
        Add Task
      </button>
    </div>
  );
};

export default Header;
