import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import UserAvatar from "components/UserAvatar";
import { PostModalKeys } from "constants/ModalKey";
import ThemeContext, { THEME } from "context/ThemeContext";
import { useContext } from "react";
import { PostModalContext } from "../context/ModalProvider";
import { User } from "types/user";

interface PostHeaderProps {
  user: User;
}

const PostHeader: React.FC<PostHeaderProps> = ({ user }: PostHeaderProps) => {
  const { theme } = useContext(ThemeContext);
  const { openModal } = useContext(PostModalContext);

  return (
    <>
      <div className="flex flex-row items-center">
        <div className="flex flex-1 items-center gap-2">
          <UserAvatar src={user.avatarUrl} size="medium" hasStory />
          <div className="flex flex-col text-sm font-semibold text-text-primary">
            {user.username}
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
