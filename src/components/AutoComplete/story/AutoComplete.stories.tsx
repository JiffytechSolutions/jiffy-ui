import React, { useState } from "react";
import AutoComplete from "../AutoComplete";
import { Card } from "../..";
import { FlexChild, FlexLayout } from "../../FlexLayout";
import Text from "../../Text/Text";
import Alert from "../../Alert/Alert";
import AutoCompleteDoc from "../Document/AutoCompleteDoc";
export default {
  title: "Components/Form/AutoComplete",
  component: AutoComplete,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=1650-120962&t=tb1dL4Z7hEk2Cb1x-0",
    },
  },
  argTypes: {
    name: {
      description: "Set Label for the Autocomplete",
      control: {
        type: "text",
      },
      defaultValue: "Label",
    },
    options: {
      description: `<div><strong>You can send array of objects for dropdown Items:-</strong></div><i>Accepted key value pairs:</i><table bgcolor="#f5f5f5"><thead><tr><th>key</th><th>value</th></tr></thead><tbody><tr><td>label<span style="color:red">*</span></td><td>label(String)</td></tr><tr><td>value<span style="color:red">*</span></td><td>value(String | Number)</td></tr><tr><td>id</td><td>id(String)</td></tr><tr><td>lname</td><td>lname(string)</td></tr><tr><td>popoverContent</td><td>popoverContent(ReactNode)</td></tr></tbody></table>`,

      defaultValue: [
        {
          label: "Cristin",
          value: "Cristin",
          id: "popover5",
        },
        {
          label: "Auto Autox",
          value: "Auto Autox",
          id: "popover5",
        },
        {
          label: "Auto pqr",
          value: "Auto pqr",
          id: "popover5",
        },
        {
          label: "Jocelyne",
          value: "Jocelyne",
          id: "popover6",
        },
      ],
    },
    value: {
      description: "It's your selected value",
      control: {
        disable: true,
      },
    },
    helpText: {
      description: "Show your Help text",
      control: {
        type: "text",
      },
      defaultValue: "Kindly Search your required Item",
    },
    placeHolder: {
      description: "Show your Placeholder",
      control: {
        type: "text",
      },
      defaultValue: "Search Your Items",
    },
    customClass: {
      description:
        "Set Any custom class to dropdown to manage your Custom design needs",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    setHiglighted: {
      description: "Show heighlighted text text when user search any query",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    showPopover: {
      description: "Show popover on hovering searched items list",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    onChange: {
      description: "Callback when user input",
      control: {
        type: "function",
      },
    },
    onClick: {
      description: "Callback when onClick",
      control: {
        type: "function",
      },
    },
    onEnter: {
      description: "Callback when onEnter",
      control: {
        type: "function",
      },
    },
    isClearable: {
      description: "Clear typed query in search box or clear selected value",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    onClear: {
      description:
        "Call back function to fire when user clear any data from textfield",
      control: {
        type: "boolean",
        disable: true,
      },
    },
    isLoading: {
      description: "Show loading state when data is fetching",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    id: {
      description: "Set Id for Autocomplete",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    popoverPosition: {
      description: "Set Position Of the Popover",
      control: {
        type: "radio",
        options: ["right", "left", "top", "bottom"],
      },
      defaultValue: "right",
    },
  },
};

const names = [
  {
    label: "Barbara-anne Barbara-anne Barbara-anne Barbara-anne",
    value: "1",
    lname: "hello",
    id: "popover0",
    popoverContent: (
      <FlexLayout direction="vertical" spacing="loose">
        <FlexLayout wrap="noWrap" spacing="tight">
          <Text fontweight="bold">Size :</Text>
          <Text textcolor="secondary">Barbara</Text>
        </FlexLayout>
        <FlexLayout wrap="noWrap" spacing="tight">
          <Text fontweight="bold">Intrests:</Text>
          <Text textcolor="secondary">
            People who have expressed an interest in or liked pages related to
            Reading and Leed Festivals.
          </Text>
        </FlexLayout>
        <FlexLayout wrap="noWrap" spacing="tight">
          <Text fontweight="bold">Description</Text>
          <Text textcolor="secondary">
            People who have expressed an interest in or liked pages related to
            Reading and Leed Festivals.
          </Text>
        </FlexLayout>
        <Alert
          type="info"
          title="The audience size for the selected interest group is shown as a range. These numbers are subject to change over time."
        />
      </FlexLayout>
    ),
  },
  {
    label: "Jahaj Jahaaj jahaajj",
    value: "Jahaj Jahaaj jahaajj",
    id: "popover1",
    popoverContent: (
      <FlexLayout direction="vertical" spacing="loose">
        <FlexLayout wrap="noWrap" spacing="tight">
          <Text fontweight="bold">Size :</Text>
          <Text textcolor="secondary">jahaaj</Text>
        </FlexLayout>
        <FlexLayout wrap="noWrap" spacing="tight">
          <Text fontweight="bold">Intrests:</Text>
          <Text textcolor="secondary">
            People who have expressed an interest in or liked pages related to
            Reading and Leed Festivals.
          </Text>
        </FlexLayout>
        <FlexLayout wrap="noWrap" spacing="tight">
          <Text fontweight="bold">Description</Text>
          <Text textcolor="secondary">
            People who have expressed an interest in or liked pages related to
            Reading and Leed Festivals.
          </Text>
        </FlexLayout>
        <Alert
          type="info"
          title="The audience size for the selected interest group is shown as a range. These numbers are subject to change over time."
        />
      </FlexLayout>
    ),
  },
  {
    label: "Debi",
    value: "6565656565656565",
    id: "popover2",
    popoverContent: (
      <FlexLayout direction="vertical" spacing="loose">
        <FlexLayout wrap="noWrap" spacing="tight">
          <Text fontweight="bold">Size :</Text>
          <Text textcolor="secondary">42Debi</Text>
        </FlexLayout>
        <FlexLayout wrap="noWrap" spacing="tight">
          <Text fontweight="bold">Intrests:</Text>
          <Text textcolor="secondary">
            People who have expressed an interest in or liked pages related to
            Reading and Leed Festivals.
          </Text>
        </FlexLayout>
        <FlexLayout wrap="noWrap" spacing="tight">
          <Text fontweight="bold">Description</Text>
          <Text textcolor="secondary">
            People who have expressed an interest in or liked pages related to
            Reading and Leed Festivals.
          </Text>
        </FlexLayout>
        <Alert
          type="info"
          title="The audience size for the selected interest group is shown as a range. These numbers are subject to change over time."
        />
      </FlexLayout>
    ),
  },
  {
    label: "Debi one",
    value: "Debi one",
    id: "popover3",
    popoverContent: (
      <FlexLayout direction="vertical" spacing="loose">
        <FlexLayout wrap="noWrap" spacing="tight">
          <Text fontweight="bold">Size :</Text>
          <Text textcolor="secondary">4200000 , 520001.</Text>
        </FlexLayout>
        <FlexLayout wrap="noWrap" spacing="tight">
          <Text fontweight="bold">Intrests:</Text>
          <Text textcolor="secondary">
            People who have expressed an interest in or liked pages related to
            Reading and Leed Festivals.
          </Text>
        </FlexLayout>
        <FlexLayout wrap="noWrap" spacing="tight">
          <Text fontweight="bold">Description</Text>
          <Text textcolor="secondary">
            People who have expressed an interest in or liked pages related to
            Reading and Leed Festivals.
          </Text>
        </FlexLayout>
        <Alert
          type="info"
          title="The audience size for the selected interest group is shown as a range. These numbers are subject to change over time."
        />
      </FlexLayout>
    ),
  },
  {
    label: "Cara",
    value: "Cara",
    id: "popover4",
    popoverContent: (
      <FlexLayout direction="vertical" spacing="loose">
        <FlexLayout wrap="noWrap" spacing="tight">
          <Text fontweight="bold">Size :</Text>
          <Text textcolor="secondary">4200000 , 520002.</Text>
        </FlexLayout>
        <FlexLayout wrap="noWrap" spacing="tight">
          <Text fontweight="bold">Intrests:</Text>
          <Text textcolor="secondary">
            People who have expressed an interest in or liked pages related to
            Reading and Leed Festivals.
          </Text>
        </FlexLayout>
        <FlexLayout wrap="noWrap" spacing="tight">
          <Text fontweight="bold">Description</Text>
          <Text textcolor="secondary">
            People who have expressed an interest in or liked pages related to
            Reading and Leed Festivals.
          </Text>
        </FlexLayout>
        <Alert
          type="info"
          title="The audience size for the selected interest group is shown as a range. These numbers are subject to change over time."
        />
      </FlexLayout>
    ),
  },
  {
    label: "Cristin",
    value: "Cristin",
    id: "popover5",
  },
  {
    label: "Auto Autox",
    value: "Auto Autox",
    id: "popover5",
  },
  {
    label: "Auto pqr",
    value: "Auto pqr",
    id: "popover5",
  },
  {
    label: "Jocelyne",
    value: "Jocelyne",
    id: "popover6",
  },
  {
    label: "Elmo",
    value: "Elmo",
    id: "popover7",
  },
  {
    label: "Ivette",
    value: "Ivette",
    id: "popover8",
  },
  {
    label: "Lea",
    value: "Lea",
    id: "popover9",
  },
  {
    label: "Michel",
    value: "Michel",
    id: "popover10",
  },
  {
    label: "Leigha",
    value: "Leigha",
    id: "popover11",
  },
  {
    label: "Titus",
    value: "Titus",
  },
  {
    label: "Nollie",
    value: "Nollie",
  },
  {
    label: "Celle",
    value: "Celle",
  },
  {
    label: "Thea",
    value: "Thea",
  },
  {
    label: "Brynn",
    value: "Brynn",
  },
  {
    label: "Brynn",
    value: "Brynn",
  },
  {
    label: "Brynn",
    value: "Brynn",
  },
  {
    label: "Brynn",
    value: "Brynn",
  },
  {
    label: "Brynn",
    value: "Brynn",
  },
  {
    label: "Brynn",
    value: "Brynn",
  },
  {
    label: "Brynn",
    value: "Brynn",
  },
  {
    label: "Brynn",
    value: "Brynn",
  },

  {
    label: "Sloane",
    value: "Sloane",
  },
  {
    label: "Margalo",
    value: "Margalo",
  },
  {
    label: "Genevieve",
    value: "Genevieve",
  },
  {
    label: "Niel",
    value: "Niel",
  },
  {
    label: "Heddi",
    value: "Heddi",
  },
  {
    label: "Gregg",
    value: "Gregg",
  },
  {
    label: "Eduard",
    value: "Eduard",
  },
  {
    label: "Kizzee",
    value: "Kizzee",
  },
  {
    label: "Truman",
    value: "Truman",
  },
  {
    label: "Merill",
    value: "Merill",
  },
  {
    label: "Lindie",
    value: "Lindie",
  },
  {
    label: "Vasily",
    value: "Vasily",
  },
  {
    label: "Averil",
    value: "Averil",
  },
  {
    label: "Golda",
    value: "Golda",
  },
  {
    label: "Zorine",
    value: "Zorine",
  },
  {
    label: "Odele",
    value: "Odele",
  },
  {
    label: "Amalie",
    value: "Amalie",
  },
  {
    label: "Ilsa",
    value: "Ilsa",
  },
  {
    label: "Pepillo",
    value: "Pepillo",
  },
];
const Template = ({ ...rest }) => {
  const [value, setValue] = useState("");

  function onChangex(e: string) {
    setValue(e);
  }
  function onEnter(e: string) {
    setValue(e);
  }
  function onclicks(e: string) {}
  return (
    <div>
      <Card title={"Autocomplete"}>
        <FlexLayout halign="center">
          <FlexChild desktopWidth="100" tabWidth="100" mobileWidth="100">
            <AutoComplete
              {...rest}
              options={names}
              name={rest.name}
              helpText={rest.helpText}
              value={value}
              onChange={onChangex}
              onEnter={onEnter}
              onClick={() => {}}
              setHiglighted={rest.setHiglighted}
              isLoading={rest.isLoading}
              isClearable={rest.isClearable}
              onClear={() => setValue("")}
            />
          </FlexChild>
        </FlexLayout>
      </Card>
    </div>
  );
};
export const Primary = Template.bind({});

//autocomplete without highlight
export const autocomplete_without_Highlight: any = Template.bind({});
autocomplete_without_Highlight.decorators = [
  () => {
    const [value, setValue] = useState("");
    function onEnter(e: string) {
      setValue(e);
    }
    function onChange(e: string) {
      setValue(e);
    }
    function onclicks(e: string) {}
    return (
      <Card>
        <AutoComplete
          name="AutoComplete Without Highlight"
          value={value}
          options={names}
          onEnter={onEnter}
          onClick={onclicks}
          onChange={onChange}
        />
      </Card>
    );
  },
];

// With Popover
export const autocomplete_with_popover_position: any = Template.bind({});
autocomplete_with_popover_position.decorators = [
  () => {
    const [value, setValue] = useState<any>([]);
    function Test(values: any, index: any) {
      const temp = [...value];
      temp[index] = values;
      setValue(temp);
    }

    return (
      <Card>
        <FlexLayout wrap="wrap" desktopWidth="50" tabWidth="33" spacing="loose">
          {["left", "right", "top", "bottom"].map((item: any, index) => {
            return (
              <AutoComplete
                options={names}
                key={index}
                name={item + " " + "Popover Position"}
                placeHolder="Autocomplete without Heighlighted Text"
                helpText="You can search Your Term"
                value={value[index]}
                onChange={(e: any) => Test(e, index)}
                setHiglighted={true}
                showPopover
                popoverPosition={item}
                onClick={undefined}
              />
            );
          })}
        </FlexLayout>
      </Card>
    );
  },
];
export function Documentation() {
  return <AutoCompleteDoc />;
}
