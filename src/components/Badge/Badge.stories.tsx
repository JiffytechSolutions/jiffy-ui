import React from "react";

import Badge from "./Badge";
import FlexLayout from "../FlexLayout/FlexLayout";
import InlineStack from "../InlineStack/InlineStack";
import VerticalStack from "../VerticalStack/VerticalStack";
const size = ["Small", "Medium", "Large"];
const color = ["Primary", "Positive", "Negative", "Notice", "Neutral"];
const type = ["Partial", "Full", "None"];
const emphasis = ["Subtile", "Intense", "OutLine"];

export default {
    title: "Components/Badge",
    component: Badge,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "Badge component for displaying status indicators, labels, and notifications with various sizes, colors, types, and emphasis styles.",
            },
        },
    },
    argTypes: {
        size: {
            description: "Size of the badge",
            control: {
                type: "radio",
                options: size,
            },
            defaultValue: "Large",
            table: {
                defaultValue: { summary: "Large" },
            },
        },
        color: {
            description: "Color theme of the badge (required)",
            control: {
                type: "radio",
                options: color,
            },
            defaultValue: "Positive",
            table: {
                defaultValue: { summary: "Positive" },
            },
        },
        type: {
            description: "Type indicator - None (default), Partial (half-circle), or Full (full circle)",
            control: {
                type: "radio",
                options: type,
            },
            defaultValue: "None",
            table: {
                defaultValue: { summary: "None" },
            },
        },
        emphasis: {
            description: "Visual emphasis style",
            control: {
                type: "radio",
                options: emphasis,
            },
            defaultValue: "Subtile",
            table: {
                defaultValue: { summary: "Subtile" },
            },
        },
        children: {
            description: "Text content to display in the badge",
            control: {
                type: "text",
            },
            defaultValue: "children",
            table: {
                defaultValue: { summary: "children" },
            },
        },
    },
};
const Template = (args: any) => {
    return <Badge {...args} />;
};

export const Primary: any = Template.bind({});
Primary.args = {
    size: "Large",
    color: "Positive", 
    type: "None",
    emphasis: "Subtile",
    children: "Badge Label",
};
Primary.parameters = {
    docs: {
        description: {
            story: "Default badge with customizable props. Use the controls panel to experiment with different configurations.",
        },
    },
};

// Badge with multiple sizes
export const BadgeWithMultipleSizes: any = Template.bind({});
BadgeWithMultipleSizes.decorators = [
    () => {
        return (
            <InlineStack gap={4}>
                {size.map((sizes: any, ind) => (
                    <Badge
                        key={ind}
                        color="Negative"
                        size={sizes}
                        children={sizes}
                    />
                ))}
           </InlineStack>
        );
    },
];
BadgeWithMultipleSizes.parameters = {
    docs: {
        description: {
            story: "Badge component supports three sizes: Small (1.6rem), Medium (2rem), and Large (2.4rem). Each size has proportional font sizes and spacing.",
        },
    },
    controls: { disable: true },
};

// Badge with multiple colors
export const BadgeWithMultipleColors: any = Template.bind({});
BadgeWithMultipleColors.decorators = [
    () => {
        return (
          <InlineStack gap={4}>
                {color.map((colors: any, ind) => (
                    <Badge
                        key={ind}
                        color={colors}
                        size="Large"
                        children={colors}
                    />
                ))}
            </InlineStack>
        );
    },
];
BadgeWithMultipleColors.parameters = {
    docs: {
        description: {
            story: "Badge supports five color themes: Primary (blue), Positive (green), Negative (red), Notice (yellow/orange), and Neutral (gray). Each color follows the design system's semantic meaning.",
        },
    },
    controls: { disable: true },
};

// Badge with multiple type
export const BadgeWithMultipleType: any = Template.bind({});
BadgeWithMultipleType.decorators = [
    () => {
        return (
          <InlineStack gap={4}>
                {type.map((type: any, ind) => (
                    <Badge
                        key={ind}
                        color="Positive"
                        size="Large"
                        children={type}
                        type={type}
                    />
                ))}
            </InlineStack>
        );
    },
];
BadgeWithMultipleType.parameters = {
    docs: {
        description: {
            story: "Badge type indicators: None (no icon), Partial (half-circle for progress), and Full (complete circle for completion). Useful for status and progress indication.",
        },
    },
    controls: { disable: true },
};

