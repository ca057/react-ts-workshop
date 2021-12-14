import { RootState } from ".";

export const getAllBooks = (state: RootState) => state.books.books;

export const getBookByIsbn = (isbn: string) => (state: RootState) =>
  getAllBooks(state).find((book) => book.isbn === isbn) || null;
