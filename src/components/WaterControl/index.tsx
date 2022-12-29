import { IState } from "@/@types";
import { setDrink } from "@/redux/userSlice";
import Countdown from "react-countdown";
import { MdVerified } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNow } from "utils-react";

import { CountdownRenderer } from "../Countdown";
import { Cup } from "../Cup";
import { Progressbar } from "../Progressbar";
import { Tooltip } from "../Tooltip";

export const WaterControl = () => {
  const { amount_water, current_amount, timestamp, last_drink, is_goal } =
    useSelector((state: IState) => state.user);

  const dispatch = useDispatch();

  const now = useNow();

  return (
    <div className="full flex flex-col items-center justify-center gap-5">
      <span>
        {is_goal ? (
          <p className="flex items-center justify-center gap-2 font-bold text-black">
            Meta diária alcançada, continue assim!{" "}
            <MdVerified className="text-green-400" size={20} />
          </p>
        ) : last_drink + timestamp <= now ? (
          <p className="font-bold text-black">Hora de beber água!</p>
        ) : (
          <Countdown
            date={last_drink + timestamp}
            renderer={CountdownRenderer}
          />
        )}
      </span>
      <Progressbar currentAmount={current_amount} amount={amount_water} />

      <Tooltip
        message="Clique para adicionar um copo ao contador."
        classname="!-top-[70px] !-left-[25px]"
      >
        <div
          className="transition-ease cursor-pointer rounded-full border-2 border-cerulean-500 bg-opacity-50 p-6 hover:bg-cerulean-200"
          onClick={() => dispatch(setDrink())}
        >
          <Cup size={100} />
        </div>
      </Tooltip>
    </div>
  );
};
