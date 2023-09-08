/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import { CardHeader, CardFooter } from ".";
import { CardFooterI } from "./component/CardFooter";
import { CardHeaderI } from "./component/CardHeader";
import getClassNames from "../../utilities/getClassnames";

const Card: FC<CardI> = ({
  children,
  cardType = "bordered",
  customClass = "",
  media = "",
  spacing = 'tight',
  ...Props
}: CardI): JSX.Element => {
  // card variants
  const getCardType: { [key: string]: string } = {
    borderLess: "inte-card--borderless",
    bordered: "inte-card--bordered",
    filled: "inte-card--filled",
    shadowed: "inte-card--shadowed",
  };

  //spacing code
  const getCardSpacing: { [key: string]: string } = {
    loose: "inte-card--loose",
    tight: "inte-card--tight",
  };
  const cardTypeCss = cardType && getCardType[cardType];
  const cardSpacing = spacing && getCardSpacing[spacing];

  return (
    <div
      onClick={Props.onClick}
      className={getClassNames({
        "inte-card": true,
        "inte-card__interactive": Props.onClick,
        [cardTypeCss]: cardTypeCss,
        [customClass]: customClass,
        [cardSpacing]: cardSpacing,
        "inte-card--hasMedia": media
      })}
    >
      {(Props.title || Props.subTitle || Props.action || Props.avatar) && <CardHeader {...Props} />}
      {media && <div className={`inte-card__media`}>
        <img width={"100%"} height={"100%"} alt="Card Media" src={media} />
      </div>}
      <div className={"inte-card__body"}>
        <div className={"inte__cardContent"}>{children}</div>
      </div>
      <CardFooter {...Props} />

    </div>
  );
};
export interface CardI extends CardFooterI, CardHeaderI {
  children: React.ReactNode;
  cardType?: "borderLess" | "bordered" | "filled" | "shadowed";
  spacing?: "loose" | "tight"
  customClass?: string;
  media?: string;
  onClick?: any
}

export default Card;
