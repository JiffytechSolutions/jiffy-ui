import React, { useCallback, useState } from "react";
import { Card } from "../../..";
import CheckboxGroup from "./CheckboxGroup";
import * as Icon from "../../../../storybook/Foundation/Icons/Icons";
import CheckboxGroupDoc from "./Document/CheckboxGroupDoc";
const allIcons: any = { ...Icon };

export default {
  title: "Components/Form/CheckboxGroup",
  component: CheckboxGroup,
  parameters: {
    docs: {
      description: {
        component:
          "<blockquote>Checkbox is used to select or deselect action items.</blockquote>",
      },
    },
    design : {
      type : 'figma',
      url : "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-ver3.0.2-(Production)?type=design&node-id=6921-280316&mode=design&t=JpmkWVh9faGpjD3H-0"
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
        "Make the full item clickable (default only lable of checkbox is clickable)",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    options: {
      name: "options",
      control: {
        disable: true,
      },
      description:
        '<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>label</code></td><td><code>string | React.ReactNode</code></td><td>The label for the option.</td></tr><tr><td><code>description</code></td><td><code>string | React.ReactNode</code></td><td>An optional description for the option.</td></tr><tr><td><code>value<span style="color: red;">*</span></code></td><td><code>any</code></td><td>The value of the option.</td></tr><tr><td><code>isDisabled</code></td><td><code>boolean</code></td><td>To disable the option.</td></tr><tr><td><code>customClass</code></td><td><code>string</code></td><td>Style the particular option.</td></tr></tbody></table>',
    },
    direction: {
      description: "Direction of Radio Buttons",
      control: {
        type: "radio",
        options: ["horizontal", "vertical"],
      },
      defaultValue: "vertical",
    },
    controlStates: {
      description: "Change the status (color) of helpText section",
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
      description: "show help text in bottom of checkboxGroup",
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
  const [grpVal, setGrpVal] = useState<any[]>([]);

  const handleCheckboxGroupChange = useCallback((val: any[]) => {
    setGrpVal([...val]);
  }, []);

  const options = [
    {
      label: "Checkbox1",
      description: "This is Checkbox 1",
      value: "Checkbox1",
    },
    {
      label: "Checkbox2",
      description: "This is Checkbox 2",
      value: "Checkbox2",
    },
    {
      label: "Checkbox3",
      description: "This is Checkbox 3",
      value: "Checkbox3",
    },
  ];

  return (
    <Card>
      <CheckboxGroup
        {...rest}
        title={rest.title}
        direction={rest.direction}
        value={[...grpVal]}
        name="name"
        options={options}
        onChange={handleCheckboxGroupChange}
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

export const CheckboxGroupWithTitle: any = Template.bind({});
CheckboxGroupWithTitle.decorators = [
  () => {
    const [grpVal, setGrpVal] = useState<any[]>(["Checkbox2"]);
    const handleCheckboxGroupChange = useCallback((val: any[]) => {
      setGrpVal([...val]);
    }, []);
    const options = [
      {
        label: "Checkbox1",
        description: "This is Checkbox 1",
        value: "Checkbox1",
      },
      {
        label: "Checkbox2",
        description: "This is Checkbox 2",
        value: "Checkbox2",
      },
      {
        label: "Checkbox3",
        description: "This is Checkbox 3",
        value: "Checkbox3",
      },
    ];
    return (
      <Card>
        <CheckboxGroup
          title={"Title of Radio Group"}
          value={grpVal}
          options={options}
          onChange={handleCheckboxGroupChange}
        />
      </Card>
    );
  },
];

export const CheckboxGroupWithDefaultSelect: any = Template.bind({});
CheckboxGroupWithDefaultSelect.decorators = [
  () => {
    const [grpVal, setGrpVal] = useState<any[]>(["Checkbox2"]);
    const handleCheckboxGroupChange = useCallback((val: any[]) => {
      setGrpVal([...val]);
    }, []);
    const options = [
      {
        label: "Checkbox1",
        description: "This is Checkbox 1",
        value: "Checkbox1",
      },
      {
        label: "Checkbox2",
        description: "This is Checkbox 2",
        value: "Checkbox2",
      },
      {
        label: "Checkbox3",
        description: "This is Checkbox 3",
        value: "Checkbox3",
        isDisabled: true,
      },
    ];
    return (
      <Card>
        <CheckboxGroup
          value={grpVal}
          onChange={handleCheckboxGroupChange}
          options={options}
        />
      </Card>
    );
  },
];

export const CheckboxGroupWithError: any = Template.bind({});
CheckboxGroupWithError.decorators = [
  () => {
    const [grpVal, setGrpVal] = useState<any[]>(["Checkbox2"]);
    const handleCheckboxGroupChange = useCallback((val: any[]) => {
      setGrpVal([...val]);
    }, []);
    const options = [
      {
        label: "Checkbox1",
        description: "This is Checkbox 1",
        value: "Checkbox1",
      },
      {
        label: "Checkbox2",
        description: "This is Checkbox 2",
        value: "Checkbox2",
      },
      {
        label: "Checkbox3",
        description: "This is Checkbox 3",
        value: "Checkbox3",
      },
    ];
    return (
      <Card>
        <CheckboxGroup
          value={grpVal}
          onChange={handleCheckboxGroupChange}
          helpText={"This a Error Message"}
          controlStates="error"
          options={options}
        />
      </Card>
    );
  },
];

export function Documentation() {
  return <CheckboxGroupDoc />;
}
