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
      description: "Set Helptext for TextField",
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

    maxlength: {
      description: "set the maxlength of textfield",
      control: {
        type: "number",
      },
      defaultValue: 20,
    },
    customClass: {
      description: "Add extra class using customClass prop",
      control: {
        type: "text",
      },
    },
    IsReadOnly: {
      description: "By using this you can set textfiled only readable",
      control: {
        type: "text",
      },
    },
    isSearchable: {
      description: "This prop is true then you can search the item",
      control: {
        type: "boolean",
      },
      defaultValue: false,
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
        isSearchable={rest.isSearchable}
        value={value1}
        countryValue={value2}
        onChange={(e: any) => setValue1(e)}
        onCountryChange={(e: any) => setValue2(e)}
        isDisabled={rest.isDisabled}
        controlStates={rest.controlStates}
        placeholder={rest.placeholder}
        label={rest.label}
        customClass={rest.customClass}
        isRequired={rest.isRequired}
        IsReadOnly={rest.IsReadOnly}
        maxlength={rest.maxlength}
        helpText={rest.helpText}
        helpIcon={allIcons[rest.helpIcon]({
          size: 18,
          color: "#000",
        })}
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

// Input Phone Number  Types
export const Input_Phone_Number_Types: any = Template.bind({});
Input_Phone_Number_Types.decorators = [
  () => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");
    return (
      <Card title="Input Phone Number Types">
        <FlexLayout direction="vertical" spacing="extraLoose">
          <InputPhone
            label="Type number"
            type="number"
            countryOptions={countryCodeData}
            value={value1}
            countryValue={value2}
            isSearchable
            onChange={(e: any) => setValue1(e)}
            onCountryChange={(e: any) => setValue2(e)}
            placeholder="Enter phone number"
            onClear={() => setValue1("")}
          />
          <InputPhone
            label="Type text"
            type="text"
            countryOptions={countryCodeData}
            value={value3}
            countryValue={value4}
            isSearchable
            onChange={(e: any) => setValue3(e)}
            onCountryChange={(e: any) => setValue4(e)}
            placeholder="Enter phone number"
            onClear={() => setValue3("")}
          />
        </FlexLayout>
      </Card>
    );
  },
];

// Input Phone Number  controlStates
export const Input_Phone_Number_controlStates: any = Template.bind({});
Input_Phone_Number_controlStates.decorators = [
  () => {
    const types = ["none", "success", "warning", "error"];
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

    return (
      <Card title="Input Phone Number Types">
        <FlexLayout direction="vertical" spacing="extraLoose">
          {types.map((item: string | any) => {
            return (
              <InputPhone
                label={item}
                controlStates={item}
                countryOptions={countryCodeData}
                value={value1}
                countryValue={value2}
                isSearchable
                onChange={(e: any) => setValue1(e)}
                onCountryChange={(e: any) => setValue2(e)}
                placeholder="Enter phone number"
                onClear={() => setValue1("")}
                isClearable={value1 === "" ? false : true}
              />
            );
          })}
        </FlexLayout>
      </Card>
    );
  },
];

// Input Phone Number with placeholder
export const Input_Phone_Number_placeHolder: any = Template.bind({});
Input_Phone_Number_placeHolder.decorators = [
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

// Input Phone Number with Search_CountryCode
export const Input_Phone_Number_with_Searchable: any = Template.bind({});
Input_Phone_Number_with_Searchable.decorators = [
  () => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

    return (
      <Card title="You can search country code">
        <InputPhone
          countryOptions={countryCodeData}
          value={value1}
          countryValue={value2}
          isSearchable
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

// Input Phone Number with Label
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
// help text with icon
export const Input_Phone_Number_heleText_with_helpIcon: any = Template.bind({});
Input_Phone_Number_heleText_with_helpIcon.decorators = [
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
          helpText="Help Text"
          helpIcon={<Icon.Search size={20} />}
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
