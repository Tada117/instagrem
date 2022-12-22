import PostCaption from "./PostCaption";
import PostComment from "./PostComment";
import PostHeader from "./PostHeader";

type Props = {};

const Post = (props: Props) => {
  return (
    <div className="bg-primary flex gap-8 rounded-3xl p-4 md:p-6 lg:p-10">
      <div className="flex basis-1/3 flex-col gap-3">
        <PostHeader />
        <PostCaption />
        <PostComment />
      </div>
      <div className="basis-2/3 self-center">
        <img
          className="rounded-lg"
          src="https://www.ontarioparks.com/parksblog/wp-content/uploads/2020/02/Quetico_Backcountry_Winter_Camping-825x510.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Post;
