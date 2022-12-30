import { push } from "@/redux/routerSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { Cup } from "../Cup";
import { Modal } from "../Modal";
import { EditModal } from "../Modals";

export const Header = () => {
  // const handleReset = async () => {
  //   toast.success("Dados resetados com sucesso!", { autoClose: 2000 });
  //   await delay(2000);
  //   storageRemove("data");
  //   storageRemove("history");
  //   location.reload();
  // };

  const dispatch = useDispatch();

  const handleNavigate = (path: string) => {
    dispatch(push(path));
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-6 py-1">
        <span
          className="flex cursor-pointer items-center justify-center gap-1 text-[30px] font-bold"
          onClick={() => handleNavigate("/")}
        >
          <Cup size={30} />
          Need Water
        </span>

        <nav>
          <ul className="flex gap-2">
            <li
              className="cursor-pointer p-3"
              onClick={() => handleNavigate("/")}
            >
              Início
            </li>
            <li
              className="cursor-pointer p-3"
              onClick={() => handleNavigate("/history")}
            >
              Histórico
            </li>
            <li className="cursor-pointer p-3" onClick={() => setIsOpen(true)}>
              Editar Dados
            </li>
            <li
              className="cursor-pointer p-3"
              onClick={() => handleNavigate("/about")}
            >
              Sobre
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <EditModal setIsOpen={setIsOpen} />
      </Modal>
    </>
  );
};
