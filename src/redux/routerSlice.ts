import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "router",
  initialState: {
    path: "/",
  },
  reducers: {
    push: (state, action) => {
      state.path = action.payload;
    },
  },
});

export const { push } = slice.actions;

export default slice.reducer;
