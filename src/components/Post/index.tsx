import UserAvatar from "components/UserAvatar";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import ThemeContext, { THEME } from "context/ThemeContext";

type Props = {};

const Post = (props: Props) => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className="flex">
      <div className="flex w-[300px] flex-row items-center">
        {/* left */}
        <div className="flex flex-1 items-center gap-3">
          <UserAvatar />
          <div className="flex flex-col">
            <p className="text-sm text-white">a_tunguyen</p>
            <p className="text-sm text-gray">Tu Nguyen</p>
          </div>
        </div>
        {/* right */}
        <div>
          <EllipsisVerticalIcon
            cursor={"pointer"}
            width={24}
            height={24}
            color={theme === THEME.dark ? "white" : "black"}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
