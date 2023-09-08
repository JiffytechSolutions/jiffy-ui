import React, { FC } from "react";
import getClassNames from "../../utilities/getClassnames";
import "./Seprator.css";
export interface SeparatorI {
  type?: "solid" | "dotted" | "dashed";
  customClass?: string;
  text?: string;
}

const Seprator: FC<SeparatorI> = ({
  type = "solid",
  customClass = "",
  text,
}: SeparatorI) => {
  const borderTypes = {
    dashed: "inte-seprator--dashed",
    dotted: "inte-seprator--dotted",
    solid: "inte-seprator--solid",
  };
  const textDivider = {
    dashed: "inte-seprator__text--dashed",
    dotted: "inte-seprator__text--dotted",
    solid: "inte-seprator__text--solid",
  };
  const typess = borderTypes[type];
  const textDividerSep = textDivider[type];

  return (
    <div
      className={getClassNames({
        "inte-seprator": true,
        "inte-seprator__textDivider": text,
        [textDividerSep]: text,
        [typess]: !text,
        [customClass]: customClass,
      })}
    >
      {text}
    </div>
  );
};

export default Seprator;
