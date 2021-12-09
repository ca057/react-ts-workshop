import { createSlice } from "@reduxjs/toolkit";

const initialState: number = 0;

const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
    reset: () => 0,
  },
});

export default counterSlice.reducer;
export const { increment, decrement, reset } = counterSlice.actions;
