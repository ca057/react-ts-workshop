import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders the app", () => {
  const { container } = render(<App />, { wrapper: BrowserRouter });
  expect(container).toBeInTheDocument();
});
