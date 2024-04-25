import React from "react";

const Task = ({ task, onDelete }) => {
  const { id, text, category } = task;

  const handleDeleteClick = () => {
    onDelete(id); // Call onDelete function passed as prop to delete the task
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteClick}>
        X
      </button>
    </div>
  );
};

export default Task;
