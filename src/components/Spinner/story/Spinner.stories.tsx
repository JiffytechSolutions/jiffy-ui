import React from "react";
import { Card, FlexLayout } from "../..";
import SpinnerDoc from "../Document/SpinnerDoc";
import Spinner from "../Spinner";

export default {
  title: "Components/Behaviour/Spinner",
  component: Spinner,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=21-5171&t=tzMhm7j5DhR6wij0-0",
    },
  },
  argTypes: {
    color: {
      description: "Set Spinner border color",
      control: {
        type: "radio",
        options: ["default", "danger", "primary", "info"],
      },
      defaultValue: "default",
    },
    size: {
      description:
        "Set Spinner size of and here is two size  first Large second Small",
      control: {
        type: "radio",
        options: ["large", "medium", "small"],
      },
      defaultValue: "large",
    },
    customClass: {
      description: "You can add extra class inside customClass props",
      control: {
        type: true,
      },
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <Card>
      <FlexLayout spacing="loose">
        <Spinner color={rest.color} size={rest.size} />
      </FlexLayout>
    </Card>
  );
};

export const Primary = Template.bind({});

// Spinner Types of color
const colors = ["default", "danger", "primary", "info"];
export const Color: any = Template.bind({});
Color.story = {
  parameters: {
    docs: {
      storyDescription:
        "<blockquote>Spinner types are used as per the requirements of the app, that allow users to easily differentiate between the types of actions. Variants allow you to define the styles used across multiple spinner. It is therefore important that the different variants are implemented consistently across products, so that they message the correct actions</blockquote><p><strong>Primary action </strong>: Primary spinners should be a strong visual indicator to help the user to complete their journey.</p><p><strong>Secondary action</strong> : Secondary spinners are the alternative we give users to the primary action.</p><p><strong>Distructive action</strong> : If a particular destructive action is the primary action, it is usally a good idea to flag this visually with a “destructive” variant of a button. This makes it clear to the user that they are about to take a highly consequential action.</p>",
    },
  },
};
Color.decorators = [
  () => (
    <Card title={"Spinner Types of Color"}>
      <FlexLayout spacing="loose">
        {colors.map((variant: any) => {
          return (
            <Card title={variant}>
              <Spinner color={variant} size="large" />
            </Card>
          );
        })}
      </FlexLayout>
    </Card>
  ),
];

// Spinner Types of Size
const size = ["large", "medium", "small"];
export const Size: any = Template.bind({});
Size.story = {
  parameters: {
    docs: {
      storyDescription:
        "<blockquote>Spinner types are used as per the requirements of the app, that allow users to easily differentiate between the types of actions. Variants allow you to define the styles used across multiple spinner. It is therefore important that the different variants are implemented consistently across products, so that they message the correct actions</blockquote><p><strong>Primary action </strong>: Primary spinners should be a strong visual indicator to help the user to complete their journey.</p><p><strong>Secondary action</strong> : Secondary spinners are the alternative we give users to the primary action.</p><p><strong>Distructive action</strong> : If a particular destructive action is the primary action, it is usally a good idea to flag this visually with a “destructive” variant of a button. This makes it clear to the user that they are about to take a highly consequential action.</p>",
    },
  },
};
Size.decorators = [
  () => (
    <Card title={"Spinner Types of Size"}>
      <FlexLayout spacing="loose">
        {size.map((variant: any) => {
          return (
            <Card title={variant}>
              <Spinner color="info" size={variant} />
            </Card>
          );
        })}
      </FlexLayout>
    </Card>
  ),
];
export function Documentation() {
  return <SpinnerDoc />;
}
