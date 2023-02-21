import { useEffect, useState } from "react";
import PostButtons from "./components/PostButtons";
import PostCaption from "./components/PostCaption";
import PostComment from "./components/PostComment";
import PostHeader from "./components/PostHeader";
import PostLikes from "./components/PostLikes";
import PostModalProvider from "./context/ModalProvider";
import PostModals from "./components/Modals";

interface PostProps {
  imageUrl: string;
}
const POST_MAX_WIDTH = 470;

const Post: React.FC<PostProps> = ({ imageUrl }: PostProps) => {
  const [imgHeight, setImgHeight] = useState(0);

  const setImageSize = (imageUrl: string): void => {
    let newHeight = 0;
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      const ratio = img.height / img.width;
      newHeight = Math.round(POST_MAX_WIDTH * ratio);
      setImgHeight(newHeight);
    };
    img.onerror = (err) => {
      console.error(err);
    };
  };

  useEffect(() => {
    setImageSize(imageUrl);
  }, [imageUrl]);

  return (
    <PostModalProvider>
      <PostModals />
      <div className="max-w-post rounded-sm border border-solid border-seperator">
        <div className="flex flex-col rounded-md bg-bg-primary">
          <div className="p-3">
            <PostHeader />
          </div>
          <div
            className="relative h-0 w-full overflow-hidden"
            style={{ paddingBottom: imgHeight }}
          >
            <img
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full object-cover"
              src={imageUrl}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2 p-3">
            <PostButtons />
            <PostLikes />
            <PostCaption />
            <PostComment />
          </div>
        </div>
      </div>
    </PostModalProvider>
  );
};

export default Post;
