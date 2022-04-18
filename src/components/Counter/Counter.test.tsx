// Use custom render method (so that the test also works with Redux)
import { render, screen } from "../../common/util/test-utils";
import userEvent from "@testing-library/user-event";
import Counter from ".";

describe("components/Counter", () => {
  test("should be possible to reset the counter", async () => {
    const user = userEvent.setup();

    render(<Counter />);
    const resetButton = screen.getByText("reset");
    await user.click(resetButton);

    expect(screen.getByText("0")).toBeTruthy();
  });

  test("should be possible to increment the counter", async () => {
    const user = userEvent.setup();

    render(<Counter />);
    // reset initial value to 0
    await user.click(screen.getByText("reset"));

    const incrementButton = screen.getByText("+");
    await user.click(incrementButton);

    expect(screen.getByText("1")).toBeTruthy();
  });

  test("should be possible to decrement the counter", async () => {
    const user = userEvent.setup();

    render(<Counter />);
    // reset initial value to 0
    await user.click(screen.getByText("reset"));

    const decrementButton = screen.getByText("-");
    await user.click(decrementButton);

    expect(screen.getByText("-1")).toBeTruthy();
  });
});
