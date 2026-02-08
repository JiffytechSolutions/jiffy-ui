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
        "jf-stepWizard": true,
        [`jf-stepWizard--${direction}`]: direction,
        [customClass ?? ""]: customClass,
      })}
    >
      {steps.map((item: StepI, ind: number) => {
        let t =
          currentStep === ind + 1
            ? `jf-stepWizard__step--process`
            : currentStep > ind + 1
              ? "jf-stepWizard__step--finish"
              : "jf-stepWizard__step--wait";
        return (
          <li
            key={ind}
            className={`jf-stepWizard__step ${t}`}
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
              className="jf-stepWizard__icon"
            >
              {currentStep > ind + 1 && type === "icon" && <Check />}
              {currentStep === ind + 1 && type === "icon" && <Clock />}
              {type === "number" && ind + 1}
            </div>
            <div className="jf-stepWizard__body">
              <label className="jf-stepWizard__label">{item.label}</label>
              {item.description && (
                <p className="jf-stepWizard__description">{item.description}</p>
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
      <div className="jf-stepWizard--mobile">
        <div className="jf-stepWizard__activeStep">
          <div
            className={getClassNames({
              "jf-stepWizard__icon": true,
              "jf-stepWizard__icon--finish": currentStep > steps.length,
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
          <div className="jf-stepWizard__body">
            <label className="jf-stepWizard__label">
              {steps[cStep - 1].label}
            </label>
            {steps[cStep - 1].description && (
              <p className="jf-stepWizard__description">
                {steps[cStep - 1].description}
              </p>
            )}
          </div>
        </div>
        <ul className="jf-stepWizard--mobile__lineList">
          {steps.map((i, ind) => (
            <li
              key={ind}
              role="none"
              onClick={() => handelStepClick(ind + 1, i)}
              className={`jf-stepWizard--mobile__line ${currentStep - 1 === ind ? "jf-stepWizard--mobile__line--process" : currentStep - 1 > ind ? "jf-stepWizard--mobile__line--finish" : "jf-stepWizard--mobile__line--wait"}`}
            ></li>
          ))}
        </ul>
      </div>
    );
  };

  return <>{!isMobile ? forDesktop : forMobile()}</>;
};

export default StepWizard;
