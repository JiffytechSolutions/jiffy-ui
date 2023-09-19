import React from "react";
import { Button } from "../..";
import { ButtonI } from "../Button";
import { Meta } from "@storybook/react";
import { Card } from "../../Card";
import { Home, Settings } from "../../../storybook/Foundation/Icons/Icons";
import FlexLayout from "../../FlexLayout/FlexLayout";
import * as Icons from "../../../storybook/Foundation/Icons/Icons";
import ButtonDoc from "../Document/ButtonDoc";
const allIcons: any = { ...Icons };

export default {
  title: "Components/Actions/Button",
  component: Button,
  parameters: {
    sort: "requiredFirst",
    docs: {
      description: {
        component:
          "<div style='margin-top: 15px;'><div class='inte- flex inte- flex--wrap          inte- flex--spacing- Extraloose inte - flex--vertical'><div class='inte - flex__item'><h4 class='Paragraph  inte__text--light none inte__font--normal inte__Paragraph--font--large'>Buttons are clickable elements that are used to trigger actions based on a user's interaction.</h4></div><div class='inte - flex__item'><p><blockquote>Buttons allow users to interact with your system.</blockquote></p></div></div>",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=35-5148&t=g9vHn5iFX2wygfcP-0",
    },
  },
  argTypes: {
    children: {
      description: "The content to display inside the button.",
      control: {
        type: "text",
        disable: true,
      },
    },
    content: {
      description: "The content to display inside the button.",
      control: {
        type: "text",
      },
      defaultValue: "Button",
    },
    customClass: {
      description: "Custom Class for Button",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    icon: {
      description:
        "Icon to display to the left (default) of the button content   <b>In Disable Case You need To set the icon color </b>",
      control: {
        type: "select",
        options: Object.keys(allIcons),
      },
      defaultValue: "Search",
    },
    type: {
      description: "Change the type of the Button component",
      control: {
        type: "radio",
        options: [
          "primary",
          "danger",
          "dangerOutlined",
          "secondary",
          "outlined",
          "dangerPlain",
          "textButton",
        ],
      },
      defaultValue: "primary",
    },
    status: {
      description:
        "Change the Color of the  status   <b>(On type dangerPlained and textButton it is not appliclable)</b>",
      control: {
        type: "radio",
        options: ["primary", "secondary", "success", "error", "warning"],
      },
    },

    isFullWidth: {
      description:
        "Allows the button to grow to the width of its parent container",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    size: {
      description:
        "Changes the size of the button, giving it more or less height width <table><thead><tr><th>Props</th><th>Value</th></tr></thead><tbody><tr><td><strong>large</strong></td><td>44px height</td></tr><tr><td><strong>thin</strong></td><td>38px height</td></tr><tr><td><strong>extraThin</strong></td><td>32px height</td></tr><tbody></table>",
      control: {
        type: "radio",
        options: ["large", "thin", "extraThin"],
      },
      defaultValue: "large",
    },
    halign: {
      description:
        "Changes the inner text alignment of the button <b>(works with icon prop and full width Button)</b> ",
      control: {
        type: "radio",
        options: ["equal", "end", "start", "spaceBetween", "center"],
      },
      defaultValue: "equal",
    },
    iconAlign: {
      description: "Shifts the Icon to left/right of the button content",

      control: {
        type: "radio",
        options: ["left", "right"],
      },
      defaultValue: "left",
    },
    isLoading: {
      description:
        "Replaces button text with a spinner while a background action is being performed",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    isDisabled: {
      description: "Disables the button, disallowing user interaction",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    isHaptic: {
      description:
        "Set haptic enable or disable on Mobile Device <b>Not Work on IOS Devices",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    hapticTimeout: {
      description: "set timeout for haptic",
      control: {
        type: "number",
      },
      defaultValue: 10,
    },
    navigatorPattern: {
      description:
        "Set Navigator Pattern <br/> <b>You can set pattern like This<b/>:<br/><b>[100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100]</b><br/><b>[100]</b>   <br/> Value is given in the form of array ",
      control: {
        type: "number",
      },
      defaultValue: [
        100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30,
        100,
      ],
    },
    onClick: {
      description: "Callback when clicked",
      control: {
        type: "function",
      },
    },
    onBlur: {
      description: "Callback when onBlur",
      control: {
        type: "function",
      },
    },
    onMouseEnter: {
      description: "Callback when onMouseEnter",
      control: {
        type: "function",
      },
    },
    accessibilityLabel: {
      description: "Visually hidden text for screen readers",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    ariaControls: {
      description: "Id of the element the button controls",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    ariaExpanded: {
      description: "Tells screen reader the controlled element is expanded",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    disclosure: {
      description:
        "Displays the button with a disclosure (chevron) icon. Defaults to `down` when set to true",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    ariaDescribedBy: {
      description: "Indicates the ID of the element that describes the button.",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    id: {
      description: "A unique identifier for the button",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    ariaOwns: {
      description: "Indicates the ID of the element that own the Button",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
  },
} as Meta;
interface NewI extends ButtonI {
  icon: "home";
}

const Template = (rest: NewI) => {
  // retrieves the appropriate icon passes it as a component prop

  return (
    <Card cardType="borderLess" title={"Button"}>
      <Button
        {...rest}
        isHaptic={rest.isHaptic}
        onClick={() => {}}
        icon={allIcons[rest.icon]({
          size: `${
            rest.size == "large"
              ? 20
              : rest.size == "thin"
              ? 20
              : rest.size == "extraThin"
              ? 16
              : 20
          }`,
          color: `${
            rest.type == "primary"
              ? "var(--inte-G0)"
              : rest.type == "danger"
              ? "var(--inte-G0)"
              : rest.type == "dangerOutlined" && !rest.isDisabled
              ? "var(--inte-R200)"
              : rest.type == "dangerOutlined" && rest.isDisabled
              ? "var(--inte-R55)"
              : rest.type == "secondary" && !rest.isDisabled
              ? "var(--inte-G800)"
              : rest.type == "secondary" && rest.isDisabled
              ? "var(--inte-G50)"
              : rest.type == "outlined" && !rest.isDisabled
              ? "var(--inte-G800)"
              : rest.type == "outlined" && rest.isDisabled
              ? "var(--inte-G40)"
              : rest.type == "dangerPlain" && !rest.isDisabled
              ? "var(--inte-R200)"
              : rest.type == "dangerPlain" && rest.isDisabled
              ? "var(--inte-R55)"
              : rest.type == "textButton" && !rest.isDisabled
              ? "var(--inte-G200)"
              : rest.type == "textButton" && rest.isDisabled
              ? "var(--inte-G50)"
              : "var(--inte-G0)"
          }`,
        })}
        hapticTimeout={10}
        isFullWidth={rest.isFullWidth}
        disclosure={rest.disclosure}
      />
    </Card>
  );
};
export const Primary: any = Template.bind({});

// Button Types
const types = [
  "primary",
  "danger",
  "dangerOutlined",
  "secondary",
  "outlined",
  "dangerPlain",
  "textButton",
];

export const Types: any = Template.bind({});
Types.story = {
  parameters: {
    docs: {
      storyDescription:
        "<blockquote>Button types are used as per the requirements of the app, that allow users to easily differentiate between the types of actions. Variants allow you to define the styles used across multiple buttons. It is therefore important that the different variants are implemented consistently across products, so that they message the correct actions</blockquote><p><strong>Primary action </strong>: Primary buttons should be a strong visual indicator to help the user to complete their journey.</p><p><strong>Secondary action</strong> : Secondary buttons are the alternative we give users to the primary action.</p><p><strong>Distructive action</strong> : If a particular destructive action is the primary action, it is usally a good idea to flag this visually with a “destructive” variant of a button. This makes it clear to the user that they are about to take a highly consequential action.</p>",
    },
  },
};
Types.decorators = [
  () => (
    <Card cardType="borderLess" title={"Button Type Options"}>
      <FlexLayout spacing="loose" valign="center" wrap="wrap">
        {types.map((variant: any) => (
          <Button size="large" type={variant}>
            {variant}
          </Button>
        ))}
      </FlexLayout>
    </Card>
  ),
];

// Button Length
export const FullWidth: any = Template.bind({});
FullWidth.story = {
  parameters: {
    docs: {
      storyDescription: "<h4 class='hello'>myStoryFunctionDescription</h4>",
    },
  },
};
FullWidth.decorators = [
  () => (
    <Card title={"Button Length Options"}>
      <FlexLayout spacing="extraLoose" direction="vertical">
        <Button size="large" halign="center" isFullWidth={true}>
          Full Width Button
        </Button>
      </FlexLayout>
    </Card>
  ),
];

// Button size
export const size: any = Template.bind({});
size.decorators = [
  () => (
    <Card title={"Button size Options"}>
      <FlexLayout direction="vertical" spacing="loose">
        <Card title={"Large"}>
          <FlexLayout spacing="tight" valign="center" wrap="wrap">
            {types.map((variant: any) => (
              <Button type={variant} size="large">
                {variant}
              </Button>
            ))}
          </FlexLayout>
        </Card>
        <Card title={"Thin"}>
          <FlexLayout spacing="tight" valign="center" wrap="wrap">
            {types.map((variant: any) => (
              <Button type={variant} size="thin">
                {variant}
              </Button>
            ))}
          </FlexLayout>
        </Card>
        <Card title={"ExtraThin"}>
          <FlexLayout spacing="tight" valign="center" wrap="wrap">
            {types.map((variant: any, index: number) => (
              <Button key={index} type={variant} size="extraThin">
                {variant}
              </Button>
            ))}
          </FlexLayout>
        </Card>
      </FlexLayout>
    </Card>
  ),
];

// Button Halign
const halign = ["equal", "end", "start", "spaceBetween", "center"];
export const Halign: any = Template.bind({});
Halign.decorators = [
  () => (
    <Card
      subTitle={"Works with Icon Only and Full Button"}
      title={"Icon Alignment in Button"}
    >
      <FlexLayout spacing="extraLoose" direction="vertical">
        {halign.map((variant: any, index: number) => (
          <Button
            key={index}
            size="large"
            icon={<Home size={20} color="#ffffff" />}
            isFullWidth={true}
            halign={variant}
          >
            {variant}
          </Button>
        ))}
      </FlexLayout>
    </Card>
  ),
];

// iconAlign
const iconAlign = ["left", "right"];
export const Icon_Align: any = Template.bind({});
Icon_Align.decorators = [
  () => (
    <Card title={"Icon Alignment Option"}>
      <FlexLayout spacing="extraLoose">
        {iconAlign.map((variant: any, index) => (
          <Button
            key={index}
            size="large"
            iconAlign={variant}
            icon={<Home color="#ffffff" size={20} />}
          >
            {variant}
          </Button>
        ))}
      </FlexLayout>
    </Card>
  ),
];

// Disable

export const Disable: any = Template.bind({});
Disable.decorators = [
  () => (
    <Card title={"Disabled Button Options"}>
      <FlexLayout spacing="loose" valign="center" wrap="wrap">
        {types.map((variant: any, index) => (
          <Button key={index} size="large" type={variant} isDisabled={true}>
            Disabled button
          </Button>
        ))}
      </FlexLayout>
    </Card>
  ),
];

// Loading
export const Loading: any = Template.bind({});
Loading.decorators = [
  () => (
    <Card title={"Loading States of Button"}>
      <FlexLayout spacing="loose" valign="center" wrap="wrap">
        {types.map((variant: any, index) => (
          <Button
            key={index}
            size="large"
            accessibilityLabel={variant}
            type={variant}
            isLoading={true}
          >
            {variant}
          </Button>
        ))}
      </FlexLayout>
    </Card>
  ),
];

// Icon Only
export const Only_Icon: any = Template.bind({});
Only_Icon.decorators = [
  () => (
    <Card title={"Icon Only Options"}>
      <FlexLayout direction="vertical">
        <Card title={"size Large"}>
          <FlexLayout spacing="loose" valign="center" wrap="wrap">
            {types.map((variant: any, index: number) => (
              <Button
                key={index}
                accessibilityLabel="Icon Only Button"
                size="large"
                type={variant}
                icon={
                  <Settings
                    color={
                      variant == "primary" || variant == "danger"
                        ? "#ffffff"
                        : variant == "dangerOutlined" ||
                          variant == "dangerPlain"
                        ? "#DF5146"
                        : variant == "secondary" || variant == "outlined"
                        ? "#1C2433"
                        : variant == "textButton"
                        ? "#70747e"
                        : "#dddddd"
                    }
                    size={20}
                  />
                }
              />
            ))}
          </FlexLayout>
        </Card>
        <Card title={"size Thin"}>
          <FlexLayout spacing="loose" valign="center">
            {types.map((variant: any, index) => (
              <Button
                key={index}
                accessibilityLabel="Icon Only Button"
                size="thin"
                type={variant}
                icon={
                  <Settings
                    color={
                      variant == "primary" || variant == "danger"
                        ? "#ffffff"
                        : variant == "dangerOutlined" ||
                          variant == "dangerPlain"
                        ? "#DF5146"
                        : variant == "secondary" || variant == "outlined"
                        ? "#1C2433"
                        : variant == "textButton"
                        ? "#70747e"
                        : "#dddddd"
                    }
                    size={20}
                  />
                }
              ></Button>
            ))}
          </FlexLayout>
        </Card>
        <Card title={"size ExtraThin"}>
          <FlexLayout spacing="loose" valign="center">
            {types.map((variant: any, index) => (
              <Button
                key={index}
                accessibilityLabel="Icon Only Button"
                size="extraThin"
                type={variant}
                icon={
                  <Settings
                    color={
                      variant == "primary" || variant == "danger"
                        ? "#ffffff"
                        : variant == "dangerOutlined" ||
                          variant == "dangerPlain"
                        ? "#DF5146"
                        : variant == "secondary" || variant == "outlined"
                        ? "#1C2433"
                        : variant == "textButton"
                        ? "#70747e"
                        : "#dddddd"
                    }
                    size={20}
                  />
                }
              ></Button>
            ))}
          </FlexLayout>
        </Card>
      </FlexLayout>
    </Card>
  ),
];

// Button Status
const statusType: any = ["secondary", "primary", "success", "error", "warning"];
export const Button_Status: any = Template.bind({});
Button_Status.decorators = [
  () => (
    <Card title="size Large">
      <FlexLayout spacing="loose" valign="center">
        {statusType.map((variant: any, index: number) => (
          <Button
            key={index}
            status={variant}
            accessibilityLabel="Icon Only Button"
            type="outlined"
            icon={<Icons.Bell />}
          />
        ))}
      </FlexLayout>
    </Card>
  ),
];
//Button haptic
export const Button_Haptic: any = Template.bind({});
Button_Haptic.decorators = [
  () => (
    <Card title="size Large">
      <Button
        isHaptic={true}
        onClick={() => {}}
        hapticTimeout={10}
        navigatorPattern={[
          100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100,
          30, 100,
        ]}
        accessibilityLabel="Icon Only Button"
        type="outlined"
        content="Button"
      />
    </Card>
  ),
];
export function Documentation() {
  return <ButtonDoc />;
}
