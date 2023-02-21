import { PostModalKeys } from "constants/ModalKey";
import useModal, { ModalState, Modals } from "hooks/useModal";
import React, { createContext } from "react";

interface PostModalProviderProps {
  children: React.ReactNode;
}
const initialModals: Record<PostModalKeys, ModalState> = {
  [PostModalKeys.option]: {
    isOpen: false,
  },
  [PostModalKeys.report]: {
    isOpen: false,
  },
  [PostModalKeys.reportDone]: {
    isOpen: false,
  },
  [PostModalKeys.unfollow]: {
    isOpen: false,
  },
  [PostModalKeys.aboutAccount]: {
    isOpen: false,
  },
  [PostModalKeys.post]: {
    isOpen: false,
  },
};

interface PostModalContext {
  modals: Modals;
  openModal: (modalKey: string) => void;
  closeModal: (modalKey: string) => void;
}

export const PostModalContext = createContext<PostModalContext>({
  modals: {},
  openModal: () => {},
  closeModal: () => {},
});

const PostModalProvider: React.FC<PostModalProviderProps> = ({ children }) => {
  const { modals, openModal, closeModal } = useModal(initialModals);

  return (
    <PostModalContext.Provider
      value={{
        modals,
        openModal,
        closeModal,
      }}
    >
      {children}
    </PostModalContext.Provider>
  );
};
export default PostModalProvider;
