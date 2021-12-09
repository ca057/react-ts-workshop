import { render } from "./common/util/test-utils";
import App from "./App";

test("renders the app", () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});
