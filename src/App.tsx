import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { NavigateProvider } from "./context/NavigateContext";
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
        <NavigateProvider>
          <Routes />
        </NavigateProvider>
      </Provider>
      <ToastContainer autoClose={5000} />
    </>
  );
}
