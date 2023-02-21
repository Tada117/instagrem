import { useContext } from "react";
import uuid from "react-uuid";
import { PostModalKeys } from "constants/ModalKey";
import { PostModalContext } from "components/Post/context/ModalProvider";

const UnfollowModal = () => {
  const { openModal, closeModal } = useContext(PostModalContext);

  return (
    <div className="flex flex-col">
      <button className="border-t-[1px] px-2 py-4 text-sm font-bold text-red-500 last:border-b-0">
        Unfollow
      </button>
      <button
        className="border-t-[1px] px-2 py-4 text-sm last:border-b-0"
        onClick={() => {
          closeModal(PostModalKeys.unfollow);
          openModal(PostModalKeys.option);
        }}
      >
        Cancel
      </button>
    </div>
  );
};
export default UnfollowModal;
