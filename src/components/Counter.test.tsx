import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("should be possible to increment the counter", () => {
  const { getByText } = render(<Counter />);

  const countElement = getByText("0");
  const incrementButton = getByText("+");

  fireEvent.click(incrementButton);

  expect(countElement.textContent).toBe("1");
});

test("should be possible to decrement the counter", () => {
  const { getByText } = render(<Counter />);

  const countElement = getByText("0");
  const decrementButton = getByText("-");

  fireEvent.click(decrementButton);

  expect(countElement.textContent).toBe("-1");
});
