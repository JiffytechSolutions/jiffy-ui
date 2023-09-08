import React, { FC } from "react";
import { Card } from "../Card";
import "./LRLayout.css";

const LRLayout: FC<LRlayoutI> = ({
  title,
  required,
  lrHelpText,
  children,
  ...props
}: LRlayoutI) => {
  return (
    <div className={`inte__lr-Layout `}>
      <div className={"inte__l-Layout"}>
        <div className="inte__l-Layout--Content">
          <h3 className={"inte__l-title"}>
            {title}
            {required ? (
              <span className="ml-5" style={{ color: "red" }}>
                *
              </span>
            ) : null}
          </h3>
          {lrHelpText && (
            <>
              {typeof lrHelpText == "string" ? (
                <h4 className={"inte__l-titleHelp"}>{lrHelpText}</h4>
              ) : (
                <>{lrHelpText}</>
              )}
            </>
          ) }
        </div>
      </div>
      <div className={"inte__r-Layout"}>
        <Card title={props.cardTitle} action={props.cardAction}>{children}</Card>
      </div>
    </div>
  );
};
export interface LRlayoutI {
  title: string | React.ReactNode;
  cardAction?:  React.ReactNode;
  cardTitle?: string;
  children: string | React.ReactNode;
  lrHelpText?: string | React.ReactNode;
  required?: boolean;
}

export default LRLayout;
