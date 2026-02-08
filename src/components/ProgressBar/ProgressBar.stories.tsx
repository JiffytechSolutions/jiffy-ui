import React from "react";
import ProgressBar from "./ProgressBar";

// Button Types
const variant = ["Primary", "Positive", "Negative", "Notice", "Neutral"];

//"Positive" | "Negative" | "Notice" | "Information" | "Neutral"
const sizes = [
  {
    name: "Small",
    des: "Small",
  },
  {
    name: "Medium",
    des: "Medium",
  },
  {
    name: "Large",
    des: "Large",
  },
];

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
  parameters: { docs: { autodocs: true, }, },

  argTypes: {
    variant: {
      description: "Select variant",
      control: {
        type: "radio",
        options: variant,
      },
      defaultValue: "Primary",
    },

    size: {
      description: "Select Size",
      control: {
        type: "radio",
        options: sizes,
      },
      defaultValue: "md",
    },
    valuePercentage: {
      description: "Select Size",
      control: {
        type: "number",
      },
      defaultValue: "50",
    },
  },
};
const Template = ({ ...rest }) => {
  return (
    <ProgressBar
      variant={rest.variant}
      size={rest.size}
      label={rest.label}
      valuePercentage={rest.valuePercentage}
      showLabel={rest.showLabel}
      showPercentage={rest.showPercentage}
      outOf={rest.outOf}
    //label={rest.label}
    />
  );
};

export const Primary = Template.bind({});
