import React, { useState, useMemo } from "react";
import ActionList from "./Actionlist";
import Button from "../Button/Button";
import FlexLayout, { FlexLayoutItem } from "../FlexLayout/FlexLayout";
import { 
  FileText, 
  Trash2, 
  Edit, 
  Copy, 
  Share, 
  Star, 
  Eye, 
  Bell,
  Mail,
  Command
} from "react-feather";
import InlineStack from "../InlineStack/InlineStack";
import VerticalStack from "../VerticalStack/VerticalStack";

const sizes = ["Small", "Medium", "Large"];
const variants = ["Default", "Bordered", "Elevated"];

// Sample action items - constant to prevent recreation
const basicActions = [
  {
    id: "edit",
    label: "Edit",
    leading: <Edit size={16} />,
    onClick: () => alert("Edit clicked"),
  },
  {
    id: "copy",
    label: "Copy",
    leading: <Copy size={16} />,
    onClick: () => alert("Copy clicked"),
  },
  {
    id: "share",
    label: "Share",
    leading: <Share size={16} />,
    onClick: () => alert("Share clicked"),
  },
  {
    id: "delete",
    label: "Delete",
    leading: <Trash2 size={16} />,
    variant: "destructive" as const,
    onClick: () => alert("Delete clicked"),
  },
];

export default {
  title: "Components/ActionList",
  component: ActionList,
  tags: ["autodocs"],
  argTypes: {
    trigger: {
      description: "Trigger behavior",
      control: {
        type: "radio",
        options: ["click", "hover", "focus"],
      },
      defaultValue: "click",
    },
    placement: {
      description: "Placement relative to trigger",
      control: {
        type: "select",
        options: ["top", "bottom", "left", "right", "top-start", "top-end", "bottom-start", "bottom-end"],
      },
      defaultValue: "bottom-start",
    },
    size: {
      description: "ActionList size",
      control: {
        type: "radio",
        options: sizes,
      },
      defaultValue: "Medium",
    },
    variant: {
      description: "ActionList variant",
      control: {
        type: "radio",
        options: variants,
      },
      defaultValue: "Default",
    },
    disabled: {
      description: "Disable ActionList",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    closeOnSelect: {
      description: "Close on item selection",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
  },
  args: {
    trigger: "click",
    placement: "bottom-start",
    size: "Medium",
    variant: "Default",
    disabled: false,
    closeOnSelect: true,
  }
};

const Template = ({ ...rest }) => {
  return (
    <div style={{ padding: "2rem", minHeight: "200px" }}>
      <ActionList
        items={basicActions}
        size={rest.size}
        variant={rest.variant}
        trigger={rest.trigger}
        placement={rest.placement}
        disabled={rest.disabled}
        closeOnSelect={rest.closeOnSelect}
      >
        <Button variant="Secondary">
          Open ActionList
        </Button>
      </ActionList>
    </div>
  );
};

export const Primary = Template.bind({});

// Simple test story to debug rendering issues
export const SimpleTest = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <ActionList
        items={basicActions}
      >
        <Button variant="Secondary">
          Simple Test
        </Button>
      </ActionList>
    </div>
  );
};

// Basic ActionList Examples
const BasicExamplesDecorator = React.memo(() => {
  const docActions = React.useMemo(() => [
    {
      id: "edit-doc",
      label: "Edit Document",
      description: "Modify the current document",
      leading: <Edit size={16} />,
      onClick: () => alert("Edit Document clicked"),
    },
    {
      id: "share-doc",
      label: "Share Document",
      description: "Send to team members",
      leading: <Share size={16} />,
      onClick: () => alert("Share Document clicked"),
    },
  ], []);

  return (
    <FlexLayout direction="column" gap={4}>
      <FlexLayoutItem>
      <h3>Basic ActionList Examples</h3>
      </FlexLayoutItem>
      <FlexLayoutItem>
      <InlineStack gap={4}>
        <ActionList items={basicActions}>
          <Button variant="Secondary">
            Basic Actions
          </Button>
        </ActionList>

        <ActionList 
          items={docActions}
          variant="Bordered"
        >
          <Button variant="Secondary">
            With Descriptions
          </Button>
        </ActionList>

        <ActionList 
          items={basicActions}
          variant="Elevated"
          size="Large"
        >
          <Button variant="Secondary">
            Large & Elevated
          </Button>
        </ActionList>
      </InlineStack>
      </FlexLayoutItem>
    </FlexLayout>
  );
});

export const ActionList_basic_examples: any = Template.bind({});
ActionList_basic_examples.decorators = [() => <BasicExamplesDecorator />];

// Different Sizes
const SizesDecorator = React.memo(() => {
  return (
    <VerticalStack gap={4}>
      <h3>Different Sizes</h3>
      <InlineStack gap={4}>
        {sizes.map((size) => (
          <ActionList
            key={size}
            items={basicActions}
            size={size as "Small" | "Medium" | "Large"}
            variant="Bordered"
          >
            <Button variant="Secondary" size={size as "Small" | "Medium" | "Large"}>
              {size} ActionList
            </Button>
          </ActionList>
        ))}
      </InlineStack>
    </VerticalStack>
  );
});

