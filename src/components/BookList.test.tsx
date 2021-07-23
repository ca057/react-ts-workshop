import React from "react";
import { render } from "@testing-library/react";

import BookList from "./BookList";

test("renders all books", () => {
  const books = [{ title: "My first book" }, { title: "My second book" }];
  const { getByText } = render(<BookList books={books} />);

  for (const book of books) {
    expect(getByText(book.title)).toBeTruthy();
  }
});
