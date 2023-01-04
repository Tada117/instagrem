import { HeartIcon } from "@heroicons/react/24/outline";
import { HeroIcon } from "components/HeroIcons";
import React, { useState } from "react";

type Props = {};

const PostButtons = (props: Props) => {
  return (
    <div className="flex gap-3">
      <HeroIcon icon="HeartIcon" outline />
      <HeroIcon icon="ChatBubbleBottomCenterIcon" outline />
      <HeroIcon icon="ShareIcon" outline />
    </div>
  );
};

export default PostButtons;
