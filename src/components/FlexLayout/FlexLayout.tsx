/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import FlexChild from "./components/FlexChild";
import getClassNames from "../../utilities/getClassnames";

const FlexLayout: React.FC<FlexLayoutI> = ({
  valign = "none",
  valignTab = "none",
  valignMob = "none",
  halign = "none",
  halignTab = "none",
  halignMob = "none",
  spacing = "extraTight",
  direction = "horizontal",
  directionTab = "none",
  directionMob = "none",
  wrap = "noWrap",
  wrapTab = "none",
  wrapMob = "none",
  children = <></>,
  childWidth = "none",
  tabWidth,
  desktopWidth,
  mobileWidth,
  customClass,

}: FlexLayoutI) => {

  const getClassForVAlign: { [key: string]: string } = {
    end: "inte-flex--alignEnd",
    start: "inte-flex--alignStart",
    center: "inte-flex--alignCenter",
    stretch: "inte-flex--alignStretch",
    baseline: "inte-flex--alignBaseline",
    none: ""
  };

  const getClassForVAlignTab: { [key: string]: string } = {
    end: "inte-flex--alignEndTab",
    start: "inte-flex--alignStartTab",
    center: "inte-flex--alignCenterTab",
    stretch: "inte-flex--alignStretchTab",
    baseline: "inte-flex--alignBaselineTab",
    none: ""
  };

  const getClassForVAlignMob: { [key: string]: string } = {
    end: "inte-flex--alignEndMob",
    start: "inte-flex--alignStartMob",
    center: "inte-flex--alignCenterMob",
    stretch: "inte-flex--alignStretchMob",
    baseline: "inte-flex--alignBaselineMob",
    none: ""
  };


  const getClassForHAlign: { [key: string]: string } = {
    start: "inte-flex--distributeStart",
    center: "inte-flex--distributeCenter",
    end: "inte-flex--distributeEnd",
    fill: "inte-flex--distributeSpaceBetween",
    around: "inte-flex--distributeSpaceAround",
    evenly: "inte-flex--distributeSpaceEvenly",
    none: ""
  };

  const getClassForHAlignTab: { [key: string]: string } = {
    start: "inte-flex--distributeStartTab",
    center: "inte-flex--distributeCenterTab",
    end: "inte-flex--distributeEndTab",
    fill: "inte-flex--distributeSpaceBetweenTab",
    around: "inte-flex--distributeSpaceAroundTab",
    evenly: "inte-flex--distributeSpaceEvenlyTab",
    none: ""
  };

  const getClassForHAlignMob: { [key: string]: string } = {
    start: "inte-flex--distributeStartMob",
    center: "inte-flex--distributeCenterMob",
    end: "inte-flex--distributeEndMob",
    fill: "inte-flex--distributeSpaceBetweenMob",
    around: "inte-flex--distributeSpaceAroundMob",
    evenly: "inte-flex--distributeSpaceEvenlyMob",
    none: ""
  };

  const getClassForDirection: { [key: string]: string } = {
    horizontal: "inte-flex--horizontal",
    "horizontal-reverse": "inte-flex--horizontalReverse",
    vertical: "inte-flex--vertical",
    "vertical-reverse": "inte-flex--verticalReverse",
    "row-reverse": "inte-flex--rowReverse"
  };

  const getClassForDirectionTab: { [key: string]: string } = {
    horizontal: "inte-flex--horizontalTab",
    "horizontal-reverse": "inte-flex--horizontalReverseTab",
    vertical: "inte-flex--verticalTab",
    "vertical-reverse": "inte-flex--verticalReverseTab",
    "row-reverse": "inte-flex--rowReverseTab"
  };

  const getClassForDirectionMob: { [key: string]: string } = {
    horizontal: "inte-flex--horizontalMob",
    "horizontal-reverse": "inte-flex--horizontalReverseMob",
    vertical: "inte-flex--verticalMob",
    "vertical-reverse": "inte-flex--verticalReverseMob",
    "row-reverse": "inte-flex--rowReverseMob"
  };

  const getClassForSpacing: { [key: string]: string } = {
    extraTight: "inte-flex--spacingExtraTight",
    mediumTight: "inte-flex--spacingMediumTight",
    tight: "inte-flex--spacingTight",
    loose: "inte-flex--spacingLoose",
    mediumLoose: "inte-flex--spacingMediumLoose",
    extraLoose: "inte-flex--spacingExtraLoose",
    none: ""
  };

  const getClassForWrap: { [key: string]: string } = {
    wrap: "inte-flex--wrap",
    noWrap: "inte-flex--noWrap",
    none: ""
  };

  const getClassForWrapTab: { [key: string]: string } = {
    wrap: "inte-flex--wrapTab",
    noWrap: "inte-flex--noWrapTab",
    none: ""
  };

  const getClassForWrapMob: { [key: string]: string } = {
    wrap: "inte-flex--wrapMob",
    noWrap: "inte-flex--noWrapMob",
    none: ""
  };

  /*Case for setting desktop widths for child elements*/
  const getClassForDesktopWidth: { [key: string]: string } = {
    "100": "inte-flex--D100",
    "80": "inte-flex--D80",
    "75": "inte-flex--D75",
    "66": "inte-flex--D66",
    "50": "inte-flex--D50",
    "33": "inte-flex--D33",
    "25": "inte-flex--D25",
    "20": "inte-flex--D20"
  };

  /*Case for setting tab widths for child elements*/
  const getClassForTabWidth: { [key: string]: string } = {
    "100": "inte-flex--T100",
    "80": "inte-flex--T80",
    "75": "inte-flex--T75",
    "66": "inte-flex--T66",
    "50": "inte-flex--T50",
    "33": "inte-flex--T33",
    "25": "inte-flex--T25",
    "20": "inte-flex--T20"
  };

  /*Case for setting mobile widths for child elements*/
  const getClassForMobWidth: { [key: string]: string } = {
    "100": "inte-flex--M100",
    "80": "inte-flex--M80",
    "75": "inte-flex--M75",
    "66": "inte-flex--M66",
    "50": "inte-flex--M50",
    "33": "inte-flex--M33",
    "25": "inte-flex--M25",
    "20": "inte-flex--M20"
  };

  const getClassForChildWidth: { [key: string]: string } = {
    fullWidth: "inte-flex--fill",
    none: ""
  };
  const VAlign = valign && getClassForVAlign[valign];
  const VAlignTab = valignTab && getClassForVAlignTab[valignTab];
  const VAlignMob = valignMob && getClassForVAlignMob[valignMob];

  const HAlign = halign && getClassForHAlign[halign];
  const HAlignTab = halignTab && getClassForHAlignTab[halignTab];
  const HAlignMob = halignMob && getClassForHAlignMob[halignMob];

  const Direction = direction && getClassForDirection[direction];
  const DirectionTab = directionTab && getClassForDirectionTab[directionTab];
  const DirectionMob = directionMob && getClassForDirectionMob[directionMob];

  const Wrap = wrap && getClassForWrap[wrap];
  const WrapTab = wrapTab && getClassForWrapTab[wrapTab];
  const WrapMob = wrapMob && getClassForWrapMob[wrapMob];

  const Spacing = spacing && getClassForSpacing[spacing];
  const Fill = childWidth && getClassForChildWidth[childWidth];
  const Dwidth = desktopWidth && getClassForDesktopWidth[desktopWidth];
  const Twidth = tabWidth && getClassForTabWidth[tabWidth];
  const Mwidth = mobileWidth && getClassForMobWidth[mobileWidth];

  const childrens: any = React.Children.toArray(children);
  const newChildrens = childrens.map((children: any, index: string) => {
    if (children.props && children.props?.__TYPE === "FlexChild") {
      return children;
    } else {
      return <FlexChild key={index}>{children}</FlexChild>;
    }
  });

  return (
    <div
      className={getClassNames({
        "inte-flex": true,
        [Wrap]: wrap,
        [WrapTab]: wrapTab,
        [WrapMob]: wrapMob,
        [VAlign]: valign,
        [VAlignMob]: valignMob,
        [VAlignTab]: valignTab,
        [HAlign]: halign,
        [HAlignTab]: halignTab,
        [HAlignMob]: halignMob,
        [Spacing]: spacing,
        [Direction]: direction,
        [DirectionTab]: directionTab,
        [DirectionMob]: directionMob,
        [Fill]: childWidth,
        [Dwidth as string]: desktopWidth,
        [Twidth as string]: tabWidth,
        [Mwidth as string]: mobileWidth,
        [customClass as string]: customClass,
      })}
    >
      {newChildrens}
    </div>
  );
};

