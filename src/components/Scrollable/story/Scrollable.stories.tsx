import React from "react";
import { Card } from "../..";
import Scrollable from "../Scrollable";
export default {
  title: "Components/Layout/Scrollable",
  component: Scrollable,
  argTypes: {
    children: {
      description: "Pass what you want to see in scrollable as children",
      control: {
        type: "text",
      },
      defaultValue:
        "Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular beliefContrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular beliefContrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular beliefContrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief.",
    },
    height: {
      description: "Set height of Scrollable (in px)",
      control: {
        type: "text",
      },
      defaultValue: "100px",
    },
    customClass: {
      description: "Add any desired custom class",
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
      <Scrollable height={rest.height} customClass={rest.customClass}>
        <p>{rest.children}</p>
      </Scrollable>
    </Card>
  );
};

export const Primary = Template.bind({});
