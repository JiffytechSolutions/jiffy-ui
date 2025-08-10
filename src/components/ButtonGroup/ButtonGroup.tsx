import React from "react";
import "./ButtonGroup.css";

export interface ButtonGroupI {
  segmented?: boolean;
  children: string | React.ReactNode;
}

const ButtonGroup = ({
  segmented = true,
  children,
  ...props
}: ButtonGroupI) => {

  return (
    <div className={`buttonGroup ${segmented ? "btn-segmented" : null}`}>
      {children}
    </div>
  );
}

export default ButtonGroup;