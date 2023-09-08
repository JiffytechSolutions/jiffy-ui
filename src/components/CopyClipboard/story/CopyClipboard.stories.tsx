import React from "react";
import CopyClipboard from "../CopyClipboard";
import { Card } from "../../Card";

export default {
  title: "Components/Actions/CopyClipboard",
  component: CopyClipboard,
  argTypes: {
    value: {
      description: "Value description",
      control: {
        type: "text",
      },
      defaultValue: "label",
    },
    label: {
      description: "Label description",
      control: {
        type: "text",
      },
      defaultValue: "LABEL",
    },
    align: {
      description: "Action description",
      control: {
        type: "radio",
        options: ["center", "end", "fill", "none"],
      },
      defaultValue: "none",
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <Card>
      <CopyClipboard label={rest.label} value={rest.value} align={rest.align} />
    </Card>
  );
};

export const Primary = Template.bind({});
