import React from "react";
// import Card from "../../../components/Card/Card";

import "../../../storybook.css";

import { Logo } from "./Logo"

export default {
  title: "Foundation/Logo",
  component: Logo,
  parameters: {
    docs: {},
  },
};

const Template = ({ }) => {
  return (
    <Logo />
  );
};
export const Primary: any = Template.bind({});
