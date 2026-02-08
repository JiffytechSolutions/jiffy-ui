import React from "react";
import Spinner from "./Spinner";
import FlexLayout from "../FlexLayout/FlexLayout";
import InlineStack from "../InlineStack/InlineStack";

const color = [
  "Positive",
  "Negative",
  "Notice",
  "Information",
  "Neutral",
  "Primary",
];
const size = ["Small", "Medium", "Large"];
const labelPosition = ["Bottom", "Right"];
export default {
  title: "Components/Spinner",
  component: Spinner,
  parameters: { docs: { autodocs: true, }, },
  argTypes: {
    size: {
      description: "Select card type",
      control: {
        type: "radio",
        options: ["Small", "Medium", "Large"],
      },
      defaultValue: "Medium",
    },
    color: {
      description: "Select card type",
      control: {
        type: "radio",
        options: [
          "Positive",
          "Negative",
          "Notice",
          "Information",
          "Neutral",
          "Primary",
        ],
      },
      defaultValue: "Neutral",
    },
    label: {
      description: "Enable Border Radius",
      control: {
        type: "text",
      },
      defaultValue: "Footer title",
    },
    labelPosition: {
      description: "Select card type",
      control: {
        type: "radio",
        options: ["Right", "Bottom"],
      },
      defaultValue: "Bottom",
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <Spinner
      color={rest.color}
      size={rest.size}
      label={rest.label}
      labelPosition={rest.labelPosition}
    />
  );
};

export const Default = Template.bind({});

// Spinner with Color
export const SpinnerWithColor: any = Template.bind({});
SpinnerWithColor.decorators = [
  () => {
    return (
      <InlineStack gap={4}>
        {color.map((color: any, ind) => (
          <Spinner key={ind} color={color} label={color} size={"Medium"} />
        ))}
      </InlineStack>
    );
  },
];

// Spinner with Size
export const SpinnerWithSize: any = Template.bind({});
SpinnerWithSize.decorators = [
  () => {
    return (
      <InlineStack gap={4}>
        {size.map((size: any, ind) => (
          <Spinner key={ind} color={"Positive"} label="Loading" size={size} />
        ))}
      </InlineStack>
    );
  },
];

// Spinner with Size
export const SpinnerWithLabelPosition: any = Template.bind({});
SpinnerWithLabelPosition.decorators = [
  () => {
    return (
      <InlineStack gap={4}>
        {labelPosition.map((labelPosition: any, ind) => (
          <Spinner
            key={ind}
            color={"Positive"}
            label="Loading"
            size={"Medium"}
            labelPosition={labelPosition}
          />
        ))}
      </InlineStack>
    );
  },
];
