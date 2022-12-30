import { Cup } from "@/components/Cup";
import { setGoals, setInitialStats, setTimer } from "@/redux/userSlice";
import { cups, timers } from "@/utils/constants";
import { Dispatch, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

interface EditModalProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const EditModal = ({ setIsOpen }: EditModalProps) => {
  const [weight, setWeight] = useState("");
  const [selectedCup, setSelectedCup] = useState<any>(undefined);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (weight.trim() === "") {
      return toast.warn("Preencha o campo com seu peso!");
    }

    if (!selectedCup) {
      return toast.warn("Selecione um copo!");
    }

    if (start === 0 || end === 0) {
      return toast.warn("Selecione uma faixa de horário");
    }

    const parsedWeight = parseFloat(weight);

    dispatch(setInitialStats(parsedWeight));
    dispatch(setGoals(parseInt(selectedCup.ml)));

    const diff = (end - start) / 2;
    const diffValue = 60 * 60 * 1000;

    const diffInSecounds = diff * diffValue;

    const hoursStartValue = timers.find(item => item.id === start)?.value;
    const hoursEndValue = timers.find(item => item.id === end)?.value;

    dispatch(
      setTimer({
        milliseconds: diffInSecounds,
        start_time: hoursStartValue,
        end_time: hoursEndValue,
      }),
    );

    toast.success("Dados alterados com sucesso!", {
      autoClose: 2000,
    });

    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-center text-[24px]">Edite seus dados</h1>

      <span className="flex items-center justify-start gap-2">
        <label htmlFor="peso">Peso:</label>
        <input
          type="number"
          id="peso"
          placeholder="Peso em kg"
          onChange={e => setWeight(e.target.value)}
        />
      </span>

      <span>
        Selecione o tamanho do copo:
        <span className="flex items-end justify-center gap-2">
          {cups.map(item => (
            <span
              key={item.size}
              className={`flex h-[130px] w-[110px] cursor-pointer flex-col items-center justify-end border-2 border-transparent hover:border-2 hover:border-blue-500 ${
                selectedCup === item && "border-blue-500"
              }`}
              onClick={() => setSelectedCup(item)}
            >
              <Cup size={item.size} />
              <span>{item.ml}</span>
            </span>
          ))}
        </span>
      </span>

      <span>
        Selecione os horários:
        <span className="flex items-center justify-center gap-10">
          <span className="flex items-center justify-center gap-2">
            Início:
            <select onChange={e => setStart(+e.target.value)} value={start}>
              <option value="0">Select</option>
              {timers.map(item => (
                <option key={item.id} value={item.id}>
                  {item.value}
                </option>
              ))}
            </select>
          </span>

          <span className="flex items-center justify-center gap-2">
            Fim:
            <select
              disabled={start === 0}
              onChange={e => setEnd(+e.target.value)}
              value={end}
            >
              <option value="0">Select</option>
              {timers.map(item => (
                <option
                  className={item.id <= start + 4 ? "hidden" : ""}
                  key={item.id}
                  value={item.id}
                >
                  {item.value}
                </option>
              ))}
            </select>
          </span>
        </span>
      </span>

      <button className="btn" onClick={handleSubmit}>
        Confirmar
      </button>
    </div>
  );
};
