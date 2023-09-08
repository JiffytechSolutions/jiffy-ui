import React from "react";
import getClassNames from "../../../utilities/getClassnames";

const FlexChild: React.FC<FlexChildI> = ({
  children = <></>,
  desktopWidth,
  tabWidth,
  mobileWidth,
  childWidth = "none",
  customClass,
  order
}: FlexChildI) => {
  /*Case for setting desktop widths for child elements*/

  const getClassForDesktopWidth: { [key: string]: string } = {
    "100": "inte-flex__item--D100",
    "80": "inte-flex__item--D80",
    "75": "inte-flex__item--D75",
    "66": "inte-flex__item--D66",
    "50": "inte-flex__item--D50",
    "33": "inte-flex__item--D33",
    "25": "inte-flex__item--D25",
    "20": "inte-flex__item--D20"
  };

  /*Case for setting tab widths for child elements*/
  const getClassForTabWidth: { [key: string]: string } = {
    "100": "inte-flex__item--T100",
    "80": "inte-flex__item--T80",
    "75": "inte-flex__item--T75",
    "66": "inte-flex__item--T66",
    "50": "inte-flex__item--T50",
    "33": "inte-flex__item--T33",
    "25": "inte-flex__item--T25",
    "20": "inte-flex__item--T20"
  };

  /*Case for setting mobile widths for child elements*/
  const getClassForMobWidth: { [key: string]: string } = {
    "100": "inte-flex__item--M100",
    "80": "inte-flex__item--M80",
    "75": "inte-flex__item--M75",
    "66": "inte-flex__item--M66",
    "50": "inte-flex__item--M50",
    "33": "inte-flex__item--M33",
    "25": "inte-flex__item--M25",
    "20": "inte-flex__item--M20"
  };

  const getClassForChildWidth: { [key: string]: string } = {
    "fullWidth": "inte-flex__item--fill",
    "none": ""
  };

  const cwidth = childWidth && getClassForChildWidth[childWidth];
  const Dwidth = desktopWidth && getClassForDesktopWidth[desktopWidth];
  const Twidth = tabWidth && getClassForTabWidth[tabWidth]
  const Mwidth = mobileWidth && getClassForMobWidth[mobileWidth]

  return (
    <div
      className={
        getClassNames({
          "inte-flex__item": true,
          [cwidth]: childWidth,
          [Dwidth as string]: desktopWidth,
          [Twidth as string]: tabWidth,
          [Mwidth as string]: mobileWidth,
          [customClass as string]: customClass,
        })
      }
    >
      {children}
    </div>
  );
};

FlexChild.defaultProps = {
  __TYPE: "FlexChild",
};

export interface FlexChildI {
  children: JSX.Element;
  mobileWidth?: "100" | "80" | "75" | "66" | "50" | "33" | "25" | "20";
  tabWidth?: "100" | "80" | "75" | "66" | "50" | "33" | "25" | "20";
  desktopWidth?: "100" | "80" | "75" | "66" | "50" | "33" | "25" | "20";
  childWidth?: "fullWidth" | "none";
  customClass?: string,
  order?: string;
  __TYPE?: string;
}
export default FlexChild;
