import React from "react";
import FlexLayout from "../../FlexLayout/FlexLayout";
import SkeletonBadge from "./SkeletonBadge";

const size = ["Small", "Medium", "Large"]
// const objectFit = ["Fill", "Contain", "Cover", "Default"]
export default {
    title: "components(Done)/Skeleton/SkeletonBadge",
    component: SkeletonBadge,
    parameters: { docs: { autodocs: true, }, },
    argTypes: {

    },
};
const Template = ({ ...rest }) => {
    return (
        <SkeletonBadge size={rest.size}/>
    );
};
export const Primary = Template.bind({});

// Thumbnail with Size
export const ThumbnailWithSize: any = Template.bind({});
ThumbnailWithSize.decorators = [
    () => {
        return (<FlexLayout gap={2}>
            {size.map((size: any, index) => (
                <SkeletonBadge key={index} size={size} />
            ))}
        </FlexLayout>
        );
    },
];
