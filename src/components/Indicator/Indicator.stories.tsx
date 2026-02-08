import React from "react";
import FlexLayout from "../FlexLayout/FlexLayout";
import Indicator from "./Indicator";
import InlineStack from "../InlineStack/InlineStack";


const color = ["Primary", "Positive", "Negative", "Notice", "Neutral",];

export default {
    title: "Components/Indicator",
    component: Indicator,
    parameters: { docs: { autodocs: true, }, },

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
    },
};

const Template = ({ ...rest }) => {
    return (
        <Indicator
            color={rest.color}
           
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
            <InlineStack gap={4}>
                {color.map((color: any, ind) => (
                    <Indicator
                        key={ind}
                        color={color}
                        label={color}
                    />
                ))}
            </InlineStack>
        );
    },
];







//With Number
export const WithNumber: any = Template.bind({});
WithNumber.decorators = [
    () => {
        return (
            <InlineStack gap={4}>
                {color.map((color: any, ind) => (
                    <Indicator
                        key={ind}
                        color={color}
                        label={color}
                        content="2"
                    />
                ))}
            </InlineStack>
        );
    },
];
