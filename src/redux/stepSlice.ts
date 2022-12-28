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
    finish: state => {
      state.isFinish = true;
    },
  },
});

export const { next, finish } = slice.actions;

export default slice.reducer;
