import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("should be possible to increment the counter", () => {
  const initialValue = 0;
  const { getByText } = render(<Counter initialValue={initialValue} />);

  const countElement = getByText(initialValue);
  const incrementButton = getByText("+");

  fireEvent.click(incrementButton);

  expect(countElement.textContent).toBe("1");
});

test("should be possible to decrement the counter", () => {
  const initialValue = 0;
  const { getByText } = render(<Counter initialValue={initialValue} />);

  const countElement = getByText(initialValue);
  const decrementButton = getByText("-");

  fireEvent.click(decrementButton);

  expect(countElement.textContent).toBe("-1");
});
