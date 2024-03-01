import React, { useCallback, useState } from "react";
import RadioGroup from "./RadioGroup";
import * as Icon from "../../../../storybook/Foundation/Icons/Icons";
import { Card } from "../../../Card";
import Radio from "../../Radio/Radio";
import RadioGroupDoc from "./Document/RadioGroupDoc";
const allIcons: any = { ...Icon };

export default {
  title: "Components/Form/RadioGroup",
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component:
          "<blockquote>A choice list is an interactive component that allows users to select one or more options from a list of predefined choices.</blockquote>",
      },
    },
    design : {
      type : "figma",
      design : "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-ver3.0.2-(Production)?type=design&node-id=5974-259599&mode=design&t=JpmkWVh9faGpjD3H-0"
    }
  },
  argTypes: {
    name: {
      description: "Name of component (Attribute)",
      control: {
        type: "text",
      },
      defaultValue: "Label",
    },
    isClickableFullItem: {
      description:
        "Make the full item clickable (default only lable of radio is clickable)",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    direction: {
      description: "Direction of Radio Buttons",
      control: {
        type: "radio",
        options: ["horizontal", "vertical"],
      },
      defaultValue: "vertical",
    },
    options: {
      name: "options",
      control: {
        disable: true,
      },
      description:
        '<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>label</code></td><td><code>string | React.ReactNode</code></td><td>The label for the option.</td></tr><tr><td><code>description</code></td><td><code>string | React.ReactNode</code></td><td>An optional description for the option.</td></tr><tr><td><code>value<span style="color: red;">*</span></code></td><td><code>any</code></td><td>The value of the option.</td></tr><tr><td><code>isDisabled</code></td><td><code>boolean</code></td><td>To disable the option.</td></tr><tr><td><code>customClass</code></td><td><code>string</code></td><td>Style the particular option.</td></tr></tbody></table>',
    },
    controlStates: {
      description: "Change the status (color) of showHelp section",
      control: {
        type: "radio",
        options: ["success", "warning", "error", "none"],
      },
      defaultValue: "none",
    },
    title: {
      description: "Title of component",
      control: {
        type: "text",
      },
      defaultValue: "Title",
    },
    value: {
      description: "Value of Radio Group",
      control: {
        type: "text",
        disable: true,
      },
      defaultValue: "Radio1",
    },
    required: {
      description: "Set required true or false",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    helpText: {
      description: "show help text below the radio group",
      control: {
        type: "text",
      },
      defaultValue: "Error Message",
    },
    helpIcon: {
      description: "set icon beside help text",
      control: {
        type: "select",
        options: Object.keys(allIcons),
      },
      defaultValue: "Search",
    },
    customClass: {
      description: "Add custom class",
      control: {
        type: "text",
      },
      defaultValue: "custom_class",
    },
  },
};

const Template = ({ ...rest }) => {
  const [grpVal, setGrpVal] = useState<string | number>("");
  const handleRadioGroupChange = useCallback((val: string | number) => {
    setGrpVal(val);
  }, []);
  const options = [
    {
      label: "Radio1",
      description: "This is radio 1",
      value: "Radio1",
    },
    {
      label: "Radio2",
      description: "This is radio 2",
      value: "Radio2",
    },
    {
      label: "Radio3",
      description: "This is radio 3",
      value: "Radio3",
    },
  ];
  return (
    <Card>
      <RadioGroup
        {...rest}
        title={rest.title}
        direction={rest.direction}
        value={grpVal}
        name="name"
        options={options}
        onChange={handleRadioGroupChange}
        required={rest.required}
        helpText={rest.helpText}
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
    </Card>
  );
};

export const Primary = Template.bind({});

export const RadioGroupWithTitle: any = ({ ...rest }) => {
  const [grpVal, setGrpVal] = useState<string | number>("Radio2");
  const handleRadioGroupChange = useCallback((val: string | number) => {
    setGrpVal(val);
  }, []);
  const options = [
    {
      label: "Radio1",
      description: "This is radio 1",
      value: "Radio1",
    },
    {
      label: "Radio2",
      description: "This is radio 2",
      value: "Radio2",
    },
    {
      label: "Radio3",
      description: "This is radio 3",
      value: "Radio3",
      isDisabled: true,
    },
  ];
  return (
    <Card>
      <RadioGroup
        title={"Title of Radio Group"}
        value={grpVal}
        onChange={handleRadioGroupChange}
        options={options}
        {...rest}
      />
    </Card>
  );
};

export const RadioWithDefaultSelect: any = Template.bind({});
RadioWithDefaultSelect.decorators = [
  () => {
    const [grpVal, setGrpVal] = useState<string | number>("Radio2");
    const handleRadioGroupChange = useCallback((val: string | number) => {
      setGrpVal(val);
    }, []);
    const options = [
      {
        label: "Radio1",
        description: "This is radio 1",
        value: "Radio1",
      },
      {
        label: "Radio2",
        description: "This is radio 2",
        value: "Radio2",
      },
      {
        label: "Radio3",
        description: "This is radio 3",
        value: "Radio3",
      },
    ];
    return (
      <Card>
        <RadioGroup
          value={grpVal}
          onChange={handleRadioGroupChange}
          options={options}
        />
      </Card>
    );
  },
];

export const RadioGroupWithError: any = Template.bind({});
RadioGroupWithError.decorators = [
  () => {
    const [grpVal, setGrpVal] = useState<string | number>("Radio2");
    const handleRadioGroupChange = useCallback((val: string | number) => {
      setGrpVal(val);
    }, []);
    const options = [
      {
        label: "Radio1",
        description: "This is radio 1",
        value: "Radio1",
      },
      {
        label: "Radio2",
        description: "This is radio 2",
        value: "Radio2",
      },
      {
        label: "Radio3",
        description: "This is radio 3",
        value: "Radio3",
      },
    ];
    return (
      <Card>
        <RadioGroup
          value={grpVal}
          onChange={handleRadioGroupChange}
          helpText={"This a Error Message"}
          controlStates="error"
          options={options}
        />
      </Card>
    );
  },
];

export function Documentation() {
  return <RadioGroupDoc />;
}
