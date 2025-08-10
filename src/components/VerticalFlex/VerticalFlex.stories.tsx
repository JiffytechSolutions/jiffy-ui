import React from "react";
import FlexItem from "../FlexItem/FlexItem";
import VerticalFlex from "./VerticalFlex";

export default {
    title: "Components(Done)/VerticalFlex",
    component: VerticalFlex,
    tags: ["autodocs"],

    argTypes: {
        
    },
};

const Template = ({ ...rest }) => {
    return (
        <div className="height-100">
            <VerticalFlex gap={rest.gap}>
                <FlexItem itemWidth={{ xxl: "8", xl: "6", lg: "6", md: "6", sm: "3" }}>
                    <div className="custom-flex_item">1</div>
                </FlexItem>
                <FlexItem>
                    <div className="custom-flex_item">2</div>
                </FlexItem>
                <FlexItem>
                    <div className="custom-flex_item">3</div>
                </FlexItem>
                <FlexItem>
                    <div className="custom-flex_item">4</div>
                </FlexItem>
                <FlexItem>
                    <div className="custom-flex_item">5</div>
                </FlexItem>

            </VerticalFlex>
        </div>
    );
};
export const Primary = Template.bind({});

// Horizontal flex with gap
export const Horizontal_flex_with_gap: any = Template.bind({});
Horizontal_flex_with_gap.decorators = [
    () => {
        return (
            <VerticalFlex gap={8}>
                <FlexItem itemWidth={{ xxl: '1', xl: "2", lg: "2", md: "4", sm: "3" }}>
                    <div className="custom-flex_item">1</div>
                </FlexItem>
                <FlexItem itemWidth={{ xxl: '10', xl: "8", lg: "6", md: "4", sm: "6" }}>
                    <div className="custom-flex_item">2</div>
                </FlexItem>
                <FlexItem itemWidth={{ xxl: '1', xl: "2", lg: "4", md: "4", sm: "3" }}>
                    <div className="custom-flex_item">3</div>
                </FlexItem>
            </VerticalFlex>
        );
    },
];
