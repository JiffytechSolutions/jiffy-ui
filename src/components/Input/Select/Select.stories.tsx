import React, { useState } from "react";
import FlexLayout from "../../FlexLayout/FlexLayout";
import Select from "./Select";
import InlineStack from "../../InlineStack/InlineStack";
import VerticalStack from "../../VerticalStack/VerticalStack";

const sizes = ["Small", "Medium", "Large"];
const variants = ["Default", "Primary", "Success", "Error", "Warning"];

// Sample options
const basicOptions = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
  { label: "Elderberry", value: "elderberry" },
  { label: "Fig", value: "fig" },
  { label: "Grape", value: "grape" },
];

const countryOptions = [
  { label: "United States", value: "us", description: "North America" },
  { label: "Canada", value: "ca", description: "North America" },
  { label: "United Kingdom", value: "uk", description: "Europe" },
  { label: "Germany", value: "de", description: "Europe" },
  { label: "France", value: "fr", description: "Europe" },
  { label: "Japan", value: "jp", description: "Asia" },
  { label: "South Korea", value: "kr", description: "Asia" },
  { label: "Australia", value: "au", description: "Oceania" },
  { label: "Brazil", value: "br", description: "South America" },
  { label: "Mexico", value: "mx", description: "North America" },
];

const groupedOptions = [
  {
    label: "Fruits",
    value: "fruits",
    group: true,
    options: [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Orange", value: "orange" },
    ],
  },
  {
    label: "Vegetables",
    value: "vegetables", 
    group: true,
    options: [
      { label: "Carrot", value: "carrot" },
      { label: "Broccoli", value: "broccoli" },
      { label: "Spinach", value: "spinach" },
    ],
  },
  {
    label: "Proteins",
    value: "proteins",
    group: true,
    options: [
      { label: "Chicken", value: "chicken" },
      { label: "Beef", value: "beef" },
      { label: "Fish", value: "fish" },
      { label: "Tofu", value: "tofu", disabled: true },
    ],
  },
];

