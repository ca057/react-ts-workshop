import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookList from "../../components/BookList";
import { rootReducer } from "../../store";
import { addBooks, BooksState } from "../../store/books";

const Books: React.FC = () => {
  const { books } = useSelector<ReturnType<typeof rootReducer>, BooksState>(
    (state) => state.books
  );
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchBooks() {
      const response = await fetch("http://localhost:4730/books");
      const booksFromApi = await response.json();
      dispatch(addBooks(booksFromApi));
    }
    fetchBooks();
  }, [dispatch]);

  if (books === null) {
    return <p>Loading...</p>;
  }
  return <BookList books={books} />;
};

export default Books;
