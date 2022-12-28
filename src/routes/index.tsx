import { IState } from "@/@types";
import { finish } from "@/redux/stepSlice";
import { setStorage } from "@/redux/userSlice";
import { storageRequest, storageSet } from "@/services";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentRouter } from "utils-react";

import { LayoutProvider } from "../layout/LayoutProvider";
import { History, Home } from "../pages";

export const path = [
  { name: "Início", path: "/", element: <Home key={"inicio"} /> },
  {
    name: "Histórico",
    path: "/history",
    element: <History key={"historico"} />,
  },
];

export function Routes() {
  // const currentRouter = useSelector((state: IState) => state.router.route);
  const dispatch = useDispatch();
  const router = currentRouter();

  useEffect(() => {
    const data = storageRequest("data");

    if (data !== null) {
      dispatch(finish());
      dispatch(setStorage(data));
    }
  }, []);

  const data = useSelector((state: IState) => state.user);

  useEffect(() => {
    if (data.timestamp !== 0) {
      storageSet("data", data);
    }
  }, [data]);

  return (
    <>
      <LayoutProvider>
        {path
          .filter(item => item.path === router.pathname)
          .map(item => item.element)}
      </LayoutProvider>
    </>
  );
}
