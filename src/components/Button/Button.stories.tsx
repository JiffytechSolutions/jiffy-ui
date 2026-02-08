import React from "react";
import Button from "./Button";
import { 
  Settings, 
  Download, 
  Trash2, 
  Edit, 
  Plus, 
  Heart, 
  Star, 
  Bell, 
  Mail, 
  User, 
  Lock, 
  Globe,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Check,
  X,
  AlertCircle,
  Info,
  ExternalLink
} from "react-feather";
import FlexLayout from "../FlexLayout/FlexLayout";
import InlineStack from "../InlineStack/InlineStack";
import VerticalStack from "../VerticalStack/VerticalStack";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'A versatile and accessible button component with multiple variants, sizes, and customization options.',
      },
    },
  },
  argTypes: {
    variant: {
      description: "Visual variant of the button",
      control: { type: "select" },
      options: ["Primary", "Secondary", "Tertiary", "Link", "Ghost", "Danger"],
    },
    size: {
      description: "Size of the button",
      control: { type: "select" },
      options: ["XSmall", "Small", "Medium", "Large", "XLarge"],
    },
    color: {
      description: "Color theme of the button",
      control: { type: "select" },
      options: ["Primary", "Positive", "Negative", "Waiting", "Neutral"],
    },
    isDisabled: {
      description: "Disables the button interaction",
      control: { type: "boolean" },
    },
    isLoading: {
      description: "Shows loading state with spinner",
      control: { type: "boolean" },
    },
    isFullWidth: {
      description: "Makes button full width",
      control: { type: "boolean" },
    },
    rounded: {
      description: "Applies rounded corners",
      control: { type: "boolean" },
    },
    outlined: {
      description: "Applies outlined style",
      control: { type: "boolean" },
    },
    elevated: {
      description: "Applies elevated shadow",
      control: { type: "boolean" },
    },
    compact: {
      description: "Applies compact padding",
      control: { type: "boolean" },
    },
    children: {
      description: "Button text content",
      control: { type: "text" },
    },
  },
};

// Interactive Template
const Template = (args: any) => {
  return (
    <Button
      {...args}
      onClick={() => alert("Button clicked!")}
    />
  );
};

// Default Story
export const Default = Template.bind({}) as any;
Default.args = {
  children: "Default Button",
  variant: "Primary",
  size: "Medium",
  color: "Neutral",
};

// Variants Story
export const Variants = () => {
  const variants = ["Primary", "Secondary", "Tertiary", "Link", "Ghost", "Danger"];
  
  return (
    
      <InlineStack gap={4}>
        {variants.map((variant) => (
          <Button
            key={variant}
            variant={variant as any}
            size="Medium"
            color="Neutral"
            onClick={() => alert(`${variant} clicked!`)}
          >
            {variant}
          </Button>
        ))}
      </InlineStack>
    
  );
};

// Sizes Story
export const Sizes = () => {
  const sizes = [ "Small", "Medium", "Large"];
  
  return (
   
      <InlineStack gap={4} align={"center"}>
        {sizes.map((size) => (
          <Button
            key={size}
            variant="Primary"
            size={size as any}
            color="Neutral"
            onClick={() => alert(`${size} button clicked!`)}
          >
            {size}
          </Button>
        ))}
      </InlineStack>
    
  );
};

// Colors Story
export const Colors = () => {
  const colors = ["Primary", "Positive", "Negative", "Waiting", "Neutral"];
  
  return (
 
      <InlineStack gap={4}>
        {colors.map((color) => (
          <Button
            key={color}
            variant="Primary"
            size="Medium"
            color={color as any}
            onClick={() => alert(`${color} button clicked!`)}
          >
            {color}
          </Button>
        ))}
      </InlineStack>
   
  );
};

