import React from "react";
import HorizontalFlex from "../../HorizontalFlex/HorizontalFlex";
import SkeletonThumbnail from "./SkeletonThumbnail";

const size = ["ExtraSmall", "Small", "Medium", "Large"]
const objectFit = ["Fill", "Contain", "Cover", "Default"]
export default {
    title: "components(Done)/Skeleton/SkeletonThumbnail",
    component: SkeletonThumbnail,
    tags: ["autodocs"],
    argTypes: {

    },
};
const Template = ({ ...rest }) => {
    return (
        <SkeletonThumbnail size={rest.size}/>
    );
};
export const Primary = Template.bind({});

// Thumbnail with Size
export const ThumbnailWithSize: any = Template.bind({});
ThumbnailWithSize.decorators = [
    () => {
        return (<HorizontalFlex gap={20}>
            {size.map((size: any, index) => (
                <SkeletonThumbnail key={index} size={size} />
            ))}
        </HorizontalFlex>
        );
    },
];
