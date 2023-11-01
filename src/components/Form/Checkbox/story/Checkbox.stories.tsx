import React, { useEffect, useState } from "react";
import Card from "../../../Card/Card";
import { FlexLayout } from "../../../FlexLayout";
import Checkbox from "../Checkbox";
import CheckboxDoc from "../Document/CheckboxDoc";

export default {
  title: "Components/Form/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          "<div style='margin-top: 15px;'><div class='inte- flex inte- flex--wrap inte- flex--spacing- Extraloose inte - flex--vertical'><div class='inte - flex__item'><h4 class='Paragraph  inte__text--light none inte__font--normal inte__Paragraph--font--large'>Checkboxes allow the user to select one or more items from a set of options.</h4></div><div class='inte - flex__item'><p><blockquote>Checkbox is used to select or deselect action items.</blockquote></p></div></div>",
      },
    },
  },
  argTypes: {
    checked: {
      description: "Check or uncheck the Checkbox",
      control: {
        type: "radio",
        options: [true, false, "indeterminate"],
      },
      defaultValue: false,
    },
    id: {
      description: "Id for Raio",
      control: {
        type: "text",
      },
      defaultValue: "radio-id",
    },
    name: {
      description: "Label of Checkbox",
      control: {
        type: "text",
      },
      defaultValue: "Name",
    },
    label: {
      description: "Chekbox value",
      control: {
        type: "text",
      },
      defaultValue: "Label",
    },
    customClass: {
      description: "Send any extra Custom Class if required",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    description: {
      description: "Description of Checkbox",
      control: {
        type: "text",
      },
      defaultValue: "Checkbox Descripion",
    },
    onChange: {
      description: "Define Checkbox onChange Function",
      control: {
        type: "function",
        disable: true,
      },
    },
    value: {
      description: "Checkbox value",
      control: {
        type: "text",
      },
      defaultValue: "radio-value",
    },
    hasError: {
      description: "Define Checkbox Error ",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    isDisabled: {
      description: "Check box disabled description",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    required: {
      description: "Required option of Checkbox",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
};

const Template = ({ ...rest }) => {
  const [checked, setChecked] = useState<boolean | "indeterminate">(false);
  const toggleChange = (currState: boolean | "indeterminate") => {
    setChecked(currState);
    // setChecked()
  };
  useEffect(() => {
    setChecked(rest.checked);
  }, [rest.checked]);

  return (
    <Card title={"Checkbox"}>
      <Checkbox {...rest} checked={checked} onChange={toggleChange} />
    </Card>
  );
};

export const Primary = Template.bind({});
export const CheckboxRequired: any = Template.bind({});
CheckboxRequired.decorators = [
  () => {
    const [checked, setChecked] = useState<boolean | "indeterminate">(
      "indeterminate"
    );
    return (
      <Card title={"Required Checkbox"}>
        <Checkbox
          label={"Checkbox"}
          onChange={(newState) => {
            setChecked(newState);
          }}
          required
          checked={checked}
        />
      </Card>
    );
  },
];
// indeterminate
export const IndeterminateCheckbox: any = Template.bind({});
IndeterminateCheckbox.decorators = [
  () => {
    return (
      <Card title={"Indeterminate Checkbox"}>
        <Checkbox label={"Checkbox"} checked="indeterminate" />
      </Card>
    );
  },
];

//disable
export const DisableCheckbox: any = Template.bind({});
DisableCheckbox.decorators = [
  () => {
    return (
      <Card title={"Disable Checkbox"}>
        <Checkbox label={"Checkbox"} isDisabled />
      </Card>
    );
  },
];
// with Description
export const CheckboxWithDescription: any = Template.bind({});
CheckboxWithDescription.decorators = [
  () => {
    return (
      <Card title={"Checkbox With Description"}>
        <FlexLayout spacing="loose" direction="vertical">
          <Checkbox
            label={"Checkbox"}
            description={"Checkbox Descripion"}
            checked={true}
          />
          <Checkbox label={"Checkbox"} description={"Checkbox Descripion"} />
        </FlexLayout>
      </Card>
    );
  },
];

export function Documentation() {
  return <CheckboxDoc />;
}
