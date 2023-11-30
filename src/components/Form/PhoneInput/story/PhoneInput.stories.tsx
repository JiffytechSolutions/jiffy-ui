import React from "react";
import PhoneInput from "../PhoneInput";
import { Card } from "../../../Card";
import * as Icon from "../../../../storybook/Foundation/Icons/Icons";
const allIcons: any = { ...Icon };

export default {
  title: "Components/Form/PhoneInput",
  component: PhoneInput,
  argTypes: {
    label: {
      description: "Add label",
      control: {
        type: "text",
      },
      defaultValue: "Label",
    },
    isRequired: {
      description: "Set true in this if this component is required",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    onChange: {
      description: "callback function on input value change",
      control: {
        disable: true,
      },
    },
    isDisabled: {
      description:
        "You can disable this component by setting true in this prop",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    isSearchable: {
      description:
        "Search countries based on this prop , if this prop is set to true",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    placeholder: {
      description: "Add placeholder",
      control: {
        type: "text",
      },
      defaultValue: "type your number",
    },
    helpIcon: {
      description: "set icon beside help text",
      control: {
        type: "select",
        options: Object.keys(allIcons),
      },
      defaultValue: "Search",
    },
    helpText: {
      description: "Set help text",
      control: {
        type: "text",
      },
      defaultValue: "Write help text here",
    },
    id: {
      description: "Add custom id",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    controlStates: {
      description:
        "Control states from below mentioned options as per requirement like success , error",
      control: {
        type: "radio",
        options: ["success", "warning", "error", "none"],
      },
    },
    customClass: {
      description: "Set custom class",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <Card cardType="borderLess">
      <PhoneInput
        {...rest}
        helpIcon={<Icon.Search size={16} />}
        onChange={(i, j) => console.log(i, j)}
      />
    </Card>
  );
};

export const Primary = Template.bind({});
// Disabled
export const Disabled: any = Template.bind({});
Disabled.decorators = [
  () => (
    <Card cardType="borderLess" title="Disabled">
      <PhoneInput placeholder="type your number" isDisabled />
    </Card>
  ),
];
// Searchable
export const Searchable: any = Template.bind({});
Searchable.decorators = [
  () => (
    <Card cardType="borderLess" title="Searchable">
      <PhoneInput
        placeholder="Enter country code"
        isSearchable
        onChange={(e: any) => console.log(e)}
      />
    </Card>
  ),
];
