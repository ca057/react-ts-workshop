import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getBookByIsbn } from "../store/selectors";
import { Book } from "./types";

export const useBook = (isbn: string) => {
  const bookFromState = useSelector(getBookByIsbn(isbn));
  const [book, setBook] = useState<Book | null>(null);

  const result = book || bookFromState;

  useEffect(() => {
    if (result?.isbn === isbn) {
      return;
    }
    async function fetchBook() {
      const response = await fetch(`http://localhost:4730/books/${isbn}`);
      const bookFromApi = await response.json();
      setBook(bookFromApi);
    }
    fetchBook();
  }, [isbn, result?.isbn]);

  return result;
};
