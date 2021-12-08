import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Book } from "../domain/types";

interface BooksState {
  books: Book[];
}

const initialState: BooksState = { books: [] };

type AddBooksAction = PayloadAction<Book[]>;

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBooks(state, action: AddBooksAction) {
      state.books = action.payload;
    },
  },
});

export default booksSlice.reducer;
export const { addBooks } = booksSlice.actions;
