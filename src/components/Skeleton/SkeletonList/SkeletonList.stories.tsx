import React from "react";
import SkeletonList from "./SkeletonList";

export default {
    title: "components(Done)/Skeleton/SkeletonList",
    component: SkeletonList,
    parameters: { docs: { autodocs: true, }, },
    argTypes: {

    },
};
const Template = ({ ...rest }) => {
    return (
        <SkeletonList numberOfList={rest.numberOfList} />
    );
};
export const Primary = Template.bind({});
