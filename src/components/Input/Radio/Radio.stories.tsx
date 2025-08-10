import { useState } from "react";
import  Radio  from "./Radio";
import React from "react";

export default {
  title: "components/Input/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {},
};
const Template = ({ ...rest }) => {
  const [value, setValue] = useState<any>(false);
  return (
    <Radio
      name={rest.name}
      label={rest.label}
      value={rest.value}
      checked={rest.checked}
      onChange={(val) => {
        setValue(true);
      }}
      hasError={rest.hasError}
      isDisabled={rest.isDisabled}
      id={rest.id}
    />
  );
};
export const Primary = Template.bind({});
