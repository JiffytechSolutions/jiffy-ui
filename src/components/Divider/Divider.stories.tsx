import React from "react";
import Divider from "./Divider";
import FlexLayout from "../FlexLayout/FlexLayout";
import TextStyle from "../TextStyle/TextStyle";
import VerticalStack from "../VerticalStack/VerticalStack";

const thickness = ["Thinner", "Thin", "Thick", "Thicker"];
const type = ["Solid", "Dashed", "Dotted"];
const color = ["Normal", "Subtile", "Muted"];
const orientation = ["Horizontal", "Vertical"];

export default {
  title: "Components/Divider",
  component: Divider,
  parameters: { docs: { autodocs: true, }, },

  argTypes: {
    thickness: {
      description: "Select thickness",
      control: {
        type: "radio",
        options: thickness,
      },
      defaultValue: "Label",
    },
    type: {
      description: "select type",
      control: {
        type: "radio",
        options: type,
      },
      defaultValue: "Label",
    },
    color: {
      description: "Select Color",
      control: {
        type: "radio",
        options: color,
      },
      defaultValue: "",
    },
    orientation: {
      description: "Select Orientation",
      control: {
        type: "radio",
        options: orientation,
      },
      defaultValue: "",
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <Divider
      orientation={rest.orientation}
      color={rest.color}
      type={rest.type}
      thickness={rest.thikness}
    />
  );
};
export const Primary = Template.bind({});

//Divider with multiple thickness
export const Divider_with_multiple_thickness: any = Template.bind({});
Divider_with_multiple_thickness.decorators = [
  () => {
    return (
      <VerticalStack gap={4}>
        {thickness.map((thickness: any, ind) => (
          <VerticalStack gap={4} key={ind} align={"stretch"}>
            <TextStyle as="legend" alignment="center" fontWeight="medium">
              {thickness}
            </TextStyle>
            <Divider
              orientation="Horizontal"
              key={ind}
              color="Normal"
              type="Solid"
              thickness={thickness}
            />
          </VerticalStack>
        ))}
      </VerticalStack>
    );
  },
];

//Divider with multiple type
export const Divider_with_multiple_style: any = Template.bind({});
Divider_with_multiple_style.decorators = [
  () => {
    return (
      <VerticalStack gap={4}>
        {type.map((type: any, ind) => (
          <VerticalStack gap={4} key={ind}  align={"stretch"} justifyContent={"between"}>
            <TextStyle as="legend" alignment="center" fontWeight="medium">
              {type}
            </TextStyle>
            <Divider
              orientation="Horizontal"
              key={ind}
              color="Normal"
              type={type}
              thickness={"Thin"}
            />
          </VerticalStack>
        ))}
      </VerticalStack>
    );
  },
];

//Divider with multiple color
export const Divider_with_multiple_color: any = Template.bind({});
Divider_with_multiple_color.decorators = [
  () => {
    return (
      <VerticalStack gap={4}>
        {color.map((color: any, ind) => (
          <VerticalStack gap={4} key={ind} align={"stretch"}>
            <TextStyle as="legend" alignment="center" fontWeight="medium">
              {color}
            </TextStyle>
            <Divider
              orientation="Horizontal"
              key={ind}
              color={color}
              type="Solid"
              thickness={"Thin"}
            />
          </VerticalStack>
        ))}
      </VerticalStack>
    );
  },
];

//Divider with multiple orientation
export const Divider_with_multiple_orientation: any = Template.bind({});
Divider_with_multiple_orientation.decorators = [
  () => {
    return (
      <VerticalStack gap={4}>
        {orientation.map((orientation: any, ind) => (
          <VerticalStack gap={4} key={ind} align={"stretch"}>
            <TextStyle as="legend" alignment="center" fontWeight="medium">
              {orientation}
            </TextStyle>
            <Divider
              orientation={orientation}
              key={ind}
              color="Normal"
              type="Solid"
              thickness={"Thin"}
            />
          </VerticalStack>
        ))}
      </VerticalStack>
    );
  },
];


