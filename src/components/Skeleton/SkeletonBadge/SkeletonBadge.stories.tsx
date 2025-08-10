import React from "react";
import HorizontalFlex from "../../HorizontalFlex/HorizontalFlex";
import SkeletonBadge from "./SkeletonBadge";

const size = ["Small", "Medium", "Large"]
// const objectFit = ["Fill", "Contain", "Cover", "Default"]
export default {
    title: "components(Done)/Skeleton/SkeletonBadge",
    component: SkeletonBadge,
    tags: ["autodocs"],
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
        return (<HorizontalFlex gap={20}>
            {size.map((size: any, index) => (
                <SkeletonBadge key={index} size={size} />
            ))}
        </HorizontalFlex>
        );
    },
];
