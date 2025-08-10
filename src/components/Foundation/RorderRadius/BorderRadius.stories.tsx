import React from "react";
import Card from "../../Card/Card";
import TextStyle from "../../TextStyle/TextStyle";
import HorizontalFlex from "../../HorizontalFlex/HorizontalFlex";
import { BorderRadius } from "./BorderRadius";
import "./BorderRadius.css";

export default {
    title: "Foundation/BorderRadius",
    decorators: [
        (Story: any) => (
            <Story />
        ),
    ],
    component: BorderRadius,
};

const Template = () => {
    return (
        <HorizontalFlex gap={36} wrap={true}>
            {BorderRadius?.map((borderRadius: any, index: number) => {
                return (
                    <div className={`story-border border-radius`} style={{ borderRadius: borderRadius.value }}>
                        <Card key={index} type="Plain">
                            <TextStyle as="h3" textColor="Dark" fontWeight="Medium" type="MdHeading">
                                {borderRadius.name}
                            </TextStyle>
                            <TextStyle as="p" type="MdBody" textColor="Secondary">
                                {borderRadius.description}
                            </TextStyle>
                        </Card>
                    </div>
                );
            })}
        </HorizontalFlex>
    );
};
export const Primary: any = Template.bind({});
