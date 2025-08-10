import React from "react";
import CopyClipboard from "./CopyClipboard";
import  Card  from "../Card/Card";
// import { Card } from "../../Card";
// import { FlexLayout } from "../../FlexLayout";

export default {
  title: "Components/CopyClipboard",
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
    <Card type="Borderd">
      <CopyClipboard
        label={rest.label}
        value={rest.value}
       
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
    <>
      {alignTypes.map((types: any) => (
        <Card type="Borderd" headerTitle={`copyClipboard ${types}`}>
          <CopyClipboard label="Label" value="Value"  />
        </Card>
      ))}
    </>
  ),
];

// copyClipboard icon align
const iconAlignTypes = ["left", "right"];

export const Icon__Align__Types: any = Template.bind({});
Icon__Align__Types.decorators = [
  () => (
    <>
      {iconAlignTypes.map((types: any) => (
        <Card type="Borderd" headerTitle={`copyClipboard ${types}`}>
          <CopyClipboard
            label="Label"
            value="Value"
           
            iconAlign={types}
          />
        </Card>
      ))}
    </>
  ),
];
