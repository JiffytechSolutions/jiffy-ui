import React, { useState } from "react";
import Button, { ButtonI } from "../Button/Button";
import Actionlist, { ActionListObjI } from "../Actionlist/Actionlist";
import { MoreHorizontal } from "react-feather";
import "./card.css";

const Card = ({
  type = "Shadow",
  primaryAction,
  headerTitle = "Card title",
  headerSubTitle,
  children = "Default card description",
  footerTitle,
  footerSubtitle,
  secondaryAction,
  headerActions,
  onHeaderAction,
  ...props
}: CardI) => {
  const getCardType = () => {
    switch (type) {
      case "Plain":
        return "plain-card";
      case "Shadow":
        return "shadow-card";
      case "Borderd":
        return "borderd-card";
      case "BorderWithShadow":
        return "borderWithShadow-card";
      default:
        return "inte-card--default";
    }
  };
  const cardTypeCss = getCardType();
  // const [active, setActive] = useState(false);
  return (
    <div className={`jiffy-card ${cardTypeCss}`}>
      <div className="jiffy-card--inner">
        {headerTitle && (
          <>
            {true ? (
              <div className="jiffy-card--title jiffy-card--title__header_action">
                <div className="jiffy-card--title_inner">
                  <h3 className="jiffy-cord--title__text">{headerTitle}</h3>
                  {headerSubTitle && (
                    <p className="card--subTitle">{headerSubTitle}</p>
                  )}
                </div>
                {/* {headerActions ? headerActions1() : null} */}
              </div>
            ) : (
              <>
                <div className="jiffy-card--title">
                  <h3 className="jiffy-cord--title__text">{headerTitle}</h3>
                  {headerSubTitle && (
                    <p className="jiffy-card--subTitle">{headerSubTitle}</p>
                  )}
                </div>
              </>
            )}
          </>
        )}

        <div className="jiffy-card-body">
          <div className="jiffy-card--body__inner">{children}</div>
        </div>

        {footerTitle && (
          <div className="jiffy-card-footer jiffy-title-only">
            <h4 className="jiffy-card--footer_title__text">{footerTitle}</h4>
            <p className="jiffy-card--footer_description__text">{footerSubtitle}</p>
          </div>
        )}
        {primaryAction || secondaryAction ? (
          <div className="jiffy-card-footer actions--only">
            <div className="jiffy-card-footer__actions_wrapper">
              {secondaryAction1()}
              {primaryAction1()}
            </div>
          </div>
        ) : null}
        {(primaryAction || secondaryAction) && footerTitle ? (
          <div className="jiffy-card-footer title-action">
            <div className="jiffy-card-footer__title_wrapper">
              <h4 className="jiffy-card--footer_title__text">{footerTitle}</h4>
              {footerSubtitle && (
                <p className="jiffy-card--footer_description__text">
                  {footerSubtitle}
                </p>
              )}
            </div>
            <div className="jiffy-card-footer__actions_wrapper">
              {primaryAction1()}
              {secondaryAction1()}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );

  function primaryAction1() {
    if (primaryAction) {
      const {
        color,
        icon,
        isDisabled,
        isLoading,
        alignIcon,
        children,
        onClick,
      } = primaryAction;
      return (
        <Button
          size={"Medium"}
          variant={"Primary"}
          color={color ? color : "Primary"}
          icon={icon && icon}
          alignIcon={alignIcon && alignIcon}
          isDisabled={isDisabled && isDisabled}
          isLoading={isLoading && isLoading}
          children={children ? children : "Git it!"}
          {...primaryAction1}
          onClick={onClick}
        />
      );
    }
  }
  function secondaryAction1() {
    if (secondaryAction) {
      const {
        color,
        icon,
        isDisabled,
        isLoading,
        alignIcon,
        children,
        onClick,
      } = secondaryAction;
      return (
        <Button
          size={"Medium"}
          variant={"Secondry"}
          color={color ? color : "Primary"}
          icon={icon && icon}
          alignIcon={alignIcon && alignIcon}
          isDisabled={isDisabled && isDisabled}
          isLoading={isLoading && isLoading}
          children={children ? children : "Git it!"}
          {...secondaryAction1}
          onClick={onClick}
        />
      );
    }
  }

};

export interface CardI {
  type: "Plain" | "Shadow" | "Borderd" | "BorderWithShadow";
  headerTitle?: string | React.ReactNode;
  headerSubTitle?: string | React.ReactNode;
  children?: string | React.ReactNode;
  footerTitle?: string | React.ReactNode;
  footerSubtitle?: string | React.ReactNode;
  primaryAction?: ButtonI;
  secondaryAction?: ButtonI;
  headerActions?: ActionListObjI[];
  onHeaderAction?: () => void;
}

export default Card;