// With Icons Story
export const WithIcons = () => {
  return (
    <VerticalStack gap={4}>
      <InlineStack gap={4}>
        <Button
          variant="Primary"
          size="Medium"
          icon={<Plus size={16} />}
          onClick={() => alert("Add clicked!")}
        >
          Add Item
        </Button>
        
        <Button
          variant="Secondary"
          size="Medium"
          icon={<Download size={16} />}
          onClick={() => alert("Download clicked!")}
        >
          Download
        </Button>
        
        <Button
          variant="Tertiary"
          size="Medium"
          icon={<Edit size={16} />}
          onClick={() => alert("Edit clicked!")}
        >
          Edit
        </Button>
        
        <Button
          variant="Danger"
          size="Medium"
          icon={<Trash2 size={16} />}
          onClick={() => alert("Delete clicked!")}
        >
          Delete
        </Button>
      </InlineStack>
      
      <InlineStack gap={4}>
        <Button
          variant="Primary"
          size="Medium"
          suffixIcon={<ArrowRight size={16} />}
          onClick={() => alert("Continue clicked!")}
        >
          Continue
        </Button>
        
        <Button
          variant="Secondary"
          size="Medium"
          suffixIcon={<ChevronDown size={16} />}
          onClick={() => alert("Dropdown clicked!")}
        >
          Options
        </Button>
        
        <Button
          variant="Link"
          size="Medium"
          suffixIcon={<ExternalLink size={16} />}
          onClick={() => alert("External link clicked!")}
        >
          External Link
        </Button>
      </InlineStack>
    </VerticalStack>
  );
};

// Icon Only Buttons Story
export const IconOnlyButtons = () => {
  const sizes = [ "Small", "Medium", "Large"];
  
  return (
    <VerticalStack  gap={4}>
      <InlineStack gap={4} align={"center"}>
        {sizes.map((size) => (
          <Button
            key={size}
            variant="Primary"
            size={size as any}
            icon={<Settings size={size === "XSmall" ? 12 : size === "Small" ? 14 : size === "Medium" ? 16 : size === "Large" ? 18 : 20} />}
            iconOnly
            onClick={() => alert(`${size} icon button clicked!`)}
          />
        ))}
      </InlineStack>
      
      <InlineStack gap={4} align={"center"}>
        <Button
          variant="Secondary"
          size="Medium"
          icon={<Heart size={16} />}
          iconOnly
          onClick={() => alert("Like clicked!")}
        />
        
        <Button
          variant="Tertiary"
          size="Medium"
          icon={<Star size={16} />}
          iconOnly
          onClick={() => alert("Favorite clicked!")}
        />
        
        <Button
          variant="Danger"
          size="Medium"
          icon={<Trash2 size={16} />}
          iconOnly
          onClick={() => alert("Delete clicked!")}
        />
        
        <Button
          variant="Ghost"
          size="Medium"
          icon={<Bell size={16} />}
          iconOnly
          onClick={() => alert("Notifications clicked!")}
        />
      </InlineStack>
      
      <InlineStack gap={4} align={"center"}>
        <Button
          variant="Primary"
          size="Medium"
          icon={<Settings size={16} />}
          iconOnly
          rounded
          onClick={() => alert("Rounded settings clicked!")}
        />
        
        <Button
          variant="Secondary"
          size="Medium"
          icon={<Download size={16} />}
          iconOnly
          elevated
          onClick={() => alert("Elevated download clicked!")}
        />
        
        <Button
          variant="Danger"
          size="Medium"
          icon={<Trash2 size={16} />}
          iconOnly
          outlined
          onClick={() => alert("Outlined delete clicked!")}
        />
      </InlineStack>
    </VerticalStack>
  );
};

// With Badges Story
export const WithBadges = () => {
  return (
    
      <InlineStack gap={4}>
        <Button
          variant="Primary"
          size="Medium"
          icon={<Bell size={16} />}
          badge="3"
          badgeVariant="primary"
          onClick={() => alert("Notifications clicked!")}
        >
          Notifications
        </Button>
        
        <Button
          variant="Secondary"
          size="Medium"
          icon={<Mail size={16} />}
          badge="12"
          badgeVariant="success"
          onClick={() => alert("Messages clicked!")}
        >
          Messages
        </Button>
        
        <Button
          variant="Tertiary"
          size="Medium"
          icon={<AlertCircle size={16} />}
          badge="5"
          badgeVariant="warning"
          onClick={() => alert("Alerts clicked!")}
        >
          Alerts
        </Button>
        
        <Button
          variant="Danger"
          size="Medium"
          icon={<X size={16} />}
          badge="2"
          badgeVariant="error"
          onClick={() => alert("Errors clicked!")}
        >
          Errors
        </Button>
      </InlineStack>
    
  );
};

