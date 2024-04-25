import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../components/App";
import Task from "../components/Task";

test("displays the task text and category", () => {
  const task = { id: 1, text: "Buy rice", category: "Groceries" };
  render(<Task task={task} />);
  expect(screen.queryByText("Buy rice")).toBeInTheDocument();
  expect(screen.queryByText("Groceries")).toBeInTheDocument();
});

test("is removed from the list when the delete button is clicked", () => {
  const onDeleteMock = jest.fn();
  const task = { id: 1, text: "Buy rice", category: "Groceries" };
  render(<Task task={task} onDelete={onDeleteMock} />);

  const deleteButton = screen.getByRole("button", { name: "X" });
  fireEvent.click(deleteButton);

  expect(onDeleteMock).toHaveBeenCalledWith(1); // Assuming id is passed to onDelete
});
