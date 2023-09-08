import React from "react";
import { Card, TextStyles } from "../../..";
import Sortable from "../Sortable";
import "./SortableStories.css";

export default {
  title: "Components/Behaviour/Sortable",
  component: Sortable,
  argTypes: {
    data: {
      description: "data is an array of object ",
      control: {
        type: true,
      },
    },
    direction: {
      description: "set sortable direction default value vertical",
      control: {
        type: "radio",
        options: ["vertical", "horizontal"],
      },
      defaultValue: "vertical",
    },
    onSort: {
      description: "onSort function return changes an array",
      control: {
        type: "function",
      },
    },
    renderItem: {
      description: "renderItem inside reactNode",
      control: {
        type: "function",
      },
    },
    animationDuration: {
      description: "You can change Animation Duration",
      control: {
        type: "number",
      },
      defaultValue: 200,
    },
    customClass: {
      description: "You can add extra class inside customClass props",
      control: {
        type: true,
      },
    },
  },
};
const items = [
  {
    title: `List Item`,
    description: "Aenean aliquam molestie urna, vel aliquam.",
  },
  {
    title: `List Item`,
    description: "Aenean aliquam molestie urna, vel aliquam.",
  },
  {
    title: `List Item`,
    description: "Aenean aliquam molestie urna, vel aliquam.",
  },
  {
    title: `List Item`,
    description: "Aenean aliquam molestie urna, vel aliquam.",
  },
  {
    title: `List Item`,
    description:
      "Aenean aliquam molestie urna, vel aliquam. gf df ghfg hdfgh dfh dfg h fg hjfhj fghj fghj fhgjd dfghdfg dgh dfgh dfgh dfgh fgd hdfgh fg fgh dfgh ghf ghjfghj fghjfghj fghjfgh jfghj fghj fhj fghj fghjfghjfgh jfghjfghjfghj fgh jfgh",
  },
];

const Template = ({ ...rest }) => {
  return (
    <Sortable
      data={items}
      onSort={(items: any) => {}}
      animationDuration={rest.animationDuration}
      renderItem={(item: any, index: number) => (
        <Card title={`Card ${item[index].title} ${index}`} cardType="filled">
          <TextStyles>{item[index].description}</TextStyles>
        </Card>
      )}
      direction={rest.direction}
    />
  );
};

export const Primary = Template.bind({});

// Sortable vertical
export const vertical: any = Template.bind({});
vertical.decorators = [
  () => {
    return (
      <Card title="Sortable Vertical">
        <Sortable
          data={items}
          onSort={(items: any) => {}}
          direction="vertical"
          renderItem={(item: any, index: number) => (
            <Card title={`Card ${item[index].title}`} cardType="filled">
              <TextStyles>{item[index].description}</TextStyles>
            </Card>
          )}
        />
      </Card>
    );
  },
];

// Sortable  horizontal
export const horizontal: any = Template.bind({});
horizontal.decorators = [
  () => {
    return (
      <Card title="Sortable Horizontal">
        <Sortable
          data={items}
          onSort={(items: any) => {}}
          direction="horizontal"
          renderItem={(item: any, index: number) => (
            <Card title={`Card ${item[index].title}`} cardType="filled">
              <TextStyles>{item[index].description}</TextStyles>
            </Card>
          )}
        />
      </Card>
    );
  },
];
