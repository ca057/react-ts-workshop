import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";

import * as bookDomain from "../../domain/book";

import BookScreen from "./";

// Mock of Book
const title = "test-book";
const isbn = "test-book-isbn";
const book = { title, isbn };

describe("screens/book", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("renders loading information when no book is loaded yet", () => {
    jest.spyOn(bookDomain, "useBook").mockImplementationOnce(() => null);

    const { getByText } = render(
      <MemoryRouter initialEntries={[`/`]} initialIndex={0}>
        <BookScreen />
      </MemoryRouter>
    );

    expect(getByText(/loading/i)).toBeTruthy();
  });

  test("renders a link to edit the book when data is available", () => {
    jest.spyOn(bookDomain, "useBook").mockImplementationOnce(() => book);

    const { getByText } = render(
      <MemoryRouter initialEntries={["/"]} initialIndex={0}>
        <BookScreen />
      </MemoryRouter>
    );

    expect(getByText(/edit/i)).toBeTruthy();
  });

  describe("editing a book", () => {
    test("renders the book form with link for cancelling", () => {
      jest.spyOn(bookDomain, "useBook").mockImplementation(() => book);

      const { getByText, getByDisplayValue } = render(
        <MemoryRouter initialEntries={["/"]} initialIndex={0}>
          <BookScreen />
        </MemoryRouter>
      );

      act(() => {
        fireEvent.click(getByText(/edit/i));
      });

      expect(getByDisplayValue(book.title)).toBeTruthy();
      expect(getByDisplayValue(book.isbn)).toBeTruthy();
      expect(getByText(/cancel/i)).toBeTruthy();
    });

    test("renders the book details when users editing", () => {
      jest.spyOn(bookDomain, "useBook").mockImplementation(() => book);

      const { getByText } = render(
        <MemoryRouter initialEntries={["/"]} initialIndex={0}>
          <BookScreen />
        </MemoryRouter>
      );

      act(() => {
        fireEvent.click(getByText(/edit/i));
      });

      expect(getByText(/cancel/i)).toBeTruthy();
      act(() => {
        fireEvent.click(getByText(/cancel/i));
      });

      expect(getByText(/edit/i)).toBeTruthy();
    });
  });
});
