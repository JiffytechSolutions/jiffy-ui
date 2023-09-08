import React from "react";
import Loader from "../Loader";

export default {
  title: "Components/Behaviour/Loader",
  component: Loader,
  argTypes: {
    title: {
      description: "set Loader title",
      control: {
        type: "text",
      },
      defaultValue: "We are Setting Up your Store",
    },
    subtitle: {
      description: "set Loader 3 subTitle",
      control: {
        type: "text",
      },
      defaultValue: "Hold On Magic is in Progress !!!",
    },
    percentage: {
      description: "set Loader 3 percentage Value",
      control: {
        type: "number",
      },
      defaultValue: 20,
    },
    type: {
      description: "set Loader type",
      control: {
        type: "radio",
        options: ["L-1", "L-2", "L-3"],
      },
      defaultValue: "L-1",
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <>
      <Loader
        percentage={rest.percentage}
        type={rest.type}
        title={rest.title}
        subtitle={rest.subtitle}
      />
    </>
  );
};

export const Primary = Template.bind({});
// Loder 1
export const Loder1: any = Template.bind({});
Loder1.decorators = [() => <Loader type="L-1" title={"title"} />];
// Loader 2
export const Loder2: any = Template.bind({});
Loder2.decorators = [() => <Loader type="L-2" title={"title"} />];

// Loader 3
export const Loder3: any = Template.bind({});
Loder3.decorators = [
  () => (
    <Loader
      percentage={3}
      subtitle="loader with subtitle"
      type="L-3"
      title={"title"}
    />
  ),
];
