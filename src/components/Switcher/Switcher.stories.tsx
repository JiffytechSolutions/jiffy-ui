import React from "react";
import Switcher from "./Switcher";
import FlexLayout from "../FlexLayout/FlexLayout";

export default {
  title: "components/Switcher",
  component: Switcher,
  parameters: { docs: { autodocs: true, }, },
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
      <FlexLayout gap={4}>
        <Switcher isDisabled label="unchecked" />
        <Switcher isDisabled checked label="checked" />
      </FlexLayout>
    );
  },
];
