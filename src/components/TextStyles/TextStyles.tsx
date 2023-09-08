import React from "react";
import "./TextStyles.css";

const TextStyles: React.FC<TextStylesI> = ({
  children = "",
  type = "Paragraph",
  textcolor = "dark",
  alignment = "left",
  utility = "none",
  fontweight = "normal",
  paragraphTypes = "MD-1.4",
  headingTypes,
  subheadingTypes,
  displayTypes,
  lineHeight,
}: TextStylesI): JSX.Element => {
  const checkType = (type: string) => {
    switch (type) {
      case "Heading":
        return "Heading";
      case "SubHeading":
        return "SubHeading";
      case "Paragraph":
        return "Paragraph";
      case "Display":
        return "Display";

      default:
        return "inte__text";
    }
  };
  const checkAlignment = (alignment: string) => {
    switch (alignment) {
      case "center":
        return "inte-Align--center";
      case "right":
        return "inte-Align--right";
      default:
        return "";
    }
  };
  const checkTextColor = (textcolor: string) => {
    switch (textcolor) {
      case "dark":
        return "inte__text--dark";
      case "light":
        return "inte__text--light";
      case "positive":
        return "inte__text--positive";
      case "negative":
        return "inte__text--negative";
      case "primary":
        return "inte__text--primary";
      default:
        return "";
    }
  };

  const checkFontWeight = (fontweight: string) => {
    switch (fontweight) {
      case "light":
        return "inte__font--light";
      case "normal":
        return "inte__font--normal";
      case "bold":
        return "inte__font--bold";
      case "extraBold":
        return "inte__font--extraBold";
      case "extraBolder":
        return "inte__font--extraBolder";
      default:
        return "";
    }
  };
  const checkUtility = (utility: string) => {
    return utility ? utility : "";
  };
  // Typography
  const checkHeading = () => {
    switch (headingTypes) {
      case "LG-2.8":
        return "inte__Heading-font--xxl";
      case "MD-2.7":
        return "inte__Heading-font--xl";
      default:
        return "";
    }
  };
  const checkSubHeading = () => {
    switch (subheadingTypes) {
      case "LG-2.5":
        return "inte__SubHeading-font--large";
      case "MD-2.2":
        return "inte__SubHeading-font--medium";
      case "SM-1.8":
        return "inte__SubHeading-font--small";
      case "XS-1.6":
        return "inte__SubHeading-font--extraSmall";
      default:
        return "";
    }
  };
  const checkParagraph = () => {
    switch (paragraphTypes) {
      case "LG-1.5":
        return "inte__Paragraph--font--large";
      case "MD-1.4":
        return "inte__Paragraph--font--medium";
      case "SM-1.3":
        return "inte__Paragraph--font--small";
      case "XS-1.2":
        return "inte__Paragraph--font--extraSmall";
      default:
        return "";
    }
  };

  const checkDisplay = () => {
    switch (displayTypes) {
      case "XL-4.3":
        return "inte__Display--font--extraLarge";
      case "LG-3.8":
        return "inte__Display-font--large";
      case "MD-3.6":
        return "inte__Display-font--medium";
      case "SM-3.4":
        return "inte__Display-font--small";
      case "XS-3.2":
        return "inte__Display-font--extraSmall";

      default:
        return "";
    }
  };

  const checkLineHeight = () => {
    switch (lineHeight) {
      case "LH-1.4":
        return "inte__LineHeight--0-5";
      case "LH-1.6":
        return "inte__LineHeight--1";
      case "LH-2.0":
        return "inte__LineHeight--2";
      case "LH-2.4":
        return "inte__LineHeight--3";
      case "LH-2.8":
        return "inte__LineHeight--4";
      case "LH-3.2":
        return "inte__LineHeight--5";
      case "LH-3.6":
        return "inte__LineHeight--6";
      case "LH-4.0":
        return "inte__LineHeight--7";
      case "LH-4.4":
        return "inte__LineHeight--8";
      case "LH-4.8":
        return "inte__LineHeight--9";
      default:
        return "";
    }
  };
  const Heading = checkHeading();
  const paras = checkParagraph();
  const SubHeading = checkSubHeading();
  const displays = checkDisplay();
  const lineheight = checkLineHeight();

  const types = checkType(type);
  const alignments = checkAlignment(alignment);
  const utility1 = checkUtility(utility);
  const textColors = checkTextColor(textcolor);
  const fontWeight = checkFontWeight(fontweight);

  return (
    <>
      {type == "Paragraph" ? (
        <p
          className={`${types} ${alignments} ${textColors} ${utility1} ${fontWeight} ${paras} ${lineheight} `.replace(/\s\s+/g, ' ').trim()}
        >
          {children}
        </p>
      ) : type == "SubHeading" ? (
        <h3
          className={`${types} ${alignments} ${textColors} ${utility1} ${fontWeight} ${SubHeading} ${lineheight}`.replace(/\s\s+/g, ' ').trim()}
        >
          {children}
        </h3>
      ) : type == "Heading" ? (
        <h1
          className={`${types} ${alignments} ${textColors} ${utility1} ${fontWeight} ${Heading} ${lineheight}`.replace(/\s\s+/g, ' ').trim()}
        >
          {children}
        </h1>
      ) : type == "Display" ? (
        <span
          className={`${types} ${alignments} ${textColors} ${utility1} ${fontWeight} ${displays} ${lineheight} `.replace(/\s\s+/g, ' ').trim()}
        >
          {children}
        </span>
      ) : (
        <h3
          className={`${types} ${alignments} ${textColors} ${utility1} ${fontWeight} ${lineheight}`.replace(/\s\s+/g, ' ').trim()}
        >
          {children}
        </h3>
      )}
    </>
  );
};

export interface TextStylesI {
  children?: string | React.ReactNode;
  type?: "Heading" | "SubHeading" | "Paragraph" | "Display";
  headingTypes?: "LG-2.8" | "MD-2.7";
  subheadingTypes?: "LG-2.5" | "MD-2.2" | "SM-1.8" | "XS-1.6";
  paragraphTypes?: "LG-1.5" | "MD-1.4" | "SM-1.3" | "XS-1.2";
  displayTypes?: "XL-4.3" | "LG-3.8" | "MD-3.6" | "SM-3.4" | "XS-3.2";
  lineHeight?:
  | "LH-1.4"
  | "LH-1.6"
  | "LH-2.0"
  | "LH-2.4"
  | "LH-2.8"
  | "LH-3.2"
  | "LH-3.6"
  | "LH-4.0"
  | "LH-4.4"
  | "LH-4.8";
  textcolor?: "dark" | "light" | "positive" | "negative";
  fontweight?: "light" | "normal" | "bold" | "extraBold" | "extraBolder";
  alignment?: "left" | "right" | "center" | "none";
  utility?: string;
}

export default TextStyles;
