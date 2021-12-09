import React from "react";

import { Book } from "../domain/types";
import BookListItem from "./BookListItem";

interface BookListProps {
  books: Book[];
}

const BookList: React.VFC<BookListProps> = ({ books }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.isbn}>
          <BookListItem book={book} />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
