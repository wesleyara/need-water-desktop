import { Header } from "@/components";
import { Graphic } from "@/components/Graphic";

export const History = () => {
  return (
    <>
      <Header />
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Histórico</h1>
        <Graphic period={30} />
      </div>
    </>
  );
};
