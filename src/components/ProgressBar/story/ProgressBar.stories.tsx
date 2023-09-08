import React from "react";
import { Progressbar, Card, FlexLayout } from "../..";
import ProgressBarDoc from "../Document/ProgressBarDoc";
import { ProgressbarI } from "../Progressbar";

export default {
  title: "Components/Behaviour/Progressbar",
  component: Progressbar,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=1581-108328&t=tb1dL4Z7hEk2Cb1x-0",
    },
  },
  argTypes: {
    percentage: {
      description: "set Percentage od progresbar",
      control: {
        type: "number",
      },
      defaultValue: 10,
    },
    progessSize: {
      description: "set size of progresbar",
      control: {
        type: "radio",
        options: ["thin", "thick"],
      },
      defaultValue: "thin",
    },
    count: {
      description: "show percentage count",
      control: {
        type: "radio",
        options: ["tooltipCount", "linearCount"],
      },
    },
    customClass: {
      description: "set CustomClass",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    isAnimating: {
      description: "Animation will be shown inside the progress",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
};

const Template = (rest: ProgressbarI) => {
  return (
    <Card title="Progress Bar">
      <Progressbar percentage={20} {...rest} />
    </Card>
  );
};

export const Primary = Template.bind({
  percentage: 20,
});
//
export const ProgressBarWithoutMessage: any = Template.bind({});
ProgressBarWithoutMessage.decorators = [
  () => {
    return (
      <Card title="Progress Bar Without Message">
        <Progressbar percentage={20} />
      </Card>
    );
  },
];
// size
export const Progresssize: any = Template.bind({});
Progresssize.decorators = [
  () => {
    return (
      <Card title="Progress Bar size">
        <FlexLayout spacing="loose" direction="vertical">
          {["thin", "thick"].map((items: any, index: number) => {
            return (
              <Progressbar key={index} progessSize={items} percentage={20} />
            );
          })}
        </FlexLayout>
      </Card>
    );
  },
];
// animation
export const ProgressWithAnimation: any = Template.bind({});
ProgressWithAnimation.decorators = [
  () => {
    return (
      <Card title="Progress Bar with Animation">
        <Progressbar isAnimating percentage={20} />
      </Card>
    );
  },
];
export function Documentation() {
  return <ProgressBarDoc />;
}
