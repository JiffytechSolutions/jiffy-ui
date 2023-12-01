import React, { useState } from "react";
import { Card } from "../../../Card";
import * as Icon from "../../../../storybook/Foundation/Icons/Icons";
import InputPhone from "../InputPhone";
import { data } from "./Data";
const allIcons: any = { ...Icon };

export default {
  title: "Components/Form/InputPhone",
  component: InputPhone,
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
  const holdData = [
    {
      label: "+91",
      value: "+91",
    },
  ];
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("+91");

  data.map((item) => {
    holdData.push({
      label: item.code,
      value: item.code,
    });
  });

  return (
    <Card title="Input Phone Number">
      <InputPhone
        countryOptions={holdData}
        value={value1}
        countryValue={value2}
        onChange={(e: any) => setValue1(e)}
        onCountryChange={(e: any) => setValue2(e)}
      />
    </Card>
  );
};

export const Primary = Template.bind({});
