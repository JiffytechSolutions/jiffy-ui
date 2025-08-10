import React from "react";
import HorizontalFlex from "../HorizontalFlex/HorizontalFlex";
import Switcher from "./Switcher";

export default {
  title: "components/Switcher",
  component: Switcher,
  tags: ["autodocs"],
  argTypes: {},
};

const Template = ({ ...rest }) => {
  return <Switcher label="Switcher" />;
};
export const Primary = Template.bind({});

export const DisabledSwitcher: any = Template.bind({});
DisabledSwitcher.decorators = [
  () => {
    return (
      <HorizontalFlex gap={10}>
        <Switcher isDisabled label="unchecked" />
        <Switcher isDisabled checked label="checked" />
      </HorizontalFlex>
    );
  },
];
