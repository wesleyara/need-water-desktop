import { IState } from "@/@types";
import { steps } from "@/components";
import { useSelector } from "react-redux/es/exports";

export const Home = () => {
  const { count, isFinish } = useSelector((state: IState) => state.step);
  const timestamp = useSelector((state: IState) => state.user.timestamp);

  if (!isFinish) {
    return <>{steps.find(item => item.id === count)?.element}</>;
  }

  return <div></div>;
};
