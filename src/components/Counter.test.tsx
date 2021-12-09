// Use custom render method (so that the test also works with Redux)
import { render, fireEvent } from "../common/util/test-utils";
import Counter from "./Counter";

const initialValue = 0;

describe("components/Counter", () => {
  test("should be possible to reset the counter", () => {
    const { getByText } = render(<Counter />);
    const resetButton = getByText("reset");
    fireEvent.click(resetButton);

    const countElement = getByText(initialValue);
    fireEvent.click(resetButton);

    expect(countElement.textContent).toBe("0");
  });

  test("should be possible to increment the counter", () => {
    const { getByText } = render(<Counter />);
    // reset initial value to 0
    const resetButton = getByText("reset");
    fireEvent.click(resetButton);

    const countElement = getByText(initialValue);
    const incrementButton = getByText("+");

    fireEvent.click(incrementButton);

    expect(countElement.textContent).toBe("1");
  });

  test("should be possible to decrement the counter", () => {
    const { getByText } = render(<Counter />);
    // reset initial value to 0
    const resetButton = getByText("reset");
    fireEvent.click(resetButton);

    const countElement = getByText(initialValue);
    const decrementButton = getByText("-");

    fireEvent.click(decrementButton);

    expect(countElement.textContent).toBe("-1");
  });
});
