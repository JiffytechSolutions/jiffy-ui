
import React from "react";
import { classnames } from "../../utilities/globalFunction";
import "./Breadcrumb.css";

const Breadcrumb = (props: BreadcrumbI): JSX.Element => {
  const { items, onClick } = props;
  return (
    <nav
      className={classnames({
        "jf-breadCrumb": true,
      })}
      aria-label="breadCrumb"
    >
      <ul className="jf-breadCrumb__list">
        {items.map((e, i) => {
          return (
            <React.Fragment key={i}>
              {i !== 0 ? (
                <li
                  className={classnames({
                    "jf-breadCrumb__item": true,
                    "jf-breadCrumb__item--active":
                      i === Object.keys(items).length - 1,
                  })}
                >
                  <span className="jf-breadcrumb__separator mr-4">/</span>
                  {i === Object.keys(items).length - 1 ? (
                    <span className="jf-item__text--active">{e.label}</span>
                  ) : (
                    <span
                      role="none"
                      onClick={() => {
                        onClick?.(e.value, e);
                      }}
                      className="jf-item__text"
                    >
                      {e.label}
                    </span>
                  )}
                </li>
              ) : (
                <li className="jf-breadCrumb__item">
                  <span
                    role="none"
                    onClick={() => {
                      onClick?.(e.value, e);
                    }}
                    className="jf-item__text"
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
}
export interface ObjI {
  label: string | React.ReactNode;
  value: string;
}
export default Breadcrumb;
