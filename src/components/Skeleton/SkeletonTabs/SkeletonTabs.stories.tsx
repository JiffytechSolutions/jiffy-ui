import React from "react";
import SkeletonTabs from "./SkeletonTabs";

export default {
    title: "components(Done)/Skeleton/SkeletonTabs",
    component: SkeletonTabs,
    tags: ["autodocs"],
    argTypes: {

    },
};
const Template = ({ ...rest }) => {
    return (
        <SkeletonTabs numberOfTabs={rest.numberOfTabs} />
    );
};
export const Primary = Template.bind({});
