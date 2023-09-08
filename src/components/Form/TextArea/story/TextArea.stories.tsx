import React, { useState } from "react";
import { Card } from "../../../Card";
import TextArea from "../TextArea";

export default {
  title: "Components/Form/TextArea",
  component: TextArea,
  argTypes: {
    value: {
      description: "Set value of TextArea",
      control: {
        disable: true,
      },
    },
    placeHolder: {
      description: "Set placeholder for textarea",
      control: {
        type: "text",
      },
      defaultValue: "Type..",
    },
    customClass: {
      description: "Set customClass as per your needs",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    label: {
      description: "Set label for Textarea",
      control: {
        type: "text",
      },
      defaultValue: "Name",
    },
    required: {
      description: "Set textarea required",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    rows: {
      description: "Set the no rows you want in textarea",
      control: {
        type: "number",
      },
      defaultValue: 2,
    },
    resize: {
      description: "Choose on which direction you want to resize textArea",
      control: {
        type: "radio",
        options: ["horizontal", "vertical", "both", "none"],
      },
      defaultValue: "both",
    },
    helpText: {
      description: "Set helptext For TextArea",
      control: {
        type: "text",
      },
      defaultValue: "helpText",
    },
    id: {
      description: "Set a id ",
      control: {
        type: "text",
      },
      defaultValue: "id",
    },
    onEnter: {
      description: "The callback function that is triggered when Enter key is pressed",
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
    error: {
      description: "Set to show the status of Textarea ",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    readOnly: {
      description: "Set Textarea to readonly",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
};

const Template = ({ ...rest }) => {
  const [val, setval] = useState("");
  return (
    <Card>
      <TextArea
        {...rest}
        id={rest.id}
        value={val}
        error={rest.error}
        placeHolder={rest.placeHolder}
        label={rest.label}
        helpText={rest.helpText}
        onChange={(e) => setval(e)}
        onEnter={() => {
          setval("");
        }}
      />
    </Card>
  );
};

export const Primary = Template.bind({});

export const WithLabel: any = Template.bind({});
WithLabel.decorators = [
  () => {
    const [val, setval] = useState("");
    return (
      <Card>
        <TextArea
          value={val}
          label="Name"
          placeHolder="Type....."
          onChange={(e) => setval(e)}
          onEnter={() => {
            setval("");
          }}
        />
      </Card>
    )
  },
];


export const placeHolder: any = Template.bind({});
placeHolder.decorators = [
  () => {
    const [val, setval] = useState("");
    return (
      <Card>
        <TextArea
          value={val}
          placeHolder="Type....."
          onChange={(e) => setval(e)}
          onEnter={() => {
            setval("");
          }}
        />
      </Card>
    )
  },
];

export const Readonly: any = Template.bind({});
Readonly.decorators = [
  () => {
    const [val, setval] = useState("This area is only Readable");
    return (
      <Card>
        <TextArea
          readOnly
          value={val}
          placeHolder="Type....."
          onChange={(e) => setval(e)}
          onEnter={() => {
            setval("");
          }}
        />
      </Card>
    )
  },
];


export const Rows: any = Template.bind({});
Rows.decorators = [
  () => {
    const [val, setval] = useState("This area is only Readable");
    return (
      <Card>
        <TextArea
          rows={8}
          readOnly
          value={val}
          placeHolder="Type....."
          onChange={(e) => setval(e)}
          onEnter={() => {
            setval("");
          }}
        />
      </Card>
    )
  },
];