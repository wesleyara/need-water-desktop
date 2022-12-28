import { next } from "@/redux/stepSlice";
import { useDispatch } from "react-redux";

export const FirstStep = () => {
  const dispatch = useDispatch();

  return (
    <div className="overflow-hidden">
      <div className="fade-up mx-auto flex h-[100vh] w-[550px] flex-col items-center justify-center gap-5 text-center">
        <h1 className="text-[40px]">Bem vindo ao Need Water!</h1>
        <span>
          Assim como o ar que respiramos, beber água bem faz toda a diferença
          para a nossa saúde! Vamos começar a fazer isso com maestria?
        </span>
        <button className="btn" onClick={() => dispatch(next())}>
          Vamos lá!
        </button>
      </div>
    </div>
  );
};
