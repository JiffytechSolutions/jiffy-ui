import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Bell, Home, User, Search, Settings, Menu, ShoppingCart, MessageCircle } from "react-feather";
import TopBar, { TopBarProps } from "./TopBar";

const meta: Meta<typeof TopBar> = {
  title: "Components/TopBar",
  component: TopBar,
  parameters: {
    docs: {
      autodocs: true,
      description: {
        component: `
A responsive TopBar component that adapts to different screen sizes and provides flexible layout options.

## Features
- 📱 **Mobile-first responsive design** with customizable breakpoints
- 🎨 **Multiple variants** (default, elevated, outlined, minimal)
- 📏 **Size options** (compact, default, comfortable)
- 🔄 **Flexible positioning** (static, sticky, fixed)
- 👆 **Mobile menu** with overlay, push, or slide behaviors
- 🎯 **Responsive visibility** controls for different sections
- ♿ **Accessibility** features with keyboard navigation
- 🎪 **Theming support** with CSS custom properties
        `,
      },
    },
    layout: "fullscreen",
  },
  argTypes: {
    // variant: {
    //   control: { type: "select" },
    //   options: ["default", "elevated", "outlined", "minimal", "glass", "gradient"],
    //   description: "Visual style variant of the topbar",
    // },
    // size: {
    //   control: { type: "select" },
    //   options: ["compact", "default", "comfortable"],
    //   description: "Size variant affecting height and padding",
    // },
    // position: {
    //   control: { type: "select" },
    //   options: ["static", "sticky", "fixed"],
    //   description: "Positioning behavior of the topbar",
    // },
    // mobileMenuBehavior: {
    //   control: { type: "select" },
    //   options: ["overlay", "push", "slide"],
    //   description: "Mobile menu animation behavior",
    // },
    // mobileBreakpoint: {
    //   control: { type: "select" },
    //   options: ["sm", "md", "lg", "xl", "xxl"],
    //   description: "Breakpoint at which mobile menu appears",
    // },
    // borderPosition: {
    //   control: { type: "select" },
    //   options: ["top", "bottom", "both", "none"],
    //   description: "Border position",
    // },
    // showBorder: {
    //   control: { type: "boolean" },
    //   description: "Whether to show borders",
    // },
    // showMobileToggle: {
    //   control: { type: "boolean" },
    //   description: "Whether to show mobile menu toggle",
    // },
    // fullWidth: {
    //   control: { type: "boolean" },
    //   description: "Whether the container should be full width",
    // },
    // backgroundColor: {
    //   control: { type: "color" },
    //   description: "Custom background color",
    // },
    // zIndex: {
    //   control: { type: "number" },
    //   description: "Z-index for sticky/fixed positioning",
    // },
  },
};

export default meta;
type Story = StoryObj<TopBarProps>;

// Helper components for stories
const SearchBar = () => (
  <div className="topbar-search-container" style={{ 
    display: "flex", 
    alignItems: "center", 
    minWidth: "250px",
    maxWidth: "500px",
    width: "100%"
  }}>
    <Search size={16} style={{ marginLeft: "1rem", color: "#6c757d" }} />
    <input 
      type="text" 
      placeholder="Search projects, files, and more..." 
      style={{ 
        border: "none", 
        background: "transparent", 
        outline: "none",
        flex: 1,
        fontSize: "14px",
        padding: "0.75rem 1rem"
      }} 
    />
  </div>
);

