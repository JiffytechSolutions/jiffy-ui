import React from "react";
import { Card } from "../../Card";
import Marquee from "../Marquee";
import { FlexLayout } from "../../FlexLayout";

export default {
  title: "Components/utility/Marquee",
  component: Marquee,
  argTypes: {
    content: {
      description: "Content of marquee",
      control: {
        type: "text",
      },
      defaultValue:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit quas corrupti numquam suscipit deleniti quisquam alias est ullam nobis!.",
    },
    speed: {
      description: "speed of marquee (bigger the number slower the speed)",
      control: {
        type: "number",
      },
      defaultValue: 6,
    },
    getFullView: {
      description: "get the full view when hover",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    align: {
      description:
        "The text-align property is used to set the horizontal alignment of a text.",
      control: {
        type: "radio",
        options: ["start", "center", "end", "fill"],
      },
      defaultValue: "start",
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <Card>
      <Marquee content={"demo"} {...rest} />
    </Card>
  );
};

export const Primary = Template.bind({});

// Marquee Types
export const Types: any = Template.bind({});
Types.decorators = [
  () => (
    <Card cardType="bordered" title="TextAligment of Marquee">
      <Card cardType="bordered" title={`Marquee start`}>
        <Marquee
          content="There are many variations of passages of Lorem Ipsum available, but the majority"
          align={"start"}
        />
      </Card>
      <Card cardType="bordered" title={`Marquee center`}>
        <Marquee
          content="There are many variations of passages of Lorem Ipsum available, but the majority"
          align={"center"}
        />
      </Card>
      <Card cardType="bordered" title={`Marquee end`}>
        <Marquee
          content="There are many variations of passages of Lorem Ipsum available, but the majority"
          align={"end"}
        />
      </Card>
      <Card cardType="bordered" title={`Marquee fill`}>
        <Marquee
          content="There are many variations of passages of Lorem Ipsum available, but the majority"
          align={"fill"}
        />
      </Card>
    </Card>
  ),
];
