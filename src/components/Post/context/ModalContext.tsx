import { Modals } from "hooks/useModal";
import { createContext } from "react";

interface ModalContextValue {
  modals: Modals;
  openModal: (modalKey: string) => void;
  closeModal: (modalKey: string) => void;
}

export const ModalContext = createContext<ModalContextValue>({
  modals: {},
  openModal: () => {},
  closeModal: () => {},
});
