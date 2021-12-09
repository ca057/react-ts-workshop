import React from "react";
import { Link } from "react-router-dom";

import { Book } from "../../domain/types";

interface BookListItemProps {
  book: Book;
}

const BookListItem: React.VFC<BookListItemProps> = ({ book }) => (
  <Link to={`/books/${book.isbn}`}>{book.title}</Link>
);

export default BookListItem;
