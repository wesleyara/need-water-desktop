import { next } from "@/redux/stepSlice";
import { setInitialStats } from "@/redux/userSlice";
import { ToggleOpacity } from "@/utils";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export const SecondStep = () => {
  const [weight, setWeight] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (weight.trim() === "") {
      return toast.warn("Preencha o campo com seu peso!");
    }

    const parsedWeight = parseFloat(weight);

    dispatch(setInitialStats(parsedWeight));
    toast.success("Peso cadastrado com sucesso!", { autoClose: 2000 });
    dispatch(next());
  };

  return (
    <div className="overflow-hidden">
      <div className="fade-up mx-auto flex h-[100vh] w-[550px] flex-col items-center justify-center gap-5 text-center">
        <h4>Começando o planejamento diário</h4>
        <span>
          Devemos beber pelo menos <b>35ml</b> de água por dia para cada{" "}
          <b>1kg</b> que temos.
        </span>

        <span
          className={`${ToggleOpacity(
            2000,
          )} mt-3 flex flex-col items-center justify-center gap-3`}
        >
          <span>
            Para começar o nosso planejamento, digite qual o seu peso:
          </span>
          <input
            type="number"
            placeholder="Peso em kg"
            onChange={e => setWeight(e.target.value)}
            min="0"
            value={weight}
          />
          <button className="btn" onClick={handleSubmit}>
            Continuar
          </button>
        </span>
      </div>
    </div>
  );
};
