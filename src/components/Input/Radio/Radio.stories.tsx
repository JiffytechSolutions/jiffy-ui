import React, { useState } from "react";
import Radio from "./Radio";
import FlexLayout from "../../FlexLayout/FlexLayout";
import InlineStack from "../../InlineStack/InlineStack";
import VerticalStack from "../../VerticalStack/VerticalStack";

const sizes = ["Small", "Medium", "Large"];
const variants = ["Default", "Card", "Button"];

// Sample options for radio groups
const colorOptions = [
  { label: "Red", value: "red" },
  { label: "Blue", value: "blue" },
  { label: "Green", value: "green" },
  { label: "Yellow", value: "yellow" },
];

const sizeOptions = [
  { label: "Small", value: "small", description: "Perfect for compact spaces" },
  { label: "Medium", value: "medium", description: "Standard size option" },
  { label: "Large", value: "large", description: "Maximum visibility" },
];

const planOptions = [
  { 
    label: "Basic Plan", 
    value: "basic", 
    description: "Perfect for individuals and small teams. Includes 5GB storage and basic support." 
  },
  { 
    label: "Pro Plan", 
    value: "pro", 
    description: "Great for growing businesses. Includes 50GB storage, priority support, and advanced features." 
  },
  { 
    label: "Enterprise Plan", 
    value: "enterprise", 
    description: "For large organizations. Unlimited storage, 24/7 support, and custom integrations." 
  },
];

export default {
  title: "Components/Input/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    name: {
      description: "Radio name attribute (for grouping)",
      control: {
        type: "text",
      },
    },
    value: {
      description: "Radio value",
      control: {
        type: "text",
      },
    },
    checked: {
      description: "Whether radio is checked",
      control: {
        type: "boolean",
      },
    },
    label: {
      description: "Label text or element",
      control: {
        type: "text",
      },
    },
    size: {
      description: "Radio size",
      control: {
        type: "radio",
        options: sizes,
      },
    },
    variant: {
      description: "Visual variant",
      control: {
        type: "radio",
        options: variants,
      },
    },
    labelPosition: {
      description: "Label position relative to radio",
      control: {
        type: "radio",
        options: ["left", "right", "top", "bottom"],
      },
    },
    disabled: {
      description: "Whether radio is disabled",
      control: {
        type: "boolean",
      },
    },
    required: {
      description: "Whether radio is required",
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    name: "example",
    value: "option1",
    checked: false,
    label: "Radio Option",
    size: "Medium",
    variant: "Default",
    labelPosition: "right",
    disabled: false,
    required: false,
  }
};

const Template = ({ ...rest }) => {
  const [checked, setChecked] = useState(rest.checked);

  return (
    <div style={{ padding: "2rem" }}>
      <Radio
        name={rest.name}
        value={rest.value}
        checked={checked}
        onChange={() => setChecked(!checked)}
        label={rest.label}
        size={rest.size}
        variant={rest.variant}
        labelPosition={rest.labelPosition}
        disabled={rest.disabled}
        required={rest.required}
      />
    </div>
  );
};

export const Primary = Template.bind({});

// Basic Radio Examples
export const Radio_basic_examples: any = Template.bind({});
Radio_basic_examples.decorators = [
  () => {
    const [selectedColor, setSelectedColor] = useState("blue");

    return (
      <VerticalStack gap={4}>
        <h3>Basic Radio Examples</h3>
        
        <VerticalStack gap={3}>
          <h4>Choose a color:</h4>
          <InlineStack gap={3}>
            {colorOptions.map((option) => (
              <Radio
                key={option.value}
                name="color"
                value={option.value}
                checked={selectedColor === option.value}
                onChange={(value:any) => setSelectedColor(value as string)}
                label={option.label}
              />
            ))}
          </InlineStack>
          <p style={{ marginTop: "1rem", color: "#6b7280" }}>
            Selected: {selectedColor}
          </p>
        </VerticalStack>
      </VerticalStack>
    );
  },
];

