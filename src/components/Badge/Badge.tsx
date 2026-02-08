import React from "react";
import "./badge.css";

 const Badge = ({
    size = "Large",
    color = "Positive",
    children = "children",
    type = "None",
    emphasis = "Subtile",
    ...props
}: BadgeI) => {
    const checkSize = (): string => {
        switch (size) {
            case "Small":
                return "jf-badge--small";
            case "Medium":
                return "jf-badge--medium";
            case "Large":
                return "jf-badge--large";
            default:
                return "jf-badge--medium";
        }
    };

    const checkColor = (): string => {
        switch (color) {
            case "Positive":
                return "jf-badge--positive";
            case "Negative":
                return "jf-badge--negative";
            case "Notice":
                return "jf-badge--notice";
            case "Neutral":
                return "jf-badge--neutral";
            case "Primary":
                return "jf-badge--primary";
            default:
                return "jf-badge--positive";
        }
    }
    const checkType = (): string => {
        switch (type) {
            case "Partial":
                return "jf-badge--type__partial";
            case "Full":
                return "jf-badge--type__full";
            case "None":
                return "jf-badge--type__none";
            default:
                return "jf-badge--type__none";
        }
    };

    const checkEmphasis = (): string => {
        switch (emphasis) {
            case "Subtile":
                return "jf-badge--subtile";
            case "Intense":
                return "jf-badge--intense";
            case "OutLine":
                return "jf-badge--outline";
            default:
                return "jf-badge--subtile";
        }
    }

    const BadgeSize = checkSize();
    const BadgeColor = checkColor();
    const BadgeType = checkType();
    const BadgeEmphasis = checkEmphasis();

    return (
        <div className="jf-badge-wrapp">
            <div className={`jf-badge ${BadgeSize} ${BadgeColor} ${BadgeType} ${BadgeEmphasis}`}>
                {type === "Partial" ? <span className="jf-partial"></span> : null}
                {type === "Full" ? <span className="jf-complete"></span> : null}
                <label className="jf-badge-label">
                    {children}
                </label>
            </div>
        </div>
    );
}
export interface BadgeI {
    size?: "Small" | "Medium" | "Large";
    color: "Primary" | "Positive" | "Negative" | "Notice" | "Neutral";
    type?: "Partial" | "Full" | "None";
    emphasis?: "Subtile" | "Intense" | "OutLine";
    children?: string;
}
export default Badge;