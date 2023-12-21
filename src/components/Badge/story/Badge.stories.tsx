import React from "react";
import Card from "../../Card/Card";
import FlexLayout from "../../FlexLayout/FlexLayout";
import Badge from "../Badge";
import { Check } from "../../../storybook/Foundation/Icons/Icons";
import * as Icons from "../../../storybook/Foundation/Icons/Icons";
import BadgeDoc from "../Component/BadgeDoc";
const allIcons: any = { ...Icons };

export default {
  title: "Components/Media/Badge",
  component: Badge,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=485-26790&t=tb1dL4Z7hEk2Cb1x-0",
    },
  },
  argTypes: {
    children: {
      description: "Enter children",
      control: {
        type: "text",
      },
      defaultValue: "Badge",
    },
    dot: {
      description: "Badge Change in Dot ",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    type: {
      description: "Set type badge background color",
      control: {
        type: "radio",
        options: ["primary", "secondary", "success", "error", "warning"],
      },
      defaultValue: "primary",
    },
    helpText: {
      description: "Set help text string",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    helpPosition: {
      description: "Set position of help",
      control: {
        type: "radio",
        options: ["left", "right", "top", "bottom"],
      },
      defaultValue: "bottom",
    },
    iconAlign: {
      description: "Set Postion of Icon",
      control: {
        type: "radio",
        options: ["left", "right"],
      },
      defaultValue: "left",
    },
    variant: {
      description: "Choose variant of Badge",
      control: {
        type: "radio",
        options: ["filled", "accent"],
      },
      defaultValue: "filled",
    },
    icon: {
      description: "Set Badge  Icon",
      control: {
        type: "select",
        options: Object.keys(allIcons),
      },
      defaultValue: "Search",
    },
    size: {
      description: "Set Size of Badage",
      control: {
        type: "radio",
        options: ["large", "medium", "small"],
      },
      defaultValue: "large",
    },
    customBgColor: {
      description: "Set Custom Bg Color",
      control: {
        type: "color",
      },
      defaultValue: "",
    },
    customClass: {
      description: "set CustomClass",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    badgeTextColor: {
      description: "Set Custom Color",
      control: {
        type: "color",
      },
      defaultValue: "",
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <Card>
      <Badge
        {...rest}
        variant={rest.variant}
        size={rest.size}
        icon={allIcons[rest.icon]({
          size: 16,
          color: `${
            rest.variant === "accent" && rest.type === "primary"
              ? "var(--inte-P900)"
              : rest.variant === "accent" && rest.type == "secondary"
              ? "var(--inte-G800)"
              : rest.variant === "accent" && rest.type == "success"
              ? "var(--inte-GR150)"
              : rest.variant === "accent" && rest.type == "error"
              ? "var(--inte-R400)"
              : rest.variant === "accent" && rest.type == "warning"
              ? "var(--inte-Y600)"
              : "var(--inte-G0)"
          }`,
        })}
        iconAlign={rest.iconAlign}
        type={rest.type}
        customBgColor={rest.customBgColor}
        badgeTextColor={rest.badgeTextColor}
        helpText={rest.helpText}
        helpPosition={rest.helpPosition}
        dot={rest.dot}
      >
        {rest.children}
      </Badge>
    </Card>
  );
};

export const Primary: any = Template.bind({});

//Types
const size = ["primary", "secondary", "success", "error", "warning"];
export const Types: any = Template.bind({});
Types.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose" wrap="wrap">
        {size.map((variant: any, index: any) => (
          <Badge key={index} type={variant}>
            {variant} Badge
          </Badge>
        ))}
      </FlexLayout>
    </Card>
  ),
];
//Size
export const Size: any = Template.bind({});
Size.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose">
        {["small", "medium", "large"].map((variant: any, index: any) => (
          <Badge key={index} size={variant} type={"primary"}>
            {variant} Badge
          </Badge>
        ))}
      </FlexLayout>
    </Card>
  ),
];

// Badge with Filled Variant
export const BadgeFilledVariant: any = Template.bind({});
BadgeFilledVariant.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose" wrap="wrap">
        {size.map((variant: any) => (
          <Badge variant="filled" type={variant}>
            {variant} Badge
          </Badge>
        ))}
      </FlexLayout>
    </Card>
  ),
];

