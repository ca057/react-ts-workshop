import { configureStore, combineReducers } from "@reduxjs/toolkit";
import books from "./books";
import count from "./count";

export const rootReducer = combineReducers({
  count,
  books,
});

const store = configureStore({ reducer: rootReducer });

export default store;
