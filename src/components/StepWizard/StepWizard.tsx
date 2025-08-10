import React, { useEffect, useState } from "react";
import "./StepWizard.css";
import getClassNames from "./getClassnames";
import { Check, Clock } from "react-feather";

export interface StepI {
  label: string | React.ReactNode;
  value: any;
  description?: string | React.ReactNode;
}
export interface StepWizardI {
  currentStep: number;
  steps: StepI[];
  direction?: "horizontal" | "vertical";
  type?: "icon" | "number";
  customClass?: string;
  onChange?: (newStep: number, step: StepI) => void;
}

const StepWizard = ({
  currentStep,
  steps,
  direction = "horizontal",
  type = "icon",
  customClass,
  onChange = () => { },
}: StepWizardI) => {
  const [isMobile, setIsMobile] = useState(false);
  currentStep =
    currentStep > steps.length
      ? steps.length + 1
      : currentStep < 1
        ? 1
        : currentStep;
  useEffect(() => {
    const sizeChecker = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else setIsMobile(false);
    };
    sizeChecker();
    window.addEventListener("resize", sizeChecker, true);
    return () => {
      window.removeEventListener("resize", sizeChecker, true);
    };
  }, []);

  const handelStepClick = (newStep: number, step: StepI) => {
    onChange(newStep, step);
  };

  const forDesktop = (
    <ul
      className={getClassNames({
        stepWizard: true,
        [`stepWizard--${direction}`]: direction,
        [customClass ?? ""]: customClass,
      })}
    >
      {steps.map((item: StepI, ind: number) => {
        let t =
          currentStep === ind + 1
            ? `stepWizard__step--process`
            : currentStep > ind + 1
              ? "stepWizard__step--finish"
              : "stepWizard__step--wait";
        return (
          <li
            key={ind}
            className={`stepWizard__step ${t}`}
            style={{
              flex:
                direction === "horizontal"
                  ? `0 0 calc(100% / ${steps.length})`
                  : "0 0 100%",
            }}
            onClick={() => handelStepClick(ind + 1, item)}
          >
            <div
              style={{
                minWidth: "2rem",
                minHeight: "2rem",
              }}
              className="stepWizard__icon"
            >
              {currentStep > ind + 1 && type === "icon" && <Check />}
              {currentStep === ind + 1 && type === "icon" && <Clock />}
              {type === "number" && ind + 1}
            </div>
            <div className="stepWizard__body">
              <label className="stepWizard__label">{item.label}</label>
              {item.description && (
                <p className="stepWizard__description">{item.description}</p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );

  const forMobile = () => {
    const cStep = currentStep > steps.length ? steps.length : currentStep;
    return (
      <div className="stepWizard--mobile">
        <div className="stepWizard__activeStep">
          <div
            className={getClassNames({
              stepWizard__icon: true,
              "stepWizard__icon--finish": currentStep > steps.length,
            })}
          >
            {type === "number" ? (
              cStep
            ) : currentStep > steps.length ? (
              <Check />
            ) : (
              <Clock />
            )}
          </div>
          <div className="stepWizard__body">
            <label className="stepWizard__label">
              {steps[cStep - 1].label}
            </label>
            {steps[cStep - 1].description && (
              <p className="stepWizard__description">
                {steps[cStep - 1].description}
              </p>
            )}
          </div>
        </div>
        <ul className="stepWizard--mobile__lineList">
          {steps.map((i, ind) => (
            <li
              key={ind}
              role="none"
              onClick={() => handelStepClick(ind + 1, i)}
              className={`stepWizard--mobile__line ${currentStep - 1 === ind ? "stepWizard--mobile__line--process" : currentStep - 1 > ind ? "stepWizard--mobile__line--finish" : "stepWizard--mobile__line--wait"}`}
            ></li>
          ))}
        </ul>
      </div>
    );
  };

  return <>{!isMobile ? forDesktop : forMobile()}</>;
};

export default StepWizard;
