import React, { FC } from "react";
import getClassNames from "../../utilities/getClassnames";
import "./Separator.css";

export interface SeparatorI {
  type?: "solid" | "dotted" | "dashed";
  customClass?: string;
  text?: string;
}

const Separator: FC<SeparatorI> = ({
  type = "solid",
  customClass = "",
  text,
}: SeparatorI) => {
  const borderTypes = {
    dashed: "inte-separator--dashed",
    dotted: "inte-separator--dotted",
    solid: "inte-separator--solid",
  };
  const textDivider = {
    dashed: "inte-separator__text--dashed",
    dotted: "inte-separator__text--dotted",
    solid: "inte-separator__text--solid",
  };
  const typess = borderTypes[type];
  const textDividerSep = textDivider[type];

  return (
    <div
      className={getClassNames({
        "inte-separator": true,
        "inte-separator__textDivider": text,
        [textDividerSep]: text,
        [typess]: !text,
        [customClass]: customClass,
      })}
    >
      {text}
    </div>
  );
};

export default Separator;
