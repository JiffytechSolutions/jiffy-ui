import React, { useState } from "react";
import Card from "./Card";
import type { CardProps } from "./Card";
import FlexLayout from "../FlexLayout/FlexLayout";
import { Download, Share2, Edit3, Trash2, Star, Heart, Settings, User } from "react-feather";
import VerticalStack from "../VerticalStack/VerticalStack";
import InlineStack from "../InlineStack/InlineStack";

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    docs: {
      autodocs: true,
      description: {
        component: "A flexible card component for displaying content with optional headers, footers, and actions."
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "outlined", "elevated", "filled", "ghost"],
      description: "Visual variant of the card"
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Size affects padding and text sizes"
    },
    padding: {
      control: { type: "select" },
      options: ["none", "small", "medium", "large"],
      description: "Override default padding"
    },
    radius: {
      control: { type: "select" },
      options: ["none", "small", "medium", "large", "full"],
      description: "Border radius"
    },
    interactive: {
      control: { type: "boolean" },
      description: "Adds hover effects"
    },
    selectable: {
      control: { type: "boolean" },
      description: "Makes card selectable"
    },
    selected: {
      control: { type: "boolean" },
      description: "Selected state"
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disabled state"
    },
    loading: {
      control: { type: "boolean" },
      description: "Loading state"
    },
    divided: {
      control: { type: "boolean" },
      description: "Show dividers between sections"
    },
    orientation: {
      control: { type: "select" },
      options: ["vertical", "horizontal"],
      description: "Card layout orientation"
    }
  }
};

const Template = (args: CardProps) => <Card {...args} />;

// Basic Examples
export const Default:any = Template.bind({});
Default.args = {
  children: "This is a basic card with default styling and some content to display."
};

export const WithHeader:any = Template.bind({});
WithHeader.args = {
  header: {
    title: "Card Title",
    subtitle: "Optional subtitle"
  },
  children: "This card has a header with title and subtitle."
};

export const WithFooter:any = Template.bind({});
WithFooter.args = {
  header: {
    title: "Project Overview"
  },
  footer: {
    title: "Status",
    subtitle: "Last updated 2 hours ago"
  },
  children: "This card has both header and footer sections."
};

// Variant Examples
export const Variants = () => (
  <>
    <VerticalStack gap={4}>
      <Card variant="default" header={{ title: "Default" }}>
        Default card with subtle shadow and border.
      </Card>
      <Card variant="outlined" header={{ title: "Outlined" }}>
        Outlined card with visible border.
      </Card>
      <Card variant="elevated" header={{ title: "Elevated" }}>
        Elevated card with prominent shadow.
      </Card>
    </VerticalStack>
    <VerticalStack gap={4}>
      <Card variant="filled" header={{ title: "Filled" }}>
        Filled card with background color.
      </Card>
      <Card variant="ghost" header={{ title: "Ghost" }}>
        Ghost card with no background or border.
      </Card>
    </VerticalStack>
  </>
);

// Size Examples
export const Sizes = () => (
  <VerticalStack gap={4}>
   
    <Card size="medium" variant="outlined" header={{ title: "Medium Card" }}>
      Medium card with default spacing and text sizes.
    </Card>
   
  </VerticalStack>
);

// Interactive Examples
export const Interactive = () => (
  <VerticalStack gap={4}>
    <Card 
      interactive 
      variant="outlined" 
      header={{ title: "Hover Me" }}
      onClick={() => alert("Card clicked!")}
    >
      This card has hover effects and click handling.
    </Card>
    <Card 
      interactive 
      variant="elevated" 
      header={{ title: "Interactive Card" }}
      onClick={() => alert("Another click!")}
    >
      Cards can respond to user interactions.
    </Card>
  </VerticalStack>
);

// Selectable Examples
export const Selectable = () => {
  const [selected, setSelected] = useState<string[]>([]);
  
  const cards = [
    { id: "1", title: "Option 1", content: "First selectable option" },
    { id: "2", title: "Option 2", content: "Second selectable option" },
    { id: "3", title: "Option 3", content: "Third selectable option" }
  ];
  
  const handleSelection = (id: string, isSelected: boolean) => {
    if (isSelected) {
      setSelected([...selected, id]);
    } else {
      setSelected(selected.filter(item => item !== id));
    }
  };
  
  return (
    <VerticalStack gap={4}>
      {cards.map(card => (
        <Card
          key={card.id}
          selectable
          selected={selected.includes(card.id)}
          variant="outlined"
          header={{ title: card.title }}
          onSelectionChange={(isSelected) => handleSelection(card.id, isSelected)}
        >
          {card.content}
        </Card>
      ))}
    </VerticalStack>
  );
};

