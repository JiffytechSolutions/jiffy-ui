import React from "react";
import { Card } from "../../Card";
import FlexLayout from "../../FlexLayout/FlexLayout";
import ThumbnailDoc from "../Document/ThumbnailDoc";
import Thumbnail from "../Thumbnail";

export default {
  title: "Components/Media/Thumbnail",
  component: Thumbnail,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=3763-239643&t=tb1dL4Z7hEk2Cb1x-0",
    },

  },
  argTypes: {
    src: {
      description: "Input the source URL",
      control: {
        type: "text",
      },
      defaultValue:
        "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
    },
    alt: {
      description:
        "In cases when images fail to load, the Image component will result into the native <img/> browser fallback.",
      control: {
        type: "text",
      },
      defaultValue: "Image Data Not Found",
    },
    size: {
      description: "set Image Size <table><thead><tr><th>Props</th><th>Value</th></tr></thead><tbody><tr><td><strong>extraLarge</strong></td><td>80px</td></tr><tr><td><strong>large</strong></td><td>64px</td></tr><tr><td><strong>medium</strong></td><td>48px</td></tr><tr><td><strong>small</strong></td><td>32px</td></tr><tr><td><strong>extraSmall</strong></td><td>24px</td></tr><tbody></table>",
      control: {
        type: "radio",
        options: ["extraLarge", "large", "medium", "small", "extraSmall"],
      },
      defaultValue: "medium",
    },
    objectFit: {
      description: "Set fill nature of image inside box",
      control: {
        type: "radio",
        options: ["fill","contain","cover","none"],
      },
      defaultValue: "fill",
    },
    customClass: {
      description: "set customClass for Thumbnail ",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <Card title={rest.heading}>
      <Thumbnail
        alt={rest.alt}
        src={rest.src}
        size={rest.size}
        customClass={rest.customClass}
        objectFit={rest.objectFit}
      />
    </Card>
  );
};
export const Primary = Template.bind({});
export const Size: any = Template.bind({});
Size.decorators = [
  () => {
    return (
      <Card>
        <FlexLayout spacing="loose">
          {["extraSmall", "small", "medium", "large", "extraLarge"].map(
            (items: any) => {
              return (
                <Thumbnail
                  src={
                    "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn"
                  }
                  size={items}
                />
              );
            }
          )}
        </FlexLayout>
      </Card>
    );
  },
];
export function Documentation() {
  return (
    <ThumbnailDoc />
  );
}