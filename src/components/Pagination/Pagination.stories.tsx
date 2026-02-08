
import React from "react";
import TextStyle from "../TextStyle/TextStyle";
import  Pagination  from "./Pagination";
export default {
  title: "components/Pagination",
  component: Pagination,
  parameters: { docs: { autodocs: true, }, },
  argTypes: {},
};
const Template = ({ ...rest }) => {
  return <Pagination isNextDisable={true}>Content</Pagination>;
};
export const Primary = Template.bind({});

export const PaginationInTable: any = Template.bind({});
PaginationInTable.decorators = [
  () => {
    return <Pagination type="center">Content</Pagination>;
  },
];

export const PaginationWithAllFeatures: any = Template.bind({});
PaginationWithAllFeatures.decorators = [
  () => {
    return (
      <Pagination
        type="end"
        primaryAction={<TextStyle as="span">lorem ipsum</TextStyle>}
      >
        Content
      </Pagination>
    );
  },
];
