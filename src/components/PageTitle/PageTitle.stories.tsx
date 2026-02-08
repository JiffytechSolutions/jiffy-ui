import React from "react";
import PageTitle, { PageTitleProps } from "./PageTitle";
import { Download, Edit, Settings, Share, Trash2, Users, Eye, Copy, Archive } from "react-feather";

export default {
  title: "Components/PageTitle",
    component: PageTitle,
  parameters: {
    docs: {
      description: {
        component: "A modern and flexible page title component with support for primary actions and secondary actions using ActionList component."
      }
    }
  },
    argTypes: {
    title: {
      description: "The main page title",
      control: { type: "text" }
    },
    subtitle: {
      description: "Optional subtitle or description",
      control: { type: "text" }
    },
    showBackButton: {
      description: "Show the back navigation button",
      control: { type: "boolean" }
    },
    backButtonLabel: {
      description: "Label for the back button",
      control: { type: "text" }
    }
  }
};

// Template component
const Template = (args: PageTitleProps) => (
  <div style={{ padding: "2rem", minHeight: "200px" }}>
    <PageTitle {...args} />
  </div>
);

// Default story
export const Default = Template.bind({});
(Default as any).args = {
  title: "Page Title",
  subtitle: "This is a subtitle that provides additional context about the page content.",
};

// Simple title only
export const TitleOnly = Template.bind({});
(TitleOnly as any).args = {
  title: "Simple Page Title"
};

// With back button
export const WithBackButton = Template.bind({});
(WithBackButton as any).args = {
  title: "Detail Page",
  subtitle: "View and edit item details",
  showBackButton: true,
  onBackClick: () => alert("Back button clicked!"),
  backButtonLabel: "Back to List"
};

// With badge
export const WithBadge = Template.bind({});
(WithBadge as any).args = {
  title: "Project Dashboard",
  subtitle: "Monitor your project progress and metrics",
  badge: {
    text: "Beta",
    variant: "warning",
    size: "default"
  }
};

// With single primary action
export const WithSingleAction = Template.bind({});
(WithSingleAction as any).args = {
  title: "Settings",
  subtitle: "Configure your application preferences",
  primaryAction: {
    label: "Save Changes",
    variant: "Primary",
    onClick: () => alert("Changes saved!"),
    icon: <Download size={16} />
  }
};

// With ActionList secondary actions
export const WithSecondaryActions = Template.bind({});
(WithSecondaryActions as any).args = {
  title: "Document Editor",
  subtitle: "Edit and collaborate on documents",
  primaryAction: {
    label: "Save",
    variant: "Primary",
    onClick: () => alert("Document saved!")
  },
  secondaryActions: [
    {
      id: "share",
      label: "Share Document",
      onClick: () => alert("Share dialog opened"),
      leading: <Share size={16} />,
      description: "Share with team members"
    },
    {
      id: "duplicate",
      label: "Duplicate",
      onClick: () => alert("Document duplicated"),
      leading: <Copy size={16} />
    },
    {
      id: "settings",
      label: "Settings",
      onClick: () => alert("Settings opened"),
      leading: <Settings size={16} />
    }
  ]
};

// Complete example with everything
export const CompleteExample = Template.bind({});
(CompleteExample as any).args = {
  title: "Team Management",
  subtitle: "Manage team members, roles, and permissions",
  showBackButton: true,
  onBackClick: () => alert("Back to teams"),
  badge: {
    text: "12 Members",
    variant: "info",
    size: "default"
  },
  primaryAction: {
    label: "Add Member",
    variant: "Primary",
    onClick: () => alert("Add member clicked"),
    icon: <Users size={16} />
  },
  secondaryActions: [
    {
      id: "edit",
      label: "Edit Team",
      onClick: () => alert("Edit team clicked"),
      leading: <Edit size={16} />,
      description: "Modify team settings"
    },
    {
      id: "export",
      label: "Export Data",
      onClick: () => alert("Export clicked"),
      leading: <Download size={16} />,
      description: "Download team data"
    },
    {
      id: "archive",
      label: "Archive Team",
      onClick: () => alert("Archive clicked"),
      leading: <Archive size={16} />
    },
    {
      id: "delete",
      label: "Delete Team",
      onClick: () => alert("Delete clicked"),
      leading: <Trash2 size={16} />,
      variant: "destructive",
      description: "Permanently remove team"
    }
  ]
};

