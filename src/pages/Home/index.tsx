import { IState } from "@/@types";
import { steps } from "@/components";
import { useState } from "react";
import { useSelector } from "react-redux/es/exports";

export const Home = () => {
  const step = useSelector((state: IState) => state.step.count);

  return <>{steps.find(item => item.id === step)?.element}</>;
};
