import React from "react";
import FlexItem from "../FlexItem/FlexItem";
import HorizontalFlex from "./HorizontalFlex";

export default {
    title: "Components(Done)/HorizontalFlex",
    component: HorizontalFlex,
    tags: ["autodocs"],

    argTypes: {
        // thickness: {
        //     description: "Select thickness",
        //     control: {
        //         type: "radio",
        //         options: thickness
        //     },
        //     defaultValue: "Label",
        // },
        // style: {
        //     description: "select style",
        //     control: {
        //         type: "radio",
        //         options: style
        //     },
        //     defaultValue: "Label",
        // },
        // color: {
        //     description: "Select Color",
        //     control: {
        //         type: "radio",
        //         options: color,
        //     },
        //     defaultValue: "",
        // },
        // orientation: {
        //     description: "Select Orientation",
        //     control: {
        //         type: "radio",
        //         options: orientation,
        //     },
        //     defaultValue: "",
        // },
    },
};

const Template = ({ ...rest }) => {
    return (
        <div className="height-100">
            <HorizontalFlex gap={rest.gap} wrap={rest.wrap} blockAlign={{ lg: "end", xxl: "start" }} align={{
                sm: "center",
                md: "center",
                lg: "spaceAround",
            }} >
                <FlexItem itemWidth={{ xxl: "8", xl: "6", lg: "6", md: "6", sm: "3" }} order={{ lg: "1" }}>
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

            </HorizontalFlex>
        </div>
    );
};
export const Primary = Template.bind({});

// Horizontal flex with gap
export const Horizontal_flex_with_gap: any = Template.bind({});
Horizontal_flex_with_gap.decorators = [
    () => {
        return (
            <HorizontalFlex gap={2} align={{ sm: "center", lg: "end", md: "spaceAround" }}>
                <FlexItem itemWidth={{ xxl: '1', xl: "2", lg: "2", md: "4", sm: "3" }}>
                    <div className="custom-flex_item">1</div>
                </FlexItem>
                <FlexItem itemWidth={{ xxl: '10', xl: "8", lg: "6", md: "4", sm: "6" }}>
                    <div className="custom-flex_item">2</div>
                </FlexItem>
                <FlexItem itemWidth={{ xxl: '1', xl: "2", lg: "4", md: "4", sm: "3" }}>
                    <div className="custom-flex_item">3</div>
                </FlexItem>
            </HorizontalFlex>
        );
    },
];