// Actions Examples
export const WithActions = () => (
  <VerticalStack gap={4}>
    <Card
      variant="outlined"
      header={{
        title: "Card with Header Actions",
        subtitle: "Actions in the header",
        actions: [
          { label: "Edit", icon: <Edit3 size={16} />, onClick: () => alert("Edit clicked") },
          { label: "Share", icon: <Share2 size={16} />, variant: "Secondary", onClick: () => alert("Share clicked") }
        ]
      }}
    >
      This card has action buttons in the header.
    </Card>
    
    <Card
      variant="outlined"
      header={{ title: "Project Status" }}
      footer={{
        actions: [
          { label: "Cancel", variant: "Ghost", onClick: () => alert("Cancel") },
          { label: "Save", variant: "Primary", onClick: () => alert("Save") }
        ]
      }}
    >
      This card has action buttons in the footer.
    </Card>
  </VerticalStack>
);

// States Examples
export const States = () => (
  <VerticalStack gap={4}>
    <Card variant="outlined" header={{ title: "Normal State" }}>
      Normal card state.
    </Card>
    <Card variant="outlined" disabled header={{ title: "Disabled State" }}>
      This card is disabled.
    </Card>
    <Card variant="outlined" loading header={{ title: "Loading State" }}>
      This card is loading.
    </Card>
  </VerticalStack>
);

// Complex Layout Example
export const ComplexLayout = () => (
  <Card
    variant="elevated"
    
    header={{
      title: "User Profile",
      subtitle: "Manage your account settings",
      actions: [
        { label: "Settings", icon: <Settings size={16} />, variant: "Ghost", onClick: () => alert("Settings") }
      ]
    }}
    footer={{
      title: "Last Activity",
      subtitle: "2 hours ago",
      actions: [
        { label: "View History", variant: "Tertiary", onClick: () => alert("History") },
        { label: "Update Profile", variant: "Primary", onClick: () => alert("Update") }
      ]
    }}
  >
    <VerticalStack gap={4}>
      <InlineStack gap={3}>
        <div style={{ 
          width: 48, 
          height: 48, 
          borderRadius: "50%", 
          background: "#e5e7eb",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <User size={24} color="#6b7280" />
        </div>
        <div>
          <h4 style={{ margin: 0, fontSize: "16px", fontWeight: 600 }}>John Doe</h4>
          <p style={{ margin: 0, fontSize: "14px", color: "#6b7280" }}>john.doe@example.com</p>
        </div>
      </InlineStack>
      
      <p style={{ margin: 0, lineHeight: "1.5", color: "#374151" }}>
        Software engineer with 5+ years of experience in React, TypeScript, and modern web development.
        Passionate about creating user-friendly interfaces and scalable applications.
      </p>
    </VerticalStack>
  </Card>
);

// Grid Layout Example
export const GridLayout = () => (
  <div style={{ 
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "16px"
  }}>
    {[1, 2, 3, 4, 5, 6].map(num => (
      <Card
        key={num}
        variant="outlined"
        interactive
        header={{
          title: `Card ${num}`,
          subtitle: `Subtitle ${num}`,
          actions: [
            { label: "", icon: <Heart size={16} />, variant: "Ghost", onClick: () => alert(`Like ${num}`) },
            { label: "", icon: <Star size={16} />, variant: "Ghost", onClick: () => alert(`Favorite ${num}`) }
          ]
        }}
        footer={{
          actions: [
            { label: "Download", icon: <Download size={16} />, variant: "Secondary", onClick: () => alert(`Download ${num}`) },
            { label: "Delete", icon: <Trash2 size={16} />, variant: "Danger", onClick: () => alert(`Delete ${num}`) }
          ]
        }}
      >
        Content for card {num}. This demonstrates how cards work in a grid layout.
      </Card>
    ))}
  </div>
);

// Horizontal Layout Example
export const HorizontalLayout = () => (
  <Card
    orientation="horizontal"
    variant="outlined"
    header={{
      title: "Horizontal Card",
      subtitle: "Content flows horizontally"
    }}
    footer={{
      actions: [
        { label: "Action", variant: "Primary", onClick: () => alert("Action clicked") }
      ]
    }}
  >
    <div style={{ padding: "16px", minHeight: "120px", display: "flex", alignItems: "center" }}>
      This is the main content area in a horizontal card layout.
    </div>
  </Card>
);

// Custom Styling Example
export const CustomStyling = () => (
  <InlineStack gap={4}>
    <Card
      variant="outlined"
      backgroundColor="#fef3f2"
      borderColor="#fecaca"
      header={{ title: "Custom Background" }}
    >
      Card with custom background and border colors.
    </Card>
    
    <Card
      variant="ghost"
      width="200px"
      height="150px"
      style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", color: "white" }}
      header={{ title: "Gradient Card" }}
    >
      Card with gradient background.
    </Card>
  </InlineStack>
);