import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({ book: (state = {}) => state });

const store = configureStore({ reducer: rootReducer });

export default store;
