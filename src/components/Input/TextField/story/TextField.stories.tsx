import React, { useState } from "react";
import TextField from "../TextField";
import FlexLayout from "../../../FlexLayout/FlexLayout";
import { 
  Search, 
  Mail, 
  Lock, 
  User, 
  Phone, 
  DollarSign, 
  Calendar,
  MapPin,
  Globe,
  Hash,
  AlertCircle,
  CheckCircle,
  Info
} from "react-feather";
import InlineStack from "../../../InlineStack/InlineStack";
import VerticalStack from "../../../VerticalStack/VerticalStack";

const sizes = ["Small", "Medium", "Large"];
const variants = ["Default", "Outlined", "Filled"];

export default {
  title: "Components/Input/TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    value: {
      description: "Input value (controlled)",
      control: {
        type: "text",
      },
    },
    placeholder: {
      description: "Placeholder text",
      control: {
        type: "text",
      },
    },
    label: {
      description: "Label text",
      control: {
        type: "text",
      },
    },
    type: {
      description: "Input type",
      control: {
        type: "select",
        options: ["text", "password", "email", "tel", "url", "number", "search"],
      },
    },
    size: {
      description: "Input size",
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
    disabled: {
      description: "Disable input",
      control: {
        type: "boolean",
      },
    },
    required: {
      description: "Mark as required",
      control: {
        type: "boolean",
      },
    },
    clearable: {
      description: "Show clear button",
      control: {
        type: "boolean",
      },
    },
    fullWidth: {
      description: "Full width input",
      control: {
        type: "boolean",
      },
    },
    readOnly: {
      description: "Read-only input",
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    placeholder: "Enter text...",
    label: "Label",
    type: "text",
    size: "Medium",
    variant: "Default",
    disabled: false,
    required: false,
    clearable: false,
    fullWidth: false,
    readOnly: false,
  }
};

const Template = ({ ...rest }) => {
  const [value, setValue] = useState("");

  return (
    <div style={{ width: rest.fullWidth ? "100%" : "300px", padding: "2rem" }}>
      <TextField
        value={value}
        onChange={(val:any) => setValue(val)}
        placeholder={rest.placeholder}
        label={rest.label}
        type={rest.type}
        size={rest.size}
        variant={rest.variant}
        disabled={rest.disabled}
        required={rest.required}
        clearable={rest.clearable}
        fullWidth={rest.fullWidth}
        readOnly={rest.readOnly}
      />
    </div>
  );
};

export const Primary = Template.bind({});

