import React from "react";
import { Avatar, ToolTip } from "../../..";
import { Card } from "../../Card";
import AvatarGroup from "../AvatarGroup";
import AvatarGroupDoc from "../Document/AvatarGroupDoc";
export default {
  title: "Components/Media/AvatarGroup",
  component: AvatarGroup,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=2390-226813&t=tb1dL4Z7hEk2Cb1x-0",
    },
  },
  argTypes: {
    size: {
      description: "set Image Size",
      control: {
        type: "radio",
        options: ["small", "medium", "large"],
      },
      defaultValue: "large",
    },
    maxCount: {
      description: "set Max avatars to show",
      control: {
        type: "text",
      },
      defaultValue: "4",
    },
    customClass: {
      description: "Add extraClass to AvatarGroup ",
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
      <AvatarGroup
        maxCount={rest.maxCount}
        size={rest.size}
        customClass={rest.customClass}
      >
        <Avatar image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
        <Avatar image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
        <Avatar image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
        <Avatar image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
        <Avatar image="https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn" />
        <Avatar image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
        <Avatar image="https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn" />
      </AvatarGroup>
    </Card>
  );
};

export const Primary = Template.bind({});

// Avatar With Tootltip
export const AvatarGroup_with_tooltip: any = Template.bind({});
AvatarGroup_with_tooltip.decorators = [
  () => (
    <Card>
      <AvatarGroup maxCount={5} size={"medium"}>
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
      </AvatarGroup>
    </Card>
  ),
];
export function Documentation() {
  return <AvatarGroupDoc />;
}
