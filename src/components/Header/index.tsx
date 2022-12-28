import { storageRemove } from "@/services";
import { toast } from "react-toastify";
import { delay } from "utils-react";

import { Cup } from "../Cup";

export const Header = () => {
  const handleReset = async () => {
    toast.success("Dados resetados com sucesso!", { autoClose: 2000 });
    await delay(2000);
    storageRemove("data");
    location.reload();
  };

  return (
    <>
      <header className="flex items-center justify-between px-6 py-1">
        <span className="flex items-center justify-center gap-1 text-[30px] font-bold">
          <Cup size={30} />
          Need Water
        </span>

        <nav>
          <ul className="flex gap-2">
            <li className="cursor-pointer p-3">Editar Dados</li>
            <li className="cursor-pointer p-3" onClick={handleReset}>
              Resetar
            </li>
          </ul>
        </nav>
      </header>
      <hr />
    </>
  );
};
