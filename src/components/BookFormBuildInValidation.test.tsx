import { fireEvent, render } from "@testing-library/react";

import BookFormBuildInValidation from "./BookFormBuildInValidation";

describe("components/BookFormBuildInValidation", () => {
  test("renders the passed book", () => {
    const book = { title: "Java Web Scraping Handbook", isbn: "1001606140805" };
    const { getByDisplayValue } = render(
      <BookFormBuildInValidation book={book} onSubmit={jest.fn()} />
    );

    expect(getByDisplayValue(book.title)).toBeTruthy();
    expect(getByDisplayValue(book.isbn)).toBeTruthy();
  });

  test("allows editing data of a book", () => {
    const book = { title: "Java Web Scraping Handbook", isbn: "1001606140805" };
    const { getByDisplayValue } = render(
      <BookFormBuildInValidation book={book} onSubmit={jest.fn()} />
    );

    const updatedBookTitle = "Java Web Scraping Handbook Next Volume";
    fireEvent.change(getByDisplayValue(book.title), {
      target: { value: updatedBookTitle },
    });

    expect(() => getByDisplayValue(book.title)).toThrow();
    expect(getByDisplayValue(updatedBookTitle)).toBeTruthy();
    expect(getByDisplayValue(book.isbn)).toBeTruthy();
  });

  test("calls callback with entered data when form is submitted", () => {
    const book = { title: "Java Web Scraping Handbook", isbn: "1001606140805" };
    const onSubmitMock = jest.fn();
    const { getByText } = render(
      <BookFormBuildInValidation book={book} onSubmit={onSubmitMock} />
    );

    fireEvent.click(getByText("Submit"));

    expect(onSubmitMock).toHaveBeenCalledWith(book);
  });
});
