import React from "react";
import TemplateDemo from "./TemplateDemo";

export default {
    title: "components(Done)/Template",
    component: TemplateDemo,
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
        <TemplateDemo />
    );
};
export const Primary = Template.bind({});