import "./Pagination.css";

import { classnames } from "../../utilities/globalFunction";
import Button from "../Button/Button";
import React from "react";
export interface PaginationI {
  isNextDisable?: boolean;
  isPreviousDisable?: boolean;
  onNext?: () => void;
  onPrevious?: () => void;
  children?: React.ReactNode;
  type?: "center" | "end";
  primaryAction?: React.ReactNode;
}
const Pagination = (props: PaginationI) => {
  const {
    isNextDisable,
    isPreviousDisable,
    onNext,
    onPrevious,
    children,
    type,
    primaryAction,
  } = props;
  return (
    <nav
      aria-label="Pagination"
      className={classnames({
        "Pixel-Pagination": true,
        "flex-row justify-between": type === "end",
      })}
    >
      {primaryAction && (
        <div className="Pixel-Pagination__action">{primaryAction}</div>
      )}
      <div
        className={classnames({
          "flex-row align-center": true,
          "Pixel-Pagination__center justify-center": type === "center",
        })}
      >
        <div className="Pixel-ButtonGroup__Item">
          <Button
            children="Previous"
            variant="Tertiary"
            isDisabled={isPreviousDisable}
            onClick={() => onPrevious?.()}
          />
        </div>
        {children && <div className="Pixel-Pagination__label">{children}</div>}
        <div className="Pixel-ButtonGroup__Item">
          <Button
            children="Next"
            variant="Tertiary"
            isDisabled={isNextDisable}
            onClick={() => onNext?.()}
          />
        </div>
      </div>
    </nav>
  );
};

export default Pagination ;
