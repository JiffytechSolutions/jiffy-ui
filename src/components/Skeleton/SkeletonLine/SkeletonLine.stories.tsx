import React from "react";
import SkeletonLine from "./SkeletonLine";

export default {
  title: "components(Done)/Skeleton/SkeletonLine",
  component: SkeletonLine,
  parameters: { docs: { autodocs: true, }, },
  argTypes: {},
};
const Template = ({ ...rest }) => {
  return (
    <SkeletonLine
      numberOfLine={rest.numberOfLine}
      lineGap={rest.lineGap}
      lineHeight={rest.lineHeight}
    />
  );
};
export const Primary = Template.bind({});
