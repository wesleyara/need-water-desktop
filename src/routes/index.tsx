import { IState } from "@/@types";
import { finish } from "@/redux/stepSlice";
import { setDayReset, setStorage } from "@/redux/userSlice";
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
  const dispatch = useDispatch();
  const router = currentRouter();

  useEffect(() => {
    const data = storageRequest("data");

    if (data !== null) {
      dispatch(finish());
      dispatch(setStorage(data));

      const currentDay = new Date().getDate();
      const registerDay = new Date(data.current_day).getDate();

      if (currentDay !== registerDay) {
        dispatch(setDayReset());
      }
    }
  }, []);

  const data = useSelector((state: IState) => state.user);

  useEffect(() => {
    if (data.timestamp !== 0) {
      storageSet("data", data);

      const history = storageRequest("history");

      if (history !== null) {
        const currentDay = new Date().getDate();
        const currentHistory = history.find(
          (item: any) => new Date(item.current_day).getDate() === currentDay,
        );

        if (currentHistory) {
          const index = history.indexOf(currentHistory);
          history[index] = data;
          storageSet("history", history);
        } else {
          history.push(data);
          storageSet("history", history);
        }
      } else {
        storageSet("history", [data]);
      }
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
