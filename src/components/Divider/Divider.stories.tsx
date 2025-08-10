import React from "react";
import Divider from "./Divider";
import VerticalFlex from "../VerticalFlex/VerticalFlex";
import TextStyle from "../TextStyle/TextStyle";

const thickness = ["Thinner", "Thin", "Thick", "Thicker"];
const type = ["Solid", "Dashed", "Dotted"];
const color = ["Normal", "Subtile", "Muted"];
const orientation = ["Horizontal", "Vertical"];

export default {
  title: "Components(Done)/Divider",
  component: Divider,
  tags: ["autodocs"],

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
      <VerticalFlex gap={36}>
        {thickness.map((thickness: any, ind) => (
          <VerticalFlex gap={8} key={ind}>
            <TextStyle as="legend" alignment="Center" fontWeight="Medium">
              {thickness}
            </TextStyle>
            <Divider
              orientation="Horizontal"
              key={ind}
              color="Normal"
              type="Solid"
              thickness={thickness}
            />
          </VerticalFlex>
        ))}
      </VerticalFlex>
    );
  },
];

//Divider with multiple type
export const Divider_with_multiple_style: any = Template.bind({});
Divider_with_multiple_style.decorators = [
  () => {
    return (
      <VerticalFlex gap={36}>
        {type.map((type: any, ind) => (
          <VerticalFlex gap={8} key={ind}>
            <TextStyle as="legend" alignment="Center" fontWeight="Medium">
              {type}
            </TextStyle>
            <Divider
              orientation="Horizontal"
              key={ind}
              color="Normal"
              type={type}
              thickness={"Thin"}
            />
          </VerticalFlex>
        ))}
      </VerticalFlex>
    );
  },
];

//Divider with multiple color
export const Divider_with_multiple_color: any = Template.bind({});
Divider_with_multiple_color.decorators = [
  () => {
    return (
      <VerticalFlex gap={36}>
        {color.map((color: any, ind) => (
          <VerticalFlex gap={8} key={ind}>
            <TextStyle as="legend" alignment="Center" fontWeight="Medium">
              {color}
            </TextStyle>
            <Divider
              orientation="Horizontal"
              key={ind}
              color={color}
              type="Solid"
              thickness={"Thin"}
            />
          </VerticalFlex>
        ))}
      </VerticalFlex>
    );
  },
];

//Divider with multiple orientation
export const Divider_with_multiple_orientation: any = Template.bind({});
Divider_with_multiple_orientation.decorators = [
  () => {
    return (
      <VerticalFlex gap={36}>
        {orientation.map((orientation: any, ind) => (
          <VerticalFlex gap={8} key={ind}>
            <TextStyle as="legend" alignment="Center" fontWeight="Medium">
              {orientation}
            </TextStyle>
            <Divider
              orientation={orientation}
              key={ind}
              color="Normal"
              type="Solid"
              thickness={"Thin"}
            />
          </VerticalFlex>
        ))}
      </VerticalFlex>
    );
  },
];

//Dot Indicator with all colors
// export const dot_indicators_with_all_colors: any = Template.bind({});
// dot_indicators_with_all_colors.decorators = [
//     () => {
//         return (
//             <HorizontalFlex gap={20}>
//                 {color.map((color: any, ind) => (
//                     <Indicator
//                         key={ind}
//                         color={color}
//                         label={color}
//                         showLabel={false}
//                     />
//                 ))}
//             </HorizontalFlex>
//         );
//     },
// ];

//Label Indicator with all sizes
// export const Label_Indicator_with_all_sizes: any = Template.bind({});
// Label_Indicator_with_all_sizes.decorators = [
//     () => {
//         return (
//             <HorizontalFlex gap={20}>
//                 {size.map((size: any, ind) => (
//                     <Indicator
//                         key={ind}
//                         color="Positive"
//                         label={size}
//                         size={size}
//                     />
//                 ))}
//             </HorizontalFlex>
//         );
//     },
// ];

//Dot Indicator with all sizes
// export const Dot_Indicator_with_all_sizes: any = Template.bind({});
// Dot_Indicator_with_all_sizes.decorators = [
//     () => {
//         return (
//             <HorizontalFlex gap={20}>
//                 {size.map((size: any, ind) => (
//                     <Indicator
//                         key={ind}
//                         color="Positive"
//                         label={size}
//                         showLabel={false}
//                         size={size}
//                     />
//                 ))}
//             </HorizontalFlex>
//         );
//     },
// ];
