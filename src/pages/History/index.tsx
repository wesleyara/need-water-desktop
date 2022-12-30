import { Cup, Header } from "@/components";
import { Goals } from "@/components/Goals";
import { Graphic } from "@/components/Graphic";
import { useEffect, useState } from "react";

export const History = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Header />
      <div className="full flex flex-col items-center justify-center gap-2">
        {loading ? (
          <div className="rotate">
            <Cup size={100} />
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-bold">Histórico</h1>
            <Goals />
            <Graphic period={30} />
          </>
        )}
      </div>
    </>
  );
};
