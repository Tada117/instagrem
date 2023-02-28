import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

interface PostBodyProps {
  imageUrls: string[];
}
const POST_MAX_WIDTH = 470;
const PostBody: React.FC<PostBodyProps> = ({ imageUrls }: PostBodyProps) => {
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
    setImageSize(imageUrls[0]);
  }, [imageUrls[0]]);

  return (
    <div
      className="relative h-0 w-full overflow-hidden"
      style={{ paddingBottom: imgHeight }}
    >
      <img
        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full object-cover"
        src={imageUrls[0]}
        alt=""
      />
      <Swiper>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
};
export default PostBody;
