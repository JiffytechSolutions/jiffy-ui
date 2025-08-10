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
                return "badge--small";
            case "Medium":
                return "badge--medium";
            case "Large":
                return "badge--large";
            default:
                return "badge--medium";
        }
    };

    const checkColor = (): string => {
        switch (color) {
            case "Positive":
                return "badge--positive";
            case "Negative":
                return "badge--negative";
            case "Notice":
                return "badge--notice";
            case "Neutral":
                return "badge--neutral";
            case "Primary":
                return "badge--primary";
            default:
                return "badge--positive";
        }
    }
    const checkType = (): string => {
        switch (type) {
            case "Partial":
                return "badge--type__partial";
            case "Full":
                return "badge--type__full";
            case "None":
                return "badge--type__none";
            default:
                return "badge--type__none";
        }
    };

    const checkEmphasis = (): string => {
        switch (emphasis) {
            case "Subtile":
                return "badge--subtile";
            case "Intense":
                return "badge--intense";
            case "OutLine":
                return "badge--outline";
            default:
                return "badge--subtile";
        }
    }

    const BadgeSize = checkSize();
    const BadgeColor = checkColor();
    const BadgeType = checkType();
    const BadgeEmphasis = checkEmphasis();

    return (
        <div className="badge-wrapp">
            <div className={`badge ${BadgeSize} ${BadgeColor} ${BadgeType} ${BadgeEmphasis}`}>
                {type === "Partial" ? <span className="partial"></span> : null}
                {type === "Full" ? <span className="complete"></span> : null}
                <label className="badge-label">
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