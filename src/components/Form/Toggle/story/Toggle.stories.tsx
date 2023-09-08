import React, { useEffect, useState } from "react";
import Toggle from "../Toggle";
import { Card, FormElement } from "../../..";
import ToggleDoc from "../Document/ToggleDoc";

export default {
  title: "Components/Form/Toggle",
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component:
          "<div style='margin-top: 15px;'><div class='inte- flex inte- flex--wrap inte- flex--spacing- Extraloose inte - flex--vertical'><div class='inte - flex__item'><h4 class='Paragraph  inte__text--light none inte__font--normal inte__Paragraph--font--large'>The Switcher component provides app visitors with the ability to choose from a range of options. Switcher consists of a drop-down menu of options.</h4></div><div class='inte - flex__item'><p><blockquote>Switcher is used for currency, language , accounts, etc.</blockquote></p></div></div>",
      },
    },
  },
  argTypes: {
    checked: {
      description: "You can check unchecked your toggle",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    label: {
      description: "You can set Label from here",
      control: {
        type: "text",
      },
      defaultValue: "Toggle",
    },
    description: {
      description: "You can set Description from here",
      control: {
        type: "text",
      },
      defaultValue: "Toggle Description",
    },
    customClass: {
      description: "You can set Custom Class Name",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    isDisable: {
      description: "You can disabled toggle from here",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    required: {
      description: "You can Make Toggle Required",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    id: {
      description: "Set Id ",
      control: {
        type: "text",
      },
      defaultValue: ''
    },
    value: {
      description: "Set value of toggle",
      control: {
        type: "text",
      },
      defaultValue: ''
    },
    helpText: {
      description: "Set helpText (For tooltip in label) ",
      control: {
        type: "text",
      },
      defaultValue: ''
    },
    helpPosition: {
      description: "Set the direction of tooltip in label",
      control: {
        type: "radio",
        options: ["left", "right", "top", "bottom"],
      }
    }
  },
};

const Template = ({ ...rest }) => {
  const [check, setCheck] = useState<any>(false);

  useEffect(() => {
    setCheck(rest.checked);
  }, [rest.checked]);
  return (
    <Card>
      <Toggle
        {...rest}
        onChange={(newState) => setCheck(newState)}
        isDisable={rest.isDisable}
        label={rest.label}
        description={rest.description}
        checked={check}
        customClass={rest.customClass}
        required={rest.required}
      />
    </Card>
  );
};

export const Primary = Template.bind({});

// Disabled
export const Disabled: any = Template.bind({});
Disabled.decorators = [
  () => {
    const [check, setCheck] = useState<any>(true);
    return (
      <Card>
        <Toggle
          onChange={() => setCheck(!check)}
          isDisable={true}
          label={"Toggle"}
          checked={check}
        />
      </Card>
    );
  },
];

// With Label and Description
export const With_label_and_description: any = Template.bind({});
With_label_and_description.decorators = [
  () => {
    const [check, setCheck] = useState<any>(true);
    return (
      <Card>
        <Toggle
          onChange={() => setCheck(!check)}
          checked={check}
          label="Toggle"
          description="Toggle Description"
        />
      </Card>
    );
  },
];
// Without Label
export const Without_Label: any = Template.bind({});
Without_Label.decorators = [
  () => {
    const [check, setCheck] = useState<any>(true);
    return (
      <Card>
        <Toggle onChange={() => setCheck(!check)} checked={check} />
      </Card>
    );
  },
];

// With Label and Description
export const With_label_and_description_a: any = Template.bind({});
With_label_and_description_a.decorators = [
  () => {
    const [check, setCheck] = useState<any>(true);
    return (
      <Card>
        <FormElement>
          <Toggle
            onChange={() => setCheck(!check)}
            checked={check}
            label="Toggle"
            description="Toggle Description"
          />
          <Toggle
            onChange={() => setCheck(!check)}
            checked={check}
            label="Toggle"
            description="Toggle Description"
          />
          <Toggle
            onChange={() => setCheck(!check)}
            checked={check}
            label="Toggle"
            description="Toggle Description"
          />
        </FormElement>
      </Card>
    );
  },
];
//With tootltip
export const With_tooltip: any = Template.bind({});
With_tooltip.decorators = [
  () => {
    const [check, setCheck] = useState<any>(true);
    return (
      <Card>
        <FormElement>
          <Toggle
            onChange={() => setCheck(!check)}
            checked={check}
            label="Toggle"
            description="Toggle Description"
            helpText="HelpText goes here"
            helpPosition="right"
          />
          <Toggle
            label="Toggle"
            description="Toggle Description"
            isDisable
            helpText="HelpText goes here"
            helpPosition="right"
          />
        </FormElement>
      </Card>
    );
  },
];

export function Documentation() {
  return <ToggleDoc />;
}
