import React from "react";
import getClassNames from "../../utilities/getClassnames";
import "./Text.css";

const Text: React.FC<TextI> = ({
  children,
  type = "T-8",
  textcolor = "default",
  alignment,
  customClass,
  truncate,
  wordBreak,
  fontweight,
  as = "p",
  textDecoration,
}: TextI): JSX.Element => {
  const checkType: { [key: string]: string } = {
    "T-1": "inte-text--T1", // 40|58
    "T-2": "inte-text--T2", // 38|48
    "T-3": "inte-text--T3", // 32|44
    "T-4": "inte-text--T4", // 24|36
    "T-5": "inte-text--T5", // 28|28
    "T-6": "inte-text--T6", // 18|24
    "T-7": "inte-text--T7", // 16|22
    "T-8": "inte-text--T8", // 14|20
    "T-9": "inte-text--T9", // 13|20
    "T-10": "inte-text--T10", // 12|28
  };
  const checkAlignment: { [key: string]: string } = {
    center: "inte-text--alignCenter",
    right: "inte-text--alignRight",
    left: "inte-text--alignLeft",
  };
  const checkBreakWord: { [key: string]: string } = {
    breakWord: "inte-text--breakWord",
    breakAll: "inte-text--breakAll",
    keepAll: "inte-text--keepAll",
    normal: "inte-text--normal",
  };
  const checkTextColor: { [key: string]: string } = {
    default: "inte-text--default",
    secondary: "inte-text--secondary",
    subdued: "inte-text--subdued",
    disabled: "inte-text--disabled",
    negative: "inte-text--negative",
    success: "inte-text--success",
    primary: "inte-text--primary",
    warning: "inte-text--warning",
  };
  const checkFontWeight: { [key: string]: string } = {
    normal: "inte-text--fontNormal",
    bold: "inte-text--fontBold",
    bolder: "inte-text--fontBolder",
  };
  const checkFontDecoration: { [key: string]: string } = {
    underLine: "inte-text--underLine",
    lineThrough: "inte-text--lineThrough",
  };
  const types = type && checkType[type];
  const alignments = alignment && checkAlignment[alignment];
  const textColors = textcolor && checkTextColor[textcolor];
  const fontWeight = fontweight && checkFontWeight[fontweight];
  const breakWord = wordBreak && checkBreakWord[wordBreak];
  const lineDesign = textDecoration && checkFontDecoration[textDecoration];
  const checkValidTag = new Set([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "span",
    "label",
    "em",
    "strong",
  ]);
  // The tag name which we provide in as , will be stored here
  const ElementTag = checkValidTag.has(as) ? as : "p";
  return (
    <ElementTag
      style={{ WebkitLineClamp: truncate }}
      className={getClassNames({
        [types]: type,
        [alignments as string]: alignment,
        [textColors]: textcolor,
        [fontWeight as string]: fontWeight,
        "inte-text--truncate": truncate,
        [breakWord as string]: wordBreak,
        [customClass as string]: customClass,
        [lineDesign as string]: textDecoration,
      })}
    >
      {children}
    </ElementTag>
  );
};
export interface TextI {
  children?: string | React.ReactNode;
  truncate?: number;
  customClass?: string;
  textDecoration?: "underLine" | "lineThrough";
  wordBreak?: "breakWord" | "breakAll" | "keepAll" | "normal";
  type?:
    | "T-1"
    | "T-2"
    | "T-3"
    | "T-4"
    | "T-5"
    | "T-6"
    | "T-7"
    | "T-8"
    | "T-9"
    | "T-10";
  textcolor?:
    | "default"
    | "secondary"
    | "subdued"
    | "disabled"
    | "negative"
    | "success"
    | "primary"
    | "warning";
  fontweight?: "normal" | "bold" | "bolder";
  alignment?: "left" | "right" | "center";
  as?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span"
    | "label"
    | "em"
    | "strong";
}
export default Text;
