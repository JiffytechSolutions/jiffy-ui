
import React from "react";
import { classnames } from "../../utilities/globalFunction";
import "./Breadcrumb.css";

const Breadcrumb = (props: BreadcrumbI): JSX.Element => {
  const { items, onClick } = props;
  return (
    <nav
      className={classnames({
        "Pixel-breadCrumb": true,
      })}
      aria-label="breadCrumb"
    >
      <ul className="Pixel-breadCrumb__list">
        {items.map((e, i) => {
          return (
            <React.Fragment key={i}>
              {i !== 0 ? (
                <li
                  className={classnames({
                    "Pixel-breadCrumb__item": true,
                    "Pixel-breadCrumb__item--active":
                      i === Object.keys(items).length - 1,
                  })}
                >
                  <span className="Pixel-breadcrumb__separator mr-4">/</span>
                  {i === Object.keys(items).length - 1 ? (
                    <span className="Pixel-item__text--active">{e.label}</span>
                  ) : (
                    <span
                      role="none"
                      onClick={() => {
                        onClick?.(e.value, e);
                      }}
                      className="Pixel-item__text"
                    >
                      {e.label}
                    </span>
                  )}
                </li>
              ) : (
                <li className="Pixel-breadCrumb__item">
                  <span
                    role="none"
                    onClick={() => {
                      onClick?.(e.value, e);
                    }}
                    className="Pixel-item__text"
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
