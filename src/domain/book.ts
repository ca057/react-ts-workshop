import { useEffect, useState } from "react";
import { Book } from "./types";

export const useBook = (isbn: string) => {
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    async function fetchBook() {
      const response = await fetch(`http://localhost:4730/books/${isbn}`);
      const bookFromApi = await response.json();
      setBook(bookFromApi);
    }
    fetchBook();
  }, [isbn]);

  return book;
};
