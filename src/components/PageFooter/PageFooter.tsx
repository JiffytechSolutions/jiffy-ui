import React from "react";
import getClassNames from "../../utilities/getClassnames";
import "./PageFooter.css";
const PageFooter = ({ children, customClass = "" }: PageFooterI) => {
  return (
    <footer
      className={getClassNames({
        "inte-pageFooter": true,
        [customClass]: customClass,
      })}
    >
      {children}
    </footer>
  );
};
export interface PageFooterI {
  children: React.ReactNode | string;
  customClass?: string;
}
export default PageFooter;
