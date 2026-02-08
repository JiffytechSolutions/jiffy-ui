import React from "react";
import { classnames } from "../../utilities/globalFunction";
import './TextStyle.css';

export interface TextStyleProps {
  /** The HTML element to render */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong' | 'em' | 'legend' | 'label' | 'dt' | 'dd';
  
  /** The visual style variant */
  variant?: 'heading' | 'body' | 'caption' | 'subdued' | 'code';
  
  /** The tone of the text */
  tone?: 'default' | 'success' | 'warning' | 'critical' | 'subdued' | 'emphasis';
  
  /** The size of the text */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  
  /** Font weight */
  fontWeight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
  
  /** Text alignment */
  alignment?: 'start' | 'center' | 'end' | 'justify';
  
  /** Text decoration */
  textDecoration?: 'underline' | 'line-through' | 'none';
  
  /** Font style */
  fontStyle?: 'normal' | 'italic';
  
  /** Whether the text is truncated */
  truncate?: boolean;
  
  /** Whether the text is disabled */
  disabled?: boolean;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Additional inline styles */
  style?: React.CSSProperties;
  
  /** The content to display */
  children?: React.ReactNode;
  
  /** Additional HTML attributes */
  [key: string]: any;
}

const TextStyle = ({ 
  as = 'span',
  variant = 'body',
  tone = 'default',
  size = 'md',
  fontWeight,
  alignment,
  textDecoration,
  fontStyle,
  truncate = false,
  disabled = false,
  className,
  style,
  children,
  ...props 
}: TextStyleProps) => {
  
  // Generate CSS classes following Polaris patterns
  const textClasses = classnames({
    'jf-text': true,
    [`jf-text--${variant}`]: variant,
    [`jf-text--${tone}`]: tone,
    [`jf-text--${size}`]: size,
    [`jf-text--${fontWeight}`]: fontWeight,
    [`jf-text--${alignment}`]: alignment,
    [`jf-text--${textDecoration}`]: textDecoration,
    [`jf-text--${fontStyle}`]: fontStyle,
    'jf-text--truncate': truncate,
    'jf-text--disabled': disabled,
    [className || ""]: className,
  });

  // Map Polaris variants to semantic HTML elements
  const getElement = () => {
    if (as) return as;
    
    switch (variant) {
      case 'heading':
        return size === '2xl' ? 'h1' : 
               size === 'xl' ? 'h2' : 
               size === 'lg' ? 'h3' : 
               size === 'md' ? 'h4' : 
               size === 'sm' ? 'h5' : 'h6';
      case 'body':
      case 'subdued':
        return 'p';
      case 'caption':
        return 'span';
      case 'code':
        return 'code';
      default:
        return 'span';
    }
  };

  const Element = getElement() as keyof JSX.IntrinsicElements;

  return (
    <Element
      className={textClasses}
      style={style}
      {...props}
    >
      {children}
    </Element>
  );
};

export default TextStyle;