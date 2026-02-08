import React, { useState } from "react";
import Button, { ButtonI } from "../Button/Button";
import ActionList, { ActionItem } from "../Actionlist/Actionlist";

import "./MediaCard.css";
import { MoreHorizontal } from "../Foundation/Icons/Icons";


const MediaCard = ({
    type = "Bordered",
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
                return "jf-plain-mediaCard";
            case "Shadow":
                return "jf-shadow-mediaCard";
            case "Bordered":
                return "jf-bordered-mediaCard";
            case "BorderWithShadow":
                return "jf-borderWithShadow-mediaCard";
            default:
                return "jf-bordered-mediaCard";
        }
    };
    const getOrientation = () => {
        switch (orientation) {
            case "Vertical":
                return "jf-vertical-mediaCard";
            case "Horizontal":
                return "jf-horizontal-mediaCard";
            default:
                return "";
        }
    };

    const cardTypeCss = getCardType();
    const orientation1 = getOrientation();
    const [active, setActive] = useState(false);
    return (
        <div className={`jf-mediaCard ${cardTypeCss} ${orientation1}`}>
            <div className="jf-mediaCard--inner">
                <div className="jf-mediaCard-thumbnail">
                    <div className="jf-mediaCard-image">
                        <img alt="test" src={mediaSrc} style={{ width: "100%" }} />
                    </div>
                </div>
                {title || subtitle ? (
                    <div className="jf-mediaCard-body">
                        {title && (
                            <>
                                {headerActions ? (
                                    <div className="jf-mediaCard-title_wrapper jf-mediaCard--title__action">
                                        <div className="jf-mediaCard--title_inner">
                                            <h4 className="jf-mediaCard-title__text">{title}</h4>
                                            {subtitle && (
                                                <p className="jf-mediaCard-description__text">
                                                    {subtitle}
                                                </p>
                                            )}
                                        </div>
                                        {headerActions1()}
                                    </div>
                                ) : (
                                    <div className="jf-mediaCard-title_wrapper">
                                        <h4 className="jf-mediaCard-title__text">{title}</h4>
                                        {subtitle && (
                                            <p className="jf-mediaCard-description__text">{subtitle}</p>
                                        )}
                                    </div>
                                )}
                            </>
                        )}
                        <div className="jf-mediaCard-actions_wrapper">
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
                    {...primaryAction}
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
                    variant="Primary"
                    color={color ? color : "Primary"}
                    icon={icon && icon}
                    alignIcon={alignIcon && alignIcon}
                    isDisabled={isDisabled && isDisabled}
                    isLoading={isLoading && isLoading}
                    children={children ? children : "Secondary Action"}
                    {...secondaryAction}
                    onClick={onClick}
                />
            );
        }
    }

    function headerActions1() {
        if (headerActions) {
            return (
                <>
                    <ActionList
                        items={headerActions}
                    >
                        <Button
                            variant="Link"
                            onClick={() => setActive(!active)}
                            children=""
                            iconOnly
                            icon={<MoreHorizontal size={18} />} />
                    </ActionList>
                </>
            );
        }
    }
};

export interface MediaCardI {
    type: "Plain" | "Shadow" | "Bordered" | "BorderWithShadow";
    orientation?: "Vertical" | "Horizontal";
    mediaSrc?: string;
    title?: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
    primaryAction?: ButtonI;
    secondaryAction?: ButtonI;
    headerActions?: ActionItem[];
}

export default MediaCard;