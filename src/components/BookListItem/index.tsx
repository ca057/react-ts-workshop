import React from "react";
import { Link } from "react-router-dom";

import { Book } from "../../domain/types";
import "./styles.css";

interface BookListItemProps {
  book: Book;
}

const BookListItem: React.VFC<BookListItemProps> = ({ book }) => (
  <Link to={`/books/${book.isbn}`}>
    <div className="booklist__item">{book.title}</div>
  </Link>
);

export default BookListItem;
