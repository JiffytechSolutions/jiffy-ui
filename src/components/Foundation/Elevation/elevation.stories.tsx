import Card from "../../Card/Card";
import TextStyle from "../../TextStyle/TextStyle";
import FlexLayout from "../../FlexLayout/FlexLayout";
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
    <FlexLayout gap={3}>
      {Object.keys(Elevations)?.map((elevations: any, index: number) => {
        return Elevations[elevations]?.map((elevations: any, index: number) => {
          return (
            <div
              key={index}
              className={`story-color-aria`}
              style={{ boxShadow: elevations.value }}
            >
              <Card key={index} variant="outlined">
                <TextStyle as="h3" textColor="Dark" fontWeight="medium">
                  {elevations.name}
                </TextStyle>
              </Card>
            </div>
          );
        });
      })}
    </FlexLayout>
  );
};
export const Primary: any = Template.bind({});