// Loading States Story
export const LoadingStates = () => {
  return (
    <VerticalStack gap={4}>
      <InlineStack gap={4}>
        <Button
          variant="Primary"
          color="Primary"
          size="Medium"
          isLoading
         
          onClick={() => alert("This should not trigger")}
        >
          Save Changes
        </Button>
        
        <Button
          variant="Secondary"
          size="Medium"
          isLoading
          icon={<Download size={16} />}
          onClick={() => alert("This should not trigger")}
        >
          Download
        </Button>
        
        <Button
          variant="Danger"
          size="Medium"
          isLoading
          icon={<Trash2 size={16} />}
          onClick={() => alert("This should not trigger")}
        >
          Delete
        </Button>
        
        <Button
          variant="Tertiary"
          size="Medium"
          isLoading
          icon={<Edit size={16} />}
          onClick={() => alert("This should not trigger")}
        >
          Edit
        </Button>
      </InlineStack>
      
      <InlineStack gap={4}>
        <Button
          variant="Primary"
          size="Medium"
          color="Primary"
        
          isLoading
         
          isFullWidth
          onClick={() => alert("This should not trigger")}
        >
          Process Data
        </Button>
      </InlineStack>
      
      <InlineStack gap={4}>
        <Button
          variant="Primary"
          color="Primary"
          size="Medium"
          icon={<Settings size={16} />}
          iconOnly
          isLoading
          onClick={() => alert("This should not trigger")}
        />
        
        <Button
          variant="Secondary"
          size="Medium"
          icon={<Heart size={16} />}
          iconOnly
          isLoading
          onClick={() => alert("This should not trigger")}
        />
        
        <Button
          variant="Danger"
          size="Medium"
          icon={<Trash2 size={16} />}
          iconOnly
          isLoading
          onClick={() => alert("This should not trigger")}
        />
        
        <Button
          variant="Ghost"
          size="Medium"
          icon={<Bell size={16} />}
          iconOnly
          isLoading
          onClick={() => alert("This should not trigger")}
        />
      </InlineStack>
      
      <InlineStack gap={4}>
        <Button
          variant="Primary"
          size="Large"
          isLoading
          color="Primary"
          icon={<Download size={18} />}
          rounded
          elevated
          onClick={() => alert("This should not trigger")}
        >
          Upload Files
        </Button>
        
        <Button
          variant="Secondary"
          size="Large"
          isLoading
          
          icon={<Check size={18} />}
          rounded
          outlined
          onClick={() => alert("This should not trigger")}
        >
          Sync Data
        </Button>
      </InlineStack>
    </VerticalStack>
  );
};

// Disabled States Story
export const DisabledStates = () => {
  return (
   
      <InlineStack gap={4}>
        <Button
          variant="Primary"
          size="Medium"
          isDisabled
          onClick={() => alert("This should not trigger")}
        >
          Disabled Primary
        </Button>
        
        <Button
          variant="Secondary"
          size="Medium"
          isDisabled
          icon={<Download size={16} />}
          onClick={() => alert("This should not trigger")}
        >
          Disabled Secondary
        </Button>
        
        <Button
          variant="Danger"
          size="Medium"
          isDisabled
          icon={<Trash2 size={16} />}
          onClick={() => alert("This should not trigger")}
        >
          Disabled Danger
        </Button>
      </InlineStack>
   
  );
};

// Style Variants Story
export const StyleVariants = () => {
  return (
    <VerticalStack gap={4}>
      <InlineStack gap={4}>
        <Button
          variant="Primary"
          size="Medium"
          rounded
          onClick={() => alert("Rounded button clicked!")}
        >
          Rounded
        </Button>
        
        <Button
          variant="Secondary"
          size="Medium"
          // color="Neutral"
          outlined
          onClick={() => alert("Outlined button clicked!")}
        >
          Outlined
        </Button>
        
        <Button
          variant="Primary"
          size="Medium"
          elevated
          onClick={() => alert("Elevated button clicked!")}
        >
          Elevated
        </Button>
        
        <Button
          variant="Primary"
          size="Medium"
          compact
          onClick={() => alert("Compact button clicked!")}
        >
          Compact
        </Button>
      </InlineStack>
      
      <InlineStack gap={4}>
        <Button
           variant="Secondary"
          size="Medium"
          rounded
          outlined
          onClick={() => alert("Rounded outlined clicked!")}
        >
          Rounded Outlined
        </Button>
        
        <Button
           variant="Primary"
          size="Medium"
          rounded
          elevated
          onClick={() => alert("Rounded elevated clicked!")}
        >
          Rounded Elevated
        </Button>
        
        <Button
          variant="Danger"
          size="Medium"
          rounded
          outlined
          onClick={() => alert("Danger outlined clicked!")}
        >
          Danger Outlined
        </Button>
      </InlineStack>
    </VerticalStack>
  );
};

