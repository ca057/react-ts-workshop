import React from "react";
import { fireEvent, render } from "@testing-library/react";

import BookListItem from "./BookListItem";

test("calls callback with book when clicked", () => {
  const book = { title: "My first book", price: 11.11 };
  const onClickMock = jest.fn();
  const { getByText } = render(
    <BookListItem book={book} onClick={onClickMock} />
  );

  fireEvent.click(getByText(book.title));

  expect(onClickMock).toHaveBeenCalledWith(book);
});