// Badge with multiple emphasis
export const BadgeWithMultipleEmphasis: any = Template.bind({});
BadgeWithMultipleEmphasis.decorators = [
    () => {
        return (
          <InlineStack gap={4}>
                {emphasis.map((emphasis: any, ind) => (
                    <Badge
                        key={ind}
                        color="Positive"
                        size="Large"
                        children={emphasis}
                        type="Full"
                        emphasis={emphasis}
                    />
                ))}
            </InlineStack>
        );
    },
];
BadgeWithMultipleEmphasis.parameters = {
    docs: {
        description: {
            story: "Badge emphasis styles: Subtile (light background), Intense (solid color background with white text), and OutLine (transparent background with colored border).",
        },
    },
    controls: { disable: true },
};

// Comprehensive examples showing practical use cases
export const StatusBadges: any = Template.bind({});
StatusBadges.decorators = [
    () => {
        return (
          <VerticalStack gap={4}>
                <InlineStack gap={4}>
                    <span style={{ width: '120px', fontSize: '14px' }}>Task Status:</span>
                    <Badge color="Notice" type="Partial" size="Medium" children="In Progress" />
                    <Badge color="Positive" type="Full" size="Medium" children="Completed" />
                    <Badge color="Negative" type="None" size="Medium" children="Failed" />
                </InlineStack>
                <InlineStack gap={4}>
                    <span style={{ width: '120px', fontSize: '14px' }}>Priority Levels:</span>
                    <Badge color="Negative" emphasis="Intense" size="Small" children="High" />
                    <Badge color="Notice" emphasis="Subtile" size="Small" children="Medium" />
                    <Badge color="Neutral" emphasis="OutLine" size="Small" children="Low" />
                </InlineStack>
                <InlineStack gap={4}>
                    <span style={{ width: '120px', fontSize: '14px' }}>User Roles:</span>
                    <Badge color="Primary" emphasis="Intense" size="Medium" children="Admin" />
                    <Badge color="Primary" emphasis="Subtile" size="Medium" children="Editor" />
                    <Badge color="Neutral" emphasis="OutLine" size="Medium" children="Viewer" />
                </InlineStack>
            </VerticalStack>
        );
    },
];
StatusBadges.parameters = {
    docs: {
        description: {
            story: "Real-world examples showing how to use badges for status indicators, priority levels, and user roles. Different combinations of color, type, and emphasis create clear visual hierarchy.",
        },
    },
    controls: { disable: true },
};

// All emphasis styles with different colors
export const EmphasisComparison: any = Template.bind({});
EmphasisComparison.decorators = [
    () => {
        return (
          <VerticalStack gap={4}>
                {color.map((col: any) => (
                     <InlineStack gap={4}>
                        <span style={{ width: '80px', fontSize: '14px' }}>{col}:</span>
                        <Badge color={col} emphasis="Subtile" size="Medium" children="Subtile" />
                        <Badge color={col} emphasis="Intense" size="Medium" children="Intense" />
                        <Badge color={col} emphasis="OutLine" size="Medium" children="OutLine" />
                    </InlineStack>
                ))}
            </VerticalStack>
        );
    },
];
EmphasisComparison.parameters = {
    docs: {
        description: {
            story: "Comparison of all emphasis styles across different colors. This helps choose the right visual weight for your use case.",
        },
    },
    controls: { disable: true },
};

// Progress indicators using type prop
export const ProgressIndicators: any = Template.bind({});
ProgressIndicators.decorators = [
    () => {
        return (
            <VerticalStack gap={4}>
                <InlineStack gap={4}>
                    <span style={{ width: '100px', fontSize: '14px' }}>Downloads:</span>
                    <Badge color="Notice" type="Partial" size="Large" children="50%" />
                    <Badge color="Primary" type="Partial" size="Large" children="75%" />
                    <Badge color="Positive" type="Full" size="Large" children="Complete" />
                </InlineStack>
                <InlineStack style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span style={{ width: '100px', fontSize: '14px' }}>Uploads:</span>
                    <Badge color="Primary" type="None" size="Medium" children="Pending" />
                    <Badge color="Notice" type="Partial" size="Medium" children="Uploading" />
                    <Badge color="Positive" type="Full" size="Medium" children="Done" />
                </InlineStack>
            </VerticalStack>
        );
    },
];
ProgressIndicators.parameters = {
    docs: {
        description: {
            story: "Using the type prop for progress indication. 'None' for not started, 'Partial' for in progress, and 'Full' for completed states.",
        },
    },
    controls: { disable: true },
};