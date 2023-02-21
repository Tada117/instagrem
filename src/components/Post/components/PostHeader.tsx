import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import UserAvatar from "components/UserAvatar";
import { PostModalKeys } from "constants/ModalKey";
import ThemeContext, { THEME } from "context/ThemeContext";
import { useContext } from "react";
import { PostModalContext } from "../context/ModalProvider";

interface PostHeaderProps {}

const PostHeader: React.FC<PostHeaderProps> = () => {
  const { theme } = useContext(ThemeContext);
  const { openModal } = useContext(PostModalContext);

  return (
    <>
      <div className="flex flex-row items-center">
        <div className="flex flex-1 items-center gap-2">
          <UserAvatar />
          <div className="flex flex-col text-sm font-semibold text-text-primary">
            user_0375
          </div>
        </div>

        <div>
          <button onClick={() => openModal(PostModalKeys.option)}>
            <EllipsisVerticalIcon
              cursor={"pointer"}
              width={24}
              height={24}
              color={theme === THEME.dark ? "white" : "black"}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default PostHeader;
