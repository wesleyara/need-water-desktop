export const CountdownRenderer = ({
  hours,
  minutes,
  seconds,
  completed,
}: any) => {
  if (completed) {
    return <p className="font-bold text-black">Hora de beber água!</p>;
  } else {
    return (
      <span className="flex items-center justify-center gap-2">
        Horário do próximo copo:
        <span className="text-black">
          {hours.toString().padStart(2, "0")}:
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </span>
      </span>
    );
  }
};
