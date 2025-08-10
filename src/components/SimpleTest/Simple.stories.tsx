import React from "react";
import SimpleTest from "./SimpleTest";

const size = ["Small", "Medium", "Large"];

export default {
  title: "Components/Simple",
  component: SimpleTest,
};
const Template = ({ ...rest }) => {
  return (
   <SimpleTest>new</SimpleTest>
  );
};

export const Primary = Template.bind({});


