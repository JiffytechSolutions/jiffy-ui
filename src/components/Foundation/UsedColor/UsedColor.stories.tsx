
import React from "react";
import UsedColor from "./UsedColor";

export default {
    title: "Foundation/UsedColor",

    decorators: [(Story: any) => <Story />],
    component: UsedColor,
    parameters: {
        docs: {},
        controls: { hideNoControlsWarning: true },
        design: {
            type: "figma",
            url: "",
        },
    },
};

const Template = () => {
    // const useToasts = useToast();

    return (
        <>
            <UsedColor />
        </>
    );
};
export const Primary: any = Template.bind({});
