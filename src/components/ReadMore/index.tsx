import React, { useState } from "react";

type Props = {
  text: string;
};

const ReadMore = (props: Props) => {
  const { text } = props;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div>
      {isReadMore ? text.slice(0, 75) + "..." : text}
      <span
        onClick={toggleReadMore}
        className="cursor-pointer font-medium text-gray"
      >
        {isReadMore ? "(read more)" : " (show less)"}
      </span>
    </div>
  );
};

export default ReadMore;
