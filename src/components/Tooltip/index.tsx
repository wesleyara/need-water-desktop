import { ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  message: string;
  classname?: string;
}

export const Tooltip = ({ children, message, classname }: TooltipProps) => {
  return (
    <div className={"tooltip"}>
      {children}
      <span className={"tooltip-message " + classname}>{message}</span>
    </div>
  );
};
