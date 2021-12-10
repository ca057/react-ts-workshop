import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import BookListItem from ".";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("components/BookListItem", () => {
  const book = { title: "My first book", price: 11.11 };

  test(`renders a booklist item correctly`, () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <BookListItem book={book} />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders book with title", () => {
    render(<BookListItem book={book} />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByText(book.title)).toBeTruthy();
  });
});
