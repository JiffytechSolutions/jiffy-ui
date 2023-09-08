/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import TextStyles from "../TextStyles/TextStyles";
import "./Onboard.css";
import Lottie from "lottie-react";
import Welcome from "../../Lottie/Welcome.json";

const Onboard: React.FC<OnboardI> = ({ title }: OnboardI) => {
  return (
    <div className="init-Onboard__Wrapper">
      <Lottie
        className="init-Onboard__Image"
        loop={false}
        animationData={Welcome}
        style={{ width: 90, height: 90 }}
      />
      <TextStyles type="SubHeading" fontweight="bold">{title}</TextStyles>
    </div>
  );
};
export interface OnboardI {
  title?: string;
}
export default Onboard;