// Basic TextField Examples
export const TextField_basic_examples: any = Template.bind({});
TextField_basic_examples.decorators = [
  () => {
    const [basicValue, setBasicValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [emailValue, setEmailValue] = useState("");

    return (
      <VerticalStack gap={4}>
        <h3>Basic TextField Examples</h3>
        
        <InlineStack gap={3}>
          <div style={{ width: "250px" }}>
            <TextField
              label="Basic Text"
              placeholder="Enter text..."
              value={basicValue}
              onChange={setBasicValue}
            />
          </div>

          <div style={{ width: "250px" }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Enter password..."
              value={passwordValue}
              onChange={setPasswordValue}
            />
          </div>

          <div style={{ width: "250px" }}>
            <TextField
              label="Email"
              type="email"
              placeholder="Enter email..."
              value={emailValue}
              onChange={setEmailValue}
            />
          </div>
        </InlineStack>
      </VerticalStack>
    );
  },
];

// Different Sizes
export const TextField_different_sizes: any = Template.bind({});
TextField_different_sizes.decorators = [
  () => {
    return (
      <VerticalStack gap={4}>
        <h3>Different Sizes</h3>
        <InlineStack gap={4}>
          {sizes.map((size) => {
            const [value, setValue] = useState("");
            return (
              <div key={size} style={{ width: "300px" }}>
                <TextField
                  size={size as "Small" | "Medium" | "Large"}
                  label={`${size} TextField`}
                  placeholder={`${size} size input`}
                  value={value}
                  onChange={setValue}
                  leading={<User size={16} />}
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
export const TextField_different_variants: any = Template.bind({});
TextField_different_variants.decorators = [
  () => {
    return (
      <VerticalStack gap={4}>
        <h3>Different Variants</h3>
        <InlineStack gap={3}>
          {variants.map((variant) => {
            const [value, setValue] = useState("");
            return (
              <div key={variant} style={{ width: "300px" }}>
                <TextField
                  variant={variant as "Default" | "Outlined" | "Filled"}
                  label={`${variant} TextField`}
                  placeholder={`${variant} variant`}
                  value={value}
                  onChange={setValue}
                  leading={<Search size={16} />}
                />
              </div>
            );
          })}
        </InlineStack>
      </VerticalStack>
    );
  },
];

// With Icons and Elements
export const TextField_with_icons: any = Template.bind({});
TextField_with_icons.decorators = [
  () => {
    const [searchValue, setSearchValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [priceValue, setPriceValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");

    return (
      <VerticalStack gap={4}>
        <h3>With Icons and Elements</h3>
        
        <InlineStack gap={4}>
          <div style={{ width: "250px" }}>
            <TextField
              label="Search"
              placeholder="Search..."
              value={searchValue}
              onChange={setSearchValue}
              leading={<Search size={16} />}
              clearable
            />
          </div>

          <div style={{ width: "250px" }}>
            <TextField
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              value={emailValue}
              onChange={setEmailValue}
              leading={<Mail size={16} />}
              trailing={<span>@company.com</span>}
            />
          </div>

          <div style={{ width: "250px" }}>
            <TextField
              label="Price"
              type="number"
              placeholder="0.00"
              value={priceValue}
              onChange={setPriceValue}
              leading={<DollarSign size={16} />}
              trailing="USD"
            />
          </div>
        </InlineStack>

        <InlineStack gap={4}>
          <div style={{ width: "250px" }}>
            <TextField
              label="Phone Number"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={phoneValue}
              onChange={setPhoneValue}
              leading={<Phone size={16} />}
            />
          </div>
        </InlineStack>
      </VerticalStack>
    );
  },
];

// Validation States
export const TextField_validation_states: any = Template.bind({});
TextField_validation_states.decorators = [
  () => {
    const [defaultValue, setDefaultValue] = useState("");
    const [successValue, setSuccessValue] = useState("valid@email.com");
    const [warningValue, setWarningValue] = useState("test");
    const [errorValue, setErrorValue] = useState("invalid-email");

    return (
      <VerticalStack gap={4}>
        <h3>Validation States</h3>
        
        <InlineStack gap={4}>
          <div style={{ width: "350px" }}>
            <TextField
              label="Default State"
              placeholder="Enter text..."
              value={defaultValue}
              onChange={setDefaultValue}
              description="This is a normal input field"
            />
          </div>

          <div style={{ width: "350px" }}>
            <TextField
              label="Success State"
              placeholder="Enter valid email..."
              value={successValue}
              onChange={setSuccessValue}
              success="Email format is valid"
              leading={<CheckCircle size={16} />}
            />
          </div>

          <div style={{ width: "350px" }}>
            <TextField
              label="Warning State"
              placeholder="Enter username..."
              value={warningValue}
              onChange={setWarningValue}
              warning="Username is too short (minimum 6 characters)"
              leading={<Info size={16} />}
            />
          </div>

          <div style={{ width: "350px" }}>
            <TextField
              label="Error State"
              type="email"
              placeholder="Enter valid email..."
              value={errorValue}
              onChange={setErrorValue}
              error="Please enter a valid email address"
              leading={<AlertCircle size={16} />}
            />
          </div>
        </InlineStack>
      </VerticalStack>
    );
  },
];

// Different States
export const TextField_different_states: any = Template.bind({});
TextField_different_states.decorators = [
  () => {
    const [requiredValue, setRequiredValue] = useState("");
    const [clearableValue, setClearableValue] = useState("Clear me!");
    const [readonlyValue, setReadonlyValue] = useState("Read-only content");

    return (
      <VerticalStack gap={4}>
        <h3>Different States</h3>
        
        <InlineStack gap={4}>
          <div style={{ width: "350px" }}>
            <TextField
              label="Required Field"
              placeholder="This field is required"
              value={requiredValue}
              onChange={setRequiredValue}
              required
              description="Please fill in this required field"
            />
          </div>

          <div style={{ width: "350px" }}>
            <TextField
              label="Clearable Field"
              placeholder="Type something..."
              value={clearableValue}
              onChange={setClearableValue}
              clearable
              description="You can clear this field with the X button"
            />
          </div>

          <div style={{ width: "350px" }}>
            <TextField
              label="Read-only Field"
              value={readonlyValue}
              onChange={setReadonlyValue}
              readOnly
              description="This field cannot be edited"
            />
          </div>

          <div style={{ width: "350px" }}>
            <TextField
              label="Disabled Field"
              placeholder="Disabled input"
              value=""
              disabled
              description="This field is disabled"
            />
          </div>
        </InlineStack>
      </VerticalStack>
    );
  },
];

// Specialized Input Types
export const TextField_specialized_types: any = Template.bind({});
TextField_specialized_types.decorators = [
  () => {
    const [searchValue, setSearchValue] = useState("");
    const [urlValue, setUrlValue] = useState("");
    const [numberValue, setNumberValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    return (
      <VerticalStack gap={4}>
        <h3>Specialized Input Types</h3>
        
        <InlineStack gap={4}>
          <div style={{ width: "250px" }}>
            <TextField
              label="Search"
              type="search"
              placeholder="Search..."
              value={searchValue}
              onChange={setSearchValue}
              leading={<Search size={16} />}
              clearable
            />
          </div>

          <div style={{ width: "250px" }}>
            <TextField
              label="Website URL"
              type="url"
              placeholder="https://example.com"
              value={urlValue}
              onChange={setUrlValue}
              leading={<Globe size={16} />}
            />
          </div>

          <div style={{ width: "250px" }}>
            <TextField
              label="Number"
              type="number"
              placeholder="Enter number..."
              value={numberValue}
              onChange={setNumberValue}
              leading={<Hash size={16} />}
              min={0}
              max={100}
              step={1}
            />
          </div>
        </InlineStack>

        <InlineStack gap={4}>
          <div style={{ width: "250px" }}>
            <TextField
              label="Password with Toggle"
              type="password"
              placeholder="Enter password..."
              value={passwordValue}
              onChange={setPasswordValue}
              leading={<Lock size={16} />}
              description="Password visibility can be toggled"
            />
          </div>
        </InlineStack>
      </VerticalStack>
    );
  },
];

// Form Layout Example
export const TextField_form_layout: any = Template.bind({});
TextField_form_layout.decorators = [
  () => {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      zipCode: "",
      bio: "",
    });

    const updateField = (field: string, value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
      <VerticalStack gap={4}>
        <h3>Form Layout Example</h3>
        
        <InlineStack gap={4}>
          <div style={{ flex: 1 }}>
            <TextField
              label="First Name"
              placeholder="John"
              value={formData.firstName}
              onChange={(val:any) => updateField("firstName", val)}
              required
              leading={<User size={16} />}
            />
          </div>
          <div style={{ flex: 1 }}>
            <TextField
              label="Last Name"
              placeholder="Doe"
              value={formData.lastName}
              onChange={(val:any) => updateField("lastName", val)}
              required
              leading={<User size={16} />}
            />
          </div>
        </InlineStack>

        <InlineStack gap={4}>
          <div style={{ flex: 2 }}>
            <TextField
              label="Email Address"
              type="email"
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={(val:any) => updateField("email", val)}
              required
              leading={<Mail size={16} />}
            />
          </div>
          <div style={{ flex: 1 }}>
            <TextField
              label="Phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={formData.phone}
              onChange={(val:any) => updateField("phone", val)}
              leading={<Phone size={16} />}
            />
          </div>
        </InlineStack>

        <TextField
          label="Address"
          placeholder="123 Main Street"
          value={formData.address}
          onChange={(val:any) => updateField("address", val)}
          fullWidth
          leading={<MapPin size={16} />}
        />

        <InlineStack gap={4}>
          <div style={{ flex: 2 }}>
            <TextField
              label="City"
              placeholder="New York"
              value={formData.city}
              onChange={(val:any) => updateField("city", val)}
            />
          </div>
          <div style={{ flex: 1 }}>
            <TextField
              label="ZIP Code"
              placeholder="10001"
              value={formData.zipCode}
              onChange={(val:any) => updateField("zipCode", val)}
              maxLength={10}
            />
          </div>
        </InlineStack>
      </VerticalStack>
    );
  },
];

// Full Width Example
export const TextField_full_width: any = Template.bind({});
TextField_full_width.decorators = [
  () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
      <VerticalStack gap={4}>
        <h3>Full Width Examples</h3>
        
        <TextField
          label="Article Title"
          placeholder="Enter article title..."
          value={title}
          onChange={setTitle}
          fullWidth
          size="Large"
          variant="Outlined"
          required
          maxLength={100}
          description="Maximum 100 characters"
        />
        
        <TextField
          label="Meta Description"
          placeholder="Enter meta description..."
          value={description}
          onChange={setDescription}
          fullWidth
          size="Medium"
          variant="Filled"
          maxLength={160}
          description={`${description.length}/160 characters`}
        />
      </VerticalStack>
    );
  },
];