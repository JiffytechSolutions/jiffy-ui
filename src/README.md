# Jiffy UI Component Library

A modern, accessible, and performant React component library built with TypeScript, designed for creating beautiful and consistent user interfaces.

## 🎯 Overview

Jiffy UI provides a comprehensive set of reusable React components that follow modern design principles, accessibility standards, and performance best practices. All components are fully typed with TypeScript and come with comprehensive Storybook documentation.

## 🚀 Recently Updated Components

### PageTitle Component (Redesigned)
A modern and flexible page title component that provides clean page headers with actions and navigation.

**Key Features:**
- ✅ Clean, modern design without breadcrumb clutter
- ✅ Integrated ActionList for secondary actions
- ✅ Responsive design that adapts to all screen sizes
- ✅ Built-in accessibility with ARIA labels and keyboard navigation
- ✅ Support for back navigation, badges, and flexible actions
- ✅ Performance optimized with React.memo and useCallback

**Usage:**
```tsx
import PageTitle from './components/PageTitle/PageTitle';

<PageTitle
  title="Document Editor"
  subtitle="Edit and collaborate on documents"
  showBackButton={true}
  onBackClick={() => navigate('/documents')}
  
  primaryAction={{
    label: "Save",
    variant: "Primary",
    onClick: () => save()
  }}
  
  secondaryActions={[
    {
      id: "share",
      label: "Share Document",
      leading: <Share size={16} />,
      description: "Share with team members",
      onClick: () => openShareDialog()
    },
    {
      id: "duplicate",
      label: "Duplicate",
      leading: <Copy size={16} />,
      onClick: () => duplicateDocument()
    }
  ]}
  
  badge={{ text: "Draft", variant: "warning" }}
/>
```

### ActionList Component (Performance Improved)
A powerful dropdown component for displaying lists of actions with icons, descriptions, and grouping support.

**Key Features:**
- ✅ Fixed browser hanging issues with infinite loop prevention
- ✅ Performance optimized with React.memo and useMemo
- ✅ Support for grouped actions and separators
- ✅ Icons, descriptions, badges, and keyboard shortcuts
- ✅ Responsive mobile behavior
- ✅ Full accessibility support

**Usage:**
```tsx
import ActionList from './components/Actionlist/Actionlist';

<ActionList
  items={[
    {
      id: "edit",
      label: "Edit",
      leading: <Edit size={16} />,
      onClick: () => handleEdit()
    },
    {
      id: "share",
      label: "Share",
      leading: <Share size={16} />,
      description: "Share with team members",
      onClick: () => handleShare()
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
  <Button variant="Secondary">Actions</Button>
</ActionList>
```

## 📚 Complete Component Library

### Layout & Structure
- **FlexLayout** - Flexible layout container with gap and alignment controls
- **Grid** - Responsive grid system for complex layouts
- **Card** - Container component for grouping related content
- **Divider** - Visual separator for content sections

### Navigation & Actions
- **Button** - Primary interactive element with multiple variants and states
- **ButtonGroup** - Group related buttons together
- **ActionList** - Dropdown menu for multiple actions *(Recently Updated)*
- **PageTitle** - Page header with title, actions, and navigation *(Recently Redesigned)*
- **Breadcrumb** - Navigation breadcrumb trail
- **Pagination** - Navigate through paginated content
- **Tabs** - Tabbed interface for content organization

### Data Display
- **Table** - Feature-rich data table with sorting and selection
- **List** - Simple list component for displaying items
- **Avatar** - User profile pictures and initials
- **Badge** - Status indicators and labels
- **Tag** - Removable labels and categories
- **Thumbnail** - Image thumbnails with fallbacks

### Form Controls
- **TextField** - Text input with validation and states
- **TextArea** - Multi-line text input
- **Select** - Dropdown selection component
- **Checkbox** - Single checkbox with label
- **CheckboxGroup** - Multiple checkbox management
- **Radio** - Single radio button with label
- **RadioGroup** - Radio button group management
- **Switcher** - Toggle switch for binary choices
- **FileUpload** - File upload with drag and drop

### Feedback & Status
- **Alert** - Important messages and notifications
- **Modal** - Overlay dialogs for important actions
- **SideSheet** - Slide-out panels for secondary content
- **BottomSheet** - Mobile-friendly bottom slide-up panels
- **Tooltip** - Contextual help and information
- **ProgressBar** - Progress indication for long operations
- **Spinner** - Loading indicators
- **Skeleton** - Loading placeholders for content

