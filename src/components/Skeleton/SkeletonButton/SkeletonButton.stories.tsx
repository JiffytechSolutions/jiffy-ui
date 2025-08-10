import React from "react";
import HorizontalFlex from "../../HorizontalFlex/HorizontalFlex";
import SkeletonButton from "./SkeletonButton";

const size = ["XSmall", "Small", "Medium", "Large"];
const objectFit = ["Fill", "Contain", "Cover", "Default"];
export default {
  title: "components(Done)/Skeleton/SkeletonButton",
  component: SkeletonButton,
  tags: ["autodocs"],
  argTypes: {},
};
const Template = ({ ...rest }) => {
  return <SkeletonButton size={rest.size} />;
};
export const Primary = Template.bind({});

// Thumbnail with Size
export const ThumbnailWithSize: any = Template.bind({});
ThumbnailWithSize.decorators = [
  () => {
    return (
      <HorizontalFlex gap={20}>
        {size.map((size: any, index) => (
          <SkeletonButton key={index} size={size} />
        ))}
      </HorizontalFlex>
    );
  },
];
