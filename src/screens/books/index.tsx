import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookList from "../../components/BookList";
import { addBooks } from "../../store/books";
import { getAllBooks } from "../../store/selectors";

const Books: React.VFC = () => {
  const books = useSelector(getAllBooks);
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
