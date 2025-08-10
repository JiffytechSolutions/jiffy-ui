import { useState } from "react";
import Select from "./Select";
import React from "react";

export default {
  title: "components/Input/Select",
  component: Select,
  tags: ["autodocs"],
};
const options = [
  {
    label: "Titus",
    value: "Titusval",
  },
  {
    label: "Nollie",
    value: "Nollieval",
  },
  {
    label: "Celle",
    value: "Celleval",
  },
  {
    label: "Thea",
    value: "Theaval",
  },
  {
    label: "Brynn1",
    value: "Brynn1val",
  },
  {
    label: "Brynn2",
    value: "Brynn2val",
  },
  {
    label: "Brynn3",
    value: "Brynn3val",
  },
  {
    label: "Brynn4",
    value: "Brynn4val",
  },
  {
    label: "Brynn5",
    value: "Brynn5val",
  },
  {
    label: "Brynn6",
    value: "Brynn6val",
  },
  {
    label: "Brynn7",
    value: "Brynn7val",
  },
  {
    label: "Brynn8",
    value: "Brynn8val",
  },

  {
    label: "Sloane",
    value: "Sloaneval",
  },
  {
    label: "Margalo",
    value: "Margaloval",
  },
  {
    label: "Genevieve",
    value: "Genevieveval",
  },
  {
    label: "Niel",
    value: "Nielval",
  },
  {
    label: "Heddi",
    value: "Heddival",
  },
  {
    label: "Gregg",
    value: "Greggval",
  },
  {
    label: "Eduard",
    value: "Eduardval",
  },
  {
    label: "Kizzee",
    value: "Kizzeeval",
  },
  {
    label: "Truman",
    value: "Trumanval",
  },
  {
    label: "Merill",
    value: "Merillval",
  },
  {
    label: "Lindie",
    value: "Lindieval",
  },
  {
    label: "Vasily",
    value: "Vasilyval",
  },
  {
    label: "Averil",
    value: "Averilval",
  },
  {
    label: "Golda",
    value: "Goldaval",
  },
  {
    label: "Zorine",
    value: "Zorineval",
  },
  {
    label: "Odele",
    value: "Odeleval",
  },
  {
    label: "Amalie",
    value: "Amalieval",
  },
  {
    label: "Ilsa",
    value: "Ilsaval",
  },
  {
    label: "Pepillo",
    value: "Pepilloval",
  },
];
const groupOptions = [
  {
    label: "This is Colors Heading",
    group: [
      { value: "ocean", label: "Ocean" },
      { value: "blue", label: "Blue" },
      { value: "purple", label: "Purple" },
      { value: "red", label: "Red" },
      { value: "orange", label: "Orange" },
      { value: "yellow", label: "Yellow" },
      { value: "green", label: "Green" },
      { value: "forest", label: "Forest" },
      { value: "slate", label: "Slate" },
      { value: "silver", label: "Silver" },
    ],
  },
  {
    label: "This is Chocolates Heading",
    group: [
      { value: "vanilla", label: "Vanilla", description: "Hello Description" },
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "salted-caramel", label: "Salted Caramel" },
    ],
  },
  {
    label: "This is States Heading",
    group: [
      { value: "AL", label: "Alabama" },
      { value: "AK", label: "Alaska" },
      { value: "AS", label: "American Samoa" },
      { value: "AZ", label: "Arizona" },
      { value: "AR", label: "Arkansas" },
      { value: "CA", label: "California" },
      { value: "CO", label: "Colorado" },
      { value: "CT", label: "Connecticut" },
      { value: "DE", label: "Delaware" },
    ],
  },
];
const Template = ({ ...rest }) => {
  const [value, setValue] = useState("");
  function onChange(e: any) {
    setValue(e);
  }
  return (
    <Select
      value={value}
      options={options}
      onChange={onChange}
      label="label"
      placeholder="Select comp"
      helpText="help text"
    />
  );
};
export const Default = Template.bind({});

export const MultiSelect: any = Template.bind({});
MultiSelect.decorators = [
  () => {
    const [value, setValue] = useState([]);
    function onChange(e: any, i: any) {
      const isFound = value.some((ele: any) => ele === i);
      if (isFound) {
        const filteredItem = value.filter((ele) => ele !== i);
        setValue(filteredItem);
        return;
      }
      setValue(e);
    }
    return (
      <Select
        label="label"
        options={options}
        value={value}
        placeholder={"Multi select"}
        selectionType="multiple"
        onChange={onChange}
      />
    );
  },
];

export const SelectWithGroupedData: any = Template.bind({});
SelectWithGroupedData.decorators = [
  () => {
    const [value, setValue] = useState("");
    function onChange(e: any) {
      setValue(e);
    }
    return (
      <Select
        options={groupOptions}
        value={value}
        placeholder={"Select"}
        onChange={onChange}
      />
    );
  },
];

export const MultiSelectWithGroupedData: any = Template.bind({});
MultiSelectWithGroupedData.decorators = [
  () => {
    const [value, setValue] = useState([]);
    function onChange(e: any, i: any) {
      const isFound1 = value.some((ele: any) => ele === i);
      if (isFound1) {
        const filteredItem = value.filter((ele) => ele !== i);
        setValue(filteredItem);
        return;
      }
      setValue(e);
    }
    return (
      <Select
        options={groupOptions}
        value={value}
        placeholder={"Select"}
        onChange={onChange}
        selectionType="multiple"
      />
    );
  },
];

export const SelectWithAutoComplete: any = Template.bind({});
SelectWithAutoComplete.decorators = [
  () => {
    const [value, setValue] = useState([]);
    const [text, setText] = useState("");
    function onChange(e: any, i: any) {
      setValue(e);
    }
    return (
      <Select
        options={options}
        value={value}
        placeholder={"Select"}
        onChange={onChange}
        onInputValueChange={(e:any) => setText(e)}
        inputValue={text}
        type="autoComplete"
      />
    );
  },
];

export const MultiSelectWithAutoComplete: any = Template.bind({});
MultiSelectWithAutoComplete.decorators = [
  () => {
    const [value, setValue] = useState([]);
    function onChange(e: any, i: any) {
      const isFound = value.some((ele: any) => ele === i);
      if (isFound) {
        const filteredItem = value.filter((ele) => ele !== i);
        setValue(filteredItem);
        return;
      }
      setValue(e);
    }
    return (
      <Select
        label="label"
        options={options}
        value={value}
        placeholder={"Multi select with search"}
        selectionType="multiple"
        type="autoComplete"
        onChange={onChange}
      />
    );
  },
];
