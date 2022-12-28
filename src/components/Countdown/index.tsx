export const CountdownRenderer = ({
  hours,
  minutes,
  seconds,
  completed,
}: any) => {
  if (completed) {
    return <p className="text-center text-xl font-bold"></p>;
  } else {
    return (
      <span className="text-black">
        {hours.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </span>
    );
  }
};
