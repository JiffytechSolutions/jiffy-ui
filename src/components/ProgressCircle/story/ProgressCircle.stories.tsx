import { Story } from "@storybook/react";
import React from "react";
import { ProgressCircle, Card } from "../..";
import { ProgressCircleI } from "../progressCircle";

export default {
  title: "Components/Behaviour/ProgressCircle",
  component: ProgressCircle,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-ver3.0.2-(Production)?type=design&node-id=15220-78015&mode=design&t=fJIBZJVp9olvgZpq-0",
    },
  },
  argTypes: {
    percentage: {
      description: "set Percentage of circlebar",
      control: {
        type: "number",
      },
      defaultValue: 20,
    },
    customClass: {
      description: "set CustomClass",
      control: {
        type: "text",
      },
    },
    size: {
      description: "Set Type of Skelton",
      control: {
        type: "radio",
        options: ["large", "small"],
      },
      defaultValue: "large",
    },
    enablePercentage: {
      description: "enable percentage",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    fontsize: {
      description: "set fontsize of circlebar",
      control: {
        type: "number",
      },
      defaultValue: 7,
    },
  },
};

const Template: Story<ProgressCircleI> = (rest: ProgressCircleI) => {
  return (
    <Card title="Progress Circle">
      <ProgressCircle {...rest} />
    </Card>
  );
};

export const Primary = Template.bind({
  percentage: 10,
});
//
export const ProgressCircleSize: any = Template.bind({});
ProgressCircleSize.decorators = [
  () => {
    return (
      <Card title="Progress Circle Size">
        {["large", "small"].map((items: any) => {
          return <ProgressCircle size={items} />;
        })}
      </Card>
    );
  },
];
//Progress CircleWithoutPercentage
export const ProgressCircleWithPercentage: any = Template.bind({});
ProgressCircleWithPercentage.decorators = [
  () => {
    return (
      <Card title="Progress Circle without Percentage Symbol">
        <ProgressCircle percentage={11} />
      </Card>
    );
  },
];
