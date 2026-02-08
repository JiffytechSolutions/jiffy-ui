# 🚀 Jiffy UI Component Library

> A modern, accessible, and performant React component library built with TypeScript and modern design principles

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/JiffytechSolutions/JiffyDemo/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/jiffy-ui.svg)](https://www.npmjs.com/package/jiffy-ui)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

**Jiffy UI** is a comprehensive React component library featuring 50+ production-ready components built with modern web standards, complete TypeScript support, and accessibility-first design principles.

## ✨ Features

- 🎯 **50+ Production Ready Components** - Comprehensive component library
- 📝 **TypeScript Native** - Fully typed API with excellent developer experience
- ♿ **Accessibility First** - WAI-ARIA compliant with keyboard navigation support
- 🚀 **React 18+ Compatible** - Modern React features with Server Components support
- ⚡ **Performance Optimized** - React.memo, useCallback, and useMemo for optimal performance
- 📱 **Responsive Design** - Mobile-first approach with adaptive layouts
- 🎨 **Design System** - Consistent design tokens, colors, and typography
- 🔧 **Flexible & Extensible** - Customizable components with comprehensive prop interfaces
- 🧪 **Storybook Integration** - Interactive documentation with live examples

## 🚀 Quick Start

### Installation

```bash
npm install jiffy-ui jiffy-icons
```

### Basic Usage

```jsx
import React from 'react';
import { Button, Card, TextStyle, PageTitle } from 'jiffy-ui';
import { ArrowRight, Share } from 'jiffy-icons';

function App() {
  return (
    <>
      <PageTitle
        title="Welcome to Jiffy UI"
        subtitle="Modern, accessible React component library"
        primaryAction={{
          label: "Get Started",
          variant: "Primary",
          icon: <ArrowRight size={16} />,
          onClick: () => console.log("Getting started!")
        }}
        secondaryActions={[
          {
            id: "share",
            label: "Share",
            leading: <Share size={16} />,
            onClick: () => console.log("Sharing...")
          }
        ]}
      />
      
      <Card type="Shadow">
        <TextStyle as="h2" type="LgHeading">
          Component Library
        </TextStyle>
        <Button 
          color="Primary" 
          icon={<ArrowRight size={16} />}
          alignIcon="Right"
        >
          Explore Components
        </Button>
      </Card>
    </>
  );
}
```

## 🎮 Demo & Documentation

<!-- 🔗 **[Live Demo](https://jiffytechsolutions.github.io/jiffy-ui-demo/)** -->

Explore our interactive component playground to see all components in action with live code examples.

## 📐 Design Rules & Component Behavior

### TypeScript Interface Patterns

All components follow consistent TypeScript patterns for maximum developer experience:

```tsx
// Standard prop interface structure
export interface ComponentProps {
  /** Primary content or children */
  children?: React.ReactNode;
  
  /** Visual variant */
  variant?: "Primary" | "Secondary" | "Tertiary";
  
  /** Size options */
  size?: "Small" | "Medium" | "Large";
  
  /** State flags */
  disabled?: boolean;
  loading?: boolean;
  
  /** Event handlers */
  onClick?: () => void;
  
  /** Styling */
  className?: string;
  style?: React.CSSProperties;
  
  /** Testing */
  testId?: string;
}
```

### Accessibility Standards

Every component implements comprehensive accessibility features:

- **Keyboard Navigation**: All interactive elements support Tab, Enter, Space, and Arrow keys
- **ARIA Labels**: Proper `aria-label`, `aria-describedby`, and `role` attributes
- **Screen Reader Support**: Semantic HTML and descriptive text for assistive technologies
- **Focus Management**: Visible focus indicators and logical tab order
- **High Contrast**: Color combinations that meet WCAG AA standards

```tsx
// Example: Accessible button implementation
<button
  className="jiffy-button"
  onClick={handleClick}
  disabled={disabled}
  aria-label={ariaLabel}
  aria-describedby={description ? `${id}-description` : undefined}
  tabIndex={disabled ? -1 : 0}
>
  {icon && <span aria-hidden="true">{icon}</span>}
  {children}
</button>
```

### Responsive Design Principles

All components follow mobile-first responsive design:

- **Breakpoint System**: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`
- **Adaptive Layouts**: Components automatically adjust for screen size
- **Touch-Friendly**: Minimum 44px touch targets on mobile devices
- **Content Prioritization**: Important content remains visible on all screen sizes

```tsx
// Example: Responsive component behavior
<PageTitle
  title="Dashboard"
  subtitle="Overview of your account"
  // On mobile: Actions move to dropdown
  // On desktop: Actions shown inline
  primaryAction={{ label: "Export", variant: "Primary" }}
  secondaryActions={[
    { id: "share", label: "Share" },
    { id: "settings", label: "Settings" }
  ]}
/>
```

### Performance Optimization Rules

Components are optimized for maximum performance:

```tsx
// 1. Memoization for expensive calculations
const memoizedValue = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);

// 2. Callback optimization for event handlers
const handleClick = useCallback(() => {
  onAction?.();
}, [onAction]);

// 3. Component memoization for stable props
const OptimizedComponent = React.memo(Component);

// 4. Conditional rendering optimization
{isVisible && <ExpensiveComponent />}
```

### Color System & Design Tokens

Consistent color usage across all components:

```css
/* Primary Colors */
--jiffyui-primary-50: #eff6ff;
--jiffyui-primary-500: #3b82f6;
--jiffyui-primary-900: #1e3a8a;

/* Semantic Colors */
--jiffyui-positive: #10b981; /* Success states */
--jiffyui-negative: #ef4444; /* Error states */
--jiffyui-notice: #f59e0b;   /* Warning states */
--jiffyui-neutral: #6b7280; /* Neutral content */

/* Text Colors */
--jiffyui-text-primary: #111827;   /* Primary text */
--jiffyui-text-secondary: #6b7280; /* Secondary text */
--jiffyui-text-muted: #9ca3af;     /* Muted text */
```

### Component Composition Patterns

Components are designed for maximum flexibility and composition:

```tsx
// 1. Compound Components
<Card type="Shadow">
  <Card.Header>
    <PageTitle title="Settings" />
  </Card.Header>
  <Card.Content>
    <FlexLayout direction="column" gap="16px">
      <TextField label="Username" />
      <Button variant="Primary">Save</Button>
    </FlexLayout>
  </Card.Content>
</Card>

// 2. Render Props Pattern
<ActionList
  items={actions}
  trigger="click"
>
  <Button variant="Secondary">More Actions</Button>
</ActionList>

// 3. Flexible Layout Composition
<FlexLayout direction="row" gap="12px" align="center">
  <Avatar src="/user.jpg" />
  <VerticalStack gap="4px">
    <TextStyle type="MdHeading">John Doe</TextStyle>
    <TextStyle type="SmBody" color="muted">Product Manager</TextStyle>
  </VerticalStack>
</FlexLayout>
```

## 📦 Available Components

### 🏗️ Layout & Structure
- **AppWrapper** - Application layout wrapper and container
- **Card** - Flexible containers for content with various styles
- **FlexLayout** - Modern flexbox layout component with gap controls
- **Grid** - Responsive grid system for complex layouts
- **Divider** - Visual separator for content sections

### 🧭 Navigation & Actions
- **Button** - Primary interactive element with multiple variants and accessibility features
- **ButtonGroup** - Group related buttons with consistent spacing and alignment
- **ActionList** - Performance-optimized dropdown menu with keyboard navigation *(Recently Updated)*
- **PageTitle** - Modern page header with integrated actions and responsive behavior *(Recently Redesigned)*
- **Breadcrumb** - Navigation breadcrumb trail with overflow handling
- **Pagination** - Navigate through paginated content with accessibility support
- **Tabs** - Tabbed interface with keyboard navigation and ARIA support
- **TextLink** - Styled text links with proper focus states and navigation

### 📝 Form Controls & Input
- **TextField** - Text input with validation and multiple states
- **TextArea** - Multi-line text input with auto-resize
- **Select** - Dropdown selection component
- **Checkbox** - Single checkbox with label and states
- **CheckboxGroup** - Multiple checkbox management
- **Radio** - Single radio button with label
- **RadioGroup** - Radio button group management
- **Switcher** - Toggle switch for binary choices
- **FileUpload** - File upload with drag and drop support

### 📊 Data Display & Visualization
- **Table** - Feature-rich data table with sorting and selection
- **List** - Simple list component for displaying items
- **Avatar** - User profile pictures and initials
- **Badge** - Status indicators and labels
- **Tag** - Removable labels and categories
- **Thumbnail** - Image thumbnails with fallbacks
- **MediaCard** - Rich media content cards
- **Indicator** - Status and notification indicators

### 💬 Feedback & Overlays
- **Alert** - Important messages and notifications
- **Modal** - Overlay dialogs for important actions
- **SideSheet** - Slide-out panels for secondary content
- **BottomSheet** - Mobile-friendly bottom slide-up panels
- **Tooltip** - Contextual help and information popups
- **Sidebar** - Navigation sidebar for applications
- **TopBar** - Application header and navigation

### ⏳ Loading & Progress
- **ProgressBar** - Progress indication for long operations
- **Spinner** - Loading indicators with various styles
- **Skeleton** - Loading placeholders for content
  - **SkeletonBadge** - Badge loading placeholder
  - **SkeletonButton** - Button loading placeholder
  - **SkeletonCustom** - Custom skeleton shapes
  - **SkeletonLine** - Text line loading placeholder
  - **SkeletonList** - List loading placeholder
  - **SkeletonTabs** - Tab loading placeholder
  - **SkeletonThumbnail** - Image loading placeholder

### 🎨 Typography & Content
- **TextStyle** - Typography styles and text formatting
- **Accordion** - Collapsible content sections
- **CopyClipboard** - One-click copy functionality

### 🔧 Specialized Components
- **StepWizard** - Multi-step process guidance
- **Dropdown** - Generic dropdown component with positioning

### 🎯 Foundation Elements
- **Foundation/Colors** - Color system and palette
- **Foundation/Icons** - Icon system and guidelines  
- **Foundation/BorderWidth** - Border width tokens
- **Foundation/Elevation** - Shadow and elevation system
- **Foundation/RorderRadius** - Border radius design tokens
- **Foundation/UsedColor** - Applied color examples

### 🧪 Development & Testing
- **SimpleTest** - Simple test component for development

## 💡 Component Usage Examples

### PageTitle Component - Modern Page Headers

The redesigned PageTitle component provides clean, accessible page headers:

```tsx
import { PageTitle } from 'jiffy-ui';
import { Save, Share, Download, Settings } from 'react-feather';

// Basic page title
<PageTitle
  title="Document Editor"
  subtitle="Create and edit documents collaboratively"
/>

// Page title with navigation and actions
<PageTitle
  title="User Settings"
  subtitle="Manage your account preferences"
  showBackButton={true}
  onBackClick={() => navigate('/dashboard')}
  
  primaryAction={{
    label: "Save Changes",
    variant: "Primary",
    onClick: handleSave,
    loading: isSaving
  }}
  
  secondaryActions={[
    {
      id: "export",
      label: "Export Settings",
      leading: <Download size={16} />,
      description: "Download settings as JSON",
      onClick: handleExport
    },
    {
      id: "share",
      label: "Share Profile",
      leading: <Share size={16} />,
      onClick: handleShare
    }
  ]}
  
  badge={{ text: "Premium", color: "Primary" }}
/>
```

### ActionList Component - Performance Optimized Dropdowns

Improved ActionList with infinite loop prevention and optimized rendering:

```tsx
import { ActionList, Button } from 'jiffy-ui';
import { Edit, Trash2, Copy, Star } from 'react-feather';

<ActionList
  items={[
    {
      id: "edit",
      label: "Edit Document",
      leading: <Edit size={16} />,
      description: "Modify document content",
      onClick: () => handleEdit()
    },
    {
      id: "duplicate",
      label: "Duplicate",
      leading: <Copy size={16} />,
      onClick: () => handleDuplicate()
    },
    { type: "separator" },
    {
      id: "favorite",
      label: "Add to Favorites",
      leading: <Star size={16} />,
      onClick: () => handleFavorite()
    },
    {
      id: "delete",
      label: "Delete",
      leading: <Trash2 size={16} />,
      variant: "destructive",
      onClick: () => handleDelete()
    }
  ]}
  trigger="click"
  placement="bottom-start"
  variant="Bordered"
>
  <Button variant="Secondary">Document Actions</Button>
</ActionList>
```

### Responsive Table Component

Tables that adapt to different screen sizes with mobile-friendly behavior:

```tsx
import { Table, Badge, Button } from 'jiffy-ui';

<Table
  variant="bordered"
  responsive={true}
  stackOnMobile={true}
  stickyHeader={true}
  density="comfortable"
  
  columns={[
    { key: "id", title: "Order ID", sortable: true },
    { key: "customer", title: "Customer", sortable: true },
    { key: "status", title: "Status", width: "120px" },
    { key: "total", title: "Total", align: "right", sortable: true },
    { key: "actions", title: "Actions", width: "100px" }
  ]}
  
  data={orders.map(order => ({
    id: order.id,
    customer: order.customerName,
    status: (
      <Badge 
        color={order.status === 'completed' ? 'Positive' : 'Notice'}
        emphasis="Intense"
      >
        {order.status}
      </Badge>
    ),
    total: `$${order.total.toFixed(2)}`,
    actions: (
      <Button variant="Ghost" size="Small">
        View Details
      </Button>
    )
  }))}
/>
```

### Form Layout with Validation

Comprehensive form layouts with proper spacing and validation:

```tsx
import { 
  Card, 
  FlexLayout, 
  VerticalStack, 
  TextField, 
  TextArea, 
  Select, 
  Button, 
  Alert 
} from 'jiffy-ui';

<Card type="Shadow">
  <VerticalStack gap="24px">
    <PageTitle 
      title="Create New Project"
      subtitle="Set up your project configuration"
    />
    
    {error && (
      <Alert variant="Negative" title="Validation Error">
        Please fix the errors below before proceeding.
      </Alert>
    )}
    
    <FlexLayout direction="column" gap="16px">
      <TextField
        label="Project Name"
        placeholder="Enter project name"
        value={projectName}
        onChange={setProjectName}
        error={errors.projectName}
        required
      />
      
      <TextArea
        label="Description"
        placeholder="Describe your project..."
        value={description}
        onChange={setDescription}
        rows={4}
      />
      
      <Select
        label="Project Type"
        value={projectType}
        onChange={setProjectType}
        options={[
          { value: "web", label: "Web Application" },
          { value: "mobile", label: "Mobile App" },
          { value: "desktop", label: "Desktop Application" }
        ]}
      />
    </FlexLayout>
    
    <FlexLayout direction="row" gap="12px" justify="flex-end">
      <Button variant="Secondary" onClick={handleCancel}>
        Cancel
      </Button>
      <Button 
        variant="Primary" 
        onClick={handleSubmit}
        loading={isSubmitting}
      >
        Create Project
      </Button>
    </FlexLayout>
  </VerticalStack>
</Card>
```

### Media Cards with Actions

Rich media content cards with integrated actions:

```tsx
import { MediaCard, Badge, ActionList } from 'jiffy-ui';
import { Play, Download, Share, MoreHorizontal } from 'react-feather';

<MediaCard
  type="Shadow"
  orientation="Vertical"
  mediaSrc="/video-thumbnail.jpg"
  title="Introduction to React Hooks"
  subtitle={
    <FlexLayout direction="row" gap="8px" align="center">
      <Badge color="Primary" size="Small">Tutorial</Badge>
      <span>45 minutes</span>
    </FlexLayout>
  }
  
  primaryAction={{
    label: "Play Video",
    variant: "Primary",
    icon: <Play size={16} />,
    onClick: () => playVideo()
  }}
  
  secondaryAction={{
    label: "Download",
    variant: "Secondary",
    icon: <Download size={16} />,
    onClick: () => downloadVideo()
  }}
  
  headerActions={[
    {
      id: "share",
      label: "Share Video",
      leading: <Share size={16} />,
      onClick: () => shareVideo()
    },
    {
      id: "add-playlist",
      label: "Add to Playlist",
      onClick: () => addToPlaylist()
    }
  ]}
/>
```

## 🛠️ Development

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/JiffytechSolutions/jiffy-ui.git

# Navigate to project directory
cd JiffyDemo

# Install dependencies
npm install

# Start development server
npm start
```

### Available Scripts

- `npm start` - Start development server with Rollup watch mode
- `npm build` - Build component library for production
- `npm test` - Run test suite with React Testing Library
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production deployment

### Building Components

Follow these guidelines when contributing new components:

```bash
# 1. Create component structure
mkdir src/components/NewComponent
cd src/components/NewComponent

# 2. Create required files
touch NewComponent.tsx        # Main component file
touch NewComponent.css        # Component styles
touch NewComponent.stories.tsx # Storybook stories

# 3. Follow naming conventions
# - PascalCase for component names
# - Consistent prop interface naming (ComponentProps)
# - CSS classes with component prefix (newcomponent-*)
```



## 🎯 Best Practices & Guidelines

### Component Development Principles

**1. Accessibility First**
```tsx
// Always include proper ARIA attributes
<button
  className="jiffy-button"
  aria-label={ariaLabel}
  aria-describedby={hasDescription ? `${id}-description` : undefined}
  aria-pressed={isPressed}
  tabIndex={disabled ? -1 : 0}
>
  {children}
</button>
```

**2. Performance Optimization**
```tsx
// Use React.memo for components with stable props
const OptimizedComponent = React.memo(({ items, onSelect }) => {
  // Use useMemo for expensive calculations
  const processedItems = useMemo(() => {
    return items.map(item => processItem(item));
  }, [items]);

  // Use useCallback for stable event handlers
  const handleSelect = useCallback((id) => {
    onSelect?.(id);
  }, [onSelect]);

  return (
    <div>
      {processedItems.map(item => (
        <Item key={item.id} onSelect={handleSelect} />
      ))}
    </div>
  );
});
```

**3. TypeScript Best Practices**
```tsx
// Use consistent prop interface patterns
export interface ComponentProps {
  /** Primary prop with clear description */
  children?: React.ReactNode;
  
  /** Use union types for variants */
  variant?: "Primary" | "Secondary" | "Tertiary";
  
  /** Optional props with defaults in implementation */
  size?: "Small" | "Medium" | "Large";
  
  /** Event handlers with proper typing */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
  /** Extend HTML attributes when appropriate */
  className?: string;
  style?: React.CSSProperties;
  
  /** Test identifiers for automation */
  testId?: string;
}
```

**4. Responsive Design Guidelines**
```tsx
// Follow mobile-first approach
<div className="component">
  {/* Mobile: Stack vertically */}
  <div className="component-mobile">
    <ActionList items={actions} trigger="click">
      <Button>Actions</Button>
    </ActionList>
  </div>
  
  {/* Desktop: Show inline */}
  <div className="component-desktop hidden md:flex">
    {actions.map(action => (
      <Button key={action.id} onClick={action.onClick}>
        {action.label}
      </Button>
    ))}
  </div>
</div>
```

**5. Error Handling & Loading States**
```tsx
const DataComponent = ({ onLoad, onError }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  return (
    <>
      {error && (
        <Alert variant="Negative" title="Error Loading Data">
          {error.message}
        </Alert>
      )}
      
      {loading ? (
        <Skeleton type="list" />
      ) : (
        <Table data={data} loading={loading} />
      )}
    </>
  );
};
```

### Testing Guidelines

**Component Testing with React Testing Library**
```tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button Component', () => {
  test('renders with correct accessibility attributes', () => {
    render(
      <Button variant="Primary" testId="test-button">
        Click me
      </Button>
    );
    
    const button = screen.getByTestId('test-button');
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveAccessibleName('Click me');
  });

  test('handles keyboard navigation', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    const button = screen.getByRole('button');
    
    // Test keyboard activation
    await userEvent.type(button, '{enter}');
    expect(handleClick).toHaveBeenCalledTimes(1);
    
    await userEvent.type(button, ' ');
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});
```

### Storybook Documentation

**Create Comprehensive Stories**
```tsx
import type { Meta, StoryObj } from '@storybook/react';
import Component from './Component';

const meta: Meta<typeof Component> = {
  title: 'Components/Component',
  component: Component,
  parameters: {
    docs: {
      description: {
        component: `
A comprehensive component that demonstrates all the design principles
and accessibility features of the Jiffy UI library.

## Features
- ✅ Fully accessible with ARIA support
- ✅ Responsive design with mobile-first approach  
- ✅ Performance optimized with React.memo
- ✅ TypeScript native with complete type safety
        `
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['Primary', 'Secondary', 'Tertiary'],
      description: 'Visual variant of the component'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Component>;

// Default story
export const Default: Story = {
  args: {
    children: 'Component content'
  }
};

// Accessibility demonstration
export const AccessibilityDemo: Story = {
  args: {
    children: 'Accessible component',
    'aria-label': 'Descriptive label for screen readers'
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates proper accessibility implementation.'
      }
    }
  }
};
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📊 Component Library Stats

- **50+ Components**: Comprehensive coverage of UI patterns
- **100% TypeScript**: Full type safety and excellent IntelliSense
- **Accessibility Compliant**: WCAG 2.1 AA standards
- **Performance Optimized**: React.memo, lazy loading, and code splitting
- **Mobile-First**: Responsive design for all screen sizes
- **Tree Shakeable**: Import only what you need
- **Production Ready**: Used in enterprise applications

## 🙏 Acknowledgments

- **React Team**: For the amazing React library and ecosystem
- **TypeScript Team**: For bringing type safety to JavaScript
- **Storybook Team**: For the excellent component development environment
- **React Testing Library**: For promoting accessible testing practices
- **Rollup**: For efficient module bundling
- **Community Contributors**: For feedback, bug reports, and feature requests

## 📞 Support & Community

- 📧 **Email**: support@jiffytech.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/JiffytechSolutions/JiffyDemo/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/JiffytechSolutions/JiffyDemo/discussions)
- 📖 **Documentation**: [Component Documentation](https://jiffytechsolutions.github.io/jiffy-ui-demo/)
- 🎮 **Live Demo**: [Interactive Playground](https://jiffytechsolutions.github.io/jiffy-ui-demo/)

## 🏷️ Versioning & Releases

We follow [Semantic Versioning](https://semver.org/) for our releases:

- **Major** (`x.0.0`): Breaking changes requiring migration
- **Minor** (`0.x.0`): New features and components, backward compatible
- **Patch** (`0.0.x`): Bug fixes and performance improvements

Check our [Release Notes](https://github.com/JiffytechSolutions/jiffy-ui/releases) for detailed changelogs.

---

<div align="center">

**[🚀 Get Started](https://jiffytechsolutions.github.io/jiffy-ui-demo/)** • **[📚 Documentation](https://jiffytechsolutions.github.io/jiffy-ui-demo/storybook/)** • **[🎮 Live Demo](https://jiffytechsolutions.github.io/jiffy-ui-demo/)** • **[📦 NPM Package](https://www.npmjs.com/package/jiffy-ui)**

Made with ❤️ by the **Jiffy Tech Solutions** team

*Building the future of React component libraries, one component at a time.*

</div>
