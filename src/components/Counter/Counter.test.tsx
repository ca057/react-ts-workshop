// Use custom render method (so that the test also works with Redux)
import { render, fireEvent, screen } from "../../common/util/test-utils";
import Counter from ".";

describe("components/Counter", () => {
  test("should be possible to reset the counter", () => {
    render(<Counter />);
    const resetButton = screen.getByText("reset");
    fireEvent.click(resetButton);

    expect(screen.getByText("0")).toBeTruthy();
  });

  test("should be possible to increment the counter", () => {
    render(<Counter />);
    // reset initial value to 0
    fireEvent.click(screen.getByText("reset"));

    const incrementButton = screen.getByText("+");
    fireEvent.click(incrementButton);

    expect(screen.getByText("1")).toBeTruthy();
  });

  test("should be possible to decrement the counter", () => {
    render(<Counter />);
    // reset initial value to 0
    fireEvent.click(screen.getByText("reset"));

    const decrementButton = screen.getByText("-");
    fireEvent.click(decrementButton);

    expect(screen.getByText("-1")).toBeTruthy();
  });
});
