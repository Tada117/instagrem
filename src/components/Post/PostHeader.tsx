import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import Modal from "components/Modal";
import UserAvatar from "components/UserAvatar";
import ThemeContext, { THEME } from "context/ThemeContext";
import { useContext } from "react";
import PostHeaderOptions from "./PostHeaderOptions";

interface Props {
  toggleOptions: () => void;
  isOpen: boolean;
}

const PostHeader = ({ toggleOptions, isOpen }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Modal isOpen={isOpen} toggle={toggleOptions}>
        <PostHeaderOptions />
      </Modal>
      <div className="flex flex-row items-center">
        <div className="flex flex-1 items-center gap-2">
          <UserAvatar />
          <div className="flex flex-col text-sm font-semibold text-text-primary">
            user_0375
          </div>
        </div>

        <div>
          <EllipsisVerticalIcon
            onClick={toggleOptions}
            cursor={"pointer"}
            width={24}
            height={24}
            color={theme === THEME.dark ? "white" : "black"}
          />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
