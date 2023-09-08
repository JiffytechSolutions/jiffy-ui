import React from "react";
import { Card } from "../../Card";
import Marquee from "../Marquee";

export default {
  title: 'Components/utility/Marquee',
  component: Marquee,
  argTypes: {
    content: {
      description: 'Content of marquee',
      control: {
        type: "text",
      },
      defaultValue: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit quas corrupti numquam suscipit deleniti quisquam alias est ullam nobis!.'
    },
    speed: {
      description: 'speed of marquee (bigger the number slower the speed)',
      control: {
        type: 'number',
      },
      defaultValue: 6
    },
    getFullView: {
      description: 'get the full view when hover',
      control: {
        type: "boolean",
      },
      defaultValue: false
    }

  }
}

const Template = ({ ...rest }) => {
  return (
    <Card>
      <Marquee content={'demo'} {...rest} />
    </Card>
  )
}

export const Primary = Template.bind({})