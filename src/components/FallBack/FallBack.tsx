import { Card } from "../Card";
import { FlexLayout } from "../FlexLayout";
import Text from "../Text/Text";
import React, { FC } from "react";
import "./FallBack.css";

export interface FallBackI {
  illustration?: string | React.ReactNode;
  title?: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
  action?: React.ReactNode;
  customClass?: string;
  FallBackHeight?: "FullPage" | "NormalPage";
  buttonText?: string;
}

export const FallBack = ({
  customClass="",
  FallBackHeight = "NormalPage",
  ...props
}: FallBackI) => {
  return (
    <div className={`inte-Fallback ${customClass}`}>
      <div className="inte-Fallback--inner">
        <Card>
          <div className={`inte-Fallback--${FallBackHeight}`}>
            <div className="inte-Fallback--inner">
              <FlexLayout
                direction="vertical"
                spacing="extraTight"
                halign="center"
              >
                <div className="inte-Fallback--illustration">
                  {props.illustration}
                </div>
                {props.title && (
                    <Text
                      alignment="center"
                      fontweight="bolder"
                      textcolor="default"
                      customClass="none"
                      type="T-7"
                      as="h5"
                      >
                      {props.title}
                    </Text>
                )}
                {props.subTitle && (
                    <Text
                      alignment="center"
                      fontweight="normal"
                      type="T-8"
                      textcolor="secondary"
                      as="p"
                      customClass="none"
                    >
                      {props.subTitle}
                    </Text>
                )}
                {props.action && (
                  <div className="inte-Fallback--action">
                    <FlexLayout halign="center">{props.action}</FlexLayout>
                  </div>
                )}
              </FlexLayout>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FallBack;
