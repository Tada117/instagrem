import classNames from "classnames";

interface Story {
  author: string;
  media?: [{ url: string; date: Date }];
}

interface UserAvatarProps {
  stories?: Story[];
  size?: "small" | "medium";
  avatarUrl?: string;
}

const defaultProps: UserAvatarProps = {
  stories: [],
  size: "medium",
};

const UserAvatar = ({ stories, size }: UserAvatarProps) => {
  const onAvatarClick = () => {};
  return (
    <div
      onClick={onAvatarClick}
      className={classNames(
        "w-fit min-w-fit cursor-pointer rounded-full bg-gradient-to-tr from-amber-500 to-fuchsia-700 p-0.5",
        {
          "bg-none": Array.isArray(stories) && stories?.length === 0,
        }
      )}
    >
      <img
        src="https://source.unsplash.com/random"
        alt=""
        className={classNames(
          "border-light-100 dark:border-dark-700 rounded-full border-2 object-cover",
          {
            "h-6 w-6": size === "small",
            "h-10 w-10": size === "medium",
          }
        )}
      />
    </div>
  );
};

UserAvatar.defaultProps = defaultProps;

export default UserAvatar;
