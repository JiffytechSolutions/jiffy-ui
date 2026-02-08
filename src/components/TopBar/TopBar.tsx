import React, { useEffect, useState, useRef } from "react";
import { classnames } from "../../utilities/globalFunction";
import { Menu, X } from "react-feather";
import "./topbar.css";
import Portal from "../../utilities/Portal";

// Breakpoint types
type Breakpoint = "sm" | "md" | "lg" | "xl" | "xxl";

// Responsive visibility configuration
type ResponsiveVisibility = {
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  xxl?: boolean;
};

// TopBar variant types
type TopBarVariant = "default" | "elevated" | "outlined" | "minimal" | "glass" | "gradient";
type TopBarSize = "compact" | "default" | "comfortable";
type TopBarPosition = "static" | "sticky" | "fixed";

// Mobile menu behavior
type MobileMenuBehavior = "overlay" | "push" | "slide";

export interface TopBarProps {
  /** Content for the left section */
  connectLeft?: React.ReactNode;
  
  /** Content for the right section */
  connectRight?: React.ReactNode;
  
  /** Content for the center section */
  connectCenter?: React.ReactNode;
  
  /** Logo source for mobile view */
  mobileLogo?: string;
  
  /** Logo source for desktop view */
  desktopLogo?: string;
  
  /** Logo alt text */
  logoAlt?: string;
  
  /** Position behavior of the topbar */
  position?: TopBarPosition;
  
  /** Visual variant of the topbar */
  variant?: TopBarVariant;
  
  /** Size variant of the topbar */
  size?: TopBarSize;
  
  /** Mobile menu behavior */
  mobileMenuBehavior?: MobileMenuBehavior;
  
  /** Whether to show mobile menu toggle */
  showMobileToggle?: boolean;
  
  /** Responsive visibility for different sections */
  leftSectionVisibility?: ResponsiveVisibility;
  centerSectionVisibility?: ResponsiveVisibility;
  rightSectionVisibility?: ResponsiveVisibility;
  
  /** Background color */
  backgroundColor?: string;
  
  /** Border configuration */
  showBorder?: boolean;
  borderPosition?: "top" | "bottom" | "both" | "none";
  
  /** Custom breakpoint for mobile menu */
  mobileBreakpoint?: Breakpoint;
  
  /** Maximum width of the container */
  maxWidth?: string | number;
  
  /** Whether the container should be full width */
  fullWidth?: boolean;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Custom styles */
  style?: React.CSSProperties;
  
  /** Z-index for sticky/fixed positioning */
  zIndex?: number;
  
  /** Callback when mobile menu opens */
  onMobileMenuOpen?: () => void;
  
  /** Callback when mobile menu closes */
  onMobileMenuClose?: () => void;
  
  /** Custom mobile menu toggle icon */
  customToggleIcon?: React.ReactNode;
  
  /** Custom mobile menu close icon */
  customCloseIcon?: React.ReactNode;
  
  /** Additional HTML attributes */
  [key: string]: any;
}

