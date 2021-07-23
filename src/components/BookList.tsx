import { Book } from "../domain/types";

import BookListItem from "./BookListItem";

interface BookListProps {
  books: Book[];
  onItemClick: (book: Book) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onItemClick }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.title}>
          <BookListItem book={book} onClick={() => onItemClick(book)} />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