export default {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      description: "Placeholder text",
      control: {
        type: "text",
      },
      defaultValue: "Select an option",
    },
    size: {
      description: "Select size",
      control: {
        type: "radio",
        options: sizes,
      },
      defaultValue: "Medium",
    },
    variant: {
      description: "Select variant",
      control: {
        type: "radio",
        options: variants,
      },
      defaultValue: "Default",
    },
    selectionType: {
      description: "Selection type",
      control: {
        type: "radio",
        options: ["single", "multiple"],
      },
      defaultValue: "single",
    },
    searchable: {
      description: "Enable search",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    clearable: {
      description: "Show clear button",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    disabled: {
      description: "Disable select",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    fullWidth: {
      description: "Full width select",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
  args: {
    placeholder: "Select an option",
    size: "Medium",
    variant: "Default",
    selectionType: "single",
    searchable: false,
    clearable: false,
    disabled: false,
    fullWidth: false,
  }
};

const Template = ({ ...rest }) => {
  const [value, setValue] = useState<string | string[]>(rest.selectionType === "multiple" ? [] : "");

  return (
    <div style={{ width: rest.fullWidth ? "100%" : "300px" }}>
      <Select
        options={basicOptions}
        value={value}
        onChange={setValue}
        placeholder={rest.placeholder}
        size={rest.size}
        variant={rest.variant}
        selectionType={rest.selectionType}
        searchable={rest.searchable}
        clearable={rest.clearable}
        disabled={rest.disabled}
        fullWidth={rest.fullWidth}
        label="Example Select"
      />
    </div>
  );
};

export const Primary = Template.bind({});

// Basic Select Examples
export const Select_basic_examples: any = Template.bind({});
Select_basic_examples.decorators = [
  () => {
    const [singleValue, setSingleValue] = useState<string>("");
    const [multiValue, setMultiValue] = useState<string[]>([]);

    return (
      <VerticalStack gap={4}>
        <h3>Basic Select Examples</h3>
        
        <InlineStack gap={4}>
          <div style={{ width: "250px" }}>
            <Select
              label="Single Selection"
              options={basicOptions}
              value={singleValue}
              onChange={(v) => setSingleValue(v as string)}
              placeholder="Choose a fruit"
            />
          </div>

          <div style={{ width: "250px" }}>
            <Select
              label="Multiple Selection"
              options={basicOptions}
              value={multiValue}
              onChange={(v) => setMultiValue(v as string[])}
              selectionType="multiple"
              placeholder="Choose fruits"
            />
          </div>

          <div style={{ width: "250px" }}>
            <Select
              label="Searchable Select"
              options={countryOptions}
              value={singleValue}
              onChange={(v) => setSingleValue(v as string)}
              searchable
              placeholder="Search countries"
            />
          </div>
        </InlineStack>
      </VerticalStack>
    );
  },
];

// Different Sizes
export const Select_different_sizes: any = Template.bind({});
Select_different_sizes.decorators = [
  () => {
    return (
      <VerticalStack gap={4}>
        <h3>Different Sizes</h3>
        <InlineStack gap={4}>
          {sizes.map((size) => {
            const [value, setValue] = useState<string>("");
            return (
              <div key={size} style={{ width: "200px" }}>
                <Select
                  size={size as "Small" | "Medium" | "Large"}
                  label={`${size} Select`}
                  options={basicOptions}
                  value={value}
                  onChange={(v) => setValue(v as string)}
                  placeholder={`${size} size`}
                />
              </div>
            );
          })}
        </InlineStack>
      </VerticalStack>
    );
  },
];

// Different Variants
export const Select_different_variants: any = Template.bind({});
Select_different_variants.decorators = [
  () => {
    return (
      <VerticalStack gap={4}>
        <h3>Different Variants</h3>
        <InlineStack gap={4}>
          {variants.map((variant) => {
            const [value, setValue] = useState<string>("");
            return (
              <div key={variant} style={{ width: "300px" }}>
                <Select
                  variant={variant as "Default" | "Primary" | "Success" | "Error" | "Warning"}
                  label={`${variant} Select`}
                  options={basicOptions}
                  value={value}
                  onChange={(v) => setValue(v as string)}
                  placeholder={`Select ${variant.toLowerCase()} option`}
                />
              </div>
            );
          })}
        </InlineStack>
      </VerticalStack>
    );
  },
];

// Different States
export const Select_different_states: any = Template.bind({});
Select_different_states.decorators = [
  () => {
    const [normalValue, setNormalValue] = useState<string>("");
    const [clearableValue, setClearableValue] = useState<string>("apple");
    const [requiredValue, setRequiredValue] = useState<string>("");
    const [errorValue, setErrorValue] = useState<string>("");

    return (
      <VerticalStack gap={4}>
        <h3>Different States</h3>
        <InlineStack gap={4}>
          <div style={{ width: "300px" }}>
            <Select
              label="Normal Select"
              options={basicOptions}
              value={normalValue}
              onChange={(v) => setNormalValue(v as string)}
              placeholder="Select an option"
              helpText="Choose your preferred option"
            />
          </div>

          <div style={{ width: "300px" }}>
            <Select
              label="Clearable Select"
              options={basicOptions}
              value={clearableValue}
              onChange={(v) => setClearableValue(v as string)}
              clearable
              placeholder="Select an option"
              helpText="You can clear the selection"
            />
          </div>

          <div style={{ width: "300px" }}>
            <Select
              label="Required Select"
              options={basicOptions}
              value={requiredValue}
              onChange={(v) => setRequiredValue(v as string)}
              required
              placeholder="Select an option"
              helpText="This field is required"
            />
          </div>

          <div style={{ width: "300px" }}>
            <Select
              label="Disabled Select"
              options={basicOptions}
              value="apple"
              disabled
              placeholder="Select an option"
              helpText="This select is disabled"
            />
          </div>

          <div style={{ width: "300px" }}>
            <Select
              label="Error State"
              options={basicOptions}
              value={errorValue}
              onChange={(v) => setErrorValue(v as string)}
              variant="Error"
              error="Please select a valid option"
              placeholder="Select an option"
            />
          </div>
        </InlineStack>
      </VerticalStack>
    );
  },
];

// Grouped Options
export const Select_grouped_options: any = Template.bind({});
Select_grouped_options.decorators = [
  () => {
    const [value, setValue] = useState<string>("");
    const [multiValue, setMultiValue] = useState<string[]>([]);

    return (
      <VerticalStack gap={4}>
        <h3>Grouped Options</h3>
        <InlineStack gap={4}>
          <div style={{ width: "300px" }}>
            <Select
              label="Single Selection (Grouped)"
              options={groupedOptions}
              value={value}
              onChange={(v) => setValue(v as string)}
              placeholder="Choose food"
              searchable
            />
          </div>

          <div style={{ width: "300px" }}>
            <Select
              label="Multiple Selection (Grouped)"
              options={groupedOptions}
              value={multiValue}
              onChange={(v) => setMultiValue(v as string[])}
              selectionType="multiple"
              placeholder="Choose foods"
              searchable
            />
          </div>
        </InlineStack>
      </VerticalStack>
    );
  },
];

// Advanced Features
export const Select_advanced_features: any = Template.bind({});
Select_advanced_features.decorators = [
  () => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [multiSearchValue, setMultiSearchValue] = useState<string[]>([]);
    const [countryValue, setCountryValue] = useState<string>("");

    return (
      <VerticalStack gap={4}>
        <h3>Advanced Features</h3>
        
        <InlineStack gap={4}>
          <div style={{ width: "300px" }}>
            <Select
              label="Searchable with Descriptions"
              options={countryOptions}
              value={countryValue}
              onChange={(v) => setCountryValue(v as string)}
              searchable
              clearable
              placeholder="Search countries"
              helpText="Type to search for countries"
            />
          </div>

          <div style={{ width: "300px" }}>
            <Select
              label="Multi-Select with Search"
              options={countryOptions}
              value={multiSearchValue}
              onChange={(v) => setMultiSearchValue(v as string[])}
              selectionType="multiple"
              searchable
              clearable
              placeholder="Select multiple countries"
              helpText="Choose multiple countries"
            />
          </div>

          <div style={{ width: "300px" }}>
            <Select
              label="Large Dataset"
              options={Array.from({ length: 50 }, (_, i) => ({
                label: `Option ${i + 1}`,
                value: `option${i + 1}`,
                description: `Description for option ${i + 1}`,
              }))}
              value={searchValue}
              onChange={(v) => setSearchValue(v as string)}
              searchable
              clearable
              placeholder="Search large dataset"
              maxHeight={200}
              helpText="50 options with search and limited height"
            />
          </div>
        </InlineStack>
      </VerticalStack>
    );
  },
];

// Full Width Examples
export const Select_full_width: any = Template.bind({});
Select_full_width.decorators = [
  () => {
    const [value, setValue] = useState<string>("");
    const [multiValue, setMultiValue] = useState<string[]>([]);

    return (
      <VerticalStack gap={4}>
        <h3>Full Width Examples</h3>
        
        <Select
          label="Full Width Single Select"
          options={countryOptions}
          value={value}
          onChange={(v) => setValue(v as string)}
          fullWidth
          searchable
          clearable
          placeholder="This select takes full width"
          helpText="Responsive select that adapts to container width"
        />
        
        <Select
          label="Full Width Multi-Select"
          options={countryOptions}
          value={multiValue}
          onChange={(v) => setMultiValue(v as string[])}
          selectionType="multiple"
          fullWidth
          searchable
          clearable
          placeholder="Multiple selection full width"
          helpText="Multi-select with full width and tag wrapping"
        />
      </VerticalStack>
    );
  },
];