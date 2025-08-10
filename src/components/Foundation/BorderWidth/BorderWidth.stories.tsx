import Card from "../../Card/Card";
import TextStyle from "../../TextStyle/TextStyle";
import { BorderWidth } from "./BorderWidth";
import VerticalFlex from "../../VerticalFlex/VerticalFlex";
import "./borderwidth.css";
import React from "react";

export default {
    title: "Foundation/BorderWidth",

    decorators: [
        (Story: any) => (

            <Story />

        ),
    ],
    component: BorderWidth,
    parameters: {
        docs: {},
        controls: { hideNoControlsWarning: true },
        design: {
            type: "figma",
            url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=576-33848&t=I5X8uq0HTkwaulx9-0",
        },
    },
};

const Template = () => {
    return (
        <VerticalFlex gap={36}>
            {BorderWidth?.map((borderWidth: any, index: number) => {
                return (
                    <div key={index} className={`story-border`} style={{ borderWidth: borderWidth.value }}>
                        <Card key={index} type="Plain">

                            <TextStyle as="h3" textColor="Dark" fontWeight="Medium" type="MdHeading">
                                {borderWidth.name}
                            </TextStyle>
                            <TextStyle as="p" type="MdBody" textColor="Secondary">
                                {borderWidth.description}
                            </TextStyle>
                        </Card>
                    </div>
                );
            })}
        </VerticalFlex>
    );
};
export const Primary: any = Template.bind({});
