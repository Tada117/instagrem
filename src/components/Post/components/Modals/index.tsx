import Modal from "components/Modal";
import { PostModalContext } from "components/Post/context/ModalProvider";
import { PostModalKeys } from "constants/ModalKey";
import { useContext } from "react";
import OptionsModal from "./OptionsModal";
import UnfollowModal from "./UnfollowModal";

interface PostModalsProps {}

const PostModals: React.FC<PostModalsProps> = () => {
  const { modals, closeModal } = useContext(PostModalContext);

  return (
    <>
      <Modal
        modal={modals[PostModalKeys.option]}
        onClose={() => closeModal(PostModalKeys.option)}
      >
        <OptionsModal />
      </Modal>
      <Modal
        modal={modals[PostModalKeys.unfollow]}
        onClose={() => closeModal(PostModalKeys.unfollow)}
      >
        <UnfollowModal />
      </Modal>
    </>
  );
};
export default PostModals;