export interface FlexLayoutI {
  valign?: "start" | "center" | "end" | "stretch" | "baseline" | "none";
  valignTab?: "start" | "center" | "end" | "stretch" | "baseline" | "none";
  valignMob?: "start" | "center" | "end" | "stretch" | "baseline" | "none";
  halign?: "start" | "center" | "end" | "fill" | "around" | "evenly" | "none";
  halignTab?:
  | "start"
  | "center"
  | "end"
  | "fill"
  | "around"
  | "evenly"
  | "none";
  halignMob?:
  | "start"
  | "center"
  | "end"
  | "fill"
  | "around"
  | "evenly"
  | "none";
  spacing?:
  | "none"
  | "tight"
  | "mediumTight"
  | "extraTight"
  | "loose"
  | "mediumLoose"
  | "extraLoose";
  direction?:
  | "horizontal"
  | "horizontal-reverse"
  | "vertical"
  | "vertical-reverse"
  | "row-reverse"
  | "none";
  directionTab?:
  | "horizontal"
  | "horizontal-reverse"
  | "vertical"
  | "vertical-reverse"
  | "row-reverse"
  | "none";
  directionMob?:
  | "horizontal"
  | "horizontal-reverse"
  | "vertical"
  | "vertical-reverse"
  | "row-reverse"
  | "none";
  wrap?: "wrap" | "noWrap" | "none";
  wrapTab?: "wrap" | "noWrap" | "none";
  wrapMob?: "wrap" | "noWrap" | "none";
  children?: JSX.Element | React.ReactNode;
  childWidth?: "fullWidth" | "none";
  mobileWidth?: "100" | "80" | "75" | "66" | "50" | "33" | "25" | "20";
  tabWidth?: "100" | "80" | "75" | "66" | "50" | "33" | "25" | "20";
  desktopWidth?: "100" | "80" | "75" | "66" | "50" | "33" | "25" | "20";
  customClass?: string,
}

export default FlexLayout;