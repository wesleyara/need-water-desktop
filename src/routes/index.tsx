import { IState } from "@/@types";
import { push } from "@/redux/routerSlice";
import { finish } from "@/redux/stepSlice";
import { setDayReset, setNotify, setStorage } from "@/redux/userSlice";
import { storageRequest, storageSet } from "@/services";
import { audioCall } from "@/utils";
import { pushNotifications } from "electron";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNow } from "utils-react";

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
  const router = useSelector((state: IState) => state.router);
  const now = useNow();

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

  const notification = () => {
    audioCall("./sounds/notification.wav");
    toast.success("Hora de beber água!", { autoClose: 5000 });
  };

  useEffect(() => {
    if (data.notify) {
      notification();
    }
  }, [data]);

  useEffect(() => {
    if (!data.notify && data.timestamp !== 0) {
      if (data.last_drink + data.timestamp < now) {
        dispatch(setNotify());
      }
    }
  }, [data, now]);

  return (
    <>
      <LayoutProvider>
        {path
          .filter(item => item.path === router.path)
          .map(item => item.element)}
      </LayoutProvider>
    </>
  );
}
