import React, { FC, useId } from "react";
import { ChevronDown } from "../../storybook/Foundation/Icons/Icons";
import getClassNames from "../../utilities/getClassnames";
import useDelayUnmount from "../../utilities/useDelayTimeout";
import "./Accordion.css";
const Accordion: FC<AccordionI> = ({
  children,
  isActive = false,
  icon,
  badge,
  title,
  subTitle,
  customClass = "",
  onClick,
}: AccordionI) => {
  const rId = useId();
  const isOpen=useDelayUnmount(isActive,300)
  return (
    <div
      className={getClassNames({
        "inte-accordion": true,
        "inte-accordion--active": isActive,
        [customClass]: customClass,
      })}
      onClick={onClick}
    >
      <div
        className="inte-accordion__header"
        aria-expanded={isOpen ? "true" : "false"}
        aria-controls={`inte-accordion-${rId}`}
        role="button"
      >
        <div
          className={getClassNames({
            "inte-accordion__headerContentWrapper": true,
            "inte-accordion__headerContentWrapper--hasIcon": icon,
            "inte-accordion__headerContentWrapper--hasSubTitle": subTitle,
          })}
        >
          {icon ?? null}
          <div className="inte-accordion__headerContent">
            {badge ? (
              <div className="inte-accordion__headerContentWithBadge">
                <h4 className="inte-accordion__title">{title}</h4>
                {badge}
              </div>
            ) : (
              <h4 className="inte-accordion__title">{title}</h4>
            )}
            {subTitle && <p className="inte-accordion__subTitle">{subTitle}</p>}
          </div>
        </div>
        <div className="inte-accordion__expandIcon">
          <ChevronDown size={20} color="var(--inte-G800)" />
        </div>
      </div>
      <div
        id={`inte-accordion-${rId}`}
        onClick={(e) => e.stopPropagation()}
        className="inte-accordion__body"
        aria-hidden={isOpen ? "false" : "true"}
      >
        {isOpen && <div className="inte-accordion__bodyInner">{children}</div>}
      </div>
    </div>
  );
};
export interface AccordionI {
  children: React.ReactNode | string;
  isActive?: boolean;
  title: string;
  subTitle?: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  onClick: () => void;
  customClass?: string;
}
export default Accordion;
