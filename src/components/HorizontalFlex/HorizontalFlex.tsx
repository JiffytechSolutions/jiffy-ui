import React from "react";
import { classnames } from "../../utilities/globalFunction";

import "./Horizontalflex.css";
import FlexItem from "../FlexItem/FlexItem";

type align = "start" | "center" | "end" | "spaceAround" | "spaceBetween" | "spaceEvenly";

type blockAlign = "start" | "center" | "end" | "baseline" | "stretch";

export interface HorizontalFlexI {
    children: JSX.Element | React.ReactNode;
    gap?: 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 24 | 28 | 32 | 36 | 40;
    wrap?: boolean;
    blockAlign?: {
        sm?: blockAlign,
        md?: blockAlign,
        lg?: blockAlign,
        xl?: blockAlign,
        xxl?: blockAlign
    };
    align?: {
        sm?: align,
        md?: align,
        lg?: align,
        xl?: align,
        xxl?: align
    };
}

const HorizontalFlex = (props: HorizontalFlexI) => {
    const { children, gap, wrap = true, align, blockAlign } = props;
    const getBlockAlignClass: any = {
        start: "blockAlign-start",
        center: "blockAlign-center",
        end: "blockAlign-end",
        baseline: "blockAlign-baseline",
        stretch: "blockAlign-stretch",
    };
    const getAlignClass: any = {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        spaceAround: "justify-around",
        spaceBetween: "justify-between",
        spaceEvenly: "justify-evenly",
    };

    const childrens: any = React.Children.toArray(children);
    const newChildrens = childrens.map((children: any, index: string) => {
        if (children.props && children.props?.__TYPE === "FlexItem") {
            return children;
        } else {
            return <FlexItem key={index}>{children}</FlexItem>;
        }
    });

    const makeAlignClass = () => {
        if (!align) return;
        let res = ""
        if (align.lg) {
            res += `${getAlignClass[align.lg]}-lg `
        }
        if (align.md) {
            res += `${getAlignClass[align.md]}-md `
        }
        if (align.sm) {
            res += `${getAlignClass[align.sm]}-sm `
        }
        if (align.xl) {
            res += `${getAlignClass[align.xl]}-xl `
        }
        if (align.xxl) {
            res += `${getAlignClass[align.xxl]}-xxl `
        }
        return res
    }

    const makeBlockAlignClass = () => {
        if (!blockAlign) return;
        let res = ""
        if (blockAlign.lg) {
            res += `${getBlockAlignClass[blockAlign.lg]}-lg `
        }
        if (blockAlign.md) {
            res += `${getBlockAlignClass[blockAlign.md]}-md `
        }
        if (blockAlign.sm) {
            res += `${getBlockAlignClass[blockAlign.sm]}-sm `
        }
        if (blockAlign.xl) {
            res += `${getBlockAlignClass[blockAlign.xl]}-xl `
        }
        if (blockAlign.xxl) {
            res += `${getBlockAlignClass[blockAlign.xxl]}-xxl `
        }
        return res
    }
    return (
        <div
            className={classnames({
                'flex-row': true,
                ["f-gap-" + gap]: gap,
                "flex-wrap": wrap,
                "flex-noWrap": !wrap,
                [makeAlignClass() as string]: align,
                [makeBlockAlignClass() as string]: blockAlign,
            })}
        >
            {newChildrens}
        </div>
    );
};

export default HorizontalFlex;