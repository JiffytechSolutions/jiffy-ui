import React from "react";
import Avatar from "../Avatar";
import { Card, Text, ToolTip } from "../..";
import { FlexLayout } from "../../FlexLayout";
import AvatarDoc from "../Document/AvatarDoc";

export default {
  title: "Components/Media/Avatar",
  component: Avatar,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=2390-226813&t=tb1dL4Z7hEk2Cb1x-0",
    },
  },
  argTypes: {
    text: {
      description:
        "A String which is used to set Profile name or any other usage, Not work with Image",
      defaultValue: "Jon Doe",
      control: {
        type: "text",
      },
    },
    color: {
      description: "Set color of Avatar as per need, Not work with Image",
      control: {
        type: "radio",
        options: ["primary", "secondary", "red", "yellow", "green"],
      },
      defaultValue: "primary",
    },
    hasBadge: {
      description: "Add Badge in Avatar",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    image: {
      description: "Set Whether Avatar Image , Enter any Image Url to check",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    size: {
      description: "Manage and Controls the Size of Avatar <table><thead><tr><th>Props</th><th>Value</th></tr></thead><tbody><tr><td><strong>small</strong></td><td>24px</td></tr><tr><td><strong>medium</strong></td><td>32px</td></tr><tr><td><strong>large</strong></td><td>48px</td></tr><tbody></table>",
      control: {
        type: "radio",
        options: ["small", "medium", "large"],
      },
      defaultValue: "large",
    },
    animateLines: {
      description:
        "Set number of lines that moves around the avatar between 1 to 10 only",
      control: {
        type: "number",
      },
      defaultValue: 0,
    },
    onClick: {
      description: "Onclick function",
      control: {
        type: "function",
        disable: true,
      },
    },
    customClass: {
      description: "set customClass of  Avatar",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <Card>
      <FlexLayout halign="center" wrap="wrap">
        <Avatar
          text={rest.text}
          size={rest.size}
          color={rest.color}
          image={rest.image}
          hasBadge={rest.hasBadge}
          customClass={rest.customClass}
          animateLines={rest.animateLines}
        />
      </FlexLayout>
    </Card>
  );
};

export const Primary = Template.bind({});

const color = ["primary", "secondary", "red", "green", "yellow"];
export const Color: any = Template.bind({});
Color.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose"  wrap="wrap">
        {color.map((variant: any, index: any) => (
          <Avatar key={index} size="large" color={variant} text="Jon Doe" />
        ))}
      </FlexLayout>
    </Card>
  ),
];

const size = ["small", "medium", "large"];
export const Size: any = Template.bind({});
Size.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose" direction="vertical"  wrap="wrap">
        {size.map((variant: any, index: any) => (
          <FlexLayout spacing="loose" direction="vertical" >
            <Text>{variant}</Text>
            <FlexLayout spacing="extraLoose"  wrap="wrap">
              <Avatar
                key={index}
                size={variant}
                image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              />
              <Avatar size={variant} color="primary" text="Jon Doe" />
              <Avatar size={variant} color="secondary" text="Jon Doe" />
              <Avatar size={variant} color="red" text="Jon Doe" />
              <Avatar size={variant} color="green" text="Jon Doe" />
              <Avatar size={variant} color="yellow" text="Jon Doe" />
            </FlexLayout>
          </FlexLayout>
        ))}
      </FlexLayout>
    </Card>
  ),
];

export const Avatar_with_Image: any = Template.bind({});
Avatar_with_Image.decorators = [
  () => (
    <Card>
      <Avatar
        size="large"
        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
      />
    </Card>
  ),
];

// Avatar With Badge
export const Avatar_with_Badge: any = Template.bind({});
Avatar_with_Badge.decorators = [
  () => (
    <Card title={"Avatar With Badges"}>
      <FlexLayout direction="vertical" spacing="loose">
        <FlexLayout spacing="loose">
          {size.map((variant: any, index: any) => (
            <React.Fragment key={index}>
              <Avatar hasBadge size={variant} text="Jon Doe" />
            </React.Fragment>
          ))}
        </FlexLayout>
        <FlexLayout spacing="loose">
          {size.map((variant: any, index: any) => (
            <React.Fragment key={index}>
              <Avatar
                hasBadge
                size={variant}
                image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              />
            </React.Fragment>
          ))}
        </FlexLayout>
      </FlexLayout>
    </Card>
  ),
];
// Avatar With Label
export const Avatar_with_label: any = Template.bind({});
Avatar_with_label.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="loose">
        <Avatar
          size="large"
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        />
        <FlexLayout direction="vertical" spacing="extraTight">
          <Text textcolor="default" fontweight="bolder">
            Robert Sher
          </Text>
          <Text textcolor="secondary" fontweight="bold">
            Admin
          </Text>
        </FlexLayout>
      </FlexLayout>
    </Card>
  ),
];

// Avatar With Tootltip
export const Avatar_with_tooltip: any = Template.bind({});
Avatar_with_tooltip.decorators = [
  () => (
    <Card>
      <ToolTip
        isOpen={false}
        direction="bottom"
        helpText={"Avatar"}
        activator={
          <Avatar
            size="large"
            image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          />
        }
      ></ToolTip>
    </Card>
  ),
];
export function Documentation() {
  return (
    <AvatarDoc />
  );
}