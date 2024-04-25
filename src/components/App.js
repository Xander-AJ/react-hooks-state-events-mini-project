import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS); // State to hold tasks array
  const [categoryFilter, setCategoryFilter] = useState("All"); // State to hold category filter

  const handleCategorySelect = (category) => {
    setCategoryFilter(category); // Update category filter state
  };

  const handleAddTask = (newTask) => {
    // Function to add a new task to the tasks array
    const updatedTasks = [...tasks, { id: tasks.length + 1, ...newTask }];
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    // Function to delete a task from the tasks array
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  // Filter tasks based on the selected category
  const filteredTasks = categoryFilter === "All" ? tasks : tasks.filter((task) => task.category === categoryFilter);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={[...CATEGORIES, "All"]} // Pass categories including "All"
        selectedCategory={categoryFilter}
        onSelectCategory={handleCategorySelect}
      />
      <NewTaskForm
        categories={CATEGORIES} // Pass categories for the new task form
        onTaskFormSubmit={handleAddTask} // Update prop name to match the callback function
      />
      <TaskList
        tasks={filteredTasks} // Pass filtered tasks to TaskList
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;