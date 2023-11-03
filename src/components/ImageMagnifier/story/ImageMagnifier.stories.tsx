import React from "react";
import ImageMagnifier from "../ImageMagnifier";
import { Card } from "../../Card";

export default {
  title: "Components/ImageMagnifier",
  component: ImageMagnifier,
  argTypes: {
    src: {
      description: "Give the URL of image as source",
      control: {
        type: "text"
      },
      defaultValue: "https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg"
    },
    inside: {
      description: "Set the position of magnifier inside image or outside",
      control: {
        type: "boolean"
      },
      defaultValue: true
    },
    height: {
      description: "Set the Height of image",
      control: {
        type: "number"
      },
      defaultValue: 500,
    },
    width: {
      description: "Set the width of Image",
      control: {
        type: "number"
      },
      defaultValue: 500,
    },
    magnifierHeight: {
      description: "Set the Height of Magnifier",
      control: {
        type: "number"
      },
      defaultValue: 100,
    },
    magnifierWidth: {
      description: "Set the width of Magnifier",
      control: {
        type: "number"
      },
      defaultValue: 100,
    },
    zoomLevel: {
      description: "Set the zoom level of Magnifier",
      control: {
        type: "number"
      },
      defaultValue: 5,
    },
    customClass: {
      description: "Give the custom class to this component",
      control: {
        type: "text"
      },
      defaultValue: ""
    },
  }
}

const Template = ({ ...rest }) => {
  return <Card>
    <ImageMagnifier
      width={0}
      height={0}
      inside={false}
      position="auto"
      {...rest}    />
  </Card>
}

export const Primary = Template.bind({})
export const inside: any = Template.bind({});
inside.decorators = [
  () => {
   return(
    <Card>
    <ImageMagnifier
      width={500}
      height={500}
      inside={true}
      position="auto"
      src="https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg"
          />
  </Card>
   )
   },
];

export const Without_inside: any = Template.bind({});
Without_inside.decorators = [
  () => {
   return(
    <Card>
    <ImageMagnifier
      width={500}
      height={500}
      inside={false}
      position="auto"
      src="https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg"
          />
  </Card>
   )
   },
]

export const positionOfMaginifiImage: any = Template.bind({});
positionOfMaginifiImage.decorators = [
  () => {
   return(
    <Card>
   {
    ["left","right","top","bottom"].map((items:any)=>{
      return(
        <Card title={items}>
          <ImageMagnifier
        width={500}
        height={500}
        inside={false}
        position={items}
        src="https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg"
            />
          </Card>
      )
    })
   }
  </Card>
   )
   },
]