import React from "react";
import { Card } from "../Card";
import AspectRatio from "./AspectRatio";

export default {
  title: "Components/Layout/AspectRatio",
  component: AspectRatio,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=5984-312505&t=vybTUvZSW4IIqAUa-0",
    },
  },
  argTypes : {
    ratio: {
      description:"Ratio of box width/height (default 16/9 === 1.77777)",
      control: {
        type:"number"
      },
      defaultValue:16/9,
    },
    maxW: {
      description:"Maximum width of box",
      control: {
        type:"string"
      },
      defaultValue:"auto",
    },
    style : {
      description:"Create custom style",
      control:{
        disable:true
      }
    }
  },
};
const Template = ({ ...rest }) => {
  return (
    <Card>
      <AspectRatio ratio={16/9} {...rest}>
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/K_BpKaJmxac" title="10 FRUITS CUTTING - STREET FOOD" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </AspectRatio>
    </Card>
  )
}

export const Primary: any = Template.bind({});
