interface Story {
  author: string;
  media?: [{ url: string; date: Date }];
}

interface UserAvatarProps {
  stories?: Story[];
}

const defaultProps: UserAvatarProps = {
  stories: [{ author: "Tu", media: [{ url: "", date: new Date() }] }],
};

const UserAvatar = ({ stories }: UserAvatarProps) => {
  console.log(stories);
  return (
    <div className="flex cursor-pointer items-center gap-3 text-center">
      {stories?.length === 0 ? (
        <img
          src="https://www.purina.co.uk/sites/default/files/2020-12/Dog_1098119012_Teaser.jpg"
          alt=""
          className="h-10 w-10 rounded-full object-cover"
        />
      ) : (
        <div className="rounded-full bg-gradient-to-tr from-amber-500 to-fuchsia-700 p-0.5">
          <div className="rounded-full bg-white p-1 dark:bg-dark-800">
            <img
              src="https://www.purina.co.uk/sites/default/files/2020-12/Dog_1098119012_Teaser.jpg"
              alt=""
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

UserAvatar.defaultProps = defaultProps;

export default UserAvatar;
