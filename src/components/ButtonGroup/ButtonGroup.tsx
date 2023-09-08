import React from "react";
import "./ButtonGroup.css";
import getClassNames from "../../utilities/getClassnames";

const ButtonGroup: React.FC<ButtonGroupI> = ({
  segmented = false,
  children,
}: ButtonGroupI) => {
  return (
    <div
      className={getClassNames({
        "inte-buttonGroup": true,
        "inte-buttonGroup--segmented": segmented
      })}
    >
      {children}
    </div>
  );
};

export interface ButtonGroupI {
  segmented?: boolean;
  children?: JSX.Element | React.ReactNode;
}

export default ButtonGroup;
