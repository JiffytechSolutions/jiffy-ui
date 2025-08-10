import { useState } from "react";
import TextField from "../TextField";
import { Search } from "react-feather";
import React from "react";

export default {
  title: "Components/Input/TextField",
  component: TextField,
  argTypes: {
    value: {
      description: "The input content value",
      control: {
        type: "text",
      },
    },
    placeholder: {
      description: "Set placeholder for the textfield",
      control: {
        type: "text",
      },
    },
    label: {
      description: "Set label for the textfiled",
      control: {
        type: "text",
      },
    },
    type: {
      description: "Set type as per need",
      control: {
        type: "radio",
        options: ["text", "number", "password", "tel", "url", "email"],
      },
    },
    helpText: {
      description: "Set Helptext for  TextField",
      control: {
        type: "text",
      },
    },
    variant: {
      description: "Set status as per need",
      control: {
        type: "radio",
        options: ["success", "warning", "error", "default"],
      },
    },
    prefix: {
      description: "You can Use any Icon or ReactNode as Prefix",
      control: {
        type: "text",
      },
    },
    suffix: {
      description: "You can Use any Icon or ReactNode as Suffix",
      control: {
        type: "text",
      },
    },
    isClearable: {
      description: "Set clear button as per your need",
      control: {
        type: "boolean",
      },
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
    maxlength: {
      description: "set the maxlength of textfield",
      control: {
        type: "text",
      },
    },
    min: {
      description: "set the minimum value textfiled",
      control: {
        type: "text",
      },
    },
    max: {
      description: "set the maxmimum value textfiled",
      control: {
        type: "text",
      },
    },
    step: {
      description:
        "The step attribute can be used together with the max and min attributes to create a range of legal values.",
      control: {
        type: "text",
      },
    },
    helpIcon: {
      description: "set icon beside help text",
      control: {
        type: "select",
        disable: true,
      },
    },
    isRequired: {
      description: "Set Required ",
      control: {
        type: "boolean",
      },
    },
    isDisabled: {
      description: "You can Enable or Disable textfields",
      control: {
        type: "boolean",
      },
    },
    hasStrength: {
      description: "It shows the hasStrength of your password",
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    maxlength: "200",
    min: "20",
    max: "200",
    step: "1",
    helpIcon: "Search",
    placeholder: "placeholder",
    value: "",
    label: "Label",
    type: "text",
    helpText: "Help Text of Textfield",
    variant: "default",
    prefix: <Search size={20} />,
    suffix: "cm",
    isClearable: false,
    isRequired: false,
    isDisabled: false,
    size: "Large",
  },
};
const Template = ({ ...rest }) => {
  const [val, setVal] = useState<any>();
  function clearField() {
    setVal("");
  }

  return (
    <TextField
      autoFocus={rest.autoFocus}
      label={rest.label}
      maxlength={rest.maxlength}
      isClearable={rest.isClearable}
      onClear={() => {
        clearField();
      }}
      size={rest.size}
      type={rest.type}
      placeholder={rest.placeholder}
      isDisabled={rest.isDisabled}
      max={rest.max}
      min={rest.min}
      step={rest.step}
      value={val || rest.value}
      onKeyUp={() => { }}
      onBlur={() => { }}
      onChange={(e) => {
        setVal(e);
        console.log("change");
      }}
      isRequired={rest.isRequired}
      helpText={rest.helpText}
      variant={rest.variant}
      prefix={rest.prefix}
      suffix={rest.suffix}
      helpIcon={<Search size={16} />}
    />
  );
};

export const Primary = Template.bind({});

export const Prefix: any = Template.bind({});
Prefix.decorators = [
  () => {
    const [value, setValue] = useState("");
    return (
      <TextField
        type="text"
        label="Label"
        placeholder="Prefix with Text"
        onChange={(e) => setValue(e)}
        value={value}
       prefix={"Weight"}
      />
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
      <>
        <TextField
          type="text"
          label="Label"
          placeholder="Suffix With icon"
          onChange={(e) => setValue(e)}
          value={value}
          suffix={<Search size={20} />}
        />
        <TextField
          type="text"
          label="Label"
          placeholder="Suffix with Text"
          onChange={(e) => setValue1(e)}
          value={value1}
          suffix={"Cm"}
        />
      </>
    );
  },
];