export const ActionList_different_sizes: any = Template.bind({});
ActionList_different_sizes.decorators = [() => <SizesDecorator />];

// Different Variants
const VariantsDecorator = React.memo(() => {
  return (
    <VerticalStack gap={4}>
      <h3>Different Variants</h3>
      <InlineStack gap={4}>
        {variants.map((variant) => (
          <FlexLayoutItem key={variant}>
            <ActionList
              items={basicActions}
              variant={variant as "Default" | "Bordered" | "Elevated"}
            >
              <Button variant="Secondary">
                {variant} Variant
              </Button>
            </ActionList>
          </FlexLayoutItem>
        ))}
      </InlineStack>
    </VerticalStack>
  );
});

export const ActionList_different_variants: any = Template.bind({});
ActionList_different_variants.decorators = [() => <VariantsDecorator />];

// Constant grouped actions to prevent recreation
const groupedActionsData = [
  {
    id: "file-group",
    title: "File Actions",
    items: [
      {
        id: "new",
        label: "New File",
        leading: <FileText size={16} />,
        onClick: () => alert("New File clicked"),
      },
      {
        id: "open",
        label: "Open File",
        leading: <Eye size={16} />,
        onClick: () => alert("Open File clicked"),
      },
    ],
    separator: true,
  },
  {
    id: "edit-group",
    title: "Edit Actions",
    items: [
      {
        id: "copy-edit",
        label: "Copy",
        leading: <Copy size={16} />,
        onClick: () => alert("Copy clicked"),
      },
      {
        id: "delete-edit",
        label: "Delete",
        leading: <Trash2 size={16} />,
        variant: "destructive" as const,
        onClick: () => alert("Delete clicked"),
      },
    ],
  },
];

const badgeActionsData = [
  {
    id: "badges",
    label: "Notifications",
    leading: <Bell size={16} />,
    badge: "3",
    badgeVariant: "primary" as const,
    onClick: () => alert("Notifications clicked"),
  },
  {
    id: "messages",
    label: "Messages",
    leading: <Mail size={16} />,
    badge: "12",
    badgeVariant: "success" as const,
    onClick: () => alert("Messages clicked"),
  },
  {
    id: "shortcuts",
    label: "Quick Actions",
    leading: <Command size={16} />,
    shortcut: "⌘K",
    onClick: () => alert("Quick Actions clicked"),
  },
];

// Grouped Actions
const GroupedActionsDecorator = React.memo(() => {
  return (
    <VerticalStack gap={4}>
      <h3>Grouped Actions</h3>
      
      <InlineStack gap={4}>
        <ActionList 
          items={groupedActionsData}
          variant="Bordered"
        >
          <Button variant="Secondary">
            File Menu
          </Button>
        </ActionList>

        <ActionList 
          items={badgeActionsData}
          variant="Elevated"
        >
          <Button variant="Secondary">
            With Badges
          </Button>
        </ActionList>
      </InlineStack>
    </VerticalStack>
  );
});

export const ActionList_grouped_actions: any = Template.bind({});
ActionList_grouped_actions.decorators = [() => <GroupedActionsDecorator />];

// Constant state actions to prevent recreation
const stateActionsData = [
  {
    id: "enabled",
    label: "Enabled Action",
    leading: <Edit size={16} />,
    onClick: () => alert("Enabled clicked"),
  },
  {
    id: "disabled",
    label: "Disabled Action",
    leading: <Copy size={16} />,
    disabled: true,
    onClick: () => alert("Should not trigger"),
  },
  {
    id: "selected",
    label: "Selected Action",
    leading: <Star size={16} />,
    selected: true,
    onClick: () => alert("Selected clicked"),
  },
  {
    id: "destructive",
    label: "Destructive Action",
    leading: <Trash2 size={16} />,
    variant: "destructive" as const,
    onClick: () => alert("Destructive clicked"),
  },
];

// Different States
const DifferentStatesDecorator = React.memo(() => {
  return (
    <VerticalStack gap={4}>
      <h3>Different States</h3>
      
      <InlineStack gap={4}>
        <ActionList 
          items={stateActionsData}
          variant="Bordered"
        >
          <Button variant="Secondary">
            Item States
          </Button>
        </ActionList>

        <ActionList 
          items={basicActions}
          disabled
          variant="Bordered"
        >
          <Button variant="Secondary" isDisabled>
            Disabled ActionList
          </Button>
        </ActionList>

        <ActionList 
          items={basicActions}
          trigger="hover"
          variant="Elevated"
        >
          <Button variant="Secondary">
            Hover Trigger
          </Button>
        </ActionList>
      </InlineStack>
    </VerticalStack>
  );
});

export const ActionList_different_states: any = Template.bind({});
ActionList_different_states.decorators = [() => <DifferentStatesDecorator />];
