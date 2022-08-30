import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("button has initial color", () => {
  render(<App />);
  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red", color: "white" });
  // click button
  fireEvent.click(colorButton);
  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});

test("initial condition of button", () => {
  render(<App />);
  // check that the button starts out enabled
  const button = screen.getByRole("button", { name: "Change to blue" });
  expect(button).toBeEnabled();

  // check that the checkBox starts out unchecked
  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();

  // check that the button is disabled when the checkbox is checked
  fireEvent.click(checkBox);
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: "grey" });

  // check that the button is enabled when the checkbox is unchecked
  fireEvent.click(checkBox);
  expect(button).toBeEnabled();
});
