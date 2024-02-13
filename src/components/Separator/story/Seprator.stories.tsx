import React from "react";
import { Card, FlexLayout } from "../../..";
import Separator from "../Separator";

export default {
  title: "Components/Entity/Separator",
  component: Separator,
  argTypes: {
    type: {
      description: "Set types of separator",
      control: {
        type: "radio",
        options: ["solid", "dotted", "dashed"],
      },
      defaultValue: "solid",
    },
    customClass: {
      description: "You can add extra class in separator component",
      control: {
        type: true,
      },
    },
    text: {
      description: "You can add text",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <Card>
      <Separator type={rest.type} text={rest.text} />
    </Card>
  );
};

export const Primary = Template.bind({});

// Types of Separator
const types = ["solid", "dotted", "dashed"];

export const Types: any = Template.bind({});
Types.decorators = [
  () => (
    <Card title={"Types of Separator"}>
      <FlexLayout spacing="extraLoose" direction="vertical">
        {types.map((variant: any) => {
          return (
            <Card cardType="borderLess" title={variant}>
              <Separator type={variant} />
            </Card>
          );
        })}
      </FlexLayout>
    </Card>
  ),
];

// Separator with text
export const Separator_with_text: any = Template.bind({});
Separator_with_text.decorators = [
  () => (
    <Card title="Separator with text" cardType="bordered">
      <FlexLayout spacing="extraLoose" direction="vertical">
        {types.map((variant: any) => {
          return (
            <Card cardType="borderLess" title={variant}>
              <Separator type={variant} text="TEXT DIVIDER" />
            </Card>
          );
        })}
      </FlexLayout>
    </Card>
  ),
];
