import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import CategoryFilter from "../components/CategoryFilter";
import { CATEGORIES } from "../data";

test("displays a button for each category", () => {
  render(<CategoryFilter categories={CATEGORIES} />);
  for (const category of CATEGORIES) {
    expect(screen.queryByText(category)).toBeInTheDocument();
  }
});

test("clicking the category button adds a class of 'selected' to the button", () => {
  const onSelectCategoryMock = jest.fn();
  render(
    <CategoryFilter
      categories={CATEGORIES}
      selectedCategory={"Code"} // Assuming "Code" is initially selected
      onSelectCategory={onSelectCategoryMock}
    />
  );

  const codeButton = screen.queryByRole("button", { name: "Code" });
  const allButton = screen.queryByRole("button", { name: "All" });

  fireEvent.click(codeButton);

  expect(codeButton.classList).toContain("selected");
  expect(allButton.classList).not.toContain("selected");
  expect(onSelectCategoryMock).toHaveBeenCalledWith("Code");
});

test("clicking the category button filters the task list", () => {
  const onSelectCategoryMock = jest.fn();
  render(
    <CategoryFilter
      categories={CATEGORIES}
      selectedCategory={"Code"} // Assuming "Code" is initially selected
      onSelectCategory={onSelectCategoryMock}
    />
  );

  const codeButton = screen.queryByRole("button", { name: "Code" });

  fireEvent.click(codeButton);

  expect(onSelectCategoryMock).toHaveBeenCalledWith("Code");
});

test("displays all tasks when the 'All' button is clicked", () => {
  const onSelectCategoryMock = jest.fn();
  render(
    <CategoryFilter
      categories={CATEGORIES}
      selectedCategory={"All"} // Assuming "All" is initially selected
      onSelectCategory={onSelectCategoryMock}
    />
  );

  const allButton = screen.queryByRole("button", { name: "All" });

  fireEvent.click(allButton);

  expect(onSelectCategoryMock).toHaveBeenCalledWith("All");
});
