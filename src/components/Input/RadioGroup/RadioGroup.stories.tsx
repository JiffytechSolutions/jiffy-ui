import { HelpCircle } from "react-feather";
import  RadioGroup  from "./RadioGroup";
import { useCallback, useState } from "react";
import React from "react";

export default {
  title: "components/Input/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {},
};

const Template = ({ ...rest }) => {
  const [grpVal, setGrpVal] = useState<string | number>("");
  const handleRadioGroupChange = useCallback((val: string | number) => {
    setGrpVal(val);
  }, []);
  const options = [
    {
      label: "Radio1",
      value: "Radio1",
    },
    {
      label: "Radio2",
      value: "Radio2",
    },
    {
      label: "Radio3",
      value: "Radio3",
    },
  ];
  return (
    <RadioGroup
      title="Radio group title"
      direction={rest.direction}
      value={grpVal}
      name="name"
      options={options}
      onChange={handleRadioGroupChange}
      
      helpText="This is help text"
      helpIcon={<HelpCircle size={16} />}
    />
  );
};

export const Primary = Template.bind({});
export const RadioGroupHorizontal: any = Template.bind({});
RadioGroupHorizontal.decorators = [
  () => {
    const [grpVal, setGrpVal] = useState<string | number>("Radio2");
    const handleRadioGroupChange = useCallback((val: string | number) => {
      setGrpVal(val);
    }, []);
    const options = [
      {
        label: "Radio1",
        value: "Radio1",
      },
      {
        label: "Radio2",
        value: "Radio2",
      },
      {
        label: "Radio3",
        value: "Radio3",
      },
    ];
    return (
      <RadioGroup
        title="Radio title"
        value={grpVal}
        onChange={handleRadioGroupChange}
        direction="horizontal"
        options={options}
        helpIcon={<HelpCircle size={16} />}
        helpText="this is help text"
      />
    );
  },
];
