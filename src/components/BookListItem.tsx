import React from "react";

import { Book } from "../domain/types";

interface BookListItemProps {
  book: Book;
  onClick: (book: Book) => void;
}

const BookListItem: React.FC<BookListItemProps> = ({ book, onClick }) => (
  <button onClick={() => onClick(book)}>{book.title}</button>
);

export default BookListItem;
