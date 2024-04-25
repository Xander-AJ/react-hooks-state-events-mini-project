import React, { useState } from "react";

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [taskText, setTaskText] = useState(""); // State for task text input
  const [taskCategory, setTaskCategory] = useState(categories[0]); // State for task category select

  const handleTextChange = (e) => {
    setTaskText(e.target.value); // Update task text state on input change
  };

  const handleCategoryChange = (e) => {
    setTaskCategory(e.target.value); // Update task category state on select change
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (taskText.trim() !== "") {
      // Check if task text is not empty
      onTaskFormSubmit({ text: taskText, category: taskCategory }); // Call onTaskFormSubmit function with new task object
      setTaskText(""); // Clear task text input
      setTaskCategory(categories[0]); // Reset task category to the first category
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskText}
          onChange={handleTextChange}
          required
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={taskCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
};

export default NewTaskForm;
