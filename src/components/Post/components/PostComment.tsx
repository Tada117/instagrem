import { Comment } from "../types";

interface PostCommentProps {
  comments: Comment[];
}
const PostComment: React.FC<PostCommentProps> = ({
  comments,
}: PostCommentProps) => {
  return (
    <>
      {comments.length > 1 ? (
        <button className="flex text-sm font-normal text-gray-400">
          View {comments.length} comments
        </button>
      ) : null}
      {/* {comments.map((comment) => (
        <div
          key={comment.id}
          className="text-text-primary flex items-center gap-1 text-sm"
        >
          <span className="font-semibold">{comment.user.username}</span>
          <span className="font-normal">{comment.text}</span>
        </div>
      ))} */}
    </>
  );
};

export default PostComment;
