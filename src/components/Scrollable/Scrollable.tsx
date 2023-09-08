import React, { useRef } from "react";
import handleShadowOnScroll from "../../utilities/handleShadowOnScroll/handleShadowOnScroll";
import getClassNames from "../../utilities/getClassnames";
import "./Scrollable.css";

const Scrollable = ({
  height = "100px",
  children,
  customClass = "",
}: ScrollableI) => {
  const scrollableRef: any = useRef(null);
  handleShadowOnScroll(scrollableRef, true);

  return (
    <div
      className={getClassNames({
        "inte-scrollable": true,
        [customClass]: customClass,
      })}
      ref={scrollableRef}
      style={{ maxHeight: height }}
      tabIndex={0}
    >
      {children}
    </div>
  );
};
export interface ScrollableI {
  children: React.ReactNode;
  height?: string;
  customClass?: string;
}
export default Scrollable;
