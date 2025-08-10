import { useState } from "react";
import TextArea from "./TextArea";
import React from "react";

export default {
  title: "components/Input/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  argTypes: {},
};

const Template = ({ ...rest }) => {
  const [val, setVal] = useState("");
  return (
    <TextArea
      value={val}
      error={rest.error}
      placeholder={rest.placeholder}
      label={rest.label}
      helpText={rest.helpText}
      onChange={(e) => setVal(e)}
      required={rest.required}
    />
  );
};
export const Primary = Template.bind({});
