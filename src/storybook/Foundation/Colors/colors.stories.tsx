import React from "react";
import { Card, CopyClipboard, Text } from "../../../components";
import { Colors } from "./Colors";
import "../../../storybook.css";

export default {
  title: "Foundation/Colors",
  component: Colors,
  parameters: {
    docs: {},
    controls: { hideNoControlsWarning: true },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=576-33848&t=I5X8uq0HTkwaulx9-0",
    },
  },
};

const Template = ({}) => {
  return (
    <Card>
      {Object.keys(Colors)?.map((colors: any, index: number) => {
        return (
          <div key={index} className="story-color-documentation">
            <Text
              type="T-4"
              as="h3"
              fontweight="bolder"
              customClass="story-color-name"
            >
              {colors}
            </Text>

            {Colors[colors]?.map((color: any, index: number) => {
              return (
                <div key={index} className="story-color-items">
                  <div className="story-color-box">
                    <div
                      className={`story-color-aria ${
                        "story-color-" + color.colorName
                      }`}
                      style={{ backgroundColor: color.colorHex }}
                    ></div>
                    <Text customClass="story-color-Name" fontweight="bolder">
                      {color.colorName}
                    </Text>
                  </div>
                  <div className="story-colorCodeWrapper">
                    <CopyClipboard
                      timeout={1000}
                      label={color.colorHex}
                      value={color.colorHex}
                      align="fill"
                    />

                    <CopyClipboard
                      timeout={1000}
                      label={color.colorRgba}
                      value={color.colorRgba}
                      align="fill"
                    />

                    <CopyClipboard
                      timeout={1000}
                      label={color.colorHsl}
                      value={color.colorHsl}
                      align="fill"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </Card>
  );
};
export const Primary: any = Template.bind({});
