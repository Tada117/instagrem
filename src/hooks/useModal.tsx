import { useState } from "react";

export interface ModalState {
  isOpen: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export interface Modals {
  [key: string]: ModalState;
}

type UseModal = (initialModals: Modals) => {
  modals: Modals;
  openModal: (modalKey: string) => void;
  closeModal: (modalKey: string) => void;
};

const useModal: UseModal = (initialModals) => {
  const [modals, setModals] = useState<Modals>(initialModals);

  const openModal = (modalKey: string) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalKey]: {
        isOpen: true,
        onOpen: () => {},
        onClose: () => {},
      },
    }));
  };

  const closeModal = (modalKey: string) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalKey]: {
        isOpen: false,
        onOpen: () => {},
        onClose: () => {},
      },
    }));
  };

  return { modals, openModal, closeModal };
};

export default useModal;
