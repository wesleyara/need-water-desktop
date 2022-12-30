import { IData } from "@/@types";
import { storageRequest } from "@/services";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";

import { Cup } from "../Cup";

interface GraphicProps {
  period: number;
}

export const Graphic = ({ period }: GraphicProps) => {
  const [days, setDays] = useState<number[]>([]);
  const [amount, setAmount] = useState<number[]>([]);

  useEffect(() => {
    const history = storageRequest("history");

    if (history !== null) {
      const tempHistory = history.reverse().slice(0, period).reverse();
      const historyDays = tempHistory.map((item: IData) => {
        const date = new Date(item.current_day);
        return date.getDate();
      });

      const historyAmount = tempHistory.map(
        (item: IData) => item.current_amount,
      );

      const tempDays: number[] = [];
      const tempAmount: number[] = [];

      tempDays.push(...historyDays);
      tempAmount.push(...historyAmount);

      tempDays.splice(0, tempDays.length - period);
      tempAmount.splice(0, tempAmount.length - period);

      setDays(tempDays);
      setAmount(tempAmount);
    }
  }, [period]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const options = {
    chart: {
      type: "line",
      style: {
        fontFamily: "serif",
        color: "red",
      },
    },
    title: {
      text: "Últimos dias",
    },
    xAxis: {
      categories: days,
    },
    yAxis: {
      title: {
        text: "Quantidade de água(ml)",
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        },
        enableMouseTracking: true,
      },
    },
    series: [
      {
        name: "ml",
        data: amount,
      },
    ],
  };

  if (loading) {
    return (
      <div className="rotate mt-20">
        <Cup size={100} />
      </div>
    );
  }

  return (
    <div className="w-[750px]">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
