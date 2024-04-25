import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.id} // Ensure task.id or another unique identifier is used as the key
          task={task}
          onDelete={() => onDeleteTask(task.id)}
        />
      ))}
    </div>
  );
};

export default TaskList;
