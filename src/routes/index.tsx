import { finish } from "@/redux/stepSlice";
import { storageRequest } from "@/services";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "../hooks/useNavigate";
import { LayoutProvider } from "../layout/LayoutProvider";
import { Home } from "../pages";

export const path = [
  { name: "Início", path: "/", element: <Home key={"inicio"} /> },
];

export function Routes() {
  const { router } = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const data = storageRequest("data");

    if (data !== null) {
      dispatch(finish());
    }
  }, []);

  return (
    <>
      <LayoutProvider>
        {path.filter(item => item.path === router).map(item => item.element)}
      </LayoutProvider>
    </>
  );
}
