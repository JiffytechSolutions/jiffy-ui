import React from "react";
import  Breadcrumb  from "./Breadcrumb";

export default {
  title: "components/Breadcrumb",
  component: Breadcrumb,
  parameters: { docs: { autodocs: true, }, },
  argTypes: {},
};

const items = [
  { label: "Home", value: "Home" },
  { label: "Room", value: "Room" },
  { label: "Furniture", value: "Furniture" },
  { label: "Tv", value: "Tv" },
];

const Template = ({ ...rest }) => {
  return <Breadcrumb items={items} />;
};

export const Primary = Template.bind({});
