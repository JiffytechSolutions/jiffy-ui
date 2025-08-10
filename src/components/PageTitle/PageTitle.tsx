import React, { forwardRef, useEffect, useRef, useState } from "react";
import { ChevronLeft, MoreHorizontal } from "react-feather";
import Button, { ButtonI } from "../Button/Button";
import Badge, { BadgeI } from "../Badge/Badge";
import handleClickOutside from "../../utilities/handleOutsideClick";
import "./PageTitle.css";

export interface PageTitleI {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  isReverseNavigation?: boolean;
  primaryAction?: ButtonI;
  secondaryAction?: ButtonI;
  tertiaryAction?: ButtonI;
  badge?: BadgeI;
  extraClass?: string;
  onClick?: () => void;
}

const PageTitle = forwardRef(
  (
    {
      title = "Page title",
      description,
      isReverseNavigation,
      primaryAction,
      secondaryAction,
      tertiaryAction,
      extraClass,
      badge,
      onClick,
      ...props
    }: PageTitleI,
    ref: any
  ) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isOpenMobileAction, setOpenMobileActions] = useState(false);
    const activatorRef = useRef(null);
    const dropdownRef = useRef(null);
    useEffect(() => {
      const sizeChecker = () => {
        if (window.innerWidth <= 768) {
          setIsMobile(true);
        } else setIsMobile(false);
      };
      sizeChecker();
      window.addEventListener("resize", sizeChecker, true);
      return () => {
        window.removeEventListener("resize", sizeChecker, true);
      };
    }, []);

    useEffect(() => {
      const onClose = () => setOpenMobileActions(false);
      const clickOutside = handleClickOutside(
        activatorRef,
        dropdownRef,
        onClose
      );
      window.addEventListener("click", clickOutside);
      return () => {
        window.removeEventListener("click", clickOutside);
      };
    }, [isOpenMobileAction]);

    return (
      <div
        className={`pageTitle ${isReverseNavigation && "has-reverseNavigation"}`}
      >
        {isMobile && isReverseNavigation && (
          <button
            onClick={onClick}
            className="pageTitle-back__btn btn  btn--link btn--medium btn--primary__color btn-icon"
          >
            <div className="btn-icon">
              <ChevronLeft />
            </div>
            <span className="btn-text">Back</span>
          </button>
        )}
        <div className="rev-title__wrapper">
          {isReverseNavigation && (
            <button className="pageTitle-back__btn" onClick={onClick}>
              <ChevronLeft />
            </button>
          )}
          <div className="pageTitle-wrapper">
            {title && (
              <div className={`${badge && "title-with__badge"} `}>
                <h1 className="pageTitle-title">{title}</h1>
                {badge && badge1()}
              </div>
            )}
            {description && (
              <p className="pageTitle-description">{description}</p>
            )}
          </div>
        </div>
        {primaryAction || secondaryAction || tertiaryAction ? (
          <div className="pageTitle-actions">
            {isMobile ? (
              <div className="pageTitle-actions_wrapper">
                <span ref={activatorRef}>
                  <Button
                    onClick={() => {
                      setOpenMobileActions(!isOpenMobileAction);
                    }}
                    variant="Tertiary"
                    children=""
                    icon={<MoreHorizontal size={20} />}
                  ></Button>
                </span>
                {PrimaryAction1()}
                <div
                  ref={dropdownRef}
                  className={`pageTitle-action_wrapper ${isOpenMobileAction ? "mobile-actions_open" : ""}`}
                >
                  {tertiaryAction1()}
                  {secondaryAction1()}
                </div>
              </div>
            ) : (
              <>
                {tertiaryAction1()}
                {secondaryAction1()}
                {PrimaryAction1()}
              </>
            )}
          </div>
        ) : null}
      </div>
    );

    function PrimaryAction1() {
      if (primaryAction) {
        const { size, isDisabled, children, variant, icon, alignIcon,isFullWidth,isLoading,onClick,color } = primaryAction;
        return (
          <Button
            size={size ?? "Medium"}
            children={children ?? "Submit"}
            isDisabled={isDisabled ? true : false}
            {...primaryAction}
            variant={variant ?? "Primary"}
          />
        );
      }
    }
    function secondaryAction1() {
      if (secondaryAction) {
        const secondaryAction1 = secondaryAction;
        return (
          <Button
            size={secondaryAction1.size ? secondaryAction1.size : "Medium"}
            children={secondaryAction1.children ? secondaryAction1.children : "Submit"}
            {...secondaryAction1}
            variant={
              secondaryAction1.variant ? secondaryAction1.variant : "Secondry"
            }
          />
        );
      }
    }
    function tertiaryAction1() {
      if (tertiaryAction) {
        const tertiaryAction1 = tertiaryAction;
        return (
          <Button
            size={tertiaryAction1.size ? tertiaryAction1.size : "Medium"}
            children={tertiaryAction1.children ? tertiaryAction1.children : "Submit"}
            {...secondaryAction1}
            variant={tertiaryAction1.variant ? tertiaryAction1.variant : "Link"}
          />
        );
      }
    }

    function badge1() {
      if (badge) {
        const { size, color, type, emphasis, children } = badge;
        return (
          <Badge
            color={color ?? "Positive"}
            children={children ?? "Success"}
            type={type ?? "None"}
            size={size ?? "Medium"}
            emphasis={emphasis ?? "Intense"}
          />
        );
      }
    }
  }
);

export default PageTitle;