import { IState } from "@/@types";
import { next } from "@/redux/stepSlice";
import { setGoals } from "@/redux/userSlice";
import { ToggleOpacity } from "@/utils";
import { cups } from "@/utils/constants";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { Cup } from "../Cup";

export const ThirdStep = () => {
  const weight = useSelector((state: IState) => state.user.weight);
  const [selectedCup, setSelectedCup] = useState<any>(undefined);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(setGoals(parseInt(selectedCup.ml)));
    toast.success("Copo selecionado com sucesso!", { autoClose: 2000 });
    dispatch(next());
  };

  return (
    <div className="overflow-hidden">
      <div className="fade-up mx-auto flex h-[100vh] w-[550px] flex-col items-center justify-center gap-5 text-center">
        <h4>Agora escolha em que copo você deseja beber:</h4>
        <span>
          Você deverá beber <b>{weight * 35}ml</b> de água por dia.
        </span>

        <span
          className={`${ToggleOpacity(
            2000,
          )} mt-3 flex flex-col items-center justify-center gap-3`}
        >
          <span>
            Agora selecione o tamanho do copo que você deseja utilizar:
          </span>
          <div className="flex items-end justify-center gap-2">
            {cups.map(item => (
              <div
                key={item.size}
                className={`flex h-[130px] w-[110px] cursor-pointer flex-col items-center justify-end border-2 border-transparent hover:border-2 hover:border-blue-500 ${
                  selectedCup === item && "border-blue-500"
                }`}
                onClick={() => setSelectedCup(item)}
              >
                <Cup size={item.size} />
                <span>{item.ml}</span>
              </div>
            ))}
          </div>
          <button className="btn" onClick={handleSubmit}>
            Continuar
          </button>
        </span>
      </div>
    </div>
  );
};
