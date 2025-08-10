import React, { useState } from "react";
import Button, { ButtonI } from "../Button/Button";

import { MoreHorizontal } from "react-feather";
import "./MediaCard.css";
import { ActionListObjI, Actionlist } from "../Actionlist/Actionlist";

const MediaCard = ({
  type = "Borderd",
  mediaSrc = "https://placehold.co/1000x700",
  primaryAction,
  orientation = "Vertical",
  title = "Lorem ipsum is placeholder",
  subtitle = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
  secondaryAction,
  headerActions,
  ...props
}: MediaCardI) => {
  const getCardType = () => {
    switch (type) {
      case "Plain":
        return "jiffyui-plain-mediaCard";
      case "Shadow":
        return "jiffyui-shadow-mediaCard";
      case "Borderd":
        return "jiffyui-borderd-mediaCard";
      case "BorderWithShadow":
        return "jiffyui-borderWithShadow-mediaCard";
      default:
        return "jiffyui-borderd-mediaCard";
    }
  };
  const getOrientation = () => {
    switch (orientation) {
      case "Vertical":
        return "jiffyui-vertical-mediaCard";
      case "Horizontal":
        return "jiffyui-horizontal-mediaCard";
      default:
        return "";
    }
  };

  const cardTypeCss = getCardType();
  const orientation1 = getOrientation();
  const [active, setActive] = useState(false);
  return (
    <div className={`jiffyui-mediaCard ${cardTypeCss} ${orientation1}`}>
      <div className="jiffyui-mediaCard--inner">
        <div className="jiffyui-mediaCard-thumbnail">
          <div className="jiffyui-mediaCard-image">
            <img alt="test" src={mediaSrc} style={{ width: "100%" }} />
          </div>
        </div>
        {title || subtitle ? (
          <div className="jiffyui-mediaCard-body">
            {title && (
              <>
                {headerActions ? (
                  <div className="jiffyui-mediaCard-title_wrapper jiffyui-mediaCard--title__action">
                    <div className="jiffyui-mediaCard--title_inner">
                      <h4 className="jiffyui-mediaCard-title__text">{title}</h4>
                      {subtitle && (
                        <p className="jiffyui-mediaCard-description__text">
                          {subtitle}
                        </p>
                      )}
                    </div>
                    {headerActions1()}
                  </div>
                ) : (
                  <div className="jiffyui-mediaCard-title_wrapper">
                    <h4 className="jiffyui-mediaCard-title__text">{title}</h4>
                    {subtitle && (
                      <p className="jiffyui-mediaCard-description__text">{subtitle}</p>
                    )}
                  </div>
                )}
              </>
            )}
            <div className="jiffyui-mediaCard-actions_wrapper">
              {secondaryAction1()}
              {primaryAction1()}
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
          children={children ? children : "Primary action"}
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
          children={children ? children : "Secondary Action"}
          {...secondaryAction1}
          onClick={onClick}
        />
      );
    }
  }

  function headerActions1() {
    if (headerActions) {
      return (
        <Actionlist
          onClose={() => setActive(false)}
          activator={
            <Button
              variant="Link"
              onClick={() => setActive(!active)}
              children=""
              icon={<MoreHorizontal size={18} />}
            />
          }
          open={active}
          options={headerActions}
        />
      );
    }
  }
};

export interface MediaCardI {
  type: "Plain" | "Shadow" | "Borderd" | "BorderWithShadow";
  orientation?: "Vertical" | "Horizontal";
  mediaSrc?: string;
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  primaryAction?: ButtonI;
  secondaryAction?: ButtonI;
  headerActions?: ActionListObjI[];
}

export default MediaCard;