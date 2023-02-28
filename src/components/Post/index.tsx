import PostModals from "./components/Modals";
import PostBody from "./components/PostBody";
import PostButtons from "./components/PostButtons";
import PostCaption from "./components/PostCaption";
import PostComment from "./components/PostComment";
import PostHeader from "./components/PostHeader";
import PostLikes from "./components/PostLikes";
import PostModalProvider from "./context/ModalProvider";
import style from "./post.module.scss";
import { Post as IPost } from "./types";

interface PostProps {
  post: IPost;
}

const Post: React.FC<PostProps> = ({ post }: PostProps) => {
  return (
    <PostModalProvider>
      <PostModals />
      <div className={style.wrapper}>
        <div className="flex flex-col rounded-md bg-bg-primary">
          <div className="p-3">
            <PostHeader user={post.user} />
          </div>
          <PostBody imageUrls={post.imageUrls} />
          <div className="flex flex-col gap-2 p-3">
            <PostButtons />
            <PostLikes likes={post.likes} />
            <PostCaption caption={post.caption} />
            <PostComment />
          </div>
        </div>
      </div>
    </PostModalProvider>
  );
};

export default Post;
