import React from "react";
import HorizontalFlex from "../HorizontalFlex/HorizontalFlex";
import Badge from "./Badge";
const size = ["Small", "Medium", "Large"];
const color = ["Primary", "Positive", "Negative", "Notice", "Neutral"];
const type = ["Partial", "Full", "None"];
const emphasis = ["Subtile", "Intense", "OutLine"];

export default {
    title: "Components(Done)/Badge",
    component: Badge,
    tags: ["autodocs"],
    argTypes: {
        size: {
            description: "Select Size",
            control: {
                type: "radio",
                options: size,
            },
            defaultValue: "Medium",
        },
        color: {
            description: "Select Color",
            control: {
                type: "radio",
                options: color,
            },
            defaultValue: "Positive",
        },
        type: {
            description: "Select Type",
            control: {
                type: "radio",
                options: type,
            },
            defaultValue: "None",
        },
        emphasis: {
            description: "Select Emphasis",
            control: {
                type: "radio",
                options: emphasis,
            },
            defaultValue: "Subtile",
        },
        children: {
            description: "Type the text label",
            control: {
                type: "text",
            },
            defaultValue: "children",
        },
    },
};
const Template = ({ ...rest }) => {
    return (
        <Badge
            color={rest.color}
            type={rest.type}
            children={rest.children}
            size={rest.size}
            emphasis={rest.emphasis}
        />

    );
};

export const Primary = Template.bind({});

// Badge with multiple sizes
export const BadgeWithMultipleSizes: any = Template.bind({});
BadgeWithMultipleSizes.decorators = [
    () => {
        return (
            <HorizontalFlex gap={10}>
                {size.map((sizes: any, ind) => (
                    <Badge
                        key={ind}
                        color="Negative"
                        size={sizes}
                        children={sizes}
                    />
                ))}
            </HorizontalFlex>
        );
    },
];

// Badge with multiple colors
export const BadgeWithMultipleColors: any = Template.bind({});
BadgeWithMultipleColors.decorators = [
    () => {
        return (
            <HorizontalFlex gap={10}>
                {color.map((colors: any, ind) => (
                    <Badge
                        key={ind}
                        color={colors}
                        size="Large"
                        children={colors}
                    />
                ))}
            </HorizontalFlex>
        );
    },
];

// Badge with multiple type
export const BadgeWithMultipleType: any = Template.bind({});
BadgeWithMultipleType.decorators = [
    () => {
        return (
            <HorizontalFlex gap={10}>
                {type.map((type: any, ind) => (
                    <Badge
                        key={ind}
                        color="Positive"
                        size="Large"
                        children={type}
                        type={type}
                    />
                ))}
            </HorizontalFlex>
        );
    },
];

// Badge with multiple emphasis
export const BadgeWithMultipleEmphasis: any = Template.bind({});
BadgeWithMultipleEmphasis.decorators = [
    () => {
        return (
            <HorizontalFlex gap={10}>
                {emphasis.map((emphasis: any, ind) => (
                    <Badge
                        key={ind}
                        color="Positive"
                        size="Large"
                        children={emphasis}
                        type="Full"
                        emphasis={emphasis}
                    />
                ))}
            </HorizontalFlex>
        );
    },
];