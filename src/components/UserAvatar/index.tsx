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
        src="https://www.purina.co.uk/sites/default/files/2020-12/Dog_1098119012_Teaser.jpg"
        alt=""
        className={classNames(
          "rounded-full border-2 border-light-100 object-cover dark:border-dark-700",
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