// Different Sizes
export const Radio_different_sizes: any = Template.bind({});
Radio_different_sizes.decorators = [
  () => {
    const [selectedSize, setSelectedSize] = useState("medium");

    return (
      <VerticalStack gap={4}>
        <h3>Different Sizes</h3>
        
        <VerticalStack gap={4}>
          {sizes.map((size) => (
            <VerticalStack key={size} gap={3}>
              <h4>{size} Size:</h4>
              <InlineStack gap={3}>
                {sizeOptions.map((option) => (
                  <Radio
                    key={option.value}
                    name={`size-${size.toLowerCase()}`}
                    value={option.value}
                    checked={selectedSize === option.value}
                    onChange={(value:any) => setSelectedSize(value as string)}
                    label={option.label}
                    description={option.description}
                    size={size as "Small" | "Medium" | "Large"}
                  />
                ))}
              </InlineStack>
            </VerticalStack>
          ))}
        </VerticalStack>
      </VerticalStack>
    );
  },
];

// Different Variants
export const Radio_different_variants: any = Template.bind({});
Radio_different_variants.decorators = [
  () => {
    const [selectedPlan, setSelectedPlan] = useState("pro");

    return (
      <VerticalStack gap={4}>
        <h3>Different Variants</h3>
        
        <VerticalStack gap={4}>
          {variants.map((variant) => (
            <VerticalStack key={variant} gap={3}>
              <h4>{variant} Variant:</h4>
              <InlineStack gap={3}>
                {planOptions.map((option) => (
                  <Radio
                    key={option.value}
                    name={`plan-${variant.toLowerCase()}`}
                    value={option.value}
                    checked={selectedPlan === option.value}
                    onChange={(value:any) => setSelectedPlan(value as string)}
                    label={option.label}
                    description={option.description}
                    variant={variant as "Default" | "Card" | "Button"}
                  />
                ))}
              </InlineStack>
            </VerticalStack>
          ))}
        </VerticalStack>
      </VerticalStack>
    );
  },
];

// Label Positions
export const Radio_label_positions: any = Template.bind({});
Radio_label_positions.decorators = [
  () => {
    const [selectedPosition, setSelectedPosition] = useState("right");
    const positions = ["left", "right", "top", "bottom"];

    return (
      <VerticalStack gap={4}>
        <h3>Label Positions</h3>
        
        <InlineStack gap={2}>
          {positions.map((position) => (
            <VerticalStack key={position} gap={3}>
              <h4 style={{ marginBottom: "1rem" }}>{position.charAt(0).toUpperCase() + position.slice(1)}:</h4>
              <Radio
                name="position"
                value={position}
                checked={selectedPosition === position}
                onChange={(value:any) => setSelectedPosition(value as string)}
                label="Label Text"
                labelPosition={position as "left" | "right" | "top" | "bottom"}
              />
            </VerticalStack>
          ))}
        </InlineStack>
      </VerticalStack>
    );
  },
];

