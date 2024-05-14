import React, { useEffect, useState } from 'react'
import { Check } from '../../storybook/Foundation/Icons/Icons'
import getClassNames from '../../utilities/getClassnames'
import './StepWizard.css'

export interface StepI {
  label: string | React.ReactNode,
  value: any,
  description?: string | React.ReactNode,
}
export interface StepWizardI {
  currentStep: number,
  steps: StepI[],
  direction?: 'horizontal' | 'vertical',
  type?: 'icon' | 'number',
  size?: 'small' | 'large',
  customClass?: string
  onChange?: (newStep: number, step: StepI) => void
}

const StepWizard = ({ currentStep, steps, direction = 'horizontal', type = 'icon', size = 'small', customClass, onChange = () => { } }: StepWizardI) => {
  const [isMobile, setIsMobile] = useState(false)
  currentStep = currentStep > steps.length ? steps.length + 1 : currentStep < 1 ? 1 : currentStep
  useEffect(() => {
    const sizeChecker = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true)
      }
      else setIsMobile(false)
    }
    sizeChecker()
    window.addEventListener('resize', sizeChecker, true);
    return () => {
      window.removeEventListener('resize', sizeChecker, true)
    }
  }, [])

  const handelStepClick = (newStep: number, step: StepI) => {
    onChange(newStep, step)
  }

  const forDesktop = <ul
    className={getClassNames({
      "inte-stepWizard" : true,
      [`inte-stepWizard--${direction}`] : direction,
      [`inte-stepWizard--${size}`] : size,
      [customClass ?? ''] : customClass
    })}
  >
    {
      steps.map((item: StepI, ind: number) => {
        let t = currentStep === ind + 1 ? `inte-stepWizard__step--process` : currentStep > ind + 1 ? 'inte-stepWizard__step--finish' : 'inte-stepWizard__step--wait'
        return (
          <li
            key={ind}
            className={`inte-stepWizard__step ${t}`}
            style={{
              flex: direction === 'horizontal' ? `0 0 calc(100% / ${steps.length})` : '0 0 100%'
            }}
            onClick={() => handelStepClick(ind + 1, item)}
          >
            <div
              style={{
                minWidth: size === 'large' ? '3.2rem' : '2.4rem',
                minHeight: size === 'large' ? '3.2rem' : '2.4rem',
              }}
              className='inte-stepWizard__icon'
            >
              {
                (currentStep > ind + 1 && type === 'icon') && <Check size={size === 'small' ? 18 : 20} color='var(--inte-G0)' />
              }
              {
                type === "number" && ind + 1
              }
            </div>
            <div className='inte-stepWizard__body'>
              <label
                className='inte-stepWizard__label'
              >
                {item.label}
              </label>
              {
                item.description && (
                  <p
                    className='inte-stepWizard__description'>
                    {item.description}
                  </p>
                )
              }
            </div>
          </li>
        )
      })
    }
  </ul>

  const forMobile = () => {
    const cStep = currentStep > steps.length ? steps.length : currentStep
    return (
      <div
        className={getClassNames({
          'inte-stepWizard--mobile' : true,
          [customClass as string] : customClass
        })}
      >
        <div
          className='inte-stepWizard__activeStep'
        >
          <div
            className={getClassNames({
              'inte-stepWizard__icon':true,
              'inte-stepWizard__icon--finish' : currentStep > steps.length
            })}
          >
            {
              type === 'number' ? cStep : currentStep > steps.length ? <Check size={size === 'small' ? 18 : 20} color='var(--inte-G0)' /> : null
            }
          </div>
          <div className='inte-stepWizard__body'>
            <label
              className='inte-stepWizard__label'
            >
              {steps[cStep - 1].label}
            </label>
            {
              steps[cStep - 1].description && (
                <p
                  className='inte-stepWizard__description'>
                  {steps[cStep - 1].description}
                </p>
              )
            }
          </div>
        </div>
        <ul className='inte-stepWizard--mobile__lineList'>
          {
            steps.map((i, ind) => (
              <li
                key={ind}
                onClick={() => handelStepClick(ind + 1, i)}
                className={`inte-stepWizard--mobile__line ${currentStep - 1 === ind ? 'inte-stepWizard--mobile__line--process' : currentStep - 1 > ind ? 'inte-stepWizard--mobile__line--finish' : 'inte-stepWizard--mobile__line--wait'}`}
              ></li>
            ))
          }
        </ul>

      </div>
    )
  }

  return (
    <>
      {!isMobile ? forDesktop : forMobile()}
    </>
  )
}

export default StepWizard