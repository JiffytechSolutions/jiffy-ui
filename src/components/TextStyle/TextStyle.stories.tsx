import React from "react";
import TextStyle from "./TextStyle";

// Polaris variants and options
const variants = ["heading", "body", "caption", "subdued", "code"];
const tones = ["default", "success", "warning", "critical", "subdued", "emphasis"];
const sizes = ["xs", "sm", "md", "lg", "xl", "2xl"];
const fontWeights = ["light", "regular", "medium", "semibold", "bold"];
const alignments = ["start", "center", "end", "justify"];

export default {
    title: 'Components/TextStyle',
    component: TextStyle,
    parameters: { docs: { autodocs: true, }, },
    argTypes: {
        as: {
            description: "HTML element to render",
            control: {
                type: "select",
                options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "strong", "em", "legend", "label", "dt", "dd"],
            },
            defaultValue: "span"
        },
        variant: {
            description: "Visual style variant",
            control: {
                type: "select",
                options: variants,
            },
            defaultValue: "body",
        },
        tone: {
            description: "Tone of the text",
            control: {
                type: "select",
                options: tones,
            },
            defaultValue: "default",
        },
        size: {
            description: "Size of the text",
            control: {
                type: "select",
                options: sizes,
            },
            defaultValue: "md",
        },
        fontWeight: {
            description: "Font weight",
            control: {
                type: "select",
                options: [undefined, ...fontWeights],
            },
            defaultValue: undefined,
        },
        alignment: {
            description: "Text alignment",
            control: {
                type: "select",
                options: [undefined, ...alignments],
            },
            defaultValue: undefined,
        },
        textDecoration: {
            description: "Text decoration",
            control: {
                type: "select",
                options: [undefined, "underline", "line-through", "none"],
            },
            defaultValue: undefined,
        },
        fontStyle: {
            description: "Font style",
            control: {
                type: "select",
                options: [undefined, "normal", "italic"],
            },
            defaultValue: undefined,
        },
        truncate: {
            description: "Whether to truncate text",
            control: {
                type: "boolean",
            },
            defaultValue: false,
        },
        disabled: {
            description: "Whether the text is disabled",
            control: {
                type: "boolean",
            },
            defaultValue: false,
        },
        children: {
            description: "Text content",
            control: {
                type: "text",
            },
            defaultValue: "This is sample text content for demonstration purposes.",
        },
    }
};

const Template = ({ ...rest }) => {
    return (
        <TextStyle
            as={rest.as}
            variant={rest.variant}
            tone={rest.tone}
            size={rest.size}
            fontWeight={rest.fontWeight}
            alignment={rest.alignment}
            textDecoration={rest.textDecoration}
            fontStyle={rest.fontStyle}
            truncate={rest.truncate}
            disabled={rest.disabled}
        >
            {rest.children}
        </TextStyle>
    );
};

export const Default = Template.bind({});

// Heading variants
export const HeadingVariants = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <TextStyle variant="heading" size="2xl" as="h1">
            Heading 2XL - Main Page Title
        </TextStyle>
        <TextStyle variant="heading" size="xl" as="h2">
            Heading XL - Section Title
        </TextStyle>
        <TextStyle variant="heading" size="lg" as="h3">
            Heading LG - Subsection Title
        </TextStyle>
        <TextStyle variant="heading" size="md" as="h4">
            Heading MD - Card Title
        </TextStyle>
        <TextStyle variant="heading" size="sm" as="h5">
            Heading SM - Small Title
        </TextStyle>
        <TextStyle variant="heading" size="xs" as="h6">
            Heading XS - Micro Title
        </TextStyle>
    </div>
);

// Body text variants
export const BodyVariants = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <TextStyle variant="body" size="lg">
            Body LG - Large body text for important content
        </TextStyle>
        <TextStyle variant="body" size="md">
            Body MD - Standard body text for most content
        </TextStyle>
        <TextStyle variant="body" size="sm">
            Body SM - Smaller body text for secondary content
        </TextStyle>
        <TextStyle variant="body" size="xs">
            Body XS - Extra small body text for captions
        </TextStyle>
    </div>
);

// Tone variations
export const ToneVariations = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <TextStyle variant="body" tone="default">
            Default tone - Standard text color
        </TextStyle>
        <TextStyle variant="body" tone="success">
            Success tone - Positive feedback or completed actions
        </TextStyle>
        <TextStyle variant="body" tone="warning">
            Warning tone - Caution or attention needed
        </TextStyle>
        <TextStyle variant="body" tone="critical">
            Critical tone - Errors or important warnings
        </TextStyle>
        <TextStyle variant="body" tone="subdued">
            Subdued tone - Secondary or less important information
        </TextStyle>
        <TextStyle variant="body" tone="emphasis">
            Emphasis tone - Highlighted or important information
        </TextStyle>
    </div>
);

