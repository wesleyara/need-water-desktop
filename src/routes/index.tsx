import { IState } from "@/@types";
import { Copyright, Schedule } from "@/components";
import { finish } from "@/redux/stepSlice";
import { setDayReset, setNotify, setStorage } from "@/redux/userSlice";
import { storageRequest, storageSet } from "@/services";
import { audioCall, useHours } from "@/utils";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNow } from "utils-react";

import { LayoutProvider } from "../layout/LayoutProvider";
import { About, History, Home } from "../pages";

export const path = [
  { name: "Início", path: "/", element: <Home key={"inicio"} /> },
  {
    name: "Histórico",
    path: "/history",
    element: <History key={"historico"} />,
  },
  {
    name: "Sobre",
    path: "/about",
    element: <About key={"sobre"} />,
  },
];

export function Routes() {
  const dispatch = useDispatch();
  const router = useSelector((state: IState) => state.router);
  const now = useNow();

  const data = useSelector((state: IState) => state.user);

  useEffect(() => {
    if (
      data.timestamp !== 0 &&
      data.start_time !== "" &&
      data.end_time !== ""
    ) {
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

  const notification = () => {
    audioCall("./sounds/notification.wav");
    toast.success("Hora de beber água!", { autoClose: 5000 });
  };

  useEffect(() => {
    if (data.notify) {
      notification();
    }
  }, [data]);

  const hours = useHours();

  useEffect(() => {
    if (
      !data.notify &&
      data.timestamp !== 0 &&
      !data.is_goal &&
      hours !== "" &&
      data.start_time !== "" &&
      data.end_time !== ""
    ) {
      const numberHours = Number(hours.split(":").join(""));
      const startTime = Number(data.start_time.split(":").join(""));
      const endTime = Number(data.end_time.split(":").join(""));
      if (
        data.last_drink + data.timestamp < now &&
        numberHours >= startTime &&
        numberHours <= endTime
      ) {
        dispatch(setNotify());
      }
    }
  }, [data, now, hours]);

  return (
    <>
      <LayoutProvider>
        {path
          .filter(item => item.path === router.path)
          .map(item => item.element)}
        <Schedule />
        <Copyright />
      </LayoutProvider>
    </>
  );
}
