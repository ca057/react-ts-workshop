import React from "react";
import { Link } from "react-router-dom";

import { Book } from "../../domain/types";
import "./styles.css";

interface BookListItemProps {
  book: Book;
}

const BookListItem: React.VFC<BookListItemProps> = ({ book }) => (
  <Link to={`/books/${book.isbn}`}>
    <span className="booklist__item">{book.title}</span>
  </Link>
);

export default BookListItem;
