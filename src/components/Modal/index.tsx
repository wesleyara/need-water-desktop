import { Dialog } from "@headlessui/react";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

export const Modal = ({ isOpen = false, setIsOpen, children }: ModalProps) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <div
        className="absolute inset-0 z-50 bg-[#0f0f0f] opacity-40 blur-3xl"
        aria-hidden="true"
      />

      <div className="absolute inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="fixed z-50 w-[768px]">
          <div className="flex h-[100%] w-[350px] flex-col justify-center rounded-[10px] border-[2px] border-cerulean-500 border-opacity-70 bg-white p-8 md:w-[100%] md:p-12">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-[1%] right-[1%] text-4xl text-secondary outline-none"
            >
              <AiOutlineClose className="text-cerulean-500" />
            </button>
            {children}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
