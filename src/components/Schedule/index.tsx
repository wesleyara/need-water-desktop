import { IState } from "@/@types";
import { useSelector } from "react-redux";

export const Schedule = () => {
  const { start_time, end_time } = useSelector((state: IState) => state.user);

  return (
    <div className="absolute bottom-1 left-2 text-[12px]">
      Horário de notificação: {start_time} - {end_time}.
    </div>
  );
};
