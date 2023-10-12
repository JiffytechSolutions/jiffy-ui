import React, { useState } from "react";
import { Card } from "../../../Card";
import RadioDoc from "../Document/RadioDoc";
import Radio from "../Radio";

export default {
  title: "Components/Form/Radio",
  component: Radio,
  parameters: {
    docs: {
      description: {
        component:
          "<div style='margin-top: 15px;'><div class='inte- flex inte- flex--wrap inte- flex--spacing- Extraloose inte - flex--vertical'><div class='inte - flex__item'><h4 class='Paragraph  inte__text--light none inte__font--normal inte__Paragraph--font--large'>A radio button component is rendered as a small circle, which is filled or highlighted when selected. It allows users to select only one option from a number of predefined choices. Radio is generally displayed in a radio group.</h4></div><div class='inte - flex__item'><p><blockquote>Radio buttons allow the user to select one item from a set.</blockquote></p></div></div>",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=4313-249653&t=vybTUvZSW4IIqAUa-0",
    },
  },
  argTypes: {
    name: {
      description: "Name of component (Attribute)",
      control: {
        type: "text",
      },
      defaultValue: "Label",
    },
    label: {
      description: "Label of component",
      control: {
        type: "text",
      },
      defaultValue: "Label",
    },
    onChange: {
      description: "On click Function ",
      control: {
        type: "function",
        disable: true,
      },
    },
    isDisabled: {
      description: "Set disabled True or false",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    description: {
      description: "Set description of component ",
      control: {
        type: "text",
      },
      defaultValue: "Radio Descripion",
    },
    checked: {
      description: "Enable True or false",
      control: {
        type: "boolean",
        disable: true,
      },
      defaultValue: false,
    },
    value: {
      description: "Value of Radio Buttons",
      control: {
        type: "boolean",
        disable: true,
      },
      defaultValue: false,
    },
    id: {
      description: "Set Id of component",
      control: {
        type: "text",
      },
      defaultValue: "id",
    },
    hasError: {
      description: "Change State To Error",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
};

const Template = ({ ...rest }) => {
  const [value, setvalue] = useState<any>(false);
  return (
    <Card title={"Radio Button"}>
      <Radio
        {...rest}
        checked={value}
        onChange={(val) => {
          setvalue(true);
        }}
      />
    </Card>
  );
};

export const Primary = Template.bind({});
//disable
export const DisableRadio: any = Template.bind({});
DisableRadio.decorators = [
  () => {
    const [value, setvalue] = useState(false);
    return (
      <Card title={"Disable Radio"}>
        <Radio
          id="Ddddd"
          checked={value}
          label={"Radio"}
          onChange={() => setvalue(!value)}
          name={""}
          description={"Radio Description"}
          isDisabled
        />
      </Card>
    );
  },
];
// with Description
export const RadioWithDescription: any = Template.bind({});
RadioWithDescription.decorators = [
  () => {
    const [value, setvalue] = useState(false);
    return (
      <Card title={"Radio with Description"}>
        <Radio
          id="dddddssd"
          checked={value}
          label={"Radio"}
          onChange={() => setvalue(!value)}
          name={"f"}
          description={"Radio Description"}
        />
      </Card>
    );
  },
];

export const RadioError: any = Template.bind({});
RadioError.decorators = [
  () => {
    return (
      <Card title={"Radio Error"}>
        <Radio id="radioError" hasError={true} />
      </Card>
    );
  },
];
export function Documentation() {
  return <RadioDoc />;
}
