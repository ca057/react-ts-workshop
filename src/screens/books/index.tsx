import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BookList from "../../components/BookList";
import { Book } from "../../domain/types";
import { addBooks } from "../../store/books";

const Books: React.FC = () => {
  const [books, setBooks] = useState<Book[] | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchBooks() {
      const response = await fetch("http://localhost:4730/books");
      const booksFromApi = await response.json();
      setBooks(booksFromApi);
      dispatch(addBooks(booksFromApi));
    }
    fetchBooks();
  }, []);

  if (books === null) {
    return <p>Loading...</p>;
  }
  return <BookList books={books} />;
};

export default Books;
