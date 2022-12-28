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
  last_drink: 0,
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
      const countTimes = Math.ceil(amountWater / amountPerCup);

      state.amount_per_cup = amountPerCup;
      state.count_times = countTimes;
    },
    setTimer: (state, action) => {
      const seconds = action.payload;
      const countTimes = state.count_times;
      const timestamp = seconds / countTimes;

      state.timestamp = timestamp;
      state.current_day = Date.now();
    },
  },
});

export const { setInitialStats, setGoals, setTimer } = slice.actions;

export default slice.reducer;