// Validation States
export const Radio_validation_states: any = Template.bind({});
Radio_validation_states.decorators = [
  () => {
    const [selectedValidation, setSelectedValidation] = useState("");

    return (
      <VerticalStack gap={4}>
        <h3>Validation States</h3>
        
        <VerticalStack gap={4}>
          <VerticalStack gap={3}>
            <h4>Default State:</h4>
            <InlineStack gap={2}>
              <Radio
                name="validation-default"
                value="option1"
                checked={selectedValidation === "option1"}
                onChange={(value:any) => setSelectedValidation(value as string)}
                label="Normal Option"
                description="This is a normal radio option"
              />
              <Radio
                name="validation-default"
                value="option2"
                checked={selectedValidation === "option2"}
                onChange={(value:any) => setSelectedValidation(value as string)}
                label="Another Option"
                description="Another normal radio option"
              />
            </InlineStack>
          </VerticalStack>

          <VerticalStack gap={3}>
            <h4>Success State:</h4>
            <InlineStack gap={2}>
              <Radio
                name="validation-success"
                value="success1"
                checked={selectedValidation === "success1"}
                onChange={(value:any) => setSelectedValidation(value as string)}
                label="Valid Choice"
                success="This option meets all requirements"
              />
              <Radio
                name="validation-success"
                value="success2"
                checked={selectedValidation === "success2"}
                onChange={(value:any) => setSelectedValidation(value as string)}
                label="Another Valid Choice"
                success="This option also meets requirements"
              />
            </InlineStack>
          </VerticalStack>

          <VerticalStack gap={3}>
            <h4>Warning State:</h4>
            <InlineStack gap={2}>
              <Radio
                name="validation-warning"
                value="warning1"
                checked={selectedValidation === "warning1"}
                onChange={(value:any) => setSelectedValidation(value as string)}
                label="Caution Option"
                warning="This option has some limitations"
              />
              <Radio
                name="validation-warning"
                value="warning2"
                checked={selectedValidation === "warning2"}
                onChange={(value:any) => setSelectedValidation(value as string)}
                label="Limited Option"
                warning="Consider the implications of this choice"
              />
            </InlineStack>
          </VerticalStack>

          <VerticalStack gap={3}>
            <h4>Error State:</h4>
            <InlineStack gap={2}>
              <Radio
                name="validation-error"
                value="error1"
                checked={selectedValidation === "error1"}
                onChange={(value:any) => setSelectedValidation(value as string)}
                label="Problematic Option"
                error="This option is currently unavailable"
              />
              <Radio
                name="validation-error"
                value="error2"
                checked={selectedValidation === "error2"}
                onChange={(value:any) => setSelectedValidation(value as string)}
                label="Invalid Option"
                error="This option contains errors"
              />
            </InlineStack>
          </VerticalStack>
        </VerticalStack>
      </VerticalStack>
    );
  },
];

// Different States
export const Radio_different_states: any = Template.bind({});
Radio_different_states.decorators = [
  () => {
    const [selectedState, setSelectedState] = useState("normal");

    return (
      <VerticalStack gap={4}>
        <h3>Different States</h3>
        
        
          <VerticalStack gap={3}>
            <h4>Normal State:</h4>
            <InlineStack gap={2}>
              <Radio
                name="state-normal"
                value="normal"
                checked={selectedState === "normal"}
                onChange={(value:any) => setSelectedState(value as string)}
                label="Normal Radio"
                description="This radio can be selected"
              />
              <Radio
                name="state-normal"
                value="normal2"
                checked={selectedState === "normal2"}
                onChange={(value:any) => setSelectedState(value as string)}
                label="Another Normal Radio"
                description="This radio can also be selected"
              />
            </InlineStack>
          </VerticalStack>

          <VerticalStack gap={3}>
            <h4>Required State:</h4>
            <InlineStack gap={2}>
              <Radio
                name="state-required"
                value="required1"
                checked={selectedState === "required1"}
                onChange={(value:any) => setSelectedState(value as string)}
                label="Required Option A"
                description="You must choose one of these options"
                required
              />
              <Radio
                name="state-required"
                value="required2"
                checked={selectedState === "required2"}
                onChange={(value:any) => setSelectedState(value as string)}
                label="Required Option B"
                description="This is also a required choice"
                required
              />
            </InlineStack>
          </VerticalStack>

          <VerticalStack gap={3}>
            <h4>Disabled State:</h4>
            <InlineStack gap={2}>
              <Radio
                name="state-disabled"
                value="disabled1"
                checked={false}
                label="Disabled Radio (Unchecked)"
                description="This radio is disabled and unchecked"
                disabled
              />
              <Radio
                name="state-disabled"
                value="disabled2"
                checked={true}
                label="Disabled Radio (Checked)"
                description="This radio is disabled but checked"
                disabled
              />
            </InlineStack>
          </VerticalStack>
        </VerticalStack>
    );
  },
];