// Badge variants showcase
export const BadgeVariants = () => (
  <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
    <PageTitle 
      title="Default Badge" 
      badge={{ text: "Default", color: "Primary" ,subtle: true }} 
    />
    <PageTitle 
      title="Primary Badge" 
      badge={{ text: "Primary", color: "Negative" }} 
    />
    <PageTitle 
      title="Success Badge" 
      badge={{ text: "Active", color: "Primary" }} 
    />
    <PageTitle 
      title="Warning Badge" 
      badge={{ text: "Beta", color: "Positive" }} 
    />
    <PageTitle 
      title="Error Badge" 
      badge={{ text: "Deprecated", color: "Negative" }} 
    />
    <PageTitle 
      title="Info Badge" 
      badge={{ text: "New", color: "Neutral" }} 
    />
  </div>
);

// ActionList variants showcase
export const ActionListVariants = () => (
  <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
    <PageTitle 
      title="Basic Actions" 
      subtitle="Simple action items"
      primaryAction={{
        label: "Primary",
        variant: "Primary"
      }}
      secondaryActions={[
        { id: "edit", label: "Edit", leading: <Edit size={16} /> },
        { id: "view", label: "View", leading: <Eye size={16} /> },
        { id: "share", label: "Share", leading: <Share size={16} /> }
      ]}
    />
    
        <PageTitle
      title="Actions with Descriptions" 
      subtitle="Detailed action items with descriptions"
      secondaryActions={[
        { 
          id: "edit", 
          label: "Edit Content", 
          leading: <Edit size={16} />,
          description: "Modify the page content and settings"
        },
        { 
          id: "share", 
          label: "Share Page", 
          leading: <Share size={16} />,
          description: "Send link to team members"
        },
        { 
          id: "archive", 
          label: "Archive", 
          leading: <Archive size={16} />,
          description: "Move to archived items"
        }
      ]}
    />

    <PageTitle 
      title="Mixed Action Types" 
      subtitle="Different action variants"
      primaryAction={{
        label: "Save",
        variant: "Primary"
      }}
      secondaryActions={[
        { 
          id: "edit", 
          label: "Edit", 
          leading: <Edit size={16} />,
          variant: "primary"
        },
        { 
          id: "duplicate", 
          label: "Duplicate", 
          leading: <Copy size={16} />,
          variant: "secondary"
        },
        { 
          id: "delete", 
          label: "Delete", 
          leading: <Trash2 size={16} />,
          variant: "destructive",
          description: "Permanently remove this item"
        }
      ]}
    />
  </div>
);

// Responsive behavior demo
export const ResponsiveBehavior = Template.bind({});
(ResponsiveBehavior as any).args = {
  title: "Responsive Layout Demo",
  subtitle: "Resize your browser window to see how the layout adapts to different screen sizes",
  showBackButton: true,
  onBackClick: () => alert("Back clicked"),
  badge: { text: "Demo", variant: "info" },
  primaryAction: {
    label: "Primary Action",
    variant: "Primary",
    onClick: () => alert("Primary action")
  },
  secondaryActions: [
    {
      id: "action1",
      label: "Secondary Action",
      onClick: () => alert("Secondary action"),
      leading: <Settings size={16} />
    },
    {
      id: "action2",
      label: "Another Action",
      onClick: () => alert("Another action"),
      leading: <Share size={16} />
    },
    {
      id: "action3",
      label: "More Actions",
      onClick: () => alert("More actions"),
      leading: <Download size={16} />
    }
  ]
};
(ResponsiveBehavior as any).parameters = {
  docs: {
    description: {
      story: "This story demonstrates how the PageTitle component adapts to different screen sizes. The ActionList component handles responsive behavior automatically."
    }
  }
};

// Loading and disabled states
export const LoadingAndDisabledStates = () => (
  <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
    <PageTitle 
      title="Loading Primary Action" 
      subtitle="Primary action in loading state"
      primaryAction={{ 
        label: "Saving...", 
        variant: "Primary", 
        loading: true 
      }}
      secondaryActions={[
        { id: "cancel", label: "Cancel", leading: <Trash2 size={16} /> }
      ]}
    />
    
    <PageTitle 
      title="Disabled Primary Action" 
      subtitle="Primary action in disabled state"
      primaryAction={{ 
        label: "Save", 
        variant: "Primary", 
        disabled: true 
      }}
      secondaryActions={[
        { id: "edit", label: "Edit", leading: <Edit size={16} /> },
        { id: "disabled", label: "Disabled Action", leading: <Settings size={16} />, disabled: true }
      ]}
    />
  </div>
);