### Specialized Components
- **Indicator** - Status and notification indicators
- **StepWizard** - Multi-step process guidance
- **Sidebar** - Navigation sidebar for applications
- **TopBar** - Application header and navigation
- **AppWrapper** - Application layout wrapper
- **MediaCard** - Rich media content cards
- **CopyClipboard** - One-click copy functionality
- **TextLink** - Styled text links
- **Accordion** - Collapsible content sections

## 🎨 Design Foundations

### Colors
- Comprehensive color palette with semantic meanings
- Support for light and dark themes
- Consistent color usage across components

### Typography
- **TextStyle** - Typography styles and text formatting
- Responsive font scaling
- Consistent text hierarchy

### Layout & Spacing
- Design tokens for consistent spacing
- Responsive breakpoints
- Elevation and shadow system

### Icons
- **Foundation/Icons** - Icon system and guidelines
- Consistent icon sizing and styling
- Feather Icons integration

## 🏗️ Architecture & Performance

### TypeScript Support
- Full TypeScript support with comprehensive type definitions
- Strongly typed props and interfaces
- Enhanced developer experience with IntelliSense

### Performance Optimizations
- React.memo for component memoization
- useCallback and useMemo for expensive operations
- Lazy loading support
- Optimized bundle sizes

### Accessibility
- WCAG 2.1 AA compliance
- Screen reader support
- Keyboard navigation
- High contrast mode support
- Focus management

### Responsive Design
- Mobile-first approach
- Flexible breakpoint system
- Touch-friendly interactions
- Adaptive layouts

## 🛠️ Development

### Storybook Integration
All components include comprehensive Storybook stories demonstrating:
- All component variants and states
- Interactive controls for props
- Accessibility testing
- Documentation and usage examples
- Real-world use cases

### Testing
- Unit tests for component logic
- Accessibility testing
- Visual regression testing
- Performance testing

### Build & Bundle
- Optimized build process
- Tree-shakable exports
- CSS extraction and optimization
- TypeScript compilation

## 📖 Usage Guidelines

### Best Practices
1. **Consistency** - Use design tokens and follow established patterns
2. **Accessibility** - Always include proper labels and keyboard support
3. **Performance** - Leverage memoization and avoid unnecessary re-renders
4. **Responsiveness** - Test components across different screen sizes
5. **TypeScript** - Utilize strong typing for better development experience

### Component Composition
```tsx
// Example: Building a user profile page
<PageTitle
  title="User Profile"
  subtitle="Manage user account and preferences"
  showBackButton={true}
  primaryAction={{ label: "Save Changes", variant: "Primary" }}
  secondaryActions={[
    { id: "export", label: "Export Data", leading: <Download /> },
    { id: "delete", label: "Delete Account", variant: "destructive" }
  ]}
/>

<Card>
  <FlexLayout direction="column" gap={4}>
    <Avatar size="large" src={user.avatar} name={user.name} />
    <TextField label="Full Name" value={user.name} />
    <TextField label="Email" value={user.email} />
    <ButtonGroup>
      <Button variant="Primary">Save</Button>
      <Button variant="Secondary">Cancel</Button>
    </ButtonGroup>
  </FlexLayout>
</Card>
```

### Theming & Customization
- CSS custom properties for easy theming
- Consistent design tokens
- Override styles with CSS modules or styled-components
- Dark mode support built-in

## 🔄 Recent Updates & Improvements

### v2.0.0 - Major Component Updates
- **PageTitle**: Complete redesign with ActionList integration
- **ActionList**: Performance fixes and accessibility improvements
- **General**: Better TypeScript support and documentation

### Performance Improvements
- Fixed infinite loop issues in ActionList component
- Added React.memo optimization across components
- Improved bundle size and loading performance
- Enhanced mobile responsiveness

### Accessibility Enhancements
- Better ARIA label support
- Improved keyboard navigation
- Enhanced screen reader compatibility
- High contrast mode improvements

## 🤝 Contributing

When adding or updating components:
1. Follow the established TypeScript patterns
2. Include comprehensive Storybook stories
3. Add proper accessibility attributes
4. Write unit tests for component logic
5. Update documentation and examples
6. Test responsive behavior
7. Verify performance impact

## 📄 License

This component library is part of the Jiffy UI system and follows the project's licensing terms.

---

For more detailed documentation, examples, and interactive component playground, run the Storybook development server:

```bash
npm run storybook
```
