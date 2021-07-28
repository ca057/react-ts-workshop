import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BookDisplay from "../../components/Book";
import { Book as BookI } from "../../domain/types";

const Book: React.FC = () => {
  const { isbn } = useParams<{ isbn: string }>();
  const [book, setBook] = useState<BookI | null>(null);

  useEffect(() => {
    async function fetchBook() {
      const response = await fetch(`http://localhost:4730/books/${isbn}`);
      const bookFromApi = await response.json();
      setBook(bookFromApi);
    }
    fetchBook();
  }, [isbn]);

  if (book === null) {
    return <p>Loading...</p>;
  }
  return <BookDisplay book={book} />;
};

export default Book;
