import React from "react";
import { ChevronDown } from "react-feather";
import './accordion.css';

export interface AccordionI {
  accordionHeader?: string | React.ReactNode;
  onClick?: () => void;
  isExpanded: boolean;
  children?: string | React.ReactNode;
  icon?: React.ReactNode;
  withNumber?: boolean;
  variant?: 'default' | 'bordered' | 'elevated';
  disabled?: boolean;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  showChevron?: boolean;
  chevronPosition?: 'left' | 'right';
  iconPosition?: 'left' | 'right';
  numberPosition?: 'left' | 'right';
  number?: number | string;
}

const Accordion = ({
  accordionHeader,
  onClick,
  isExpanded,
  children,
  icon,
  withNumber = false,
  variant = 'default',
  disabled = false,
  className = '',
  headerClassName = '',
  bodyClassName = '',
  showChevron = true,
  chevronPosition = 'right',
  iconPosition = 'left',
  numberPosition = 'left',
  number,
  ...props
}: AccordionI) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const getVariantClass = () => {
    switch (variant) {
      case 'bordered':
        return 'jf-accordion--bordered';
      case 'elevated':
        return 'jf-accordion--elevated';
      default:
        return '';
    }
  };


  const getDisabledClass = () => {
    return disabled ? 'jf-accordion--disabled' : '';
  };

  return (
    <div 
      className={`jf-accordion ${getVariantClass()}  ${getDisabledClass()} ${className}`}
      {...props}
    >
      <div 
        className={`jf-accordion-header ${!isExpanded ? "" : "active"} ${icon ? "jf-accordion-left--icon" : ""} ${headerClassName}`} 
        onClick={handleClick}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-expanded={isExpanded}
        aria-disabled={disabled}
      >
        {showChevron && chevronPosition === 'left' && (
          <ChevronDown size={14} className="jf-accordion-chevron jf-accordion-chevron--left" />
        )}
        
        {withNumber && numberPosition === 'left' && number && (
          <div className="jf-accordion-number jf-accordion-number--left">
            {number}
          </div>
        )}
        
        {icon && iconPosition === 'left' && (
          <div className="jf-accordion-header__icon jf-accordion-header__icon--left">
            {icon}
          </div>
        )}
        
        <h3 className="jf-accordion-header__title">
          {accordionHeader}
        </h3>
        
        {icon && iconPosition === 'right' && (
          <div className="jf-accordion-header__icon jf-accordion-header__icon--right">
            {icon}
          </div>
        )}
        
        {withNumber && numberPosition === 'right' && number && (
          <div className="jf-accordion-number jf-accordion-number--right">
            {number}
          </div>
        )}
        
        {showChevron && chevronPosition === 'right' && (
          <ChevronDown size={14} className="jf-accordion-chevron jf-accordion-chevron--right" />
        )}
      </div>
      
          <div className={`jf-accordion-body ${!isExpanded ? "collapsed" : ""} ${bodyClassName}`}>
        <div className="jf-accordion-body_content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
