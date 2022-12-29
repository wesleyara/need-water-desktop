interface ProgressbarProps {
  currentAmount: number;
  amount: number;
}

export const Progressbar = ({ currentAmount, amount }: ProgressbarProps) => {
  const value = (currentAmount * 100) / amount;

  return (
    <div className="relative flex flex-col items-center justify-center gap-2">
      <div className="flex h-[30px] w-[300px] gap-5 overflow-hidden rounded-md border-2 border-cerulean-500 text-center text-white md:w-[600px]">
        <span
          style={{ width: `${value}%` }}
          className={`h-full rounded-sm bg-cerulean-500`}
        />
      </div>

      <span className="absolute text-black">
        {currentAmount}/{amount}
      </span>
    </div>
  );
};
