import React, { useState } from "react";
import { Card } from "../../../Card";
import * as Icon from "../../../../storybook/Foundation/Icons/Icons";
import InputPhone from "../InputPhone";
import { data } from "./Data";
import TextField from "../../TextField/TextField";
import { FlexLayout } from "../../../FlexLayout";
const allIcons: any = { ...Icon };

export default {
  title: "Components/Form/InputPhone",
  component: InputPhone,
  argTypes: {
    label: {
      description: "Enter label",
      control: {
        type: "text",
      },
    },
    value: {
      description: "This is a value of textfield",
      control: {
        type: false,
      },
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
      description: "You can Enable or Disable textfields",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },

    placeholder: {
      description: "Enter placeholder",
      control: {
        type: "text",
      },
      defaultValue: "Enter phone number",
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

    controlStates: {
      description:
        "Control states from below mentioned options as per requirement like success , error",
      control: {
        type: "radio",
        options: ["success", "warning", "error", "none"],
      },
      defaultValue: "none",
    },
    countryOptions: {
      description: `<div><strong>countryOptions is an array of object-</strong></div><table bgcolor="#f5f5f5"><thead><tr><th>key</th><th>value</th></tr></thead><tbody><tr><td>label <span style="color:red">*</span></td><td>label(String)</td></tr><tr><td>value <span style="color:red">*</span></td><td>value(String | Number)</td></tr><tr><td>isDisabled</td><td>isDisabled(Boolean)</td></tr></tbody></table><br/>`,
      control: {
        type: false,
      },
      defaultValue: "",
    },
    countryValue: {
      description: "countryValue is a select value",
      control: {
        type: false,
      },
    },
    type: {
      description: "You can change text field type",
      control: {
        type: "radio",
        options: ["text", "number"],
      },
      defaultValue: "number",
    },
    isClearable: {
      description: "This prop is working when onClear function call",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    min: {
      description: "set the minimum value textfiled",
      control: {
        type: "number",
      },
      defaultValue: 10,
    },
    max: {
      description: "set the maxmimum value textfiled",
      control: {
        type: "number",
      },
      defaultValue: 12,
    },
    maxlength: {
      description: "set the maxlength of textfield",
      control: {
        type: "number",
      },
      defaultValue: 20,
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
  const [value2, setValue2] = useState("");

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
        isDisabled={rest.isDisabled}
        controlStates={rest.controlStates}
        placeholder={rest.placeholder}
        label={rest.label}
        min={rest.min}
        max={rest.max}
        maxlength={rest.maxlength}
      />
    </Card>
  );
};

export const Primary = Template.bind({});
const countryCodeData: any = [
  {
    label: "+91",
    value: "+91",
  },
  {
    label: "+92",
    value: "+92",
  },
  {
    label: "+98",
    value: "+98",
  },
  {
    label: "+154",
    value: "+154",
  },
];

// Input Phone Number with placeholder
export const Input_Phone_Number_Placeholder: any = Template.bind({});
Input_Phone_Number_Placeholder.decorators = [
  () => {
    const holdData: any = [
      {
        label: "+91",
        value: "+91",
      },
    ];
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

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
          placeholder="Enter phone number"
        />
      </Card>
    );
  },
];

// Input Phone Number with placeholder
export const Input_Phone_Number_Clear: any = Template.bind({});
Input_Phone_Number_Clear.decorators = [
  () => {
    const countryCodeData: any = [
      {
        label: "+91",
        value: "+91",
      },
      {
        label: "+92",
        value: "+92",
      },
      {
        label: "+98",
        value: "+98",
      },
      {
        label: "+154",
        value: "+154",
      },
    ];
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

    return (
      <Card title="Input phone number with clear button">
        <InputPhone
          countryOptions={countryCodeData}
          value={value1}
          countryValue={value2}
          onChange={(e: any) => setValue1(e)}
          onCountryChange={(e: any) => setValue2(e)}
          placeholder="Enter phone number"
          onClear={() => setValue1("")}
          isClearable={value1 === "" ? false : true}
        />
      </Card>
    );
  },
];

// Input Phone Number with placeholder
export const Input_Phone_Number_Label: any = Template.bind({});
Input_Phone_Number_Label.decorators = [
  () => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

    return (
      <Card title="Input phone number label with require">
        <InputPhone
          label="Input phone number"
          isRequired
          countryOptions={countryCodeData}
          value={value1}
          countryValue={value2}
          onChange={(e: any) => setValue1(e)}
          onCountryChange={(e: any) => setValue2(e)}
          placeholder="Enter phone number"
          onClear={() => setValue1("")}
          isClearable={value1 === "" ? false : true}
        />
      </Card>
    );
  },
];

// Input Phone Number with disable
export const Input_Phone_Number_Disable: any = Template.bind({});
Input_Phone_Number_Disable.decorators = [
  () => {
    return (
      <Card title="Input phone number label with require">
        <InputPhone isDisabled />
      </Card>
    );
  },
];

// Input Phone Number with readOnly
export const Input_Phone_Number_ReadOnly: any = Template.bind({});
Input_Phone_Number_ReadOnly.decorators = [
  () => {
    return (
      <Card title="Input phone number label with require">
        <InputPhone IsReadOnly countryOptions={countryCodeData} />
      </Card>
    );
  },
];
