import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import BookList from ".";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("components/BookList", () => {
  // mock of a list of books
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

  // test case
  test("renders all books", () => {
    // render the booklist
    render(<BookList books={books} />, {
      // Define router as wrapper so that Jest can render the `Link` component from `react-router-dom`
      wrapper: BrowserRouter,
    });

    for (const book of books) {
      // assert that each book will be rendered to the screen
      expect(screen.getByText(book.title)).toBeTruthy();
    }
  });
});
