/* eslint-disable react/no-children-prop */
import React from "react";
import { Button } from "../..";
import { ButtonI } from "../../Button/Button";
export interface CardFooterI {
  primaryAction?: ButtonI;
  secondaryAction?: ButtonI;
}

function CardFooter(Props: CardFooterI): JSX.Element | null {
  const { primaryAction, secondaryAction } = Props;
  return (
    <>
      {(primaryAction || secondaryAction) && (
        <div className={"inte-card__footer"}>
          {secondaryAction && <Button {...secondaryAction}></Button>}
          {primaryAction && <Button {...primaryAction}></Button>}
        </div>
      )}
    </>
  );
}

export default CardFooter;
