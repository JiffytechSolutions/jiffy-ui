import React, { useEffect, useMemo, useState } from "react";
import { Card } from "../../Card";
import StepWizardDoc from "../Document/StepWizardDoc";
import StepWizard from "../StepWizard";
import { StoryContext } from "@storybook/react";

export default {
  title: 'Components/Navigation/StepWizard',
  component: StepWizard,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=1842-137749&t=vybTUvZSW4IIqAUa-0",
    },
  },
  argTypes: {
    currentStep: {
      description: "Set the current step (Make current step greater than last step to make the last step status finish)",
      type: { name: 'number' },
      defaultValue: 5,
    },
    direction: {
      description: "Set the direction of steps",
      control: {
        type: 'radio',
        options: ['horizontal', 'vertical'],
      },
      defaultValue: 'horizontal'
    },
    type: {
      description: 'Set the type of steps',
      control: {
        type: 'radio',
        options: ['number', 'icon'],
      },
      defaultValue: 'number'
    },
    steps: {
      description: `<table><thead><tr><th>Prop</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>label<span title="Required" class="sto-13xzcrp">*</span></code></td><td><code>string</code> or <code>React.ReactNode</code></td><td>The label to display for the step.</td></tr><tr><td><code>value<span title="Required" class="sto-13xzcrp">*</span></code></td><td><code>any</code></td><td>The value associated with the step.</td></tr><tr><td><code>description</code></td><td><code>string</code> or <code>React.ReactNode</code></td><td>Optional description of the step, if applicable.</td></tr></tbody></table>`,
      type: { name: 'array', required: true },
      control:{
        disable:true
      },
      table: {
        type: { summary: 'StepI[]' },
      },
    },
    size: {
      description: "Set the size of step icon",
      control: {
        type: 'radio',
        options: ['small', 'large']
      },
      defaultValue: 'small'
    },
    customClass: {
      description: 'Add custom class',
      control: {
        type: 'text'
      },
      defaultValue: 'custom_class'
    },
  }
  
}

const steps = [
  {
    label: 'Step1',
    value: 'Step1',
    description: 'This is Step1'
  },
  {
    label: 'Step2',
    value: 'Step2',
    description: 'This is Step2'
  },
  {
    label: 'Step3',
    value: 'Step3',
    description: 'This is Step3'
  },
  {
    label: 'Step4',
    value: 'Step4',
    description: 'This is Step4'
  },
]

const Template = ({ ...rest }) => {

  const [currStep , setCurrStep] = useState(5)

  useEffect(()=>{
    setCurrStep(rest.currentStep)
  },[rest.currentStep])

  const fillerWidth = useMemo(() => {
    const unitIncrement = 100/steps.length
    if(currStep > 1){
      return unitIncrement * (currStep -1)
    }
    return 0
  },[currStep])

  return (
    <Card>
      <StepWizard
        {...rest}
        currentStep={currStep}
        onChange={(newStep)=> setCurrStep(newStep)}
        steps={steps}
      />
      <div className="filler-container">
        <div className="filler" style={{width:`${fillerWidth}%`}}></div>
      </div>
    </Card>
  )
}

export const Primary: any = Template.bind({})

export const StepWizardwithIcon:any = ({...rest}) => {
  const [currStep , setCurrStep] = useState(5)

  useEffect(()=>{
    setCurrStep(rest.currentStep)
  },[rest.currentStep])

  return (
    <Card>
      <StepWizard
        {...rest}
        currentStep={currStep}
        onChange={(newStep)=> setCurrStep(newStep)}
        steps={steps}
        type="icon"
      />
    </Card>
  )
}

export const VerticalStepWizard:any = ({...rest}) => {
  const [currStep , setCurrStep] = useState(5)

  useEffect(()=>{
    setCurrStep(rest.currentStep)
  },[rest.currentStep])

  return (
    <Card>
      <StepWizard
        {...rest}
        currentStep={currStep}
        onChange={(newStep)=> setCurrStep(newStep)}
        steps={steps}
        direction="vertical"
      />
    </Card>
  )
}

export function Documentation() {
  return <StepWizardDoc />;
}