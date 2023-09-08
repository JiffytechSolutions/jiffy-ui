import React from "react";
import { useState } from "react";
import Card from "../../Card/Card";
import { FlexLayout } from "../../FlexLayout";
import { En, GB, icon, US } from "./icon";
import Switcher from "../Switcher";
import SwitcherDoc from "../Document/SwitcherDoc";
export default {
  title: "Components/Actions/Switcher",
  component: Switcher,
  parameters: {
    docs: {
      description: {
        component:
          "<div style='margin-top: 15px;'><div class='inte- flex inte- flex--wrap inte- flex--spacing- Extraloose inte - flex--vertical'><div class='inte - flex__item'><h4 class='Paragraph  inte__text--light none inte__font--normal inte__Paragraph--font--large'>The Switcher component provides app visitors with the ability to choose from a range of options. Switcher consists of a drop-down menu of options.</h4></div><div class='inte - flex__item'><p><blockquote>Switcher is used for currency, language , accounts, etc.</blockquote></p></div></div>",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=2173-167489&t=tb1dL4Z7hEk2Cb1x-0",
    },
  },
  argTypes: {
    label: {
      description: "Set Label for Switcher",
      control: {
        type: "text",
      },
      defaultValue: "Label",
    },
    heading: {
      description: "Set Heading for Switcher in mobile view",
      control: {
        type: "text",
      },
      defaultValue: "Heading",
    },
    isDisabled: {
      description: "Set Switcher disable",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    isRequired: {
      description: "Set whether reequired",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    options: {
      description: `<div><strong>You can send array of objects for dropdown Items:-</strong></div><i>Accepted key value pairs:</i><table bgcolor="#f5f5f5"><thead><tr><th>key</th><th>value</th></tr></thead><tbody><tr><td>label<span style="color:red">*</span></td><td>label(String)</td></tr><tr><td>icon<span style="color:red">*</span></td><td>icon(ReactNode)</td></tr><tr><td>disable</td><td>disable(boolean)</td></tr></tbody></table>`,
      defaultValue: [
        {
          label: "USD",
          icon: icon,
        },
        {
          label: "EUR",
          icon: En,
        },
        {
          label: "eUR",
          icon: En,
        },
        {
          label: "GB-EN",
          icon: GB,
        },
        {
          label: "UR",
          icon: US,
        },
      ],
    },
    optionDescription: {
      description: "Set description for option",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    customClass: {
      description: "Set customClass for switcher",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    value: {
      description: "It's your selected value",
      control: {
        disable: true,
      },
    },
    onChange: {
      description: "Called when selecting an option",
      control: {
        disable: true,
      },
    },
    direction: {
      description: "Set direction of dropdown",
      control: {
        type: "radio",
        options: ["left", "right", "auto"],
      },
      defaultValue: "auto",
    },
    ariaLabelledBy: {
      description: "Set ariaLabelledBy ",
      control: {
        type: "text",
      },
      defaultValue: "country Switcher",
    },
    closeOnEsc: {
      description: "Enable Switcher close on Esc Button click",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
  },
};

const options = [
  {
    label: "USD",
    icon: icon,
  },
  {
    label: "EUR",
    icon: En,
  },
  {
    label: "eUR",
    icon: En,
  },
  {
    label: "GB-EN",
    icon: GB,
  },
  {
    label: "UR",
    icon:US
  },

];
const Template = ({ ...rest }) => {
  const [value, setValue] = useState<any>(options[0]);

  const handleCurrencyChange = (currency: any) => {
    setValue(currency);
  };
  return (
    <Card title={"Switcher"}>
      <FlexLayout>
        <Switcher
          closeOnEsc={rest.closeOnEsc}
          direction={rest.direction}
          ariaLabelledBy={rest.arialabelledby}
          isDisabled={rest.isDisabled}
          label={rest.label}
          options={options}
          value={value}
          optionDescription={rest.optionDescription}
          customClass={rest.customClass}
          onChange={handleCurrencyChange}
          isRequired={rest.isRequired}
        />
      </FlexLayout>
    </Card>
  );
};

export const Primary: any = Template.bind({});
//Disabled Switcher
export const DisabledSwitcher: any = Template.bind({});
DisabledSwitcher.decorators = [
  () => {
    return (
      <Card title={" Disabled Switcher"}>
        <FlexLayout>
          <Switcher
            isDisabled
            options={options}
            onChange={() => { }}
            value={options[0]}
          />
        </FlexLayout>
      </Card>
    );
  },
];
// Switcher with Label
export const SwitcherWithLabel: any = Template.bind({});
SwitcherWithLabel.decorators = [
  () => {
    const [value, setValue] = useState<any>(options[0]);

    const handleCurrencyChange = (currency: any) => {
      setValue(currency);
    };
    return (
      <Card title={" Switcher With Label"}>
        <FlexLayout>
          <Switcher
            label="Label"
            options={options}
            onChange={handleCurrencyChange}
            value={value}
          />
        </FlexLayout>
      </Card>
    );
  },
];
// Switcher with Label
export const SwitcherWithoutLabel: any = Template.bind({});
SwitcherWithoutLabel.decorators = [
  () => {
    const [value, setValue] = useState<any>(options[0]);

    const handleCurrencyChange = (currency: any) => {
      setValue(currency);
    };
    return (
      <Card title={" Switcher Without Label"}>
        <FlexLayout>
          <Switcher
            options={options}
            onChange={handleCurrencyChange}
            value={value}
          />
        </FlexLayout>
      </Card>
    );
  },
];
// Switcher with Options Disabled
export const SwitcherWithOptionsDisabled: any = Template.bind({});
SwitcherWithOptionsDisabled.decorators = [
  () => {
    const options = [
      {
        label: "USD",
        icon: icon,
      },
      {
        label: "EUR",
        icon: icon,
      },
      {
        label: "GB-EN",
        icon: GB,
        disable: true,
      },
      {
        label: "UR",
        icon: icon,
      },
    ];
    const [value, setValue] = useState<any>(options[0]);

    const handleCurrencyChange = (currency: any) => {
      setValue(currency);
    };
    return (
      <Card title={" Switcher with Options Disabled"}>
        <FlexLayout>
          <Switcher
            label="Label"
            options={options}
            onChange={handleCurrencyChange}
            value={value}
          />
        </FlexLayout>
      </Card>
    );
  },
];
// Switcher with Options Disabled
export const SwitcherWithOptionsDescription: any = Template.bind({});
SwitcherWithOptionsDescription.decorators = [
  () => {
    const [value, setValue] = useState<any>(options[0]);

    const handleCurrencyChange = (currency: any) => {
      setValue(currency);
    };
    return (
      <Card title={"Switcher with Options Description"}>
        <FlexLayout>
          <Switcher
            label="Label"
            options={options}
            optionDescription="Languages"
            onChange={handleCurrencyChange}
            value={value}
          />
        </FlexLayout>
      </Card>
    );
  },
];
export function Documentation() {
  return <SwitcherDoc />;
}
