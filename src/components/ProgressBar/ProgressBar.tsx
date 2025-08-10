import React, { forwardRef } from "react";
import "./ProgressBar.css";
export interface ProgressBarI {
    variant?: "Positive" | "Negative" | "Notice" | "Primary" | "Neutral";
    size?: "Small" | "Medium" | "Large";
    showLabel?: boolean;
    showPercentage?: boolean;
    label: string;
    valuePercentage: number;
    outOf?: number;
}

const ProgressBar = forwardRef(({
    variant,
    size = "Medium",
    showLabel,
    showPercentage,
    label,
    valuePercentage = 0,
    outOf,
    ...props
}: ProgressBarI, ref: any) => {
    if (valuePercentage > 100) valuePercentage = 100;
   
    const checkSize = (): string => {
        switch (size) {
            case "Small":
                return "progress--small";
            case "Medium":
                return "progress--medium";
            case "Large":
                return "progress--large";
            default:
                return "progress--medium";
        }
    };
    const checkVarients = (): string => {
        switch (variant) {
            case "Positive":
                return "progress--possitive";
            case "Negative":
                return "progress--negative";
            case "Notice":
                return "progress--notice";
            case "Primary":
                return "progress--primary";
            case "Neutral":
                return "progress--neutral"
            default:
                return "progress--default";
        }
    };

    const progressVarent = checkVarients();
    const progressSize = checkSize();

    return (
        <div
            ref={ref}
            className={`progress ${progressVarent} ${progressSize}`}
            progress-data={outOf}
        >
            <div className="progress-inner" style={{ 'width': valuePercentage + '%' }}>
                <label className="progress-label">{label}</label>
            </div>
            <div className="progress-val">{valuePercentage + '%'}</div>

        </div>
    );
});

export default ProgressBar;
