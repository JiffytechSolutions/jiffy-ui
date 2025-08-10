import React from "react";
import './TextStyle.css';
// import '../../style.css';

export interface TextStyleI {
    as: 'dt' | 'dd' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong' | 'legend' | "label";
    type?: 'XsHeading' | "SmHeading" | "MdHeading" | 'LgHeading' | 'XlHeading' | "2XlHeading" | "XsBody" | "SmBody" | "MdBody" | 'LgBody';
    alignment?: 'Start' | 'Center' | 'End' | 'Justify'

    children?: string | React.ReactNode;
    textColor?: 'Dark' | 'Primary' | 'Secondary' | 'Disabled' | 'Possitve' | 'Negative' | 'Waiting' | 'Invert';
    fontWeight?: 'Light' | 'Regular' | 'Medium' | 'Bold';
    textStyle?: 'Italic' | 'None';
    textDecoration?: 'UnderLine' | 'lineThrough' | 'None';
}

const TextStyle = ({ type, as, textStyle, textDecoration, fontWeight, alignment, children = "Demo text", textColor, ...props }: TextStyleI) => {

    const getColor = () => {
        switch (textColor) {
            case "Dark":
                return "pixel-text__dark";
            case "Primary":
                return "pixel-text__primary";
            case "Secondary":
                return "pixel-text__secondary";
            case "Disabled":
                return "pixel-text__disabled";
            case "Invert":
                return "pixel-text__invert";
            case "Possitve":
                return "pixel-text__possitive";
            case "Negative":
                return "pixel-text_negative";
            case "Waiting":
                return "pixel-text__waiting";

            default:
                return "";
        }
    }
    const getType = () => {
        switch (type) {
            case "XsHeading":
                return "pixel-Text--XsHeading";
            case "SmHeading":
                return "pixel-Text--SmHeading";
            case "MdHeading":
                return "pixel-Text--MdHeading";
            case "LgHeading":
                return "pixel-Text--LgHeading";
            case "XlHeading":
                return "pixel-Text--XlHeading";
            case "2XlHeading":
                return "pixel-Text--2XlHeading";
            case "XsBody":
                return "pixel-Text--xsBody";
            case "SmBody":
                return "pixel-Text--SmBody";
            case "MdBody":
                return "pixel-Text--MdBody";
            case "LgBody":
                return "pixel-Text--LgBody";
            default:
                return "";
        }
    }
    const getAlignment = () => {
        switch (alignment) {
            case "Start":
                return "pixel-Text--alignLeft";
            case "Center":
                return "pixel-Text--alignCenter";
            case "End":
                return "pixel-Text--alignRight";
            case "Justify":
                return "pixel-Text--alignJustify";
            default:
                return "";
        }
    }
    const getFontWeight = () => {
        switch (fontWeight) {
            case "Light":
                return "pixel-Text-light"
            case "Regular":
                return "pixel-Text-regular"
            case "Medium":
                return "pixel-Text-medium"
            case "Bold":
                return "pixel-Text-bold"
            default:
                return ""

        }
    }
    const getTextStyle = () => {
        switch (textStyle) {
            case "Italic":
                return "pixel-Text-italic"
            default:
                return ""
        }
    }
    const getTextDecoration = () => {
        switch (textDecoration) {
            case "UnderLine":
                return "pixel-Text-underline";
            case "lineThrough":
                return "pixel-Text-linethrough";
            default:
                return ""
        }
    }
    const decoration = getTextDecoration();
    const style = getTextStyle()
    const color = getColor();
    const textAlignment = getAlignment();
    const textType = getType();
    const waight = getFontWeight();

    return (

        <>
            {as === "dt" ? (
                <dt className={`pixel-Text--root ${decoration} ${style} ${color} ${textAlignment} ${textType} ${waight}`}>{children}</dt>
            ) : as === "dd" ? (
                <dd className={`pixel-Text--root ${decoration} ${style} ${color} ${textAlignment} ${textType} ${waight}`}>{children}</dd>
            ) : as === "h1" ? (
                <h1 className={`pixel-Text--root ${decoration} ${style} ${color} ${textAlignment} ${textType} ${waight}`}>{children}</h1>
            ) : as === "h2" ? (
                <h2 className={`pixel-Text--root ${decoration} ${style} ${color} ${textAlignment} ${textType} ${waight}`}>{children}</h2>
            ) : as === "h3" ? (
                <h3 className={`pixel-Text--root ${decoration} ${style} ${color} ${textAlignment} ${textType} ${waight}`}>{children}</h3>
            ) : as === "h4" ? (
                <h4 className={`pixel-Text--root ${decoration} ${style} ${color} ${textAlignment} ${textType} ${waight}`}>{children}</h4>
            ) : as === "h5" ? (
                <h5 className={`pixel-Text--root ${decoration} ${style} ${color} ${textAlignment} ${textType} ${waight}`}>{children}</h5>
            ) : as === "h6" ? (
                <h6 className={`pixel-Text--root ${decoration} ${style} ${color} ${textAlignment} ${textType} ${waight}`}>{children}</h6>
            ) : as === "p" ? (
                <p className={`pixel-Text--root ${decoration} ${style} ${color} ${textAlignment} ${textType} ${waight}`}>{children}</p>
            ) : as === "span" ? (
                <span className={`pixel-Text--root ${decoration} ${style} ${decoration} ${style} ${color} ${textAlignment} ${textType} ${waight}`}>{children}</span>
            ) : as === "strong" ? (
                <strong className={`pixel-Text--root ${decoration} ${style} ${color} ${textAlignment} ${textType} ${waight}`}>{children}</strong>
            ) : as === "legend" ? (
                <legend className={`pixel-Text--root ${decoration} ${style} ${color} ${textAlignment} ${textType} ${waight}`}>{children}</legend>
            ) : (
                <span className={`pixel-Text--root ${decoration} ${style} ${color} ${textAlignment} ${textType} ${waight}`}>{children}</span>
            )}
        </>
    )
};

export default TextStyle;