// Font weight variations
export const FontWeightVariations = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <TextStyle variant="body" fontWeight="light">
            Light weight - 300
        </TextStyle>
        <TextStyle variant="body" fontWeight="regular">
            Regular weight - 400
        </TextStyle>
        <TextStyle variant="body" fontWeight="medium">
            Medium weight - 500
        </TextStyle>
        <TextStyle variant="body" fontWeight="semibold">
            Semibold weight - 600
        </TextStyle>
        <TextStyle variant="body" fontWeight="bold">
            Bold weight - 700
        </TextStyle>
    </div>
);

// Text alignment
export const TextAlignment = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <TextStyle variant="body" alignment="start">
            Start aligned text (left)
        </TextStyle>
        <TextStyle variant="body" alignment="center">
            Center aligned text
        </TextStyle>
        <TextStyle variant="body" alignment="end">
            End aligned text (right)
        </TextStyle>
        <TextStyle variant="body" alignment="justify">
            Justified text that spreads across the full width of the container
        </TextStyle>
    </div>
);

// Text decoration and styles
export const TextDecorationAndStyles = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <TextStyle variant="body" textDecoration="underline">
            Underlined text
        </TextStyle>
        <TextStyle variant="body" textDecoration="line-through">
            Line through text
        </TextStyle>
        <TextStyle variant="body" fontStyle="italic">
            Italic text
        </TextStyle>
        <TextStyle variant="body" fontWeight="bold" fontStyle="italic">
            Bold italic text
        </TextStyle>
    </div>
);

// Caption and subdued text
export const CaptionAndSubdued = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <TextStyle variant="caption" size="sm">
            Caption text - Used for small labels and metadata
        </TextStyle>
        <TextStyle variant="subdued" size="sm">
            Subdued text - Secondary information with reduced emphasis
        </TextStyle>
        <TextStyle variant="body" tone="subdued">
            Body text with subdued tone
        </TextStyle>
    </div>
);

// Code text
export const CodeText = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <TextStyle variant="code" size="sm">
            const example = "code snippet";
        </TextStyle>
        <TextStyle variant="code" size="md">
            function handleClick() {'{'} return true; {'}'}
        </TextStyle>
        <TextStyle variant="code" size="lg">
            npm install @shopify/polaris
        </TextStyle>
    </div>
);

// Truncated text
export const TruncatedText = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '200px' }}>
        <TextStyle variant="body" truncate>
            This is a very long text that will be truncated with ellipsis when it exceeds the container width
        </TextStyle>
        <TextStyle variant="body" truncate>
            Short text
        </TextStyle>
    </div>
);

// Disabled text
export const DisabledText = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <TextStyle variant="body">
            Normal text
        </TextStyle>
        <TextStyle variant="body" disabled>
            Disabled text
        </TextStyle>
        <TextStyle variant="heading" disabled>
            Disabled heading
        </TextStyle>
    </div>
);

// Size comparison
export const SizeComparison = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <TextStyle variant="body" size="xs">Extra Small (0.75rem)</TextStyle>
        <TextStyle variant="body" size="sm">Small (0.875rem)</TextStyle>
        <TextStyle variant="body" size="md">Medium (1rem)</TextStyle>
        <TextStyle variant="body" size="lg">Large (1.125rem)</TextStyle>
        <TextStyle variant="body" size="xl">Extra Large (1.25rem)</TextStyle>
        <TextStyle variant="body" size="2xl">2X Large (1.5rem)</TextStyle>
    </div>
);

// Legacy stories for backward compatibility
export const LegacyTextStyles = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <TextStyle as="h1" className="pixel-Text--root pixel-Text--LgHeading pixel-Text-bold pixel-text__dark">
            Legacy H1 Heading
        </TextStyle>
        <TextStyle as="p" className="pixel-Text--root pixel-Text--MdBody pixel-Text-regular pixel-text__primary">
            Legacy paragraph with primary color
        </TextStyle>
        <TextStyle as="span" className="pixel-Text--root pixel-Text--SmBody pixel-Text-medium pixel-text__secondary">
            Legacy span with secondary color
        </TextStyle>
    </div>
);
