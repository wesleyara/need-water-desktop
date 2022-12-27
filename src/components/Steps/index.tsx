import { StepsProps } from "@/@types";

import { FirstStep } from "./FirstStep";
import { SecondStep } from "./SecondStep";
import { ThirdStep } from "./ThirdStep";

export const steps = [
  {
    id: 1,
    element: <FirstStep />,
  },
  {
    id: 2,
    element: <SecondStep />,
  },
  {
    id: 3,
    element: <ThirdStep />,
  },
];