const UserMenu = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
    <div className="topbar-badge">
      <Bell size={20} />
      <span className="badge-indicator">3</span>
    </div>
    <div className="topbar-badge">
      <MessageCircle size={20} />
      <span className="badge-indicator">12</span>
    </div>
    <div className="topbar-avatar" style={{
      backgroundImage: "url(https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }} />
  </div>
);

const ActionButton = ({ children, variant = "default", ...props }: any) => (
  <button
    style={{
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.5rem 1rem",
      border: variant === "outline" ? "1px solid #e2e8f0" : "none",
      borderRadius: "8px",
      background: variant === "primary" ? "#3b82f6" : variant === "outline" ? "transparent" : "#f8f9fa",
      color: variant === "primary" ? "white" : "#374151",
      fontSize: "14px",
      fontWeight: "500",
      cursor: "pointer",
      transition: "all 0.2s ease",
      ...props.style
    }}
    onMouseEnter={(e) => {
      const target = e.currentTarget as HTMLButtonElement;
      target.style.transform = "translateY(-1px)";
      target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    }}
    onMouseLeave={(e) => {
      const target = e.currentTarget as HTMLButtonElement;
      target.style.transform = "translateY(0)";
      target.style.boxShadow = "none";
    }}
    {...props}
  >
    {children}
  </button>
);

const DropdownMenu = ({ trigger, children }: { trigger: React.ReactNode; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div style={{ position: "relative" }}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer" }}
      >
        {trigger}
      </div>
      {isOpen && (
        <div style={{
          position: "absolute",
          top: "100%",
          right: 0,
          marginTop: "0.5rem",
          background: "white",
          border: "1px solid #e2e8f0",
          borderRadius: "8px",
          boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1)",
          minWidth: "200px",
          zIndex: 1000,
          padding: "0.5rem"
        }}>
          {children}
        </div>
      )}
    </div>
  );
};

const Navigation = () => (
  <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
    <a href="#" style={{ textDecoration: "none", color: "inherit", fontWeight: 500 }}>
      Dashboard
    </a>
    <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
      Projects
    </a>
    <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
      Team
    </a>
    <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
      Analytics
    </a>
  </nav>
);

const BrandLogo = ({ mobile = false }: { mobile?: boolean }) => (
  <div style={{ 
    display: "flex", 
    alignItems: "center", 
    gap: "0.5rem",
    fontWeight: "bold",
    fontSize: mobile ? "16px" : "18px",
    color: "#2563eb"
  }}>
    <div style={{
      width: mobile ? "24px" : "32px",
      height: mobile ? "24px" : "32px",
      borderRadius: "6px",
      background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: mobile ? "12px" : "14px",
      fontWeight: "bold"
    }}>
      J
    </div>
    Jiffy UI
  </div>
);

// Basic Stories
export const Default: Story = {
  args: {
    connectLeft: <Home size={20} />,
    connectRight: <UserMenu />,
  },
};

export const WithLogo: Story = {
  args: {
    connectLeft: (
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <BrandLogo />
        <Navigation />
      </div>
    ),
    connectRight: <UserMenu />,
  },
};

export const WithSearchCenter: Story = {
  args: {
    connectLeft: <BrandLogo />,
    connectCenter: <SearchBar />,
    connectRight: <UserMenu />,
  },
};

// Variant Stories
export const Elevated: Story = {
  args: {
    ...WithLogo.args,
    variant: "elevated",
  },
};

export const Outlined: Story = {
  args: {
    ...WithLogo.args,
    variant: "outlined",
  },
};

