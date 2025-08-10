import React from "react";
import HorizontalFlex from "../HorizontalFlex/HorizontalFlex";
import Tag from "./Tag";

const size = ["Small", "Medium", "Large"];

export default {
  title: "Components(Done)/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "Select Size",
      control: {
        type: "radio",
        options: size,
      },
    },
    children: {
      description: "You can send children",
      control: {
        type: "text",
      },
      defaultValue: "Badge",
    },
    onDismis: {
      description: "Click if you want clear or other some actions",
      control: {
        type: "",
      },
      defaultValue: false,
    },
  },
  args:{
    size:"Large"
    
  }
};
const Template = ({ ...rest }) => {
  return (
    <Tag
      size={rest.size}
      onDismis={() => alert("G")}
    >
      {rest.children}
    </Tag>
  );
};

export const Primary = Template.bind({});

//Tag with multiple size
export const Tag_with_multiple_size: any = Template.bind({});
Tag_with_multiple_size.decorators = [
  () => {
    return (
      <HorizontalFlex gap={36}>
        {size.map((sizes: any, ind) => (
          <Tag size={sizes}>
            {sizes}
          </Tag>
        ))}
      </HorizontalFlex>
    );
  },
];

//Tag with multiple size
export const Tag_with_multiple_size_and_dismiss_Action: any = Template.bind({});
Tag_with_multiple_size_and_dismiss_Action.decorators = [
  () => {
    return (
      <HorizontalFlex gap={36}>
        {size.map((sizes: any, ind) => (
          <Tag size={sizes} onDismis={()=>{alert('User clicked')}}>
            {sizes}
          </Tag>
        ))}
      </HorizontalFlex>
    );
  },
];