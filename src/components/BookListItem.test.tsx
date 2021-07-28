import React from "react";
import { render } from "@testing-library/react";

import BookListItem from "./BookListItem";
import { BrowserRouter } from "react-router-dom";

describe("components/BookListItem", () => {
  test("renders book with title", () => {
    const book = { title: "My first book", price: 11.11 };
    const { getByText } = render(<BookListItem book={book} />, {
      wrapper: BrowserRouter,
    });

    expect(getByText(book.title)).toBeTruthy();
  });
});
