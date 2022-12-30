import { useEffect, useState } from "react";
export const isDev = process.env.NODE_ENV === "development";

export const ToggleOpacity = (value: number) => {
  const [className, setClassName] = useState(
    "transition-ease opacity-0 cursor-default",
  );

  const handleTime = () => {
    setClassName("transition-ease opacity-100");
  };

  useEffect(() => {
    setTimeout(() => {
      handleTime();
    }, value);
  }, []);

  return className;
};

export const audioCall = (path: string) => {
  const audio = new Audio(path);
  audio.volume = 1;
  audio.play();
};

export const useHours = () => {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState(date.getHours());
  const [minutes, setMinutes] = useState(date.getMinutes());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    setHours(date.getHours());
    setMinutes(date.getMinutes());
  }, [date]);

  return `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
};
