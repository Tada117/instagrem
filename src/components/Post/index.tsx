import { useEffect, useState } from "react";
import PostCaption from "./PostCaption";
import PostHeader from "./PostHeader";

type Props = {
  imageUrl: string;
};

const POST_IMG_WIDTH = 470;

const Post = (props: Props) => {
  const { imageUrl } = props;
  const [imgHeight, setImgHeight] = useState(0);

  const setImageSize = (imageUrl: string): void => {
    let newHeight = 0;
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      const ratio = img.height / img.width;
      newHeight = Math.round(POST_IMG_WIDTH * ratio);
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
    <>
      <div className="flex flex-col rounded-md bg-bg-primary">
        <div className="p-3">
          <PostHeader />
        </div>
        <div
          className="relative h-0 w-[470px] overflow-hidden"
          style={{ paddingBottom: imgHeight }}
        >
          <img
            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full object-cover"
            src={imageUrl}
            alt=""
          />
        </div>
        <PostCaption />
      </div>
    </>
  );
};

export default Post;
