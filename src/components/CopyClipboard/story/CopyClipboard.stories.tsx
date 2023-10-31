import React from "react";
import CopyClipboard from "../CopyClipboard";
import { Card } from "../../Card";
import { FlexLayout } from "../../FlexLayout";

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
        options: ["start", "center", "end", "fill"],
      },
      defaultValue: "start",
    },
    iconAlign: {
      description: "Shifts the Icon to left/right of the copyClipboard content",
      control: {
        type: "radio",
        options: ["left", "right"],
      },
      defaultValue: "right",
    },
    timeout: {
      description: "You can set timeout in copyClipboard",
      control: {
        type: "number",
      },
      defaultValue: 3000,
    },
    customClass: {
      description:
        "You can add extra class in copyClipboard then use customClass props",
      control: {
        disable: true,
      },
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <Card>
      <CopyClipboard
        label={rest.label}
        value={rest.value}
        align={rest.align}
        iconAlign={rest.iconAlign}
        timeout={rest.timeout}
      />
    </Card>
  );
};

export const Primary = Template.bind({});

// copyClipboard Types
const alignTypes = ["start", "center", "end", "fill"];
export const Types: any = Template.bind({});
Types.decorators = [
  () => (
    <FlexLayout spacing="tight" wrap="wrap" direction="vertical">
      {alignTypes.map((types: any) => (
        <Card cardType="bordered" title={`copyClipboard ${types}`}>
          <CopyClipboard label="Label" value="Value" align={types} />
        </Card>
      ))}
    </FlexLayout>
  ),
];

// copyClipboard icon align
const iconAlignTypes = ["left", "right"];

export const Icon__Align__Types: any = Template.bind({});
Icon__Align__Types.decorators = [
  () => (
    <FlexLayout spacing="tight" wrap="wrap" direction="vertical">
      {iconAlignTypes.map((types: any) => (
        <Card cardType="bordered" title={`copyClipboard ${types}`}>
          <CopyClipboard
            label="Label"
            value="Value"
            align="center"
            iconAlign={types}
          />
        </Card>
      ))}
    </FlexLayout>
  ),
];
