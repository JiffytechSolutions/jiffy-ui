import React from "react";
import HorizontalFlex from "../HorizontalFlex/HorizontalFlex";
import TextStyle from "../TextStyle/TextStyle";
import VerticalFlex from "../VerticalFlex/VerticalFlex";
import Thumbnail from "./Thumbnail";

const size = ["ExtraSmall", "Small", "Medium", "Large"]
const objectFit = ["Fill", "Contain", "Cover", "Default"]
export default {
    title: "components(Done)/Thumbnail",
    component: Thumbnail,
    tags: ["autodocs"],
    argTypes: {

    },
};
const Template = ({ ...rest }) => {
    return (
        <Thumbnail onClick={rest.onClick} size={rest.size} objectFit={rest.objectFit} source={rest.source} alt={rest.alt} />
    );
};
export const Primary = Template.bind({});

// Thumbnail with Size
export const ThumbnailWithSize: any = Template.bind({});
ThumbnailWithSize.decorators = [
    () => {
        return (<HorizontalFlex gap={20}>
            {size.map((size: any, index) => (
                <Thumbnail key={index} size={size} source={"https://t4.ftcdn.net/jpg/05/18/69/85/360_F_518698520_Xk9tIwoYpyX6kkVsF6GpQ1z7sKXO8YRz.jpg"} alt={"testing"} />
            ))}
        </HorizontalFlex>
        );
    },
];

// Thumbnail with image fill
export const ThumbnailWithImageFill: any = Template.bind({});
ThumbnailWithImageFill.decorators = [
    () => {
        return (<HorizontalFlex gap={20}>
            {objectFit.map((objectFit: any, index) => (
                <VerticalFlex gap={18} key={index}>
                    <Thumbnail objectFit={objectFit} size={"Medium"} source={"https://placehold.co/800x500"} alt={"testing"} />
                    <TextStyle as="h5" fontWeight="Medium">{objectFit}</TextStyle>
                </VerticalFlex>
            ))}
        </HorizontalFlex>
        );
    },
];

// Thumbnail with image fill
export const ThumbnailWithClickable: any = Template.bind({});
ThumbnailWithClickable.decorators = [
    () => {
        return (
            <Thumbnail objectFit={"Cover"} size={"Medium"} source={"https://placehold.co/800x500"} alt={"testing"} onClick={() => { alert('Badge clicked') }} />

        );
    },
];
