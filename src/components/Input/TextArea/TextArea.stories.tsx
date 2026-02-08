import React, { useState } from "react";
import TextArea from "./TextArea";
import FlexLayout from "../../FlexLayout/FlexLayout";
import Button from "../../Button/Button";
import VerticalStack from "../../VerticalStack/VerticalStack";
import InlineStack from "../../InlineStack/InlineStack";

const sizes = ["Small", "Medium", "Large"];
const variants = ["Default", "Outlined", "Filled"];
const resizeOptions = ["none", "both", "horizontal", "vertical"];

export default {
  title: "Components/Input/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "TextArea label",
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
    rows: {
      description: "Number of visible text lines",
      control: {
        type: "number",
        min: 1,
        max: 20,
      },
    },
    maxLength: {
      description: "Maximum character length",
      control: {
        type: "number",
        min: 0,
        max: 10000,
      },
    },
    disabled: {
      description: "Whether textarea is disabled",
      control: {
        type: "boolean",
      },
    },
    readOnly: {
      description: "Whether textarea is read-only",
      control: {
        type: "boolean",
      },
    },
    required: {
      description: "Whether field is required",
      control: {
        type: "boolean",
      },
    },
    autoResize: {
      description: "Automatic height adjustment",
      control: {
        type: "boolean",
      },
    },
    showCharacterCount: {
      description: "Show character count",
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
    copyable: {
      description: "Show copy button",
      control: {
        type: "boolean",
      },
    },
    size: {
      description: "Component size",
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
    resize: {
      description: "Resize behavior",
      control: {
        type: "radio",
        options: resizeOptions,
      },
    },
    fullWidth: {
      description: "Whether textarea should take full width",
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    label: "Description",
    placeholder: "Enter your text here...",
    rows: 4,
    disabled: false,
    readOnly: false,
    required: false,
    autoResize: false,
    showCharacterCount: false,
    clearable: false,
    copyable: false,
    size: "Medium",
    variant: "Default",
    resize: "vertical",
    fullWidth: false,
  }
};

const Template = ({ ...rest }) => {
  const [value, setValue] = useState("");

  return (
    <div style={{ padding: "2rem", maxWidth: rest.fullWidth ? "100%" : "600px" }}>
      <TextArea
        name="example-textarea"
        value={value}
        onChange={(val:any) => setValue(val)}
        description="This is a help text for the textarea"
        {...rest}
      />
      
      {value && (
        <div style={{ marginTop: "2rem", padding: "1rem", background: "#f9fafb", borderRadius: "0.5rem" }}>
          <h4>Current Value:</h4>
          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{value}</pre>
          <p><strong>Length:</strong> {value.length} characters</p>
        </div>
      )}
    </div>
  );
};

export const Primary = Template.bind({});

// Basic TextArea Examples
export const TextArea_basic_examples: any = Template.bind({});
TextArea_basic_examples.decorators = [
  () => {
    const [simpleValue, setSimpleValue] = useState("");
    const [commentValue, setCommentValue] = useState("This is a sample comment...");
    const [descriptionValue, setDescriptionValue] = useState("");

    return (
      <VerticalStack gap={4}>
        <h3>Basic TextArea Examples</h3>
        
        <VerticalStack gap={3}>
          <h4>Simple TextArea:</h4>
          <TextArea
            name="simple"
            label="Message"
            value={simpleValue}
            onChange={setSimpleValue}
            placeholder="Type your message here..."
            rows={3}
            description="Enter a brief message"
          />
        </VerticalStack>

        <VerticalStack gap={3}>
          <h4>Comment TextArea:</h4>
          <TextArea
            name="comment"
            label="Comment"
            value={commentValue}
            onChange={setCommentValue}
            placeholder="Add your comment..."
            rows={4}
            maxLength={500}
            showCharacterCount={true}
            clearable={true}
            description="Share your thoughts (max 500 characters)"
          />
        </VerticalStack>

        <VerticalStack gap={3}>
          <h4>Product Description:</h4>
          <TextArea
            name="description"
            label="Product Description"
            value={descriptionValue}
            onChange={setDescriptionValue}
            placeholder="Describe your product..."
            rows={6}
            required={true}
            autoResize={true}
            minRows={4}
            maxRows={10}
            description="Provide a detailed description of your product"
          />
        </VerticalStack>
      </VerticalStack>
    );
  },
];

// Different Sizes
export const TextArea_different_sizes: any = Template.bind({});
TextArea_different_sizes.decorators = [
  () => {
    return (
      <VerticalStack gap={4}>
        <h3>Different Sizes</h3>
        {sizes.map((size) => {
          const [value, setValue] = useState(`This is a ${size.toLowerCase()} sized textarea`);
          return (
            <div key={size}>
              <TextArea
                name={`size-${size.toLowerCase()}`}
                label={`${size} Size TextArea`}
                value={value}
                onChange={setValue}
                size={size as "Small" | "Medium" | "Large"}
                placeholder={`${size} textarea placeholder...`}
                description={`This is a ${size.toLowerCase()} sized textarea`}
              />
            </div>
          );
        })}
      </VerticalStack>
    );
  },
];

// Different Variants
export const TextArea_different_variants: any = Template.bind({});
TextArea_different_variants.decorators = [
  () => {
    return (
      <VerticalStack gap={4}>
        <h3>Different Variants</h3>
        
        {variants.map((variant) => {
          const [value, setValue] = useState(`This textarea uses the ${variant.toLowerCase()} variant style.`);
          return (
            <VerticalStack key={variant} gap={3}>
              <h4>{variant} Variant:</h4>
              <TextArea
                name={`variant-${variant.toLowerCase()}`}
                label={`${variant} Style`}
                value={value}
                onChange={setValue}
                variant={variant as "Default" | "Outlined" | "Filled"}
                placeholder={`${variant} textarea...`}
                description={`TextArea using ${variant.toLowerCase()} visual style`}
              />
            </VerticalStack>
          );
        })}
      </VerticalStack>
    );
  },
];

// Validation States
export const TextArea_validation_states: any = Template.bind({});
TextArea_validation_states.decorators = [
  () => {
    const [defaultValue, setDefaultValue] = useState("");
    const [successValue, setSuccessValue] = useState("Your message has been validated successfully!");
    const [warningValue, setWarningValue] = useState("This message might be too short...");
    const [errorValue, setErrorValue] = useState("This field contains invalid content.");

    return (
      <VerticalStack gap={4}>
        <h3>Validation States</h3>
        
        <TextArea
          name="validation-default"
          label="Default State"
          value={defaultValue}
          onChange={setDefaultValue}
          placeholder="Enter your text..."
          description="This is a normal textarea"
        />

        <TextArea
          name="validation-success"
          label="Success State"
          value={successValue}
          onChange={setSuccessValue}
          placeholder="Enter your text..."
          success="Perfect! Your input looks great."
        />

        <TextArea
          name="validation-warning"
          label="Warning State"
          value={warningValue}
          onChange={setWarningValue}
          placeholder="Enter your text..."
          warning="Consider adding more details to your message."
          required
        />

        <TextArea
          name="validation-error"
          label="Error State"
          value={errorValue}
          onChange={setErrorValue}
          placeholder="Enter your text..."
          error="This field contains errors that need to be fixed."
          required
        />
      </VerticalStack>
    );
  },
];

// Different States
export const TextArea_different_states: any = Template.bind({});
TextArea_different_states.decorators = [
  () => {
    const [normalValue, setNormalValue] = useState("This is a normal textarea");
    const [requiredValue, setRequiredValue] = useState("");
    const [disabledValue, setDisabledValue] = useState("This textarea is disabled");
    const [readOnlyValue, setReadOnlyValue] = useState("This textarea is read-only and cannot be edited");

    return (
      <VerticalStack gap={4}>
        <h3>Different States</h3>
        
        <TextArea
          name="state-normal"
          label="Normal TextArea"
          value={normalValue}
          onChange={setNormalValue}
          placeholder="Enter your text..."
          description="This is a normal textarea"
        />

        <TextArea
          name="state-required"
          label="Required TextArea"
          value={requiredValue}
          onChange={setRequiredValue}
          placeholder="This field is required..."
          required
          description="You must fill this field"
        />

        <TextArea
          name="state-disabled"
          label="Disabled TextArea"
          value={disabledValue}
          onChange={setDisabledValue}
          placeholder="This field is disabled..."
          disabled
          description="This textarea is disabled"
        />

        <TextArea
          name="state-readonly"
          label="Read-only TextArea"
          value={readOnlyValue}
          onChange={setReadOnlyValue}
          readOnly
          description="This textarea is read-only"
        />
      </VerticalStack>
    );
  },
];

// Auto-resize Features
export const TextArea_auto_resize: any = Template.bind({});
TextArea_auto_resize.decorators = [
  () => {
    const [basicAutoValue, setBasicAutoValue] = useState("This textarea will automatically adjust its height as you type more content.\n\nTry adding more lines to see the auto-resize in action!");
    const [constrainedAutoValue, setConstrainedAutoValue] = useState("This auto-resize textarea has min and max row constraints.\n\nMinimum: 3 rows\nMaximum: 8 rows\n\nKeep typing to test the limits...");
    const [manualResizeValue, setManualResizeValue] = useState("This textarea allows manual resizing.\n\nYou can grab the resize handle in the bottom-right corner to adjust the size.");

    return (
      <VerticalStack gap={4}>
        <h3>Auto-resize Features</h3>
        
        <VerticalStack gap={3}>
          <h4>Basic Auto-resize:</h4>
          <TextArea
            name="auto-basic"
            label="Auto-resize TextArea"
            value={basicAutoValue}
            onChange={setBasicAutoValue}
            autoResize={true}
            rows={3}
            placeholder="Start typing to see auto-resize..."
            description="Automatically adjusts height based on content"
          />
        </VerticalStack>

        <VerticalStack gap={3}>
          <h4>Constrained Auto-resize:</h4>
          <TextArea
            name="auto-constrained"
            label="Constrained Auto-resize"
            value={constrainedAutoValue}
            onChange={setConstrainedAutoValue}
            autoResize={true}
            rows={3}
            minRows={3}
            maxRows={8}
            placeholder="Type to test min/max constraints..."
            description="Auto-resize with minimum 3 rows and maximum 8 rows"
          />
        </VerticalStack>

        <VerticalStack gap={3}>
          <h4>Manual Resize:</h4>
          <TextArea
            name="manual-resize"
            label="Manual Resize TextArea"
            value={manualResizeValue}
            onChange={setManualResizeValue}
            resize="both"
            rows={4}
            placeholder="Manually resizable textarea..."
            description="Use the resize handle to adjust size manually"
          />
        </VerticalStack>
      </VerticalStack>
    );
  },
];

// Character Count and Limits
export const TextArea_character_features: any = Template.bind({});
TextArea_character_features.decorators = [
  () => {
    const [basicCountValue, setBasicCountValue] = useState("This textarea shows character count.");
    const [limitedValue, setLimitedValue] = useState("This textarea has a 200 character limit. Try typing more to see the limit in action!");
    const [tweetValue, setTweetValue] = useState("Compose your tweet here! Keep it under 280 characters.");

    return (
      <VerticalStack gap={4}>
        <h3>Character Count and Limits</h3>
        
        <VerticalStack gap={3}>
          <h4>Basic Character Count:</h4>
          <TextArea
            name="char-basic"
            label="Message with Character Count"
            value={basicCountValue}
            onChange={setBasicCountValue}
            showCharacterCount={true}
            rows={3}
            placeholder="Type to see character count..."
            description="Shows current character count"
          />
        </VerticalStack>

        <VerticalStack gap={3}>
          <h4>Character Limit (200):</h4>
          <TextArea
            name="char-limited"
            label="Limited Message"
            value={limitedValue}
            onChange={setLimitedValue}
            maxLength={200}
            showCharacterCount={true}
            rows={4}
            placeholder="Maximum 200 characters..."
            description="Character count changes color as you approach the limit"
          />
        </VerticalStack>

        <VerticalStack gap={3}>
          <h4>Tweet Composer (280 chars):</h4>
          <TextArea
            name="tweet-composer"
            label="Compose Tweet"
            value={tweetValue}
            onChange={setTweetValue}
            maxLength={280}
            showCharacterCount={true}
            rows={3}
            autoResize={true}
            minRows={3}
            maxRows={6}
            placeholder="What's happening?"
            description="Share your thoughts in 280 characters or less"
          />
        </VerticalStack>
      </VerticalStack>
    );
  },
];

// Action Buttons
export const TextArea_action_buttons: any = Template.bind({});
TextArea_action_buttons.decorators = [
  () => {
    const [clearableValue, setClearableValue] = useState("This textarea has a clear button. You can quickly clear all content by clicking the X button.");
    const [copyableValue, setCopyableValue] = useState("This content can be copied to clipboard with the copy button. Click the copy icon to copy this text.");
    const [bothActionsValue, setBothActionsValue] = useState("This textarea has both clear and copy buttons. Very useful for forms and content management.");

    return (
      <VerticalStack gap={4}>
        <h3>Action Buttons</h3>
        
        <VerticalStack gap={3}>
          <h4>Clearable TextArea:</h4>
          <TextArea
            name="clearable"
            label="Clearable Content"
            value={clearableValue}
            onChange={setClearableValue}
            clearable={true}
            rows={3}
            placeholder="Type something to see the clear button..."
            description="Click the X button to clear all content"
          />
        </VerticalStack>

        <VerticalStack gap={3}>
          <h4>Copyable TextArea:</h4>
          <TextArea
            name="copyable"
            label="Copyable Content"
            value={copyableValue}
            onChange={setCopyableValue}
            copyable={true}
            rows={3}
            placeholder="Content that can be copied..."
            description="Click the copy button to copy content to clipboard"
          />
        </VerticalStack>

        <VerticalStack gap={3}>
          <h4>Both Actions:</h4>
          <TextArea
            name="both-actions"
            label="Full-featured TextArea"
            value={bothActionsValue}
            onChange={setBothActionsValue}
            clearable={true}
            copyable={true}
            showCharacterCount={true}
            rows={3}
            placeholder="Both clear and copy available..."
            description="TextArea with both clear and copy functionality"
          />
        </VerticalStack>
      </VerticalStack>
    );
  },
];

// Form Integration
export const TextArea_form_integration: any = Template.bind({});
TextArea_form_integration.decorators = [
  () => {
    const [formData, setFormData] = useState({
      title: "",
      description: "",
      comments: "",
      feedback: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert("Form submitted!\n\n" + JSON.stringify(formData, null, 2));
    };

    const handleReset = () => {
      setFormData({
        title: "",
        description: "",
        comments: "",
        feedback: ""
      });
    };

    const updateField = (field: string, value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
      <div style={{ maxWidth: "600px" }}>
        <h3>Form Integration Example</h3>
        
        <form onSubmit={handleSubmit}>
          <VerticalStack gap={4}>
            <TextArea
              name="title"
              label="Project Title"
              value={formData.title}
              onChange={(value:any) => updateField('title', value)}
              placeholder="Enter project title..."
              rows={2}
              maxLength={100}
              showCharacterCount={true}
              required
              description="Brief title for your project"
            />

            <TextArea
              name="description"
              label="Project Description"
              value={formData.description}
              onChange={(value:any) => updateField('description', value)}
              placeholder="Describe your project in detail..."
              rows={4}
              autoResize={true}
              minRows={4}
              maxRows={8}
              maxLength={1000}
              showCharacterCount={true}
              required
              description="Detailed description of your project goals and requirements"
            />

            <TextArea
              name="comments"
              label="Additional Comments"
              value={formData.comments}
              onChange={(value:any) => updateField('comments', value)}
              placeholder="Any additional comments or notes..."
              rows={3}
              clearable={true}
              description="Optional comments or special instructions"
            />

            <TextArea
              name="feedback"
              label="Feedback"
              value={formData.feedback}
              onChange={(value:any) => updateField('feedback', value)}
              placeholder="Share your feedback..."
              rows={3}
              variant="Filled"
              copyable={true}
              description="Your thoughts and suggestions"
            />

            <InlineStack gap={2}>
              <Button type="submit" variant="Primary">
                Submit Form
              </Button>
              <Button type="button" variant="Secondary" onClick={handleReset}>
                Reset Form
              </Button>
            </InlineStack>
          </VerticalStack>
        </form>

        {Object.values(formData).some(value => value) && (
          <div style={{ marginTop: "2rem", padding: "1rem", background: "#f9fafb", borderRadius: "0.5rem" }}>
            <h4>Form Data:</h4>
            <pre style={{ whiteSpace: "pre-wrap", fontSize: "1.2rem" }}>
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
        )}
      </div>
    );
  },
];

// Advanced Features
export const TextArea_advanced_features: any = Template.bind({});
TextArea_advanced_features.decorators = [
  () => {
    const [codeValue, setCodeValue] = useState(`function calculateTotal(items) {
  return items.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);
}

const items = [
  { name: "Widget A", price: 10.99, quantity: 2 },
  { name: "Widget B", price: 25.50, quantity: 1 }
];

console.log("Total:", calculateTotal(items));`);

    const [jsonValue, setJsonValue] = useState(`{
  "name": "TextArea Component",
  "version": "2.0.0",
  "description": "A modern, feature-rich textarea component",
  "features": [
    "Auto-resize",
    "Character counting",
    "Copy/Clear actions",
    "Validation states",
    "Multiple variants"
  ],
  "accessibility": {
    "aria-support": true,
    "keyboard-navigation": true,
    "screen-reader": "compatible"
  }
}`);

    const [markdownValue, setMarkdownValue] = useState(`# TextArea Component

A **modern** and *feature-rich* textarea component with:

- Auto-resize functionality
- Character counting
- Copy and clear actions
- Multiple visual variants
- Full accessibility support

## Usage

\`\`\`jsx
<TextArea
  label="Description"
  value={value}
  onChange={setValue}
  autoResize={true}
  showCharacterCount={true}
/>
\`\`\`

> This component supports all standard textarea attributes plus many enhanced features.`);

    return (
      <VerticalStack gap={4}>
        <h3>Advanced Features</h3>
        
        <VerticalStack gap={3}>
          <h4>Code Editor Style:</h4>
          <TextArea
            name="code-editor"
            label="JavaScript Code"
            value={codeValue}
            onChange={setCodeValue}
            rows={12}
            resize="both"
            copyable={true}
            showCharacterCount={true}
            variant="Outlined"
            style={{
              fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              fontSize: "1.3rem",
              lineHeight: "1.6",
            }}
            spellCheck={false}
            wrap="off"
            description="JavaScript code with monospace font and no word wrapping"
          />
        </VerticalStack>

        <VerticalStack gap={3}>
          <h4>JSON Data Editor:</h4>
          <TextArea
            name="json-editor"
            label="JSON Configuration"
            value={jsonValue}
            onChange={setJsonValue}
            autoResize={true}
            minRows={8}
            maxRows={15}
            copyable={true}
            clearable={true}
            showCharacterCount={true}
            variant="Filled"
            style={{
              fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
            }}
            spellCheck={false}
            description="JSON configuration with auto-resize and monospace font"
          />
        </VerticalStack>

        <VerticalStack gap={3}>
          <h4>Markdown Editor:</h4>
          <TextArea
            name="markdown-editor"
            label="Markdown Content"
            value={markdownValue}
            onChange={setMarkdownValue}
            rows={10}
            resize="vertical"
            copyable={true}
            clearable={true}
            showCharacterCount={true}
            maxLength={5000}
            style={{
              fontFamily: "'SF Mono', 'Monaco', 'Inconsolata', monospace",
              fontSize: "1.4rem",
            }}
            description="Markdown editor with character limit and formatting support"
          />
        </VerticalStack>
      </VerticalStack>
    );
  },
];