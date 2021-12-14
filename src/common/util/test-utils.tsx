import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";

// reducers
import books from "../../store/books";
import count from "../../store/count";

// mockstore
const store = configureStore({ reducer: { count, books } });

// wrapper for redux and react-router
const AllTheProviders: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) =>
  render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });

// re-export the entire testing library
export * from "@testing-library/react";
// override render method
export { customRender as render, AllTheProviders as Wrapper };
