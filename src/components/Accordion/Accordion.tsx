import React from "react";
import { ChevronDown } from "react-feather";
import './accordion.css';
export interface AccordionI {
  accordionHeader?: string | React.ReactNode;
  onClick?: any;
  isExpended: boolean;
  children?: string | React.ReactNode;
  icon?: React.ReactNode;
  withNumber?: boolean;
}
const Accordion = ({
  accordionHeader,
  onClick,
  isExpended,
  children,
  icon,
  ...props }:
  AccordionI) => {
  return (
    <div className={`accordion`}>
      <div className={`accordion-header ${!isExpended ? "" : "active"} ${icon ? "accordion-left--icon" : ""}`} onClick={onClick}>
        {icon &&
          <div className="accordion-headaer__icon">
            {icon}
          </div>
        }
        <h3 className="accordion-header__title">
          {accordionHeader}
        </h3>
        <ChevronDown size="16" />
      </div>
      <div className={`accordion-body ${!isExpended ? "collapsed" : ""}`}>
        <div className="accordion-body_content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
