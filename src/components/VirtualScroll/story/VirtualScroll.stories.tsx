import React from "react";
import VirtualScroll from "../VirtualScroll";
import { Card } from "../../Card";
import Text from "../../Text/Text";
import VirtualScrollDoc from "../Document/VirtualScrollDoc";

export default {
  title: "Components/utility/VirtualScroll",
  component: VirtualScroll,
  argTypes: {
    children: {
      description: `Children should be an array , which is to shown inside the container (<b>You can pass as much data as much you want</b>)
        <div style="border:1px solid black;">
        <u><strong>Note<span style="color: red;">*</span></strong></u>
         You can provide children like this :-
        <pre>const items = Array.from({ length: 10001 }).map((_, i) => <div className="list">Item {i}</div>)</pre>
        </div>`,
      control: {
        type: "array",
        disable: true,
      },
    },
    itemHeight: {
      description: `Provide item height of container <b>{item height must be in number only}</b>`,
      control: {
        type: "number",
      },
      defaultValue: 40,
    },
    containerHeight: {
      description: `Provide container height <b>{container height must be in number only}</b>`,
      control: {
        type: "number",
      },
      defaultValue: 250,
    },
    customClass: {
      description: "Add any custom class",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
  },
};
const options = Array.from({ length: 10001 }).map((_, i) => (
  <div className="list-items" key={i}>
    <Text type="T-8"> Item {i}</Text>
  </div>
));
const Template = ({ ...rest }) => {
  return (
    <>
      <Card>
        <VirtualScroll
          itemHeight={rest.itemHeight}
          containerHeight={rest.containerHeight}
          customClass={rest.customClass}
        >
          {options}
        </VirtualScroll>
      </Card>
      <Text>
        <u>
          Note <span style={{ color: "red" }}>*</span>
        </u>
        : The code cannot be visible in the Docs because Storybook is unable to
        load this large amount of data.
        <br /> For getting the code, Please refer to documentation .
      </Text>
    </>
  );
};

export const Primary = Template.bind({});
export function Documentation() {
  return <VirtualScrollDoc />;
}
