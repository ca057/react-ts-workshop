import { configureStore, combineReducers } from "@reduxjs/toolkit";
import books from "./books";

export const rootReducer = combineReducers({
  books,
});

const store = configureStore({ reducer: rootReducer });

export default store;
