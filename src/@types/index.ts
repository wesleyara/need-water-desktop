import { Dispatch, SetStateAction } from "react";

export interface IData {
  weight: number;
  amount_water: number;
  count_times: number;
  timestamp: number;
  notify: boolean;
  current_day: number;
  amount_per_cup: number;
  current_amount: number;
  is_goal: boolean;
  last_drink: number;
  start_time: string;
  end_time: string;
}

export interface StepsProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

interface IStep {
  count: number;
  isFinish: boolean;
}

interface IRouter {
  path: string;
}

export interface IState {
  step: IStep;
  user: IData;
  router: IRouter;
}
