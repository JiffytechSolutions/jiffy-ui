import React from "react";
import List from "./List";

export default {
    title: "Components(Done)/List",
    component: List,
    tags: ["autodocs"],
    argTypes: {

    },
};
const Template = ({ ...rest }) => {
    return (
        <List type={rest.type} unorderedStyle={rest.unorderedStyle} orderedStyle={rest.orderedStyle}>
            <List.Item iconUrl={rest.iconUrl}>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
            </List.Item>
            <List.Item>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
            </List.Item>
            <List.Item>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
            </List.Item>
        </List>
    );
};
export const Primary = Template.bind({});

//Order List
export const Order_List_with_decimal_number: any = Template.bind({});
Order_List_with_decimal_number.decorators = [
    () => {
        return (
            <List type="ol" orderedStyle="Decimal" >
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
            </List>
        );
    },
];

//Order List
export const Order_List_with_Alfabet: any = Template.bind({});
Order_List_with_Alfabet.decorators = [
    () => {
        return (
            <List type="ol" orderedStyle="Alfabet" >
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
            </List>
        );
    },
];

// Order List
export const Order_List_with_Roman: any = Template.bind({});
Order_List_with_Roman.decorators = [
    () => {
        return (
            <List type="ol" orderedStyle="Roman" >
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
            </List>
        );
    },
];

//UnOrder List
export const UnOrder_List_with_Circle: any = Template.bind({});
UnOrder_List_with_Circle.decorators = [
    () => {
        return (
            <List type="ul" unorderedStyle="Circle">
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
            </List>
        );
    },
];

//UnOrder List
export const UnOrder_List_with_Disc: any = Template.bind({});
UnOrder_List_with_Disc.decorators = [
    () => {
        return (
            <List type="ul" unorderedStyle="Disc">
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
            </List>
        );
    },
];

//UnOrder List
export const UnOrder_List_with_Squire: any = Template.bind({});
UnOrder_List_with_Squire.decorators = [
    () => {
        return (
            <List type="ul" unorderedStyle="Squire">
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
                <List.Item>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                </List.Item>
            </List>
        );
    },
];
