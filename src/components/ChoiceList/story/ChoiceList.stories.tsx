import React, { useState } from "react";
import Button from "../../Button/Button";
import ChoiceList from "../ChoiceList";
import { Card } from "../../Card";

export default {
  title: "Components/Actions/ChoiceList",
  component: ChoiceList,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=4642-263992&t=vybTUvZSW4IIqAUa-0",
    },
  },
  argTypes: {
    title: {
      name: "title",
      description: "Title of ChoiceList",
      control: {
        type: "text",
      },
      defaultValue: "Title",
    },
    options: {
      name: "options",
      control: {
        disable: true,
      },
      description:
        "<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>label<span style='color: red;'>*</span></code></td><td><code>string | React.ReactNode</code></td><td>The label for the option.</td></tr><tr><td><code>description</code></td><td><code>string | React.ReactNode</code></td><td>An optional description for the option.</td></tr><tr><td><code>value<span style='color: red;'>*</span></code></td><td><code>any</code></td><td>The value of the option.</td></tr></tbody></table>",
    },
    isOpen: {
      name: "isOpen",
      description: "is choiceList open",
      control: {
        disable: true,
      },
    },
    isMulti: {
      name: "isMulti",
      description: "Enable/disable multi select",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    activator: {
      name: "activator",
      description: "Element on which choiceList toggle",
      control: {
        type: "text",
        disable: true,
      },
    },
    isCloseOnEsc: {
      name: "closeOnEsc",
      description: "Close on Escape key press",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    onChange: {
      name: "onChange",
      description:
        "When value change this callBack occur For multi it gives Array  ",
      disable: true,
    },
    customClass: {
      description: "Add custom class",
      control: {
        type: "text",
      },
      defaultValue: "custom_class",
    },
    heading: {
      description: "This heading props is working on mobile device",
      control: {
        disable: true,
      },
    },
    value: {
      description: "Value of Choicelist",
      control: {
        disable: true,
      },
    },
    onClose: {
      description: "Give Function to close the choiceList",
      control: {
        disable: true,
      },
    },
  },
};

const Template = ({ ...rest }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(["Choice 1"]);

  const toggleChoiceList = () => {
    setOpen((prev) => !prev);
  };

  const activator = (
    <Button disclosure type="outlined" onClick={toggleChoiceList}>
      ChoiceList
    </Button>
  );

  const options = [
    {
      label: "Choice 1",
      value: "Choice 1",
      description: "This is a description",
    },
    {
      label: "Choice 2",
      value: "Choice 2",
    },
    {
      label: "Choice 3",
      value: "Choice 3",
    },
    {
      label: "Choice 4",
      value: "Choice 4",
    },
    {
      label: "Choice 5",
      value: "Choice 5",
    },
    {
      label: "Choice 6",
      value: "Choice 6",
    },
    {
      label: "Choice 7",
      value: "Choice 7",
    },
    {
      label: "Choice 8",
      value: "Choice 8",
    },
  ];

  const generateOptions = (length: any) =>
    Array(length)
      .fill(0)
      .map((item, ind) => ({
        label: "Choice" + (ind + 1),
        value: "Choice" + (ind + 1),
      }));

  return (
    <Card>
      <ChoiceList
        {...rest}
        heading="ChoiceList Heading"
        activator={activator}
        value={value}
        isOpen={open}
        options={generateOptions(100)}
        isMulti={rest.isMulti}
        onChange={(val: any) => {
          setValue(val);
        }}
        onClose={() => {
          setOpen(false);
        }}
      />
    </Card>
  );
};

export const Primary: any = Template.bind({});
const onlyOptions = [
  {
    label: "Choice 1",
    value: "Choice 1",
  },
  {
    label: "Choice 2",
    value: "Choice 2",
  },
  {
    label: "Choice 3",
    value: "Choice 3",
  },
  {
    label: "Choice 4",
    value: "Choice 4",
  },
  {
    label: "Choice 5",
    value: "Choice 5",
  },
  {
    label: "Choice 6",
    value: "Choice 6",
  },
  {
    label: "Choice 7",
    value: "Choice  7",
  },
  {
    label: "Choice 8",
    value: "Choice 8",
  },
];
const options = [
  {
    label: "Choice 1",
    value: "Choice 1",
    description: "ChoiceList with description 1",
  },
  {
    label: "Choice 2",
    value: "Choice 2",
  },
  {
    label: "Choice 3",
    value: "Choice 3",
    description: "ChoiceList with description 3",
  },
  {
    label: "Choice 4",
    value: "Choice 4",
    description: "ChoiceList with description 4",
  },
  {
    label: "Choice 5",
    value: "Choice 5",
  },
  {
    label: "Choice 6",
    value: "Choice 6",
  },
  {
    label: "Choice 7",
    value: "Choice  7",
  },
  {
    label: "Choice 8",
    value: "Choice 8",
    description: "ChoiceList with description 8",
  },
];

// ChoiceList  CheckboxList format
export const CheckboxList: any = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(["Choice 1"]);

  return (
    <Card title="ChoiceList CheckboxList format">
      <ChoiceList
        heading="ChoiceList Heading"
        activator={
          <Button
            disclosure
            type="outlined"
            onClick={() => setOpen((prev) => !prev)}
          >
            ChoiceList
          </Button>
        }
        value={value}
        isMulti={true}
        isOpen={open}
        options={onlyOptions}
        onChange={(val: any) => setValue(val)}
        onClose={() => setOpen(false)}
      />
    </Card>
  );
};

// ChoiceList  RadioList format
export const RadioList: any = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(["Choice 1"]);

  return (
    <Card title="ChoiceList RadioList format">
      <ChoiceList
        heading="ChoiceList Heading"
        activator={
          <Button
            disclosure
            type="outlined"
            onClick={() => setOpen((prev) => !prev)}
          >
            ChoiceList
          </Button>
        }
        value={value}
        isOpen={open}
        options={onlyOptions}
        onChange={(val: any) => setValue(val)}
        onClose={() => setOpen(false)}
      />
    </Card>
  );
};

// ChoiceList   With Title
export const ChoiceListWithTitle: any = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(["Choice 1"]);

  return (
    <Card title="ChoiceList With Title">
      <ChoiceList
        title="ChoiceList title"
        heading="ChoiceList Heading"
        activator={
          <Button
            disclosure
            type="outlined"
            onClick={() => setOpen((prev) => !prev)}
          >
            ChoiceList
          </Button>
        }
        value={value}
        isOpen={open}
        isMulti
        options={onlyOptions}
        onChange={(val: any) => setValue(val)}
        onClose={() => setOpen(false)}
      />
    </Card>
  );
};

// ChoiceList   With Title
export const ChoiceListTitleWithDescription: any = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(["Choice 1"]);

  return (
    <Card title="ChoiceList Title With Description">
      <ChoiceList
        title="ChoiceList title"
        heading="ChoiceList Heading"
        activator={
          <Button
            disclosure
            type="outlined"
            onClick={() => setOpen((prev) => !prev)}
          >
            ChoiceList
          </Button>
        }
        value={value}
        isOpen={open}
        isMulti
        options={options}
        onChange={(val: any) => setValue(val)}
        onClose={() => setOpen(false)}
      />
    </Card>
  );
};
