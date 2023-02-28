import { useEffect, useState } from "react";

interface ReadMoreProps {
  text: string;
}

const ReadMore = ({ text }: ReadMoreProps) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const [displayText, setDisplayText] = useState(text.slice(0, 75));

  useEffect(() => {
    if (text.length > 75) {
      setIsReadMore(true);
    }
  }, [text]);

  const toggleReadMore = () => {
    displayText.length > 75
      ? setDisplayText(text.slice(0, 75))
      : setDisplayText(text);
  };

  return (
    <div>
      <span className="text-gray cursor-pointer font-medium">
        {displayText}
        {isReadMore ? (
          <span
            className="font-light italic text-ig-blue hover:text-ig-blue-hover"
            onClick={toggleReadMore}
          >
            {displayText.length <= 75 ? " ...(read more)" : " (show less)"}
          </span>
        ) : null}
      </span>
    </div>
  );
};

export default ReadMore;
