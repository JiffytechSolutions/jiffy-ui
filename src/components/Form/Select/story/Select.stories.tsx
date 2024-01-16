/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Card } from "../../../Card";
import * as Icon from "../../../../storybook/Foundation/Icons/Icons";
import { GroupedObjI, SimpleObjI } from "../types/types";
import Select from "../Select";
import { FlexLayout } from "../../../FlexLayout";
const allIcons: any = { ...Icon };
export default {
  title: "Components/Form/Select",
  component: Select,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=1812-153903&t=fwx7SHLr0Vi8Wxq1-0",
    },
  },
  argTypes: {
    options: {
      description: `<div><strong>Simple or Multidimensional array:-</strong></div><i>Accepted key value pairs in simple Data:</i><table bgcolor="#f5f5f5"><thead><tr><th>key</th><th>value</th></tr></thead><tbody><tr><td>label <span style="color:red">*</span></td><td>label(String)</td></tr><tr><td>value <span style="color:red">*</span></td><td>value(String | Number)</td></tr><tr><td>description</td><td>description(String)</td></tr><tr><td>isDisabled</td><td>isDisabled(Boolean)</td></tr></tbody></table><br/><i>Accepted key value pairs in grouped data:</i><table bgcolor="#f5f5f5"><thead><tr><th>key</th><th>value</th></tr></thead><tbody><tr><td>label <span style="color:red">*</span></td><td>label(String)</td></tr><tr><td>group <span style="color:red">*</span></td><td><table bgcolor="#f5f5f5"><thead><tr><th>key</th><th>value</th></tr></thead><tbody><tr><td>label <span style="color:red">*</span></td><td>label(String)</td></tr><tr><td>value <span style="color:red">*</span></td><td>value(String | Number)</td></tr><tr><td>description</td><td>description(String)</td></tr><tr><td>isDisabled</td><td>isDisabled(Boolean)</td></tr></tbody></table></td></tr></tbody></table>`,
      control: {
        type: "array",
      },
      defaultValue: [
        {
          label: "Afghanistan",
          value: "AF",
          description: "Lorem ipsum dolor sit amet, consectetur",
        },
        { label: "Åland Islands", value: "AX" },
        { label: "Albania", value: "AL" },
        { label: "Algeria", value: "DZ" },
        { label: "American Samoa", value: "AS" },
        { label: "Andorra", value: "AD" },
        {
          label: "Angola",
          value: "AO",
          description: "Lorem ipsum dolor sit amet, consectetur",
        },
        {
          label: "Anguilla",
          value: "AI",
          description: "Lorem ipsum dolor sit amet, consectetur",
        },
        { label: "Antarctica", value: "AQ" },
        { label: "Antigua and Barbuda", value: "AG" },
        { label: "Argentina", value: "AR" },
        { label: "Cyprus", value: "CY" },
        { label: "Czech Republic", value: "CZ" },
        { label: "Denmark", value: "DK" },
        { label: "Dominican Republic", value: "DO" },
        { label: "Ecuador", value: "EC" },
      ],
    },
    value: {
      description:
        "Current selected option having array of values in multiselect and string in single select",
      control: {
        type: "array",
        disable: true,
      },
    },
    label: {
      description: "Add label text",
      control: {
        type: "text",
      },
      defaultValue: "Label",
    },
    accessibilityLabel: {
      description:
        "Add accessibility Label text, if you do not provide label then it can be read by screen reader",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    controlStates: {
      description:
        "Select Control states from below mentioned options as per requirement like success , danger",
      control: {
        type: "radio",
        options: ["success", "warning", "error", "default"],
      },
      defaultValue: "default",
    },
    isDisabled: {
      description: "Disable select",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    onChange: {
      description: "Called when selecting  a option",
      control: {
        disable: true,
      },
    },
    onInputChange: {
      description: "Called when input value change",
      control: {
        disable: true,
      },
    },
    isRequired: {
      description: "select required",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    isSearchable: {
      description: "Select with search field",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    isClearable: {
      description: "Select with clear button",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    isCreatable: {
      description:
        "Select with creatable options , (works only if isSearchable is true)",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    isLoading: {
      description: "Select with loading",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    isMultiSelect: {
      description: "Select with multiple selection",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    placeholder: {
      description: "Add any placeholder as text",
      control: {
        type: "text",
      },
      defaultValue: "Select",
    },
    helpIcon: {
      description: "set icon beside help text",
      control: {
        type: "select",
        options: Object.keys(allIcons),
      },
      defaultValue: "Search",
    },
    helpText: {
      description: "Select with help text",
      control: {
        type: "text",
      },
      defaultValue: "Write help text here",
    },
    id: {
      description: "Add custom id",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    isVirtualSelect: {
      description:
        "Disable virtual scroll when set to false , use this feature when you large data (If isvirtualSelect is true then you can pass large data like 10 thousand at a time)",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    heading: {
      description: "This heading props is working on only mobile device",
      control: {
        type: "text",
      },
      defaultValue: "Enter proper heading name",
    },
    width: {
      description:
        "If you change select width the using width prop and then enter number",
      control: {
        type: "number",
      },
    },
    customClass: {
      description: "Add any desired custom class on dropdown",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
  },
} as Meta;

const simpleOptions: SimpleObjI[] = [
  {
    label: "Afghanistan",
    value: "AF",
    description: "Lorem ipsum dolor sit amet, consectetur",
  },
  { label: "Åland Islands", value: "AX" },
  { label: "Albania", value: "AL" },
  { label: "Algeria", value: "DZ" },
  { label: "American Samoa", value: "AS" },
  { label: "Andorra", value: "AD" },
  {
    label: "Angola",
    value: "AO",
    description: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    label: "Anguilla",
    value: "AI",
    description: "Lorem ipsum dolor sit amet, consectetur",
  },
  { label: "Antarctica", value: "AQ" },
  { label: "Antigua and Barbuda", value: "AG" },
  { label: "Argentina", value: "AR" },
  { label: "Cyprus", value: "CY" },
  { label: "Czech Republic", value: "CZ" },
  { label: "Denmark", value: "DK" },
  { label: "Dominican Republic", value: "DO" },
  { label: "Ecuador", value: "EC" },
];
const groupOptions: GroupedObjI[] = [
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
  const [value1, setValue1] = useState([]);
  const onSelectChange = (val: React.SetStateAction<never[]>) => {
    setValue1(val);
  };
  return (
    <Card>
      <Select
        value={value1}
        id={rest.id}
        label={rest.label}
        helpText={rest.helpText}
        options={simpleOptions}
        isMultiSelect={rest.isMultiSelect}
        isSearchable={rest.isSearchable}
        isClearable={rest.isClearable}
        isRequired={rest.isRequired}
        controlStates={rest.controlStates}
        helpIcon={allIcons[rest.helpIcon]({
          size: 20,
          color: `${
            rest.controlStates == "error"
              ? "#C4281C"
              : rest.controlStates === "success"
              ? "var(--inte-GR300)"
              : rest.controlStates === "warning"
              ? "var(--inte-Y300)"
              : "#616771"
          }`,
        })}
        isVirtualSelect={rest.isVirtualSelect}
        isDisabled={rest.isDisabled}
        placeholder={rest.placeholder}
        isLoading={rest.isLoading}
        onChange={onSelectChange}
        onInputChange={(e: any) => {}}
        customClass={rest.customClass}
        accessibilityLabel={rest.accessibilityLabel}
        isCreatable={rest.isCreatable}
        heading={rest.heading}
        width={rest.width}
      />
    </Card>
  );
};
export const Primary = Template.bind({});

// Select controlStates
export const controlStates: any = Template.bind({});
controlStates.decorators = [
  () => {
    const [value1, setValue] = useState([]);
    function onSelectChange(val: React.SetStateAction<never[]>) {
      setValue(val);
    }
    return (
      <Card title="Select Control States">
        <FlexLayout direction="vertical" spacing="loose">
          {["success", "warning", "error", "defaulr"].map((item: any) => {
            return (
              <Select
                options={simpleOptions}
                value={value1}
                placeholder={"Select"}
                controlStates={item}
                onChange={(e) => {
                  onSelectChange(e);
                }}
              />
            );
          })}
        </FlexLayout>
      </Card>
    );
  },
];

// Select With Loading
export const SelectWithLoading: any = Template.bind({});
SelectWithLoading.decorators = [
  () => {
    const [value1, setValue] = useState([]);
    function onSelectChange(val: React.SetStateAction<never[]>) {
      setValue(val);
    }
    return (
      <Card title="Select with loading">
        <Select
          options={simpleOptions}
          value={value1}
          placeholder={"Select"}
          isLoading
          onChange={(e) => {
            onSelectChange(e);
          }}
        />
      </Card>
    );
  },
];

export const ClearableSelect: any = Template.bind({});
ClearableSelect.decorators = [
  () => {
    const [value1, setValue] = useState([]);
    function onSelectChange(val: React.SetStateAction<never[]>) {
      setValue(val);
    }
    return (
      <Card title="Clearable Select">
        <Select
          options={simpleOptions}
          value={value1}
          placeholder={"Select"}
          isClearable
          isMultiSelect
          onChange={(e) => {
            onSelectChange(e);
          }}
        />
      </Card>
    );
  },
];

export const DisabledSelect: any = Template.bind({});
DisabledSelect.decorators = [
  () => {
    const [value1, setValue] = useState([]);
    function onSelectChange(val: React.SetStateAction<never[]>) {
      setValue(val);
    }
    return (
      <Card title="Disabled select">
        <Select
          options={simpleOptions}
          value={value1}
          placeholder={"Select"}
          isDisabled
          onChange={(e) => {
            onSelectChange(e);
          }}
        />
      </Card>
    );
  },
];

export const SelectHavingError: any = Template.bind({});
SelectHavingError.decorators = [
  () => {
    const [value1, setValue] = useState([]);
    function onSelectChange(val: React.SetStateAction<never[]>) {
      setValue(val);
    }
    return (
      <Card title="Select having error">
        <Select
          value={value1}
          placeholder={"Select"}
          options={simpleOptions}
          controlStates="error"
          onChange={(e) => {
            onSelectChange(e);
          }}
        />
      </Card>
    );
  },
];

export const SingleSelect: any = Template.bind({});
SingleSelect.decorators = [
  () => {
    const [value1, setValue] = useState([]);
    function onSelectChange(val: React.SetStateAction<never[]>) {
      setValue(val);
    }
    return (
      <Card title="Single select">
        <Select
          options={simpleOptions}
          value={value1}
          placeholder={"Select"}
          onChange={(e) => {
            onSelectChange(e);
          }}
        />
      </Card>
    );
  },
];

export const MultiSelect: any = Template.bind({});
MultiSelect.decorators = [
  () => {
    const [value1, setValue] = useState([]);
    function onSelectChange(val: React.SetStateAction<never[]>) {
      setValue(val);
    }
    return (
      <Card title="Multiselect">
        <Select
          options={simpleOptions}
          value={value1}
          isMultiSelect
          placeholder={"Select"}
          onChange={(e) => {
            onSelectChange(e);
          }}
        />
      </Card>
    );
  },
];

export const SearchableSelect: any = Template.bind({});
SearchableSelect.decorators = [
  () => {
    const [value1, setValue] = useState([]);
    function onSelectChange(val: React.SetStateAction<never[]>) {
      setValue(val);
    }
    return (
      <Card title="Searchable Select">
        <Select
          options={simpleOptions}
          value={value1}
          isSearchable
          placeholder={"Select"}
          onChange={(e) => {
            onSelectChange(e);
          }}
          onInputChange={(e) => {}}
        />
      </Card>
    );
  },
];

export const CreatableSelect: any = Template.bind({});
CreatableSelect.decorators = [
  () => {
    const [value1, setValue] = useState([]);
    function onSelectChange(val: React.SetStateAction<never[]>) {
      setValue(val);
    }
    return (
      <Card title="Creatable select">
        <Select
          options={simpleOptions}
          value={value1}
          isSearchable
          isCreatable
          isMultiSelect
          placeholder={"Select"}
          onChange={(e) => {
            onSelectChange(e);
          }}
        />
      </Card>
    );
  },
];

export const SelectWithLabel: any = Template.bind({});
SelectWithLabel.decorators = [
  () => {
    const [value1, setValue] = useState([]);
    function onSelectChange(val: React.SetStateAction<never[]>) {
      setValue(val);
    }
    return (
      <Card title="select with label">
        <Select
          options={simpleOptions}
          value={value1}
          label="Label"
          placeholder={"Select"}
          onChange={(e) => {
            onSelectChange(e);
          }}
        />
      </Card>
    );
  },
];

export const SelectWithHelpTextAndIcon: any = Template.bind({});
SelectWithHelpTextAndIcon.decorators = [
  () => {
    const [value1, setValue] = useState([]);
    function onSelectChange(val: React.SetStateAction<never[]>) {
      setValue(val);
    }
    return (
      <Card title="Select with help text and icon">
        <Select
          options={simpleOptions}
          value={value1}
          placeholder={"Select"}
          onChange={(e) => {
            onSelectChange(e);
          }}
          helpIcon={<Icon.Search size={20} color="#8C9098" />}
          helpText="Select With Help Text"
        />
      </Card>
    );
  },
];

export const SelectWithHelpTextAndWithoutIcon: any = Template.bind({});
SelectWithHelpTextAndWithoutIcon.decorators = [
  () => {
    const [value1, setValue] = useState([]);
    function onSelectChange(val: React.SetStateAction<never[]>) {
      setValue(val);
    }
    return (
      <Card title="Select with help text and without icon">
        <Select
          options={simpleOptions}
          value={value1}
          placeholder={"Select"}
          onChange={(e) => {
            onSelectChange(e);
          }}
          helpText="Select With Help Text"
        />
      </Card>
    );
  },
];

export const SelectWithDisabledOptionsInSimpleData: any = Template.bind({});
SelectWithDisabledOptionsInSimpleData.decorators = [
  () => {
    const options = [
      {
        label: "Afghanistan",
        value: "AF",
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      { label: "Åland Islands", value: "AX", isDisabled: true },
      { label: "Albania", value: "AL" },
      { label: "Algeria", value: "DZ" },
      { label: "American Samoa", value: "AS", isDisabled: true },
      { label: "Andorra", value: "AD", isDisabled: true },
      {
        label: "Angola",
        value: "AO",
        description: "Lorem ipsum dolor sit amet, consectetur",
        isDisabled: true,
      },
      {
        label: "Anguilla",
        value: "AI",
        description: "Lorem ipsum dolor sit amet, consectetur",
        isDisabled: true,
      },
      { label: "Antarctica", value: "AQ" },
      { label: "Antigua and Barbuda", value: "AG" },
      { label: "Argentina", value: "AR" },
      { label: "Cyprus", value: "CY" },
      { label: "Czech Republic", value: "CZ" },
      { label: "Denmark", value: "DK" },
      { label: "Dominican Republic", value: "DO" },
      { label: "Ecuador", value: "EC" },
    ];
    const [value1, setValue] = useState([]);
    function onSelectChange(val: React.SetStateAction<never[]>) {
      setValue(val);
    }
    return (
      <Card title="Select with disabled options in simple data">
        <Select
          options={options}
          value={value1}
          placeholder={"Select"}
          onChange={(e) => {
            onSelectChange(e);
          }}
        />
      </Card>
    );
  },
];

export const SelectWithGroupedData: any = Template.bind({});
SelectWithGroupedData.decorators = [
  () => {
    const [value1, setValue] = useState([]);
    function onSelectChange(val: React.SetStateAction<never[]>) {
      setValue(val);
    }
    return (
      <Card title="Select with grouped data">
        <Select
          options={groupOptions}
          value={value1}
          placeholder={"Select"}
          onChange={(e) => {
            onSelectChange(e);
          }}
        />
      </Card>
    );
  },
];

export const SelectWithDisabledOptionsInGroupData: any = Template.bind({});
SelectWithDisabledOptionsInGroupData.decorators = [
  () => {
    const groupOptions = [
      {
        label: "This is Colors Heading",
        value: "0",
        group: [
          { value: "ocean", label: "Ocean" },
          { value: "blue", label: "Blue" },
          { value: "purple", label: "Purple", isDisabled: true },
          { value: "red", label: "Red" },
          { value: "orange", label: "Orange", isDisabled: true },
          { value: "yellow", label: "Yellow" },
          { value: "green", label: "Green" },
          { value: "forest", label: "Forest" },
          { value: "slate", label: "Slate" },
          { value: "silver", label: "Silver" },
        ],
      },
      {
        label: "This is Chocolates Heading",
        value: "1",
        group: [
          { value: "vanilla", label: "Vanilla" },
          { value: "chocolate", label: "Chocolate", isDisabled: true },
          { value: "strawberry", label: "Strawberry", isDisabled: true },
          { value: "salted-caramel", label: "Salted Caramel" },
        ],
      },
      {
        label: "This is States Heading",
        value: "2",
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
    const [value1, setValue] = useState([]);
    function onSelectChange(val: React.SetStateAction<never[]>) {
      setValue(val);
    }
    return (
      <Card title="Select with disabled options in grouped data">
        <Select
          options={groupOptions}
          value={value1}
          placeholder={"Select"}
          onChange={(e) => {
            onSelectChange(e);
          }}
        />
      </Card>
    );
  },
];

export const SelectWithDefaultSelectedOptionsInSingleselect: any =
  Template.bind({});
SelectWithDefaultSelectedOptionsInSingleselect.decorators = [
  () => {
    const [value1, setValue] = useState<any>("AF");
    function onSelectChange(val: any) {
      setValue(val);
    }
    return (
      <Card title="Select with default selected options">
        <Select
          options={simpleOptions}
          value={value1}
          placeholder={"Select"}
          onChange={(e) => {
            onSelectChange(e);
          }}
        />
      </Card>
    );
  },
];

export const SelectWithDefaultSelectedOptionsInMultiSelect: any = Template.bind(
  {}
);
SelectWithDefaultSelectedOptionsInMultiSelect.decorators = [
  () => {
    const [value1, setValue] = useState<any>(["AF", "AL"]);
    function onSelectChange(val: any) {
      setValue(val);
    }
    return (
      <Card title="Select with default selected options in multiselect">
        <Select
          options={simpleOptions}
          value={value1}
          placeholder={"Select"}
          onChange={(e) => {
            onSelectChange(e);
          }}
          isMultiSelect
        />
      </Card>
    );
  },
];

export const SelectWithRealTimeFetch: any = Template.bind({});
SelectWithRealTimeFetch.decorators = [
  () => {
    const [value1, setValue] = useState([]);
    const [option, setOption] = useState([]);
    function onSelectChange(val: React.SetStateAction<never[]>) {
      setValue(val);
    }
    const fetchApi = async () => {
      let response = await fetch(
        "https://raw.githubusercontent.com/dragonofmercy/Tokenize2/master/demo/names.json"
      );
      let result = await response.json();
      const renamedData = await result.map((item: { [x: string]: any }) => {
        const newItem: any = {};
        Object.keys(item).forEach((key) => {
          let newKey = key;
          if (key === "text") newKey = "label";
          if (key === "name") newKey = "value";
          newItem[newKey] = item[key];
        });
        return newItem;
      });
      setOption(renamedData);
    };
    useEffect(() => {
      setTimeout(()=>{fetchApi()},2000)
    }, []);

    return (
      <Card title="Select with real time fetch">
        <Select
            isLoading={option.length === 0}
            options={option}
            value={value1}
            placeholder={"Select"}
            onChange={(e) => {
              onSelectChange(e);
            }}
            helpText="Select With Help Text"
          />
      </Card>
    );
  },
];