const TopBar: React.FC<TopBarProps> = ({
  connectLeft,
  connectRight,
  connectCenter,
  mobileLogo,
  desktopLogo,
  logoAlt = "Logo",
  position = "sticky",
  variant = "default",
  size = "default",
  mobileMenuBehavior = "overlay",
  showMobileToggle = true,
  leftSectionVisibility,
  centerSectionVisibility,
  rightSectionVisibility,
  backgroundColor,
  showBorder = true,
  borderPosition = "bottom",
  mobileBreakpoint = "lg",
  maxWidth,
  fullWidth = true,
  className = "",
  style,
  zIndex = 1000,
  onMobileMenuOpen,
  onMobileMenuClose,
  customToggleIcon,
  customCloseIcon,
  ...props
}) => {
  const [isOpenMobileSidebar, setIsOpenMobileSidebar] = useState(false);
  const topBarRef = useRef<HTMLElement>(null);

  // Handle mobile menu toggle
  const handleMobileMenuToggle = () => {
    const newState = !isOpenMobileSidebar;
    setIsOpenMobileSidebar(newState);
    
    if (newState) {
      document.body.classList.add('topbar-mobile-menu-open');
      onMobileMenuOpen?.();
    } else {
      document.body.classList.remove('topbar-mobile-menu-open');
      onMobileMenuClose?.();
    }
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpenMobileSidebar) {
        handleMobileMenuToggle();
      }
    };

    if (isOpenMobileSidebar) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpenMobileSidebar]);

  // Clean up body class on unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove('topbar-mobile-menu-open');
    };
  }, []);

  // Generate responsive visibility classes
  const generateVisibilityClasses = (visibility?: ResponsiveVisibility): string => {
    if (!visibility) return "";
    
    return Object.entries(visibility)
      .map(([breakpoint, isVisible]) => {
        const prefix = breakpoint === "sm" ? "d" : `d-${breakpoint}`;
        return isVisible ? `${prefix}-flex` : `${prefix}-none`;
      })
      .join(" ");
  };

  // Generate container classes
  const containerClasses = classnames({
    "topbar-container": true,
    [`topbar-${variant}`]: variant !== "default",
    [`topbar-${size}`]: size !== "default",
    [`topbar-${position}`]: position !== "static",
    [`topbar-border-${borderPosition}`]: showBorder && borderPosition !== "none",
    [`topbar-mobile-${mobileBreakpoint}`]: mobileBreakpoint !== "lg",
    "topbar-full-width": fullWidth,
    [className]: className,
  });

  // Generate section classes
  const leftSectionClasses = classnames({
    "topbar-section": true,
    "topbar-section-left": true,
    [generateVisibilityClasses(leftSectionVisibility)]: leftSectionVisibility,
  });

  const centerSectionClasses = classnames({
    "topbar-section": true,
    "topbar-section-center": true,
    [generateVisibilityClasses(centerSectionVisibility)]: centerSectionVisibility,
  });

  const rightSectionClasses = classnames({
    "topbar-section": true,
    "topbar-section-right": true,
    [generateVisibilityClasses(rightSectionVisibility)]: rightSectionVisibility,
  });

  // Container styles
  const containerStyle: React.CSSProperties = {
    ...style,
    ...(backgroundColor && { backgroundColor }),
    ...(zIndex && (position === "sticky" || position === "fixed") && { zIndex }),
    ...(maxWidth && { maxWidth: typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth }),
  };

  return (
    <>
      <header
        ref={topBarRef}
        className={containerClasses}
        style={containerStyle}
        {...props}
      >
        <div className="topbar-content">
          {/* Left Section */}
          <div className={leftSectionClasses}>
            {/* Mobile Toggle */}
            {showMobileToggle && (
              <button
                className="topbar-mobile-toggle"
                onClick={handleMobileMenuToggle}
                aria-label={isOpenMobileSidebar ? "Close menu" : "Open menu"}
                aria-expanded={isOpenMobileSidebar}
              >
                {customToggleIcon || (
                  isOpenMobileSidebar ? (
                    customCloseIcon || <X size={20} />
                  ) : (
                    <Menu size={20} />
                  )
                )}
              </button>
            )}
            
            {/* Mobile Logo */}
            {mobileLogo && (
              <div className="topbar-mobile-logo">
                <img src={mobileLogo} alt={logoAlt} />
              </div>
            )}
            
            {/* Desktop Logo */}
            {desktopLogo && (
              <div className="topbar-desktop-logo">
                <img src={desktopLogo} alt={logoAlt} />
              </div>
            )}
            
            {/* Left Content */}
            <div className="topbar-section-content">
              {connectLeft}
            </div>
          </div>

          {/* Center Section */}
          {connectCenter && (
            <div className={centerSectionClasses}>
              <div className="topbar-section-content">
                {connectCenter}
              </div>
            </div>
          )}

          {/* Right Section */}
          {connectRight && (
            <div className={rightSectionClasses}>
              <div className="topbar-section-content">
                {connectRight}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpenMobileSidebar && (
        <Portal>
          <div 
            className={`topbar-mobile-overlay topbar-mobile-${mobileMenuBehavior}`}
            onClick={handleMobileMenuToggle}
            aria-hidden="true"
          />
        </Portal>
      )}
    </>
  );
};

// Add displayName for debugging
TopBar.displayName = "TopBar";

export default TopBar;
