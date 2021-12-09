import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

import BookList from ".";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("components/BookList", () => {
  const books = [
    { title: "My first book", price: 11.11 },
    { title: "My second book", price: 22.22 },
  ];

  test(`renders a booklist correctly`, () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <BookList books={books} />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders all books", () => {
    const { getByText } = render(<BookList books={books} />, {
      wrapper: BrowserRouter,
    });

    for (const book of books) {
      expect(getByText(book.title)).toBeTruthy();
    }
  });
});
