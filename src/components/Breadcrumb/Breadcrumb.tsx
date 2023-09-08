/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import { ChevronRight } from "../../storybook/Foundation/Icons/Icons";
import getClassNames from "../../utilities/getClassnames";
import "./Breadcrumb.css";

const Breadcrumb: FC<BreadcrumbI> = ({
  items,
  customClass = "",
  onClick = () => {},
}: BreadcrumbI): JSX.Element => {
  return (
    <nav
      className={getClassNames({
        "inte-breadCrumb": true,
        [customClass]: customClass,
      })}
      aria-label="breadCrumb"
    >
      <ul className="inte-breadCrumb__list">
        {items.map((e, i) => {
          return (
            <React.Fragment key={i}>
              {i !== 0 ? (
                <li
                  className={getClassNames({
                    "inte-breadCrumb__item": true,
                    "inte-breadCrumb__item--active":
                      i == Object.keys(items).length - 1,
                  })}
                >
                  <ChevronRight size={16} color="var(--inte-G60)" />
                  {i == Object.keys(items).length - 1 ? (
                    <span>{e.label}</span>
                  ) : (
                    <span
                      role="button"
                      onClick={() => {
                        onClick(e.value, e);
                      }}
                    >
                      {e.label}
                    </span>
                  )}
                </li>
              ) : (
                <li className="inte-breadCrumb__item">
                  <span
                    role="button"
                    onClick={() => {
                      onClick(e.value, e);
                    }}
                  >
                    {e.label}
                  </span>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
};
export interface BreadcrumbI {
  items: ObjI[];
  onClick?: (value: string, obj?: ObjI) => void;
  customClass?: string;
}
export interface ObjI {
  label: string | React.ReactNode;
  value: string;
}
export default Breadcrumb;
