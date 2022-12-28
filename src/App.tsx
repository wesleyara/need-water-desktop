import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Home } from "./pages";
import store from "./redux/store";
import { Routes } from "./routes";

export const path = [
  { name: "Início", path: "/", element: <Home key={"inicio"} /> },
];

export function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
      <ToastContainer autoClose={5000} />
    </>
  );
}
