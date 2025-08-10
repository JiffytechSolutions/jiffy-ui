import React from "react";
import "./Indicator.css";
import { isJSDocReturnTag } from "typescript";
const Indicator = ({
    label,
    color = "Positive",
    size = "Medium",
    content,
    ...props
}: IndicatorI) => {
    const checkColor = (): string => {
        switch (color) {
            case "Positive":
                return "jiffyui-indicator--possitive";
            case "Negative":
                return "jiffyui-indicator--negative";
            case "Notice":
                return "jiffyui-indicator--waiting";
            case "Information":
                return "jiffyui-indicator--info";
            case "Neutral":
                return "jiffyui-indicator--neutral";
            case "Primary":
                return "jiffyui-indicator--primary";
            default:
                return "jiffyui-indicator--neutral";
        }
    };

    const checkSize = (): string => {
        switch (size) {
            case "Small":
                return "jiffyui-indicator--small";
            case "Medium":
                return "jiffyui-indicator--medium";
            case "Large":
                return "jiffyui-indicator--large";
            default:
                return "jiffyui-indicator--medium";
        }
    };
    // function checkContent() {
    //     if (content == "") {
    //         return "has-string";
    //     } else {
    //         return "";
    //     }
    // }
    // const contentClass = checkContent();
    const IndicatorColor = checkColor();
    const IndicatorSize = checkSize();
    return (
        <div className={`jiffyui-indicator ${IndicatorColor} ${IndicatorSize} ${content ? "has-string" : ""}`}>
            <span className="jiffyui-indicator-dot">{content}</span>
            {label && (
                <label className="jiffyui-indicator-label">{label}</label>
            )}
        </div>
    );
};

export interface IndicatorI {
    color: "Primary" | "Positive" | "Negative" | "Notice" | "Information" | "Neutral";
    size?: "Small" | "Medium" | "Large";
    content?: string;
    label?: string;
}

export default Indicator;