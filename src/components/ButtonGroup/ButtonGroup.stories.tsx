import React from "react";
import  Button  from "../Button/Button";
import  ButtonGroup  from "./ButtonGroup";
export default {
    title: "components(Done)/ButtonGroup",
    component: ButtonGroup,
    tags: ["autodocs"],
    argTypes: {
        segmented: {
            description: "Select card type",
            control: {
                type: "boolean",
            },
            defaultValue: true,
        }
    },
};
const Template = ({ ...rest }) => {
    return (
        <ButtonGroup segmented={rest.segmented}>
            <Button children="Button" color="Primary" variant="Primary" isDisabled />
            <Button children="Button1" color="Primary" variant="Primary" />
            <Button children="Button2" color="Primary" variant="Primary" />
        </ButtonGroup>
    );
};
export const Primary = Template.bind({});

// Thumbnail with image fill
export const ButtonGroup_with_variant: any = Template.bind({});
ButtonGroup_with_variant.decorators = [
    () => {
        return (
            <ButtonGroup segmented={true}>
                <Button children="Button" color="Primary" variant="Secondry" />
                <Button children="Button1" color="Primary" variant="Secondry" />
                <Button children="Button2" color="Primary" variant="Secondry" />
            </ButtonGroup>
        );
    },
];

// ButtonGroup_with_Tertiary_Action
export const ButtonGroup_with_Tertiary_Action: any = Template.bind({});
ButtonGroup_with_Tertiary_Action.decorators = [
    () => {
        return (
            <ButtonGroup segmented={true}>
                <Button children="Button" color="Primary" variant="Tertiary" />
                <Button children="Button1" color="Primary" variant="Tertiary" />
                <Button children="Button2" color="Primary" variant="Tertiary" />
            </ButtonGroup>
        );
    },
];
