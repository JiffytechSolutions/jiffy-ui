import React from "react";
import FlexLayout from "../../FlexLayout/FlexLayout";
import SkeletonButton from "./SkeletonButton";

const size = ["XSmall", "Small", "Medium", "Large"];
const objectFit = ["Fill", "Contain", "Cover", "Default"];
export default {
  title: "components(Done)/Skeleton/SkeletonButton",
  component: SkeletonButton,
  parameters: { docs: { autodocs: true, }, },
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
      <FlexLayout gap={2}>
        {size.map((size: any, index) => (
          <SkeletonButton key={index} size={size} />
        ))}
      </FlexLayout>
    );
  },
];
