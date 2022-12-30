import { finish } from "@/redux/stepSlice";
import { setTimer } from "@/redux/userSlice";
import { ToggleOpacity } from "@/utils";
import { timers } from "@/utils/constants";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { delay } from "utils-react";

export const FourthStep = () => {
  const dispatch = useDispatch();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  const handleNext = async () => {
    if (start === 0 || end === 0) {
      return toast.warn("Selecione uma faixa de horário");
    }

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
    toast.success("Eba! Agora você está pronto para começar!", {
      autoClose: 2000,
    });
    await delay(2000);
    dispatch(finish());
  };

  return (
    <div className="overflow-hidden">
      <div className="fade-up mx-auto flex h-[100vh] w-[550px] flex-col items-center justify-center gap-5 text-center">
        <h4>Selecione a faixa de horário que deseja ser alertado</h4>

        <span>
          É indicado no mínimo 2:30 de diferença na faixa de horário, para que
          possa ser dividido da melhor forma os alertas, trazendo mais resultado
          para o corpo.
        </span>

        <span
          className={`${ToggleOpacity(
            2000,
          )} flex items-center justify-center gap-5`}
        >
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

        <button className={`${ToggleOpacity(2000)} btn`} onClick={handleNext}>
          Iniciar
        </button>
      </div>
    </div>
  );
};
