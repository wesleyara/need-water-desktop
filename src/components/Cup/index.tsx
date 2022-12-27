interface CupProps {
  size: number;
}

export const Cup = ({ size }: CupProps) => {
  return (
    <img
      src="./water-cup.png"
      alt="Copo"
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
};
