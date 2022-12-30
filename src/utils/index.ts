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
  audio.volume = 0.3;
  audio.play();
};