// Card Layout Example
export const Radio_card_layout: any = Template.bind({});
Radio_card_layout.decorators = [
  () => {
    const [selectedPlan, setSelectedPlan] = useState("pro");

    const planDetails = [
      {
        value: "basic",
        label: "Basic Plan",
        price: "$9/month",
        features: ["5GB Storage", "Email Support", "Basic Features"],
      },
      {
        value: "pro",
        label: "Pro Plan",
        price: "$29/month",
        features: ["50GB Storage", "Priority Support", "Advanced Features", "API Access"],
      },
      {
        value: "enterprise",
        label: "Enterprise Plan",
        price: "$99/month",
        features: ["Unlimited Storage", "24/7 Support", "Custom Integrations", "SLA Guarantee"],
      },
    ];

    return (
      <VerticalStack gap={4}>
        <h3>Card Layout Example</h3>
        
        <VerticalStack gap={3}>
          <h4>Choose your plan:</h4>
          <InlineStack gap={2}>
            {planDetails.map((plan) => (
              <Radio
                key={plan.value}
                name="pricing-plan"
                value={plan.value}
                checked={selectedPlan === plan.value}
                onChange={(value:any) => setSelectedPlan(value as string)}
                variant="Card"
                label={
                  <div style={{ width: "100%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                      <span style={{ fontWeight: "600", fontSize: "1.6rem" }}>{plan.label}</span>
                      <span style={{ fontWeight: "700", fontSize: "1.8rem", color: "#3b82f6" }}>{plan.price}</span>
                    </div>
                    <ul style={{ margin: 0, paddingLeft: "1.5rem", color: "#6b7280" }}>
                      {plan.features.map((feature, index) => (
                        <li key={index} style={{ fontSize: "1.3rem" }}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                }
              />
            ))}
          </InlineStack>
          <p style={{ marginTop: "1rem", color: "#6b7280" }}>
            Selected plan: {selectedPlan}
          </p>
        </VerticalStack>
      </VerticalStack>
    );
  },
];

// Button Style Example
export const Radio_button_style: any = Template.bind({});
Radio_button_style.decorators = [
  () => {
    const [selectedTheme, setSelectedTheme] = useState("light");
    const [selectedSize, setSelectedSize] = useState("medium");

    return (
      <VerticalStack gap={4}>
        <h3>Button Style Example</h3>
        
        <VerticalStack gap={3}>
          <h4>Theme Selection:</h4>
          <InlineStack gap={2}>
            {[
              { label: "Light", value: "light" },
              { label: "Dark", value: "dark" },
              { label: "Auto", value: "auto" },
            ].map((theme) => (
              <Radio
                key={theme.value}
                name="theme"
                value={theme.value}
                checked={selectedTheme === theme.value}
                onChange={(value:any) => setSelectedTheme(value as string)}
                label={theme.label}
                variant="Button"
              />
            ))}
          </InlineStack>
        </VerticalStack>

        <VerticalStack gap={3}>
          <h4>Size Selection:</h4>
          <InlineStack gap={2}>
            {[
              { label: "XS", value: "xs" },
              { label: "S", value: "small" },
              { label: "M", value: "medium" },
              { label: "L", value: "large" },
              { label: "XL", value: "xl" },
            ].map((size) => (
              <Radio
                key={size.value}
                name="size-selection"
                value={size.value}
                checked={selectedSize === size.value}
                onChange={(value:any) => setSelectedSize(value as string)}
                label={size.label}
                variant="Button"
                size="Small"
              />
            ))}
          </InlineStack>
        </VerticalStack>

        <div style={{ marginTop: "2rem", padding: "1rem", background: "#f3f4f6", borderRadius: "0.5rem" }}>
          <p><strong>Selected options:</strong></p>
          <p>Theme: {selectedTheme}</p>
          <p>Size: {selectedSize}</p>
        </div>
      </VerticalStack>
    );
  },
];