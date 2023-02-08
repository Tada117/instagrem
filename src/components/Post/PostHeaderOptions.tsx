import uuid from "react-uuid";

interface Props {}
const PostHeaderOptions = (props: Props) => {
  const options = [
    {
      id: uuid(),
      title: "Report",
    },
    {
      id: uuid(),
      title: "Unfollow",
    },
    {
      id: uuid(),
      title: "Add to favorites",
    },
    {
      id: uuid(),
      title: "Go to post",
    },
    {
      id: uuid(),
      title: "Share to...",
    },
    {
      id: uuid(),
      title: "Copy link",
    },
    {
      id: uuid(),
      title: "Embed",
    },
    {
      id: uuid(),
      title: "About this account",
    },
    {
      id: uuid(),
      title: "Cancel",
    },
  ];
  return (
    <div className="flex w-[400px] flex-col">
      {options.map((item, index) => {
        const warningText = index === 0 || index === 1;
        return (
          <>
            <button
              className={`border-b-[1px] px-2 py-4 text-sm last:border-b-0 ${
                warningText && "font-bold text-red-500"
              }`}
            >
              {item.title}
            </button>
          </>
        );
      })}
    </div>
  );
};
export default PostHeaderOptions;
