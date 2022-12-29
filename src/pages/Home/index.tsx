import { IState } from "@/@types";
import { Header, steps, WaterControl } from "@/components";
import { useSelector } from "react-redux/es/exports";

export const Home = () => {
  const { count, isFinish } = useSelector((state: IState) => state.step);

  if (!isFinish) {
    return <>{steps.find(item => item.id === count)?.element}</>;
  }

  return (
    <>
      <Header />
      <WaterControl />
    </>
  );
};
