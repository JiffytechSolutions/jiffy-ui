import React from "react";
import  Button  from "./Button";
import { Airplay, ChevronDown } from "react-feather";
import VerticalFlex from "../VerticalFlex/VerticalFlex";
import HorizontalFlex from "../HorizontalFlex/HorizontalFlex";

const variant = ["Primary", "Secondry", "Tertiary", "Link"];
const sizes = ["XSmall", "Small", "Medium", "Large"];
const color = ["Primary", "Positive", "Negative", "Waiting", "Neutral"];

export default {
  title: "Components(Done)/Button",
  component: Button,
  tags: ["autodocs"],

  argTypes: {
    variant: {
      description: "Select variant",
      control: {
        type: "radio",
        options: variant,
      },
      defaultValue: "Primary",
    },

    size: {
      description: "Select Size",
      control: {
        type: "radio",
        options: sizes,
      },
      defaultValue: "md",
    },
    color: {
      description: "Select Color",
      control: {
        type: "radio",
        options: color,
      },
      defaultValue: "",
    },
    isDisabled: {
      description:
        "Disabled Button prevents user interaction, set disabled prop to true to disabled a button.",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    icon: {
      description: "Button can contain an icon",
      control: {
        type: "none",
      },
      defaultValue: "",
    },
    isLoading: {
      description: "Button can contain an icon",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    isFullWidth: {
      description: "Button can contain an icon",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    children: {
      description: "Button can contain an icon",
      control: {
        type: "text",
      },
      defaultValue: "Button",
    },
  },
};
const Template = ({ ...rest }) => {
  return (
    <Button
      variant={rest.variant}
      alignIcon={rest.alignIcon}
      size={rest.size}
      color={rest.color}
      icon={rest.icon}
      isDisabled={rest.isDisabled}
      isLoading={rest.isLoading}
      isFullWidth={rest.isFullWidth}
      onClick={() => alert("G")}
      children={rest.children}
    />

  );
};
export const Primary = Template.bind({});

//Button with variant
export const ButtonWithVariant: any = Template.bind({});
ButtonWithVariant.decorators = [
  () => {
    return (
      <VerticalFlex gap={20}>
        <HorizontalFlex gap={10}>
          {variant.map((variant: any, ind) => (
            <Button
              key={ind}

              icon={<Airplay size={15} />}
              variant={variant}
              color="Neutral"
              size={"Medium"}
              onClick={() => alert("G")}
              children={variant}
            />
          ))}
        </HorizontalFlex>
        <HorizontalFlex gap={10}>
          {variant.map((variant: any, ind) => (
            <Button
              key={ind}

              icon={<Airplay size={15} />}
              variant={variant}
              color="Primary"
              size={"Medium"}
              onClick={() => alert("G")}
              children={variant}
            />
          ))}
        </HorizontalFlex>
        <HorizontalFlex gap={10}>
          {variant.map((variant: any, ind) => (
            <Button
              key={ind}

              icon={<Airplay size={15} />}
              variant={variant}
              color="Negative"
              size={"Medium"}
              onClick={() => alert("G")}
              children={variant}
            />
          ))}
        </HorizontalFlex>
        <HorizontalFlex gap={10}>
          {variant.map((variant: any, ind) => (
            <Button
              key={ind}

              icon={<Airplay size={15} />}
              variant={variant}
              color="Waiting"
              size={"Medium"}
              onClick={() => alert("G")}
              children={variant}
            />
          ))}
        </HorizontalFlex>
        <HorizontalFlex gap={10}>
          {variant.map((variant: any, ind) => (
            <Button
              key={ind}

              icon={<Airplay size={15} />}
              variant={variant}
              color="Positive"
              size={"Medium"}
              onClick={() => alert("G")}
              children={variant}
            />
          ))}
        </HorizontalFlex>
      </VerticalFlex>
    );
  },
];

//Button with variant
export const ButtonWithColor: any = Template.bind({});
ButtonWithColor.decorators = [
  () => {
    return (
      <HorizontalFlex gap={10}>
        {color.map((color: any, ind) => (
          <Button
            key={ind}

            icon={<Airplay size={15} />}
            variant={"Primary"}
            color={color}
            size={"Medium"}
            onClick={() => alert("G")}
            children={color}
          />
        ))}
      </HorizontalFlex>
    );
  },
];

//Button with Size
export const ButtonWithSizes: any = Template.bind({});
ButtonWithSizes.decorators = [
  () => {
    return (
      <HorizontalFlex gap={10}>
        {sizes.map((sizes: any, ind) => (
          <Button
            key={ind}
            icon={<Airplay size={15} />}
            variant="Primary"
            color="Primary"
            size={sizes}
            onClick={() => alert("G")}
            children="Button"
          />
        ))}
      </HorizontalFlex>
    );
  },
];

//Button with icons only
export const ButtonWithIconOnly: any = Template.bind({});
ButtonWithIconOnly.decorators = [
  () => {
    return (
      <HorizontalFlex gap={10}>
        {sizes.map((sizes: any, ind) => (
          <Button
            key={ind}
            icon={<Airplay size={15} />}
            variant="Primary"
            color="Primary"
            size={sizes}
            onClick={() => alert("G")}
            children=""
          />
        ))}
      </HorizontalFlex>
    );
  },
];

//Button with variant with loading
export const ButtonWithVariantLoading: any = Template.bind({});
ButtonWithVariantLoading.decorators = [
  () => {
    return (
      <HorizontalFlex gap={10}>
        {variant.map((variant: any, ind) => (
          <Button
            key={ind}
            isLoading
            icon={<Airplay size={15} />}
            variant={variant}
            color="Primary"
            size={"Medium"}
            onClick={() => alert("G")}
            children={variant}
          />
        ))}
      </HorizontalFlex>
    );
  },
];

//Button with variant
export const ButtonWithColorLoading: any = Template.bind({});
ButtonWithColorLoading.decorators = [
  () => {
    return (
      <HorizontalFlex gap={10}>
        {color.map((color: any, ind) => (
          <Button
            key={ind}
            isLoading
            icon={<Airplay size={15} />}
            variant={"Primary"}
            color={color}
            size={"Medium"}
            onClick={() => alert("G")}
            children={color}
          />
        ))}
      </HorizontalFlex>
    );
  },
];

//Button with Size
export const ButtonWithSizesLoading: any = Template.bind({});
ButtonWithSizesLoading.decorators = [
  () => {
    return (
      <HorizontalFlex gap={10}>
        {sizes.map((sizes: any, ind) => (
          <Button
            key={ind}
            isLoading
            icon={<Airplay size={15} />}
            variant="Primary"
            color="Primary"
            size={sizes}
            onClick={() => alert("G")}
            children="Button"
          />
        ))}
      </HorizontalFlex>
    );
  },
];

//Button with icons only
export const ButtonWithIconOnlyLoading: any = Template.bind({});
ButtonWithIconOnlyLoading.decorators = [
  () => {
    return (
      <HorizontalFlex gap={10}>
        {sizes.map((sizes: any, ind) => (
          <Button
            key={ind}
            isLoading
            icon={<Airplay size={15} />}
            variant="Primary"
            color="Primary"
            size={sizes}
            onClick={() => alert("G")}
          />
        ))}
      </HorizontalFlex>
    );
  },
];

//Button with disabled
export const ButtonWithDisabled: any = Template.bind({});
ButtonWithDisabled.decorators = [
  () => {
    return (
      <HorizontalFlex gap={10}>
        {color.map((color: any, ind) => (
          <Button
            key={ind}
            isDisabled
            icon={<Airplay size={15} />}
            variant={"Primary"}
            color={color}
            size={"Medium"}
            onClick={() => alert("G")}
            children={color}
          />
        ))}
      </HorizontalFlex>
    );
  },
];

// Button with disabled and loading
export const ButtonWithDisabledLoading: any = Template.bind({});
ButtonWithDisabledLoading.decorators = [
  () => {
    return (
      <HorizontalFlex gap={10}>
        {color.map((color: any, ind) => (
          <Button
            key={ind}
            isDisabled
            isLoading
            icon={<Airplay size={15} />}
            variant={"Primary"}
            color={color}
            size={"Medium"}
            onClick={() => alert("G")}
            children={color}
          />
        ))}
      </HorizontalFlex>
    );
  },
];

//Button with right icon 
export const ButtonWithRightIcons: any = Template.bind({});
ButtonWithRightIcons.decorators = [
  () => {
    return (
      <Button
        alignIcon="Right"
        icon={<ChevronDown size={20} />}
        variant={"Primary"}
        color={"Waiting"}
        size={"Medium"}
        onClick={() => alert("G")}
        children={"Button"}
      />
    );
  },
];