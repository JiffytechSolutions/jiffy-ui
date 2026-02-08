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
                return "jf-progress--small";
            case "Medium":
                return "jf-progress--medium";
            case "Large":
                return "jf-progress--large";
            default:
                return "jf-progress--medium";
        }
    };
    const checkVarients = (): string => {
        switch (variant) {
            case "Positive":
                return "jf-progress--possitive";
            case "Negative":
                return "jf-progress--negative";
            case "Notice":
                return "jf-progress--notice";
            case "Primary":
                return "jf-progress--primary";
            case "Neutral":
                return "jf-progress--neutral"
            default:
                return "jf-progress--default";
        }
    };

    const progressVarent = checkVarients();
    const progressSize = checkSize();

    return (
        <div
            ref={ref}
            className={`jf-progress ${progressVarent} ${progressSize}`}
            progress-data={outOf}
        >
            <div className="jf-progress-inner" style={{ 'width': valuePercentage + '%' }}>
                <label className="jf-progress-label">{label}</label>
            </div>
            <div className="jf-progress-val">{valuePercentage + '%'}</div>

        </div>
    );
});

export default ProgressBar;
