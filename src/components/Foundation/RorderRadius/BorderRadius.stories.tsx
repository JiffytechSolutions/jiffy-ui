import React from "react";
import Card from "../../Card/Card";
import TextStyle from "../../TextStyle/TextStyle";
import FlexLayout from "../../FlexLayout/FlexLayout";
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
        <FlexLayout gap={3} wrap={true}>
            {BorderRadius?.map((borderRadius: any, index: number) => {
                return (
                    <div className={`story-border border-radius`} style={{ borderRadius: borderRadius.value }}>
                        <Card key={index} variant="outlined">
                            <TextStyle as="h3" textColor="Dark" fontWeight="medium" type="MdHeading">
                                {borderRadius.name}
                            </TextStyle>
                            <TextStyle as="p" type="MdBody" textColor="Secondary">
                                {borderRadius.description}
                            </TextStyle>
                        </Card>
                    </div>
                );
            })}
        </FlexLayout>
    );
};
export const Primary: any = Template.bind({});
