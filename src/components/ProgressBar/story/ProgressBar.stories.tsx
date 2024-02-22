import React from "react";
import { Progressbar, Card, FlexLayout, Text } from "../..";
import ProgressBarDoc from "../Document/ProgressBarDoc";
import { ProgressbarI } from "../Progressbar";

export default {
  title: "Components/Behaviour/Progressbar",
  component: Progressbar,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-ver3.0.2-(Production)?type=design&node-id=1581-108327&mode=design&t=fJIBZJVp9olvgZpq-0",
    },
  },
  argTypes: {
    percentage: {
      description: "set Percentage od progresbar",
      control: {
        type: "number",
      },
      defaultValue: 30,
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
    type: {
      description: "Set type progressbar background color",
      control: {
        type: "radio",
        options: ["primary", "secondary", "success", "error", "warning"],
      },
      defaultValue: "primary",
    },
  },
};

const Template = (rest: ProgressbarI) => {
  return (
    <Card title="Progress Bar">
      <Progressbar percentage={20} {...rest} type={rest.type} />
    </Card>
  );
};

export const Primary = Template.bind({
  percentage: 20,
});

// Types of progressbar
export const Types: any = Template.bind({});
Types.decorators = [
  () => {
    return (
      <Card title="Progressbar types">
        <FlexLayout spacing="loose" direction="vertical">
          {["primary", "secondary", "success", "error", "warning"].map(
            (items: any, index: number) => {
              return (
                <FlexLayout spacing="loose" direction="vertical">
                  <Text>{items}</Text>
                  <Progressbar key={index} type={items} percentage={20} />
                </FlexLayout>
              );
            }
          )}
        </FlexLayout>
      </Card>
    );
  },
];

// Types of progressbar
export const Types_with_animation: any = Template.bind({});
Types_with_animation.decorators = [
  () => {
    return (
      <Card title="Progressbar types with animation">
        <FlexLayout spacing="loose" direction="vertical">
          {["primary", "secondary", "success", "error", "warning"].map(
            (items: any, index: number) => {
              return (
                <FlexLayout spacing="loose" direction="vertical">
                  <Text>{items}</Text>
                  <Progressbar
                    key={index}
                    type={items}
                    percentage={60}
                    isAnimating
                    progessSize="thick"
                  />
                </FlexLayout>
              );
            }
          )}
        </FlexLayout>
      </Card>
    );
  },
];

//Progressbar size
export const Size: any = Template.bind({});
Size.decorators = [
  () => {
    return (
      <Card title="Progress Bar size">
        <FlexLayout spacing="loose" direction="vertical">
          {["thin", "thick"].map((items: any, index: number) => {
            return (
              <FlexLayout spacing="loose" direction="vertical">
                <Text>{items}</Text>
                <Progressbar key={index} progessSize={items} percentage={20} />
              </FlexLayout>
            );
          })}
        </FlexLayout>
      </Card>
    );
  },
];

//Progressbar count
export const Count: any = Template.bind({});
Count.decorators = [
  () => {
    return (
      <Card title="ProgressBar count">
        <FlexLayout spacing="loose" direction="vertical">
          {["tooltipCount", "linearCount"].map((items: any, index: number) => {
            return (
              <FlexLayout spacing="loose" direction="vertical">
                <Text>{items}</Text>
                <Progressbar key={index} percentage={20} count={items} />
              </FlexLayout>
            );
          })}
        </FlexLayout>
      </Card>
    );
  },
];

//Progressbar percentage
export const Percentage: any = Template.bind({});
Percentage.decorators = [
  () => {
    return (
      <Card title="ProgressBar Percentage">
        <FlexLayout spacing="loose" direction="vertical">
          {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(
            (items: any, index: number) => {
              return (
                <Progressbar
                  key={index}
                  percentage={items}
                  count="linearCount"
                />
              );
            }
          )}
        </FlexLayout>
      </Card>
    );
  },
];

// animation
export const Animation: any = Template.bind({});
Animation.decorators = [
  () => {
    return (
      <Card title="Progress Bar with Animation">
        <Progressbar isAnimating percentage={45} />
      </Card>
    );
  },
];
// Animation_with_Percentage
export const Animation_with_Percentage: any = Template.bind({});
Animation_with_Percentage.decorators = [
  () => {
    return (
      <Card title="Progress Bar with Animation">
        <Progressbar isAnimating percentage={40} count="linearCount" />
      </Card>
    );
  },
];
// Animation_with_Percentage
export const Animation_with_Tooltip: any = Template.bind({});
Animation_with_Tooltip.decorators = [
  () => {
    return (
      <Card title="Progress Bar with Animation">
        <Progressbar isAnimating percentage={40} count="tooltipCount" />
      </Card>
    );
  },
];
export function Documentation() {
  return <ProgressBarDoc />;
}