// Link Buttons Story
export const LinkButtons = () => {
  return (
    <FlexLayout direction="column" gap={4}>
      <InlineStack gap={4}>
        <Button
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          variant="Link"
          size="Medium"
          onClick={() => alert("External link clicked!")}
        >
          External Link
        </Button>
        
        <Button
          href="#section"
          variant="Link"
          size="Medium"
          icon={<ChevronRight size={16} />}
          onClick={() => alert("Internal link clicked!")}
        >
          Internal Link
        </Button>
        
        <Button
          href="mailto:example@email.com"
          variant="Link"
          size="Medium"
          icon={<Mail size={16} />}
          onClick={() => alert("Email link clicked!")}
        >
          Email Link
        </Button>
      </InlineStack>
    </FlexLayout>
  );
};

// Full Width Story
export const FullWidth = () => {
  return (
    <VerticalStack gap={4}>
      <Button
        variant="Primary"
        size="Medium"
        isFullWidth
        onClick={() => alert("Full width button clicked!")}
      >
        Full Width Button
      </Button>
      
      <Button
        variant="Secondary"
        size="Medium"
        isFullWidth
        icon={<Download size={16} />}
        onClick={() => alert("Full width with icon clicked!")}
      >
        Full Width with Icon
      </Button>
      
      <Button
        variant="Danger"
        size="Medium"
        isFullWidth
        isLoading
        
        onClick={() => alert("This should not trigger")}
      >
        Full Width Loading
      </Button>
    </VerticalStack>
  );
};

// Pressed and Active States Story
export const PressedAndActiveStates = () => {
  const [pressedButton, setPressedButton] = React.useState(false);
  const [activeButton, setActiveButton] = React.useState(false);
  
  return (
    
      <InlineStack gap={4}>
        <Button
          variant="Primary"
          size="Medium"
          pressed={pressedButton}
          onClick={() => setPressedButton(!pressedButton)}
        >
          {pressedButton ? "Pressed" : "Press Me"}
        </Button>
        
        <Button
          variant="Secondary"
          size="Medium"
          active={activeButton}
          onClick={() => setActiveButton(!activeButton)}
        >
          {activeButton ? "Active" : "Toggle Active"}
        </Button>
      </InlineStack>
    
  );
};

// Complex Example Story
export const ComplexExample = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  
  const handleSave = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Changes saved successfully!");
    }, 2000);
  };
  
  return (
    <VerticalStack gap={4}>
      <InlineStack gap={4}>
        <Button
          variant="Primary"
          size="Large"
          icon={<Check size={18} />}
          badge="New"
          badgeVariant="success"
          rounded
          elevated
          onClick={handleSave}
          isLoading={isLoading}
          
        >
          Save Changes
        </Button>
        
        <Button
          variant="Secondary"
          size="Large"
          icon={<Download size={18} />}
          suffixIcon={<ExternalLink size={18} />}
          rounded
          onClick={() => alert("Export clicked!")}
        >
          Export Data
        </Button>
        
        <Button
          variant="Danger"
          size="Large"
          icon={<Trash2 size={18} />}
          outlined
          rounded
          onClick={() => alert("Delete clicked!")}
        >
          Delete Account
        </Button>
      </InlineStack>
      
      <InlineStack gap={4}>
        <Button
          variant="Ghost"
          size="Medium"
          icon={<User size={16} />}
          compact
          onClick={() => alert("Profile clicked!")}
        >
          Profile
        </Button>
        
        <Button
          variant="Ghost"
          size="Medium"
          icon={<Settings size={16} />}
          compact
          onClick={() => alert("Settings clicked!")}
        >
          Settings
        </Button>
        
        <Button
          variant="Ghost"
          size="Medium"
          icon={<Lock size={16} />}
          compact
          onClick={() => alert("Security clicked!")}
        >
          Security
        </Button>
        
        <Button
          variant="Ghost"
          size="Medium"
          icon={<Globe size={16} />}
          compact
          onClick={() => alert("Language clicked!")}
        >
          Language
        </Button>
      </InlineStack>
    </VerticalStack>
  );
};
