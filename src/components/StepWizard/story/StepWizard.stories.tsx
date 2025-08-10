import React, { useEffect, useState } from "react";
import  Card  from "../../Card/Card";
import StepWizard from "../StepWizard";

export default {
  title: "Components(Done)/StepWizard",
  component: StepWizard,
  tags: ["autodocs"],
  argTypes: {

  },
};

const steps = [
  {
    label: "Step1",
    value: "Step1",
    description: "This is Step1",
  },
  {
    label: "Step2",
    value: "Step2",
    description: "This is Step2",
  },
  {
    label: "Step3",
    value: "Step3",
    description: "This is Step3",
  },
  {
    label: "Step4",
    value: "Step4",
    description: "This is Step4",
  },
];

const Template = ({ ...rest }) => {
  const [currStep, setCurrStep] = useState(5);

  useEffect(() => {
    setCurrStep(rest.currentStep);
  }, [rest.currentStep]);

  return (
    <Card type={"Borderd"} headerTitle="StepWizard">
      <StepWizard
        {...rest}
        currentStep={currStep}
        onChange={(newStep) => setCurrStep(newStep)}
        steps={steps}
      />
    </Card>
  );
};

export const Primary: any = Template.bind({});