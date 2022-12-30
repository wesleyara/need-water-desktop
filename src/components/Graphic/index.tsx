import { IData } from "@/@types";
import { storageRequest } from "@/services";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";

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

  const options = {
    chart: {
      type: "line",
      style: {
        fontFamily: "serif",
        color: "red",
      },
    },
    title: {
      text: "Gráfico dos últimos dias",
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

  return (
    <div className="w-[750px]">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
