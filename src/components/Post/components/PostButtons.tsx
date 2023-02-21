import { HeroIcon } from "components/HeroIcons";

interface PostButtonsProps {}

const PostButtons = (props: PostButtonsProps) => {
  return (
    <div className="flex gap-3">
      <HeroIcon icon="HeartIcon" outline />
      <HeroIcon icon="ChatBubbleBottomCenterIcon" outline />
      <HeroIcon icon="ShareIcon" outline />
    </div>
  );
};

export default PostButtons;
