import React, { useState } from "react";
import Button from "../../Button/Button";
import { Card } from "../../Card";
import AnimationWrapper from "../AnimationWrapper";
import './AnimationWrapperStory.css'

export default {
  title: 'Components/utility/AnimationWrapper',
  component: AnimationWrapper,
  argTypes: {
    show: {
      description: 'Is this element in dom or not',
      control: {
        disable: true
      }
    },
    inAnimation: {
      description: 'Classname for inAnimation',
      control: {
        disable: true
      }
    },
    outAnimation: {
      description: 'Classname for outAnimation',
      control: {
        disable: true
      }
    }
  }
}

const Template = ({ ...rest }) => {
  const [showAnimation, setShowAnimation] = useState(false);

  const handleButtonClick = () => {
    setShowAnimation(!showAnimation);
  };

  const inAnimation = 'inAnimate'

  const outAnimation = 'outAnimate'

  return (
    <Card>
      <Button onClick={handleButtonClick} type="outlined">Toggle animation</Button>
      <AnimationWrapper
        show={showAnimation}
        inAnimation={inAnimation}
        outAnimation={outAnimation}
      >
        <Card>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia incidunt eaque ab id, maiores aliquam eos. At consequuntur non accusamus voluptatem ipsam quibusdam, voluptate nisi obcaecati quae ea qui dolorum similique reprehenderit esse officiis earum, accusantium aperiam ipsa dolores sint maxime? Cupiditate voluptatum dolore voluptates recusandae unde? Repellendus, alias illo.
        </Card>
      </AnimationWrapper>
    </Card>
  )
}

export const Primary = Template.bind({})