// Different action sizes
export const DifferentSizes = () => (
  <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
    <PageTitle 
      title="Small Actions" 
      primaryAction={{ label: "Small", variant: "Primary", size: "Small" }}
      secondaryActions={[
        { id: "action", label: "Small Action", leading: <Edit size={14} /> }
      ]}
    />
    <PageTitle 
      title="Medium Actions (Default)" 
      primaryAction={{ label: "Medium", variant: "Primary", size: "Medium" }}
      secondaryActions={[
        { id: "action", label: "Medium Action", leading: <Edit size={16} /> }
      ]}
    />
    <PageTitle 
      title="Large Actions" 
      primaryAction={{ label: "Large", variant: "Primary", size: "Large" }}
      secondaryActions={[
        { id: "action", label: "Large Action", leading: <Edit size={18} /> }
      ]}
    />
  </div>
);

// Real-world examples
export const RealWorldExamples = () => (
  <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "3rem" }}>
    {/* User Profile Page */}
    <PageTitle 
      title="John Doe"
      subtitle="Software Engineer • john.doe@company.com"
      showBackButton={true}
      onBackClick={() => alert("Back to users")}
      badge={{ text: "Active", color: "Positive" }}
      primaryAction={{
        label: "Edit Profile",
        variant: "Primary",
        icon: <Edit size={16} />,
        onClick: () => alert("Edit profile")
      }}
      secondaryActions={[
        { 
          id: "permissions", 
          label: "Manage Permissions", 
          leading: <Settings size={16} />,
          description: "Update user access and roles"
        },
        { 
          id: "reset", 
          label: "Reset Password", 
          leading: <Share size={16} />,
          description: "Send password reset email"
        },
        { 
          id: "deactivate", 
          label: "Deactivate User", 
          leading: <Archive size={16} />,
          variant: "destructive"
        }
      ]}
    />

    {/* Project Dashboard */}
    <PageTitle 
      title="E-Commerce Website"
      subtitle="Frontend development project • Due: Dec 31, 2024"
      badge={{ text: "In Progress", color: "Notice" }}
      primaryAction={{
        label: "Deploy",
        variant: "Primary",
        icon: <Download size={16} />,
        onClick: () => alert("Deploy project")
      }}
      secondaryActions={[
        { 
          id: "settings", 
          label: "Project Settings", 
          leading: <Settings size={16} />,
          description: "Configure project preferences"
        },
        { 
          id: "team", 
          label: "Manage Team", 
          leading: <Users size={16} />,
          description: "Add or remove team members"
        },
        { 
          id: "export", 
          label: "Export Data", 
          leading: <Download size={16} /> 
        }
      ]}
    />

    {/* Document Editor */}
    <PageTitle 
      title="Product Requirements Document"
      subtitle="Last modified 2 hours ago by Sarah Johnson"
      primaryAction={{
        label: "Publish",
        variant: "Primary",
        onClick: () => alert("Publish document")
      }}
      secondaryActions={[
        { 
          id: "share", 
          label: "Share Document", 
          leading: <Share size={16} />,
          description: "Send link to collaborators"
        },
        { 
          id: "version", 
          label: "Version History", 
          leading: <Eye size={16} />,
          description: "View document changes"
        },
        { 
          id: "duplicate", 
          label: "Make a Copy", 
          leading: <Copy size={16} /> 
        },
        { 
          id: "delete", 
          label: "Delete Document", 
          leading: <Trash2 size={16} />,
          variant: "destructive"
        }
      ]}
    />
  </div>
);

// Accessibility showcase
export const AccessibilityFeatures = Template.bind({});
(AccessibilityFeatures as any).args = {
  title: "Accessibility Demo",
  subtitle: "This component includes proper ARIA labels, keyboard navigation, and screen reader support",
  showBackButton: true,
  onBackClick: () => alert("Back with proper aria-label"),
  primaryAction: {
    label: "Accessible Action",
    variant: "Primary",
    onClick: () => alert("Action with proper focus management")
  },
  secondaryActions: [
    {
      id: "keyboard",
      label: "Keyboard Navigation",
      leading: <Settings size={16} />,
      onClick: () => alert("Try navigating with Tab key"),
      description: "Fully keyboard accessible"
    },
    {
      id: "screen-reader",
      label: "Screen Reader Support",
      leading: <Eye size={16} />,
      onClick: () => alert("Works with screen readers"),
      description: "Proper ARIA labels and descriptions"
    }
  ],
  testId: "accessibility-demo"
};
(AccessibilityFeatures as any).parameters = {
  docs: {
    description: {
      story: "This story demonstrates the accessibility features including proper ARIA labels, keyboard navigation support, and screen reader compatibility. The ActionList component provides built-in accessibility features."
    }
  }
};