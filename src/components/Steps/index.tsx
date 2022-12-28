import { StepsProps } from "@/@types";

import { FirstStep } from "./FirstStep";
import { FourthStep } from "./FourthStep";
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
  {
    id: 4,
    element: <FourthStep />,
  },
];