// Badge with Filled Variant with left and Right Icon Align
export const BadgeFilledVariantWithLeftAndRightIconAlign: any = Template.bind(
  {}
);
BadgeFilledVariantWithLeftAndRightIconAlign.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose" wrap="wrap">
        {size.map((variant: any) => (
          <FlexLayout direction="vertical" spacing="loose">
            <Badge
              variant="filled"
              icon={<Check size={16} />}
              iconAlign="left"
              type={variant}
            >
              {variant} Badge
            </Badge>
            <Badge
              variant="filled"
              icon={<Check size={16} />}
              iconAlign="right"
              type={variant}
            >
              {variant} Badge
            </Badge>
          </FlexLayout>
        ))}
      </FlexLayout>
    </Card>
  ),
];

// Badge with Accent Variant
export const BadgeAccentVariant: any = Template.bind({});
BadgeAccentVariant.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose" wrap="wrap">
        {size.map((variant: any) => (
          <Badge variant="accent" type={variant}>
            {variant} Badge
          </Badge>
        ))}
      </FlexLayout>
    </Card>
  ),
];

// Badge with Accent Variant with left and Right Icon Align
export const AccentFilledVariantWithLeftAndRightIconAlign: any = Template.bind(
  {}
);
AccentFilledVariantWithLeftAndRightIconAlign.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose" wrap="wrap">
        {size.map((variant: any) => (
          <FlexLayout direction="vertical" spacing="loose">
            <Badge
              variant="accent"
              icon={<Check size={16} />}
              iconAlign="left"
              type={variant}
            >
              {variant} Badge
            </Badge>
            <Badge
              variant="accent"
              icon={<Check size={16} />}
              iconAlign="right"
              type={variant}
            >
              {variant} Badge
            </Badge>
          </FlexLayout>
        ))}
      </FlexLayout>
    </Card>
  ),
];

// Badge with Dot Variant
export const BadgeDotVariant: any = Template.bind({});
BadgeDotVariant.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose" wrap="wrap">
        {size.map((variant: any) => (
          <Badge dot size="large" type={variant}>
            {variant} Badge
          </Badge>
        ))}
      </FlexLayout>
    </Card>
  ),
];

// Badge with Left Icon
export const BadgeIconLeftAlign: any = Template.bind({});
BadgeIconLeftAlign.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose" wrap="wrap">
        {size.map((variant: any) => (
          <Badge icon={<Check size={16} />} iconAlign="left" type={variant}>
            {variant} Badge
          </Badge>
        ))}
      </FlexLayout>
    </Card>
  ),
];
// Badge with Right Icon
export const BadgeIconRightAlign: any = Template.bind({});
BadgeIconRightAlign.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose" wrap="wrap">
        {size.map((variant: any) => (
          <Badge icon={<Check size={16} />} iconAlign="right" type={variant}>
            {variant} Badge
          </Badge>
        ))}
      </FlexLayout>
    </Card>
  ),
];
// Badge with Only Icon
export const BadgeWithOnlyIcon: any = Template.bind({});
BadgeWithOnlyIcon.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose" direction="vertical">
        {size.map((variant: any) => (
          <FlexLayout spacing="loose">
            <Badge size="large" icon={<Check size={16} />} type={variant} />
            <Badge size="medium" icon={<Check size={16} />} type={variant} />
            <Badge size="small" icon={<Check size={16} />} type={variant} />
          </FlexLayout>
        ))}
      </FlexLayout>
    </Card>
  ),
];

// Badge with CustomBgColor
export const BadgeWithCustomBgcolorAndCustomColor: any = Template.bind({});
BadgeWithCustomBgcolorAndCustomColor.decorators = [
  () => (
    <Card>
      <Badge
        size="large"
        customBgColor="var(--inte-P30)"
        badgeTextColor="var(--inte-P900)"
      >
        Active
      </Badge>
    </Card>
  ),
];

// Badge with Help Text
export const BadgeWithHelpText: any = Template.bind({});
BadgeWithHelpText.decorators = [
  () => (
    <Card>
      <Badge
        helpText="Help tooltip"
        size="large"
        customBgColor="var(--inte-P30)"
        badgeTextColor="var(--inte-P900)"
      >
        Active
      </Badge>
    </Card>
  ),
];
export function Documentation() {
  return <BadgeDoc />;
}
