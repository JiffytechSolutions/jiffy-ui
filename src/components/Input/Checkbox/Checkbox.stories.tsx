import { useState } from "react";
import  Checkbox  from "./Checkbox";
import React from "react";
export default {
  title: "components/Input/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {},
};
const Template = ({ ...rest }) => {
  const [checked, setChecked] = useState<boolean | "indeterminate">(
    "indeterminate"
  );
  return (
    <Checkbox
      label={"Checkbox"}
      onChange={(newState) => {
        setChecked(newState);
      }}
      required
      hasError={rest.hasError}
      checked={checked}
      isDisabled={rest.isDisabled}
    />
  );
};
export const Primary = Template.bind({});
export const CheckboxDisabled: any = Template.bind({});
CheckboxDisabled.decorators = [
  () => {
    return (
      <Checkbox isDisabled checked label="Disabled checked" />
    );
  },
];