export const Minimal: Story = {
  args: {
    ...WithLogo.args,
    variant: "minimal",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
};

// Size Stories
export const Compact: Story = {
  args: {
    ...WithLogo.args,
    size: "compact",
  },
};

export const Comfortable: Story = {
  args: {
    ...WithLogo.args,
    size: "comfortable",
  },
};

// Position Stories
export const Fixed: Story = {
  args: {
    ...WithLogo.args,
    position: "fixed",
  },
};

export const Static: Story = {
  args: {
    ...WithLogo.args,
    position: "static",
  },
};

// Mobile Breakpoint Stories
export const MobileBreakpointMD: Story = {
  args: {
    ...WithLogo.args,
    mobileBreakpoint: "md",
  },
};

export const ResponsiveVisibility: Story = {
  args: {
    connectLeft: <BrandLogo />,
    connectCenter: <Navigation />,
    connectRight: <UserMenu />,
    centerSectionVisibility: {
      sm: false,
      md: false,
      lg: true,
      xl: true,
      xxl: true,
    },
    rightSectionVisibility: {
      sm: false,
      md: true,
      lg: true,
      xl: true,
      xxl: true,
    },
  },
};

// Custom Background Stories
export const CustomBackground: Story = {
  args: {
    ...WithLogo.args,
    backgroundColor: "#1f2937",
    style: { color: "white" },
  },
};

// New Interactive Variants
export const GlassMorphism: Story = {
  args: {
    connectLeft: <BrandLogo />,
    connectCenter: <SearchBar />,
    connectRight: <UserMenu />,
    variant: "glass",
    style: { 
      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
    },
  },
  parameters: {
    backgrounds: { 
      default: 'gradient',
      values: [
        { name: 'gradient', value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }
      ]
    },
  },
};

export const GradientTopBar: Story = {
  args: {
    connectLeft: <BrandLogo />,
    connectCenter: <SearchBar />,
    connectRight: <UserMenu />,
    variant: "gradient",
  },
};

// Interactive Examples
export const InteractiveDashboard: Story = {
  args: {
    connectLeft: (
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <BrandLogo />
        <Navigation />
      </div>
    ),
    connectCenter: <SearchBar />,
    connectRight: (
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <ActionButton variant="outline">
          <Settings size={16} />
          Settings
        </ActionButton>
        <DropdownMenu 
          trigger={
            <div className="topbar-avatar" style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face)",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }} />
          }
        >
          <div style={{ padding: "0.5rem" }}>
            <p style={{ margin: 0, fontWeight: "600" }}>John Doe</p>
            <p style={{ margin: 0, fontSize: "12px", color: "#6b7280" }}>john@example.com</p>
            <hr style={{ margin: "0.5rem 0", border: "1px solid #e5e7eb" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <button style={{ border: "none", background: "none", textAlign: "left", padding: "0.25rem 0", cursor: "pointer" }}>Profile</button>
              <button style={{ border: "none", background: "none", textAlign: "left", padding: "0.25rem 0", cursor: "pointer" }}>Settings</button>
              <button style={{ border: "none", background: "none", textAlign: "left", padding: "0.25rem 0", cursor: "pointer", color: "#ef4444" }}>Sign out</button>
            </div>
          </div>
        </DropdownMenu>
      </div>
    ),
    variant: "elevated",
  },
};

export const ECommerceHeader: Story = {
  args: {
    connectLeft: (
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <BrandLogo />
        <nav style={{ display: "flex", gap: "1.5rem" }}>
          <a href="#" style={{ textDecoration: "none", color: "inherit", fontWeight: 500 }}>Shop</a>
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Categories</a>
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Deals</a>
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>About</a>
        </nav>
      </div>
    ),
    connectCenter: <SearchBar />,
    connectRight: (
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div className="topbar-badge">
          <ShoppingCart size={20} />
          <span className="badge-indicator">2</span>
        </div>
        <ActionButton variant="primary">
          Sign In
        </ActionButton>
      </div>
    ),
    variant: "elevated",
    size: "comfortable",
  },
};

export const CreativeStudio: Story = {
  args: {
    connectLeft: (
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <BrandLogo />
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <ActionButton style={{ padding: "0.5rem" }}>
            <Home size={16} />
          </ActionButton>
          <ActionButton style={{ padding: "0.5rem" }}>
            <Settings size={16} />
          </ActionButton>
        </div>
      </div>
    ),
    connectCenter: (
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <span style={{ fontSize: "14px", fontWeight: "500" }}>Project: Design System v2.0</span>
        <ActionButton variant="outline" style={{ fontSize: "12px", padding: "0.25rem 0.75rem" }}>
          Save
        </ActionButton>
      </div>
    ),
    connectRight: (
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <ActionButton variant="primary">
          <span>Share</span>
        </ActionButton>
        <UserMenu />
      </div>
    ),
    variant: "minimal",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    style: { backdropFilter: "blur(10px)" },
  },
};

export const Playground: Story = {
  args: {
    connectLeft: <BrandLogo />,
    connectCenter: <SearchBar />,
    connectRight: <UserMenu />,
    variant: "default",
    size: "default",
    position: "sticky",
    mobileBreakpoint: "lg",
    showBorder: true,
    borderPosition: "bottom",
    showMobileToggle: true,
    fullWidth: true,
  },
};
