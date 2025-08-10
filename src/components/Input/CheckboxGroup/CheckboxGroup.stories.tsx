import { useCallback, useState } from "react";
import  CheckboxGroup  from "./CheckboxGroup";
import React from "react";

export default {
  title: "components/Input/CheckboxGroup",
  component: CheckboxGroup,
  tags: ["autodocs"],
  argTypes: {},
};

const Template = ({ ...rest }) => {
  const [grpVal, setGrpVal] = useState<any[]>([]);
  const handleCheckboxGroupChange = useCallback((val: any[]) => {
    setGrpVal([...val]);
  }, []);

  const options = [
    {
      label: "Checkbox1",
      value: "Checkbox1",
    },
    {
      label: "Checkbox2",
      value: "Checkbox2",
    },
    {
      label: "Checkbox3",
      value: "Checkbox3",
    },
  ];

  return (
    <CheckboxGroup
      title="Checkbox group"
      direction={rest.direction}
      value={[...grpVal]}
      name="name"
      options={options}
      onChange={handleCheckboxGroupChange}
      helpText="This is help text."
    />
  );
};
export const Primary = Template.bind({});

export const HorizontalCheckboxGRoup: any = Template.bind({});
HorizontalCheckboxGRoup.decorators = [

  () => {
    const options = [
      {
        label: "Checkbox1",
        value: "Checkbox1",
      },
      {
        label: "Checkbox2",
        value: "Checkbox2",
      },
      {
        label: "Checkbox3",
        value: "Checkbox3",
      },
    ];
    const [grpVal1, setGrpVal1] = useState<any[]>([]);
    const handleCheckboxGroupChange1 = useCallback((val1: any[]) => {
      setGrpVal1([...val1]);
    }, []);

    return (
      <CheckboxGroup
        title="Checkbox group"
        direction={"horizontal"}
        value={[]}
        name="name"
        options={options}
        onChange={handleCheckboxGroupChange1}
        helpText="This is help text."
      />
    );
  },
];
