import React, { useState } from "react";
import { Search } from "../../../../storybook/Foundation/Icons/Icons";
import { TextField, Card, FlexLayout, Select, Badge } from "../../..";
import Button from "../../../Button/Button";
import FormElement from "../../FormElement/FormElement";
import * as Icon from "../../../../storybook/Foundation/Icons/Icons";
import TextFieldDoc from "../Document/TextFieldDoc";
const allIcons: any = { ...Icon };

export default {
  title: "Components/Form/TextField",
  component: TextField,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=895-60597&t=4D7MxfpNKQKbShCl-0",
    },
  },
  argTypes: {
    value: {
      description: "The input content value",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    placeholder: {
      description: "Set placeholder for the textfield",
      control: {
        type: "text",
      },
      defaultValue: "placeholder",
    },
    label: {
      description: "Set label for the textfiled",
      control: {
        type: "text",
      },
      defaultValue: "Label",
    },
    type: {
      description: "Set type as per need",
      control: {
        type: "radio",
        options: ["text", "number", "password", "tel", "url", "email"],
      },
      defaultValue: "text",
    },
    helpText: {
      description: "Set Helptext for  TextField",
      control: {
        type: "text",
      },
      defaultValue: "Help Text of Textfield",
    },
    id: {
      description: "Set any custom ID for TextField",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    controlStates: {
      description: "Set status as per need",
      control: {
        type: "radio",
        options: ["success", "warning", "error", "default"],
      },
      defaultValue: "default",
    },
    prefix: {
      description: "You can Use any Icon or ReactNode as Prefix",
      control: {
        type: "text",
      },
      defaultValue: <Search size={20} />,
    },
    suffix: {
      description: "You can Use any Icon or ReactNode as Suffix",
      control: {
        type: "text",
      },
      defaultValue: "cm",
    },
    isClearable: {
      description: "Set clear button as per your need",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    onFocus: {
      description: "callback when input is focused",
      control: {
        disable: true,
      },
    },
    onEnter: {
      description:
        "The callback function that is triggered when Enter key is pressed",
      control: {
        disable: true,
      },
    },
    onClear: {
      description: "callback when user click cross icon",
      control: {
        disable: true,
      },
    },
    onBackspace: {
      description: "callback when user press BackSpace key",
      control: {
        disable: true,
      },
    },
    onKeyUp: {
      description: "callback when any keyup",
      control: {
        disable: true,
      },
    },
    onBlur: {
      description: "callback on blur",
      control: {
        disable: true,
      },
    },
    onChange: {
      description: "Callback when user input",
      control: {
        disable: true,
      },
    },
    connectLeft: {
      description: "You can Use any Icon or ReactNode in this",
      control: {
        disable: true,
      },
    },
    connectRight: {
      description: "You can Use any Icon or ReactNode in this",
      control: {
        disable: true,
      },
    },
    maxlength: {
      description: "set the maxlength of textfield",
      control: {
        type: "text",
      },
      defaultValue: "200",
    },
    min: {
      description: "set the minimum value textfiled",
      control: {
        type: "text",
      },
      defaultValue: "20",
    },
    max: {
      description: "set the maxmimum value textfiled",
      control: {
        type: "text",
      },
      defaultValue: "200",
    },
    step: {
      description:
        "The step attribute can be used together with the max and min attributes to create a range of legal values.",
      control: {
        type: "text",
      },
      defaultValue: "1",
    },
    helpIcon: {
      description: "set icon beside help text",
      control: {
        type: "select",
        options: Object.keys(allIcons),
      },
      defaultValue: "Search",
    },
    isRequired: {
      description: "Set Required ",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    IsReadOnly: {
      description: "By using this you can set textfiled only readable",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    autocomplete: {
      description:
        "Set autocomplete On or Off. new-password is only applicable with type password",
      control: {
        type: "radio",
        options: ["off", "on", "new-password"],
      },
      defaultValue: "off",
    },
    isLoading: {
      description: "Set Loading as per your need",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    isDisabled: {
      description: "You can Enable or Disable textfields",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    hasStrength: {
      description: "It shows the hasStrength of your password",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    autoFocus: {
      description: "Set which input need to focus byDefault",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    tabIndex: {
      description: "Set tabIndex for the input",
      control: {
        type: "text",
      },
      defaultValue: "0",
    },
    customClass: {
      description: "Add a custom Class for custom requirements",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    hasSpellCheck: {
      description: "Indicates whether value should have spelling checked.",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    ariaOwns: {
      description: "It Indicates the id of a component owned by the input.",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    ariaExpanded: {
      description: "Indicates whether or not a Popup is displayed.",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    accessbilityLabel: {
      description: "Set accessbility label for Component",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    ariaControls: {
      description:
        "It Indicates the id of a component controlled by the input.",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    ariaActiveDescendant: {
      control: {
        desription:
          "Indicates the id of a related component visually focused element to the input.",
        type: "text",
      },
      defaultValue: "",
    },
    role: {
      description: "Defines a specific role attribute for the input.",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
  },
};
const Template = ({ ...rest }) => {
  const [tt, setTT] = useState<any>();
  function hello() {
    alert("Enter pressed");
    setTT(<Badge children={tt} />);
  }
  function clearField() {
    setTT("");
  }

  return (
    <Card>
      <FormElement>
        <TextField
          {...rest}
          customClass={rest.customClass}
          id={rest.id}
          autoFocus={rest.autoFocus}
          label={rest.label}
          maxlength={rest.maxlength}
          isClearable={rest.isClearable}
          onClear={() => {
            clearField();
          }}
          type={rest.type}
          autocomplete={rest.autocomplete}
          placeHolder={rest.placeHolder}
          isDisabled={rest.isDisabled}
          isLoading={rest.isLoading}
          max={rest.max}
          min={rest.min}
          step={rest.step}
          IsReadOnly={rest.IsReadOnly}
          value={tt || rest.value}
          onEnter={() => {
            hello();
          }}
          onKeyUp={() => {}}
          onBlur={() => {}}
          onChange={setTT}
          onBackspace={() => alert("hello backspace")}
          tabIndex={rest.tabIndex}
          isRequired={rest.isRequired}
          helpText={rest.helpText}
          controlStates={rest.controlStates}
          prefix={rest.prefix}
          suffix={rest.suffix}
          helpIcon={allIcons[rest.helpIcon]({
            size: 20,
            color: `${
              rest.controlStates == "error"
                ? "#C4281C"
                : rest.controlStates === "success"
                ? "var(--inte-GR300)"
                : rest.controlStates === "warning"
                ? "var(--inte-Y300)"
                : "#616771"
            }`,
          })}
        />
      </FormElement>
    </Card>
  );
};

export const Primary = Template.bind({});

// Types
const type = ["text", "number", "password", "tel", "url", "email"];
export const Types: any = Template.bind({});
Types.decorators = [
  () => {
    const [value, setvalue] = useState<any>([]);
    const handleChange = (e: string, index: any) => {
      const temp = [...value];
      temp[index] = e;
      setvalue(temp);
    };
    return (
      <Card>
        <FlexLayout
          desktopWidth="50"
          tabWidth="50"
          mobileWidth="100"
          spacing="extraLoose"
          wrap="wrap"
        >
          {type.map((type: any, index: any) => {
            return (
              <TextField
                type={type}
                isClearable
                label={
                  type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()
                }
                value={value[index]}
                onChange={(e) => handleChange(e, index)}
                autocomplete="on"
                placeHolder={`Enter ${type}`}
              />
            );
          })}
        </FlexLayout>
      </Card>
    );
  },
];
// password
export const hasStrengthPassword: any = Template.bind({});

hasStrengthPassword.decorators = [
  () => {
    const [value, setValue] = useState("");

    return (
      <Card>
        <TextField
          label="Password"
          type="password"
          onChange={(e) => setValue(e)}
          value={value}
          hasStrength={true}
          connectRight={
            <Button
              type="dangerOutlined"
              size="large"
              onClick={() => {
                setValue("");
              }}
            >
              Clear
            </Button>
          }
        />
      </Card>
    );
  },
];
// Label
export const Label: any = Template.bind({});
Label.decorators = [
  () => {
    const [value, setValue] = useState("");

    return (
      <Card>
        <TextField
          label="Label"
          type="text"
          onChange={(e) => setValue(e)}
          value={value}
        />
      </Card>
    );
  },
];
// Place Holder
export const placeholder: any = Template.bind({});
placeholder.decorators = [
  () => {
    const [value, setValue] = useState("");
    return (
      <Card>
        <TextField
          type="text"
          placeHolder="Enter here"
          onChange={(e) => setValue(e)}
          value={value}
        />
      </Card>
    );
  },
];
// Show Help
export const helpText: any = Template.bind({});
helpText.decorators = [
  () => {
    const [value, setValue] = useState("");
    return (
      <Card>
        <TextField
          type="text"
          label="Label"
          placeHolder="Enter here"
          helpText="Show Help"
          onChange={(e) => setValue(e)}
          value={value}
        />
      </Card>
    );
  },
];
// Show Help
export const helpTextIcon: any = Template.bind({});
helpTextIcon.decorators = [
  () => {
    const [value, setValue] = useState("");
    return (
      <Card>
        <TextField
          type="text"
          label="Label"
          placeHolder="Enter here"
          helpText="Show Help"
          onChange={(e) => setValue(e)}
          value={value}
          helpIcon={<Search size={20} />}
        />
      </Card>
    );
  },
];
// Prefix
export const Prefix: any = Template.bind({});
Prefix.decorators = [
  () => {
    const [value, setValue] = useState("");
    return (
      <Card>
        <FormElement>
          <TextField
            type="text"
            label="Label"
            placeHolder="Prefix with Icon"
            onChange={(e) => setValue(e)}
            value={value}
            prefix={<Search size={20} />}
          />
          <TextField
            type="text"
            label="Label"
            placeHolder="Prefix with Text"
            onChange={(e) => setValue(e)}
            value={value}
            prefix={"Weight"}
          />
        </FormElement>
      </Card>
    );
  },
];

//Suffix
export const Suffix: any = Template.bind({});
Suffix.decorators = [
  () => {
    const [value, setValue] = useState("");
    const [value1, setValue1] = useState("");
    return (
      <Card>
        <FormElement>
          <TextField
            type="text"
            label="Label"
            placeHolder="Suffix With icon"
            onChange={(e) => setValue(e)}
            value={value}
            suffix={<Search size={20} />}
          />
          <TextField
            type="text"
            label="Label"
            placeHolder="Suffix with Text"
            onChange={(e) => setValue1(e)}
            value={value1}
            suffix={"Cm"}
          />
        </FormElement>
      </Card>
    );
  },
];

//Connected
export const ConnectedField: any = Template.bind({});
ConnectedField.decorators = [
  () => {
    const [value, setValue] = useState("");
    const [value1, setValue1] = useState("Kg");
    function onSelectChange(val: any) {
      setValue1(val);
    }
    const [value2, setValue2] = useState("Kg");
    function onSelectChange2(val: any) {
      setValue2(val);
    }
    const options = [
      {
        value: "Kg",
        label: "Kg",
      },
      {
        value: "Gram",
        label: "Gram",
      },
      {
        value: "Mg",
        label: "Mg",
      },
    ];
    return (
      <Card>
        <FormElement>
          <TextField
            min={1}
            type="number"
            label="Connect Left"
            placeHolder="Enter text"
            onChange={(e) => setValue(e)}
            value={value}
            helpText={"Helper text"}
            connectLeft={
              <Select
                onChange={(e) => {
                  onSelectChange(e);
                }}
                placeHolder="Kg"
                value={value1}
                options={options}
              />
            }
          />
          <TextField
            type="text"
            label="Connect Right"
            placeHolder="Enter text"
            onChange={(e) => setValue(e)}
            value={value}
            helpText={"Helper text"}
            connectRight={
              <Button content="Submit" type="outlined" size="large"></Button>
            }
          />
          <TextField
            type="text"
            label="Connected Both"
            placeHolder="Enter text"
            onChange={(e) => setValue(e)}
            value={value}
            helpText={"Helper text"}
            connectLeft={
              <Select
                onChange={(e) => {
                  onSelectChange2(e);
                }}
                placeHolder="Kg"
                value={value2}
                options={options}
              />
            }
            connectRight={
              <Button content="Submit" type="outlined" size="large"></Button>
            }
          />
        </FormElement>
      </Card>
    );
  },
];

// loading
export const Loading_Textfield: any = Template.bind({});
Loading_Textfield.decorators = [
  () => {
    const [value, setValue] = useState("");
    return (
      <Card>
        <TextField
          type="text"
          label="Label"
          placeHolder="Enter here"
          onChange={(e) => setValue(e)}
          value={value}
          isLoading={true}
        />
      </Card>
    );
  },
];

//clearButton
export const ClearButton: any = Template.bind({});
ClearButton.decorators = [
  () => {
    const [value, setValue] = useState("");
    return (
      <Card>
        <TextField
          type="text"
          label="Label"
          placeHolder="Enter here"
          onChange={(e) => setValue(e)}
          value={value}
          isClearable={true}
          onClear={() => setValue("")}
        />
      </Card>
    );
  },
];

//Control States
export const Control_States: any = Template.bind({});
Control_States.decorators = [
  () => {
    const controlStates = ["default", "warning", "success", "error"];
    const [value, setValue] = useState("");
    return (
      <Card>
        <FormElement>
          {controlStates.map((data: any, index: any) => {
            return (
              <TextField
                type="text"
                label={data}
                helpText="Help Text"
                placeHolder="Enter here"
                onChange={(e) => setValue(e)}
                value={value}
                controlStates={data}
              />
            );
          })}
        </FormElement>
      </Card>
    );
  },
];
export function Documentation() {
  return <TextFieldDoc />;
}
