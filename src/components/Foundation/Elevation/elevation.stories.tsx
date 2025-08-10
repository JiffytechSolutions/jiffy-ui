import Card from "../../Card/Card";
import TextStyle from "../../TextStyle/TextStyle";
import HorizontalFlex from "../../HorizontalFlex/HorizontalFlex";
import { Elevations } from "./Elevation";
import "./elevation.css";
import React from "react";

export default {
  title: "Foundation/Elevation",

  decorators: [(Story: any) => <Story />],
  component: Elevations,
  parameters: {
    docs: {},
    controls: { hideNoControlsWarning: true },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=576-33848&t=I5X8uq0HTkwaulx9-0",
    },
  },
};

const Template = () => {
  // const useToasts = useToast();

  return (
    <HorizontalFlex gap={36}>
      {Object.keys(Elevations)?.map((elevations: any, index: number) => {
        return Elevations[elevations]?.map((elevations: any, index: number) => {
          return (
            <div
              key={index}
              className={`story-color-aria`}
              style={{ boxShadow: elevations.value }}
            >
              <Card key={index} type="Plain">
                <TextStyle as="h3" textColor="Dark" fontWeight="Medium">
                  {elevations.name}
                </TextStyle>
              </Card>
            </div>
          );
        });
      })}
    </HorizontalFlex>
  );
};
export const Primary: any = Template.bind({});
