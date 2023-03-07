interface CommentInputProps {}
const CommentInput = (props: CommentInputProps) => {
  return (
    <div className="flex">
      <textarea
        rows={1}
        placeholder="Write your thought here"
        className="text-light-100 flex-1 resize-none text-sm font-extralight outline-none"
      />
      <button>
        <span className="ml-1 text-sm font-medium text-ig-blue ">Post</span>
      </button>
    </div>
  );
};
export default CommentInput;
