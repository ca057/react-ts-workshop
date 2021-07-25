import { useEffect, useState } from "react";
import { Book as BookI } from "../domain/types";

const Book: React.FC = () => {
  const [book, setBook] = useState<BookI | null>(null);

  useEffect(() => {
    async function fetchBook() {
      const response = await fetch("http://localhost:4730/books/9781783983667");
      const book = await response.json();
      setBook(book);
    }
    fetchBook();
  }, []);

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>{book.title}</p>
      <p>{book.subtitle}</p>
      <p>{book.numPages} pages</p>
    </div>
  );
};

export default Book;
