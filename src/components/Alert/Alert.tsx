import React from "react";
import "./alert.css";

import { AlertCircle, ExternalLink, X } from "react-feather";
import Button, { ButtonI } from "../Button/Button";
import TextLink, { TextLinkI } from "../TextLink/TextLink";

const Alert = ({
    title = "Alert title here",
    description = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    color = "Positive",
    emphasis = "Subtile",
    onDismiss,
    icon = <AlertCircle size={20} />,
    secondaryAction,
    primaryAction,
    ...props
}: AlertI) => {
    const checkColor = (): string => {
        switch (color) {
            case "Positive":
                return "jiffyui-alert--possitive";
            case "Negative":
                return "jiffyui-alert--negative";
            case "Waiting":
                return "jiffyui-alert--waiting";
            case "Primary":
                return "jiffyui-alert--primary";
            case "Neutral":
                return "jiffyui-alert--neutral"
            default:
                return "jiffyui-alert--neutral";
        }
    };
    const checkEmphasis = (): string => {
        switch (emphasis) {
            case "Subtile":
                return "jiffyui-alert--subtile";
            case "Intense":
                return "jiffyui-alert--intense";
            default:
                return "";
        }
    };

    const AlertColor = checkColor();
    const AlertEmphasis = checkEmphasis();
    return (
        <div className={`jiffyui-alert ${AlertColor} ${AlertEmphasis} ${onDismiss ? "hasDismiss" : ""}`}>
            {onDismiss && <div className="jiffyui-alert-dismiss"> <Button variant="Tertiary" icon={<X size={16} />} children=""
                onClick={() => onDismiss?.()}
            /></div>}
            <div className="jiffyui-alert_inner">
                {icon && (
                    <div className="jiffyui-alert_icon">{icon}</div>
                )}
                <div className="jiffyui-alert_content">
                    {title &&
                        <h3 className="jiffyui-alert_tile">{title}</h3>
                    }
                    {description &&
                        <p className="jiffyui-alert_description">{description}</p>
                    }
                    {primaryAction || secondaryAction ? (
                        <div className="jiffyui-alert_actions">
                            {primaryAction1()}
                            {secondaryAction1()}
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );

    function primaryAction1() {
        if (primaryAction) {
            const primaryAction1 = primaryAction;
            return (
                <Button
                    size={primaryAction1.size ? primaryAction1.size : "Medium"}
                    children={primaryAction1.children ? primaryAction1.children : "Submit"}
                    {...primaryAction1}
                    variant={primaryAction1.variant ? primaryAction1.variant : "Secondry"}
                />
            );
        }
    }
    function secondaryAction1() {
        if (secondaryAction) {
            const secondaryAction1 = secondaryAction;
            return (
                <TextLink
                    label={secondaryAction1.label ? secondaryAction1.label : "Medium"}
                    icon={secondaryAction1.icon ? secondaryAction1.icon : <ExternalLink size={16} />}
                    {...secondaryAction1}

                />
            );
        }
    }
};

export interface AlertI {
    title?: string;
    description: React.ReactNode | string;
    color: "Primary" | "Positive" | "Negative" | "Waiting" | "Neutral";
    emphasis?: "Subtile" | "Intense";
    onDismiss?: () => void;
    primaryAction?: ButtonI;
    secondaryAction?: TextLinkI;
    icon: React.ReactNode;
}

export default Alert;
