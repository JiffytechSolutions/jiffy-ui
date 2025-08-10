import React from "react";
import HorizontalFlex from "../HorizontalFlex/HorizontalFlex";
import Indicator from "./Indicator";

const size = ["Small", "Medium", "Large"];
const color = ["Primary", "Positive", "Negative", "Notice", "Neutral",];

export default {
    title: "Components(Done)/Indicator",
    component: Indicator,
    tags: ["autodocs"],

    argTypes: {
        label: {
            description: "Type label",
            control: {
                type: "text",
            },
            defaultValue: "Label",
        },

        color: {
            description: "Select Color",
            control: {
                type: "radio",
                options: color,
            },
            defaultValue: "",
        },
        size: {
            description: "Select Size",
            control: {
                type: "radio",
                options: size,
            },
            defaultValue: "",
        },
    },
};

const Template = ({ ...rest }) => {
    return (
        <Indicator
            color={rest.color}
            size={rest.size}
            label={rest.label}
        />
    );
};
export const Primary = Template.bind({});

//Label Indicator with all colors
export const IndicatorsWithAllColors: any = Template.bind({});
IndicatorsWithAllColors.decorators = [
    () => {
        return (
            <HorizontalFlex gap={20}>
                {color.map((color: any, ind) => (
                    <Indicator
                        key={ind}
                        color={color}
                        label={color}
                    />
                ))}
            </HorizontalFlex>
        );
    },
];

//Dot Indicator with all colors
export const DotIndicatorsWithAllColors: any = Template.bind({});
DotIndicatorsWithAllColors.decorators = [
    () => {
        return (
            <HorizontalFlex gap={20}>
                {color.map((color: any, ind) => (
                    <Indicator
                        key={ind}
                        color={color}
                        label={color}

                    />
                ))}
            </HorizontalFlex>
        );
    },
];

//Label Indicator with all sizes
export const LabelIndicatorWithAllSizes: any = Template.bind({});
LabelIndicatorWithAllSizes.decorators = [
    () => {
        return (
            <HorizontalFlex gap={20}>
                {size.map((size: any, ind) => (
                    <Indicator
                        key={ind}
                        color="Positive"
                        label={size}
                        size={size}
                    />
                ))}
            </HorizontalFlex>
        );
    },
];

//Dot Indicator with all sizes
export const DotIndicatorWithAllSizes: any = Template.bind({});
DotIndicatorWithAllSizes.decorators = [
    () => {
        return (
            <HorizontalFlex gap={20}>
                {size.map((size: any, ind) => (
                    <Indicator
                        key={ind}
                        color="Positive"
                        label={size}

                        size={size}
                    />
                ))}
            </HorizontalFlex>
        );
    },
];

//With Number
export const WithNumber: any = Template.bind({});
WithNumber.decorators = [
    () => {
        return (
            <HorizontalFlex gap={20}>
                {color.map((color: any, ind) => (
                    <Indicator
                        key={ind}
                        color={color}
                        label={color}
                        content="2"
                    />
                ))}
            </HorizontalFlex>
        );
    },
];