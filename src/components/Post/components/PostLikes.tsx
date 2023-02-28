import { Like } from "../types";

type PostLikesProps = {
  likes: Like[];
};

const PostLikes = ({ likes }: PostLikesProps) => {
  const handleViewLikes = () => {
    // Dislay list of liked user modal
  };

  return (
    <div
      className="cursor-pointer text-sm font-semibold"
      onClick={handleViewLikes}
    >{`${likes.length} likes`}</div>
  );
};

export default PostLikes;
