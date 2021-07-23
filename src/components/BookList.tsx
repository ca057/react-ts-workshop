import { Book } from "../domain/types";

import BookListItem from "./BookListItem";

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.title}>
          <BookListItem {...book} />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
