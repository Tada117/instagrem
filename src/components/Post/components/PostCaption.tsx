import ReadMore from "components/ReadMore";
import React from "react";

type Props = {};

const PostCaption = (props: Props) => {
  return (
    <div className="text-light-100 text-sm font-extralight">
      <ReadMore
        text="!loremLorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Morbi in ante vitae ligula lobortis bibendum in scelerisque nisl. 
        Quisque eu nisi eget dui eleifend congue. Vestibulum sed fermentum felis. 
        Quisque vel urna ipsum. Suspendisse sagittis cursus mollis. 
        Aenean eget neque tempus elit aliquam sagittis."
      />
    </div>
  );
};

export default PostCaption;
