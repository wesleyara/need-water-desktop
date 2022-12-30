import { IData } from "@/@types";
import { storageRequest } from "@/services";
import { useEffect, useState } from "react";

export const Goals = () => {
  const [goals, setGoals] = useState(0);

  useEffect(() => {
    const data = storageRequest("history");

    if (data !== null) {
      setGoals(data.filter((item: IData) => item.is_goal).length);
    }
  });
  return (
    <div className="">
      <span>
        Você já alcançou a meta{" "}
        <b className={goals > 0 ? "text-green-400" : "text-red-400"}>{goals}</b>{" "}
        {goals > 1 || goals === 0 ? "vezes" : "vez"}
      </span>
    </div>
  );
};
