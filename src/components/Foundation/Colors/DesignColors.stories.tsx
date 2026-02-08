import Card from "../../Card/Card";
import TextStyle from "../../TextStyle/TextStyle";
import FlexLayout from "../../FlexLayout/FlexLayout";
import CopyClipboard from "../../CopyClipboard/CopyClipboard";
import { DesignColors } from "./DesignColors";
import "./color.css";
import React from "react";

export default {
  title: "Foundation/Colors",

  decorators: [(Story: any) => <Story />],
  component: DesignColors,
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
    <>
      {Object.keys(DesignColors)?.map((colors: any, index: number) => {
        return (
          <Card key={index} variant="outlined"header={{ title: colors }}>
            <FlexLayout gap={2} wrap={true}>
              {DesignColors[colors]?.map((color: any, index: number) => {
                return (
                  <div
                    key={index}
                    className={`story-color-aria ${"story-color-" + color.colorName
                      } ${index === 0 || index === 1 || index === 2 ? "text-color-dark" : ""}`}
                    style={{ backgroundColor: color.colorHex }}
                  >
                    <Card key={index} variant="outlined">
                      <div className="story-color-box">
                        <TextStyle as="h3" textColor="Dark" fontWeight="medium">
                          {color.colorName}
                        </TextStyle>
                      </div>
                      <CopyClipboard
                       
                        label={color.colorHex}
                        value={color.colorHex}
                      />
                    </Card>
                  </div>
                );
              })}
            </FlexLayout>
          </Card>
        );
      })}
    </>
  );
};
export const Primary: any = Template.bind({});
