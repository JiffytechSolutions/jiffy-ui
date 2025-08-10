import { Bell, Home, User } from "react-feather";
import  Topbar  from "./TopBar";
import HorizontalFlex from "../HorizontalFlex/HorizontalFlex";
import React from "react";

export default {
  title: "components/Topbar",
  component: Topbar,
  tags: ["autodocs"],
  argTypes: {},
};

const Template = ({ ...rest }) => {
  return (
    <Topbar
      connectLeft={<Home size={16} />}
      connectRight={
        <HorizontalFlex gap={10}>
          <Bell size={16} />
          <User size={16} />
        </HorizontalFlex>
      }
    />
  );
};
export const Primary = Template.bind({});
