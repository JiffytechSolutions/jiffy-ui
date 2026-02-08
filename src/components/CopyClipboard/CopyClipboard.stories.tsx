import React from "react";
import CopyClipboard from "./CopyClipboard";
import Card from "../Card/Card";
import VerticalStack from "../VerticalStack/VerticalStack";
import InlineStack from "../InlineStack/InlineStack";

export default {
  title: "Components/CopyClipboard",
  component: CopyClipboard,
  parameters: {
    docs: {
      autodocs: true,
      description: {
        component: 'A modern copy-to-clipboard component with multiple variants, masking support, and enhanced accessibility.'
      }
    }
  },
  argTypes: {
    value: {
      description: "The text value to copy to clipboard",
      control: { type: "text" },
    },
    label: {
      description: "Optional label to display alongside the copy button",
      control: { type: "text" },
    },
    variant: {
      description: "Visual variant of the component",
      control: { type: "select" },
      options: ["inline", "outlined", "filled", "minimal"],
    },
    size: {
      description: "Size of the component",
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    iconPosition: {
      description: "Position of the copy icon relative to the text",
      control: { type: "radio" },
      options: ["left", "right"],
    },
    showPreview: {
      description: "Whether to show a preview of the value",
      control: { type: "boolean" },
    },
    masked: {
      description: "Whether the value should be masked (useful for passwords/tokens)",
      control: { type: "boolean" },
    },
    disabled: {
      description: "Whether the component is disabled",
      control: { type: "boolean" },
    },
    successTimeout: {
      description: "Duration in milliseconds to show success state",
      control: { type: "number" },
    },
    showToast: {
      description: "Whether to show toast notification",
      control: { type: "boolean" },
    },
    successMessage: {
      description: "Custom success message",
      control: { type: "text" },
    },
    previewLength: {
      description: "Maximum length of preview text before truncation",
      control: { type: "number" },
    },
    actionOnly: {
      description: "Action-only mode - shows only the copy button without preview or label",
      control: { type: "boolean" },
    },
    actionStyle: {
      description: "Action button style when in actionOnly mode",
      control: { type: "select" },
      options: ["icon", "text", "icon-text"],
    },
    actionText: {
      description: "Custom text for action button (when actionStyle is 'text' or 'icon-text')",
      control: { type: "text" },
    }
  },
};

const Template = (args: any) => {
  return (
    <div style={{ padding: '2rem' }}>
      <CopyClipboard {...args} />
    </div>
  );
};

// Default story
export const Default = Template.bind({});
(Default as any).args = {
  value: "Hello, World! This is a sample text to copy.",
  label: "Sample Text",
  variant: "outlined",
  size: "medium",
  iconPosition: "right",
  showPreview: true,
  masked: false,
  disabled: false,
  successTimeout: 2000,
  showToast: false,
  successMessage: "Copied!",
  previewLength: 40
};

// Variants showcase
export const Variants = () => (
  <div style={{ padding: '2rem' }}>
    <VerticalStack gap={5}>
      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.6rem', fontWeight: '600' }}>Visual Variants</h3>
        <VerticalStack gap={4}>
          <CopyClipboard
            value="This is an inline variant"
            label="Inline"
            variant="inline"
          />
          <CopyClipboard
            value="This is an outlined variant"
            label="Outlined"
            variant="outlined"
          />
          <CopyClipboard
            value="This is a filled variant"
            label="Filled"
            variant="filled"
          />
          <CopyClipboard
            value="This is a minimal variant"
            label="Minimal"
            variant="minimal"
          />
        </VerticalStack>
      </div>
    </VerticalStack>
  </div>
);

// Size variants
export const Sizes = () => (
  <div style={{ padding: '2rem' }}>
    <VerticalStack gap={5}>
      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.6rem', fontWeight: '600' }}>Size Variants</h3>
        <VerticalStack gap={4}>
          <CopyClipboard
            value="Small size component"
            label="Small"
            variant="inline"
            size="small"
          />
          <CopyClipboard
            value="Medium size component"
            label="Medium"
            variant="outlined"
            size="medium"
          />
          <CopyClipboard
            value="Large size component"
            label="Large"
            variant="outlined"
            size="large"
          />
        </VerticalStack>
      </div>
    </VerticalStack>
  </div>
);

// Icon positions
export const IconPositions = () => (
  <div style={{ padding: '2rem' }}>
            <VerticalStack gap={4}>
      <CopyClipboard
        value="Icon on the right side"
        label="Icon Right"
        variant="outlined"
        iconPosition="right"
      />
      <CopyClipboard
        value="Icon on the left side"
        label="Icon Left"
        variant="outlined"
        iconPosition="left"
      />
    </VerticalStack>
  </div>
);

// Masked content (passwords, tokens, etc.)
export const MaskedContent = () => (
  <div style={{ padding: '2rem' }}>
            <VerticalStack gap={4}>
      <CopyClipboard
        value="super-secret-password-123"
        label="Password"
        variant="outlined"
        masked={true}
      />
      <CopyClipboard
        value="sk-1234567890abcdef1234567890abcdef"
        label="API Key"
        variant="filled"
        masked={true}
      />
      <CopyClipboard
        value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ"
        label="JWT Token"
        variant="outlined"
        masked={true}
        previewLength={30}
      />
    </VerticalStack>
  </div>
);

// Without preview (button only)
export const ButtonOnly = () => (
  <div style={{ padding: '2rem' }}>
            <VerticalStack gap={4}>
      <CopyClipboard
        value="This text will be copied but not shown"
        label="Copy Button Only"
        variant="outlined"
        showPreview={false}
      />
      <CopyClipboard
        value="Another hidden text to copy"
        variant="filled"
        showPreview={false}
        successMessage="Text copied!"
      />
    </VerticalStack>
  </div>
);

// With toast notifications
export const WithToast = () => (
  <div style={{ padding: '2rem' }}>
            <VerticalStack gap={4}>
      <CopyClipboard
        value="Click to copy and see toast notification"
        label="With Toast"
        variant="outlined"
        showToast={true}
        successMessage="Successfully copied!"
      />
      <CopyClipboard
        value="Another example with custom message"
        label="Custom Toast Message"
        variant="filled"
        showToast={true}
        successMessage="✨ Copied to clipboard!"
      />
    </VerticalStack>
  </div>
);

// Disabled state
export const DisabledState = () => (
  <div style={{ padding: '2rem' }}>
            <VerticalStack gap={4}>
      <CopyClipboard
        value="This component is disabled"
        label="Disabled"
        variant="outlined"
        disabled={true}
      />
      <CopyClipboard
        value="Another disabled example"
        label="Also Disabled"
        variant="filled"
        disabled={true}
        masked={true}
      />
    </VerticalStack>
  </div>
);

// Real-world examples
export const RealWorldExamples = () => (
  <div style={{ padding: '2rem' }}>
    <VerticalStack gap={5}>
      <Card variant="outlined" header={{ title: "API Configuration" }}>
        <VerticalStack gap={4}>
          <CopyClipboard
            value="https://api.example.com/v1"
            label="API Endpoint"
            variant="filled"
            size="small"
          />
          <CopyClipboard
            value="sk-1234567890abcdef1234567890abcdef"
            label="API Key"
            variant="outlined"
            masked={true}
            showToast={true}
          />
          <CopyClipboard
            value="your-webhook-secret-here"
            label="Webhook Secret"
            variant="outlined"
            masked={true}
            size="small"
          />
        </VerticalStack>
      </Card>
      
      <Card variant="outlined" header={{ title: "User Information" }}>
        <VerticalStack gap={4}>
          <CopyClipboard
            value="user@example.com"
            label="Email Address"
            variant="inline"
          />
          <CopyClipboard
            value="+1 (555) 123-4567"
            label="Phone Number"
            variant="inline"
          />
          <CopyClipboard
            value="https://example.com/user/profile/john-doe"
            label="Profile URL"
            variant="filled"
            previewLength={35}
          />
        </VerticalStack>
      </Card>
      
      <Card variant="outlined" header={{ title: "Code Snippets" }}>
        <VerticalStack gap={4}>
          <CopyClipboard
            value="npm install @jiffy-ui/components"
            label="Installation Command"
            variant="filled"
            iconPosition="left"
          />
          <CopyClipboard
            value="import { CopyClipboard } from '@jiffy-ui/components';"
            label="Import Statement"
            variant="outlined"
          />
        </VerticalStack>
      </Card>
    </VerticalStack>
  </div>
);

// Interactive playground
const PlaygroundTemplate = (args: any) => {
  const handleCopySuccess = (value: string) => {
    console.log('Successfully copied:', value);
  };
  
  const handleCopyError = (error: Error) => {
    console.error('Copy failed:', error);
  };
  
  return (
    <div style={{ padding: '2rem' }}>
      <CopyClipboard
        {...args}
        onCopySuccess={handleCopySuccess}
        onCopyError={handleCopyError}
      />
    </div>
  );
};

export const Playground = PlaygroundTemplate.bind({});
(Playground as any).args = {
  value: "Customize me in the controls panel!",
  label: "Interactive Example",
  variant: "outlined",
  size: "medium",
  iconPosition: "right",
  showPreview: true,
  masked: false,
  disabled: false,
  successTimeout: 2000,
  showToast: true,
  successMessage: "Copied!",
  previewLength: 40
};

// Action-only variants
export const ActionOnly = () => (
  <div style={{ padding: '2rem' }}>
    <VerticalStack gap={5}>
      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.6rem', fontWeight: '600' }}>Action-Only Variants</h3>
        <InlineStack gap={4}>
          <CopyClipboard
            value="This text will be copied"
            actionOnly={true}
            actionStyle="icon"
            showToast={true}
          />
          <CopyClipboard
            value="Another text to copy"
            actionOnly={true}
            actionStyle="text"
            actionText="Copy"
            showToast={true}
          />
          <CopyClipboard
            value="Text with icon and label"
            actionOnly={true}
            actionStyle="icon-text"
            actionText="Copy Text"
            showToast={true}
          />
        </InlineStack>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.6rem', fontWeight: '600' }}>Action-Only Sizes</h3>
        <InlineStack gap={4} align="center">
          <CopyClipboard
            value="Small action button"
            actionOnly={true}
            actionStyle="icon-text"
            actionText="Small"
            size="small"
          />
          <CopyClipboard
            value="Medium action button"
            actionOnly={true}
            actionStyle="icon-text"
            actionText="Medium"
            size="medium"
          />
          <CopyClipboard
            value="Large action button"
            actionOnly={true}
            actionStyle="icon-text"
            actionText="Large"
            size="large"
          />
        </InlineStack>
      </div>
    </VerticalStack>
  </div>
);

// Quick action buttons for common use cases
export const QuickActions = () => (
  <div style={{ padding: '2rem' }}>
    <VerticalStack gap={5}>
      <Card variant="outlined" header={{ title: "Quick Copy Actions" }}>
        <VerticalStack gap={4}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>Email: user@example.com</span>
            <CopyClipboard
              value="user@example.com"
              actionOnly={true}
              actionStyle="icon"
              size="small"
            />
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>Phone: +1 (555) 123-4567</span>
            <CopyClipboard
              value="+1 (555) 123-4567"
              actionOnly={true}
              actionStyle="icon"
              size="small"
            />
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>API Key: sk-1234...abcd</span>
            <CopyClipboard
              value="sk-1234567890abcdef1234567890abcdef"
              actionOnly={true}
              actionStyle="text"
              actionText="Copy Key"
              size="small"
              showToast={true}
              successMessage="API Key copied!"
            />
          </div>
        </VerticalStack>
      </Card>
      
      <Card variant="outlined" header={{ title: "Code Snippets" }}>
        <VerticalStack gap={4}>
          <div style={{ 
            background: '#f8fafc', 
            padding: '1rem', 
            borderRadius: '0.4rem', 
            border: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <code style={{ fontSize: '1.3rem', color: '#374151' }}>
              npm install @jiffy-ui/components
            </code>
            <CopyClipboard
              value="npm install @jiffy-ui/components"
              actionOnly={true}
              actionStyle="icon"
              size="small"
            />
          </div>
          
          <div style={{ 
            background: '#f8fafc', 
            padding: '1rem', 
            borderRadius: '0.4rem', 
            border: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <code style={{ fontSize: '1.3rem', color: '#374151' }}>
              import {`{ CopyClipboard }`} from '@jiffy-ui/components';
            </code>
            <CopyClipboard
              value="import { CopyClipboard } from '@jiffy-ui/components';"
              actionOnly={true}
              actionStyle="icon"
              size="small"
            />
          </div>
        </VerticalStack>
      </Card>
      
      <Card variant="outlined" header={{ title: "Floating Action Buttons" }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <CopyClipboard
            value="https://example.com/share/abc123"
            actionOnly={true}
            actionStyle="icon-text"
            actionText="Share Link"
            showToast={true}
            successMessage="Link copied to clipboard!"
          />
          
          <CopyClipboard
            value="Download the app: https://app.example.com"
            actionOnly={true}
            actionStyle="icon-text"
            actionText="Copy Invite"
            showToast={true}
            successMessage="Invite link copied!"
          />
          
          <CopyClipboard
            value="Check out this amazing tool!"
            actionOnly={true}
            actionStyle="text"
            actionText="Copy Message"
            showToast={true}
          />
        </div>
      </Card>
    </VerticalStack>
  </div>
);

// Toolbar integration example
export const ToolbarIntegration = () => (
  <div style={{ padding: '2rem' }}>
    <Card variant="outlined" header={{ title: "Toolbar with Copy Actions" }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.8rem',
        padding: '0.8rem',
        background: '#f8fafc',
        borderRadius: '0.4rem',
        border: '1px solid #e2e8f0'
      }}>
        <span style={{ flex: 1, fontSize: '1.4rem' }}>Document Title: "My Important Document.pdf"</span>
        
        <CopyClipboard
          value="My Important Document.pdf"
          actionOnly={true}
          actionStyle="icon"
          size="small"
        />
        
        <CopyClipboard
          value="https://docs.example.com/my-important-document.pdf"
          actionOnly={true}
          actionStyle="text"
          actionText="Copy Link"
          size="small"
          showToast={true}
        />
        
        <CopyClipboard
          value="Check out this document: https://docs.example.com/my-important-document.pdf"
          actionOnly={true}
          actionStyle="text"
          actionText="Share"
          size="small"
          showToast={true}
          successMessage="Share message copied!"
        />
      </div>
    </Card>
  </div>
);

// Legacy support
export const Primary = Default;