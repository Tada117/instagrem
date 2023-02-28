import ReadMore from "components/ReadMore";
import React from "react";

interface PostCaptionProps {
  caption: string;
}

const PostCaption = ({ caption }: PostCaptionProps) => {
  return (
    <div className="text-light-100 text-sm font-extralight">
      <ReadMore text={caption} />
    </div>
  );
};

export default PostCaption;
