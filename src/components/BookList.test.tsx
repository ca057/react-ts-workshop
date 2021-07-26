import React from "react";
import { render } from "@testing-library/react";

import BookList from "./BookList";

describe("components/BookList", () => {
  test("renders all books", () => {
    const books = [
      { title: "My first book", price: 11.11 },
      { title: "My second book", price: 22.22 },
    ];
    const { getByText } = render(
      <BookList books={books} onItemClick={jest.fn()} />
    );

    for (const book of books) {
      expect(getByText(book.title)).toBeTruthy();
    }
  });
});
