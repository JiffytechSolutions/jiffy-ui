import React from "react";
import Alert from "./Alert";
import { ExternalLink } from "react-feather";
import VerticalFlex from "../VerticalFlex/VerticalFlex";

const emphasis = ["Subtile", "Intense"];
const color = ["Primary", "Positive", "Negative", "Waiting", "Neutral"];

export default {
  title: "Components(Done)/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "Type title",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    description: {
      description: "Type description",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    color: {
      description: "Select Color",
      control: {
        type: "radio",
        options: color,
      },
      defaultValue: "",
    },

    emphasis: {
      description: "Select emphasis",
      control: {
        type: "radio",
        options: emphasis,
      },
      defaultValue: "Subtile",
    },
    onDismiss: {

    }
  },
};

const primaryAction1 = {
  isLoading: false,
  content: "Action",
  onClick: () => {
    alert("Conngratulations You proceeded :)");
  },
};
const secondoryAction1 = {
  icon: <ExternalLink size={18} />,
  label: "Click me",
  onClick: () => {
    alert("Conngratulations You proceeded :)");
  },
};
const Template = ({ ...rest }) => {
  return (
    <Alert
      description={rest.description}
      icon={rest.icon}
      color={rest.color}
      emphasis={rest.emphasis}
      title={rest.title}
      primaryAction={primaryAction1}
      secondaryAction={secondoryAction1}
      onDismiss={() => { alert('ttttttt'); }}
    />
  );
};

export const Primary = Template.bind({});

// Alert without action
export const Alert_without_action: any = Template.bind({});
Alert_without_action.decorators = [
  () => {
    return (
      <VerticalFlex gap={10}>
        <Alert
          description={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
          icon={<ExternalLink />}
          color={"Negative"}
          emphasis={"Subtile"}
          title={"Lorem ipsum is placeholder"}
        />
      </VerticalFlex>
    );
  },
];

// Alert with multiple color
export const Alert_with_multiple_color: any = Template.bind({});
Alert_with_multiple_color.decorators = [
  () => {
    return (
      <VerticalFlex gap={10}>
        {color.map((color: any) => (
          <Alert
            description={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
            icon={<ExternalLink size={18} />}
            color={color}
            emphasis={"Subtile"}
            title={"Lorem ipsum is placeholder"}
            primaryAction={primaryAction1}
            secondaryAction={secondoryAction1}
          />
        ))}
      </VerticalFlex>
    );
  },
];

// Alert with multiple color and Intense
export const Alert_with_multiple_color_and_Intense: any = Template.bind({});
Alert_with_multiple_color_and_Intense.decorators = [
  () => {
    return (
      <VerticalFlex gap={10}>
        {color.map((color: any) => (
          <Alert
            description={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
            icon={<ExternalLink size={18} />}
            color={color}
            emphasis={"Intense"}
            title={"Lorem ipsum is placeholder"}
            primaryAction={primaryAction1}
            secondaryAction={secondoryAction1}
          />
        ))}
      </VerticalFlex>
    );
  },
];