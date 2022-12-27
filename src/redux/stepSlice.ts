import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "step",
  initialState: {
    count: 1,
    isFinish: false,
  },
  reducers: {
    next: state => {
      state.count += 1;
    },
  },
});

export const { next } = slice.actions;

export default slice.reducer;
