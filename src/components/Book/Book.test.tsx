import { render } from "@testing-library/react";

import Book from ".";

describe("components/Book", () => {
  test("displays passed book", async () => {
    const book = {
      title: "book title",
      subtitle: "book subtitle",
      numPages: 123,
    };
    const { getByText } = render(<Book book={book} />);

    expect(getByText(book.title)).toBeTruthy();
    expect(getByText(book.subtitle)).toBeTruthy();
    expect(getByText(new RegExp(`${book.numPages}`))).toBeTruthy();
  });
});
