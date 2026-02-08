import React from "react";
import SkeletonCustom from "./SkeletonCustom";

export default {
    title: "components(Done)/Skeleton/SkeletonCustom",
    component: SkeletonCustom,
    parameters: { docs: { autodocs: true, }, },
    argTypes: {

    },
};
const Template = ({ ...rest }) => {
    return (
        <SkeletonCustom width={rest.width} height={rest.height} radius={rest.radius}  />
    );
};
export const Primary = Template.bind({});
