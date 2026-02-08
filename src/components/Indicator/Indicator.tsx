import React from "react";
import "./Indicator.css";
import { isJSDocReturnTag } from "typescript";
const Indicator = ({
    label,
    color = "Positive",
    content,
    ...props
}: IndicatorI) => {
    const checkColor = (): string => {
        switch (color) {
            case "Positive":
                return "jf-indicator--possitive";
            case "Negative":
                return "jf-indicator--negative";
            case "Notice":
                return "jf-indicator--waiting";
           
            case "Neutral":
                return "jf-indicator--neutral";
            case "Primary":
                return "jf-indicator--primary";
            default:
                return "jf-indicator--neutral";
        }
    };

    
   
    const IndicatorColor = checkColor();

    return (
        <div className={`jf-indicator ${IndicatorColor}  ${content ? "jf-has-string" : ""}`}>
            <span className="jf-indicator-dot">{content}</span>
            {label && (
                <label className="jf-indicator-label">{label}</label>
            )}
        </div>
    );
};

export interface IndicatorI {
    color: "Primary" | "Positive" | "Negative" | "Notice" | "Neutral";
    
    content?: string;
    label?: string;
}

export default Indicator;