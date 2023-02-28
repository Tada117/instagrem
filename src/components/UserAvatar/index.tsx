import classNames from "classnames";

interface UserAvatarProps {
  size?: "small" | "medium";
  src: string;
  hasStory: boolean;
}

const defaultProps: UserAvatarProps = {
  size: "medium",
  src: "",
  hasStory: false,
};

const UserAvatar: React.FC<UserAvatarProps> = ({
  size,
  src,
  hasStory,
}: UserAvatarProps) => {
  const onAvatarClick = () => {};
  return (
    <div
      onClick={onAvatarClick}
      className={classNames(
        "w-fit min-w-fit cursor-pointer rounded-full bg-gradient-to-tr from-amber-500 to-fuchsia-700 p-0.5",
        {
          "bg-none": !hasStory,
        },
      )}
    >
      <img
        src={src}
        alt=""
        className={classNames(
          "border-light-100 dark:border-dark-700 rounded-full border-2 object-cover",
          {
            "h-6 w-6": size === "small",
            "h-10 w-10": size === "medium",
          },
        )}
      />
    </div>
  );
};

UserAvatar.defaultProps = defaultProps;

export default UserAvatar;
