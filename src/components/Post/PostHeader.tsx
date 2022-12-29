import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import UserAvatar from "components/UserAvatar";
import ThemeContext, { THEME } from "context/ThemeContext";
import { useContext } from "react";

type Props = {};

const PostHeader = (props: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-1 items-center gap-2">
        <UserAvatar
          stories={[{ author: "Tu", media: [{ url: "", date: new Date() }] }]}
        />
        <div className="flex flex-col text-sm font-semibold text-text-primary">
          a_tunguyen
        </div>
      </div>

      <div>
        <EllipsisVerticalIcon
          cursor={"pointer"}
          width={24}
          height={24}
          color={theme === THEME.dark ? "white" : "black"}
        />
      </div>
    </div>
  );
};

export default PostHeader;
