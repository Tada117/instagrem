import { ModalState } from "hooks/useModal";
import React, { useEffect } from "react";

interface ModalProps {
  modal: ModalState;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ modal, onClose, children }) => {
  useEffect(() => {
    // modal.isOpen
    //   ? (document.body.style.overflow = "hidden")
    //   : (document.body.style.overflow = "unset");
    // const handleEsc = (event: KeyboardEvent) => {
    //   if (event.key === "Escape") {
    //     onClose();
    //   }
    // };
    // if (modal.isOpen) {
    //   window.addEventListener("keydown", handleEsc);
    // }
    // return () => window.removeEventListener("keydown", handleEsc);
  }, [modal]);

  if (!modal.isOpen) return null;

  return (
    <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center">
      <div
        className="fixed h-full w-full bg-black opacity-50"
        onClick={onClose}
      />
      <div className="relative  min-w-[400px] rounded-lg bg-white">
        {/* <button className="absolute top-2 right-2" onClick={onClose}>
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button> */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
