import React, { useState } from "react";
import Checkbox from "./Checkbox";
import FlexLayout from "../../FlexLayout/FlexLayout";
import { Star, Bell, Shield } from "react-feather";
import InlineStack from "../../InlineStack/InlineStack";
import VerticalStack from "../../VerticalStack/VerticalStack";

const sizes = ["Small", "Medium", "Large"];
const variants = ["Default", "Card", "Switch"];

export default {
  title: "Components/Input/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      description: "Whether checkbox is checked",
      control: { type: "boolean" },
    },
    indeterminate: {
      description: "Whether checkbox is in indeterminate state",
      control: { type: "boolean" },
    },
    label: {
      description: "Label text or element",
      control: { type: "text" },
    },
    size: {
      description: "Checkbox size",
      control: { type: "radio", options: sizes },
    },
    variant: {
      description: "Visual variant",
      control: { type: "radio", options: variants },
    },
    disabled: {
      description: "Whether checkbox is disabled",
      control: { type: "boolean" },
    },
    required: {
      description: "Whether checkbox is required",
      control: { type: "boolean" },
    },
  },
  args: {
    checked: false,
    indeterminate: false,
    label: "Checkbox Option",
    size: "Medium",
    variant: "Default",
    disabled: false,
    required: false,
  }
};

const Template = ({ ...rest }) => {
  const [checked, setChecked] = useState(rest.checked);

  return (
    <div style={{ padding: "2rem" }}>
      <Checkbox
        checked={checked}
        indeterminate={rest.indeterminate}
        onChange={(newChecked:any) => setChecked(newChecked)}
        label={rest.label}
        size={rest.size}
        variant={rest.variant}
        disabled={rest.disabled}
        required={rest.required}
      />
    </div>
  );
};

export const Primary = Template.bind({});

// Basic Examples
export const Checkbox_basic_examples: any = Template.bind({});
Checkbox_basic_examples.decorators = [
  () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(true);
    const [checked3, setChecked3] = useState(false);

    return (
      <VerticalStack gap={4}>
        <h3>Basic Checkbox Examples</h3>
        <InlineStack gap={4}>
          <Checkbox
            checked={checked1}
            onChange={(checked:any) => setChecked1(checked)}
            label="Accept terms and conditions"
            required
          />

          <Checkbox
            checked={checked2}
            onChange={(checked:any) => setChecked2(checked)}
            label="Subscribe to newsletter"
            description="Receive updates about new features"
          />

          <Checkbox
            checked={checked3}
            indeterminate={true}
            onChange={(checked:any) => setChecked3(checked)}
            label="Enable notifications"
            description="Some notification preferences are set"
          />
        </InlineStack>
      </VerticalStack>
    );
  },
];

// Size Examples
export const Checkbox_different_sizes: any = Template.bind({});
Checkbox_different_sizes.decorators = [
  () => {
    return (
      <VerticalStack gap={4}>
        <h3>Different Sizes</h3>
        
        {sizes.map((size) => (
          <div key={size}>
            <h4>{size} Size:</h4>
            <InlineStack gap={4}>
              <Checkbox
                label={`${size} Unchecked`}
                size={size as "Small" | "Medium" | "Large"}
              />
              <Checkbox
                checked={true}
                label={`${size} Checked`}
                size={size as "Small" | "Medium" | "Large"}
              />
              <Checkbox
                indeterminate={true}
                label={`${size} Indeterminate`}
                size={size as "Small" | "Medium" | "Large"}
              />
            </InlineStack>
          </div>
        ))}
      </VerticalStack>
    );
  },
];

// Variant Examples
export const Checkbox_different_variants: any = Template.bind({});
Checkbox_different_variants.decorators = [
  () => {
    return (
      <VerticalStack gap={4}>
        <h3>Different Variants</h3>
        
        {variants.map((variant) => {
          const [checked, setChecked] = useState(variant === "Switch");
          return (
            <VerticalStack gap={2} key={variant}>
              <h4>{variant} Variant:</h4>
              <Checkbox
                checked={checked}
                onChange={(newChecked:any) => setChecked(newChecked)}
                label={`${variant} Checkbox`}
                description={`This is a ${variant.toLowerCase()} style checkbox`}
                variant={variant as "Default" | "Card" | "Switch"}
              />
            </VerticalStack>
          );
        })}
      </VerticalStack>
    );
  },
];

// State Examples
export const Checkbox_different_states: any = Template.bind({});
Checkbox_different_states.decorators = [
  () => {
    const [normalChecked, setNormalChecked] = useState(false);

    return (
      <VerticalStack gap={4}>
        <h3>Different States</h3>
        
        <VerticalStack gap={3}>
          <Checkbox
            checked={normalChecked}
            onChange={(checked:any) => setNormalChecked(checked)}
            label="Normal Checkbox"
            description="This checkbox can be toggled"
          />

          <Checkbox
            checked={false}
            label="Disabled Unchecked"
            description="This checkbox is disabled"
            disabled
          />

          <Checkbox
            checked={true}
            label="Disabled Checked"
            description="This checkbox is disabled but checked"
            disabled
          />

          <Checkbox
            checked={false}
            label="Required Checkbox"
            description="This checkbox is required"
            required
            error="This field is required"
          />
        </VerticalStack>
      </VerticalStack>
    );
  },
];
