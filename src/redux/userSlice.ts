import { IData } from "@/@types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IData = {
  weight: 0,
  amount_water: 0,
  count_times: 0,
  timestamp: 0,
  current_day: 0,
  amount_per_cup: 0,
  current_amount: 0,
  is_goal: false,
};

export const slice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setInitialStats: (state, action) => {
      const weight = action.payload;
      const amountWater = weight * 35;

      state.weight = weight;
      state.amount_water = amountWater;
    },
    setGoals: (state, action) => {
      const amountPerCup = action.payload;
      const amountWater = state.amount_water;
      const seconds = 46800 * 1000;
      const countTimes = Math.ceil(amountWater / amountPerCup);
      const timestamp = seconds / countTimes;

      state.amount_per_cup = amountPerCup;
      state.count_times = countTimes;
      state.timestamp = new Date(timestamp).getMinutes();
    },
  },
});

export const { setInitialStats, setGoals } = slice.actions;

export default slice.reducer;
