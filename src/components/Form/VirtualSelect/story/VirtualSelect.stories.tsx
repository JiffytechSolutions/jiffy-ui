/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useCallback, useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Card } from "../../../Card";
import * as Icon from "../../../../storybook/Foundation/Icons/Icons";
import VirtualSelect from "../VirtualSelect";
const allIcons: any = { ...Icon };
export default {
  title: "Components/Form/VirtualSelect",
  component: VirtualSelect,
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
        options: ["success", "warning", "error", "none"],
      },
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
      description: "Select with creatable options",
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
    customClass: {
      description: "Add any desired custom class on dropdown",
      control: {
        type: "text",
      },
      defaultValue: "",
    }
  },
} as Meta;

const Template = ({ ...rest }) => {
  const [value1, setValue1] = useState([]);
  const onSelectChange = useCallback((val: React.SetStateAction<never[]>) => {
    setValue1(val);
  }, []);
  let temp: any = [];
  function selectOptions() {
    Array(10000)
      .fill(true)
      .forEach((_, index) => {
        let option: any = {
          label: `Label ${index}`,
          value: `${index}`,
        };
        // if (index % 5 === 0) {
        //   option.description = "This is description";
        // }
        temp.push(option);
      });
  }
  selectOptions();
  return (
    <Card>
      <VirtualSelect
        value={value1}
        label={`Select with ${temp.length} data`}
        helpText={rest.helpText}
        options={temp}
        isMultiSelect={rest.isMultiSelect}
        isSearchable={rest.isSearchable}
        isCreatable={rest.isCreatable}
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
        isDisabled={rest.isDisabled}
        placeholder={rest.placeholder}
        isLoading={rest.isLoading}
        onChange={onSelectChange}
        onInputChange={(e: any) => {}}
        customClass={rest.customClass}
        accessibilityLabel={rest.accessibilityLabel}
      />
    </Card>
  );
};
export const Primary = Template.bind({});
export const VirtualSelectWithGroupedData: any = Template.bind({});
VirtualSelectWithGroupedData.decorators = [
  () => {
    const [value1, setValue] = useState([]);
    function onSelectChange(val: React.SetStateAction<never[]>) {
      setValue(val);
    }
    let temp: any = [];
    function selectGroupedOptions() {
      Array(10000)
        .fill(true)
        .forEach((_, index) => {
          let option = {
            label: "This is Heading " + index,
            group: [
              { label: `Label ${index}`, value: index },
              {
                label: `Label ${index + 1}`,
                value: `${index}` + 1,
              },
            ],
          };
          // if (index % 5 === 0) {
          //   option.group.forEach((item: any) => {
          //     item.description = `Description for ${item.label}`;
          //   });
          // }
          temp.push(option);
        });
    }
    selectGroupedOptions();
    return (
      <Card>
        <VirtualSelect
          label="Select with 10 thousand grouped data"
          options={temp}
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
