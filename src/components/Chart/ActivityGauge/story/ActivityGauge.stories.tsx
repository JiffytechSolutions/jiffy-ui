import React from "react";
import { Card } from "../../../Card";

import { FlexLayout } from "../../../FlexLayout";
import ActivityGauge, { SegmentData } from "../ActivityGauge";

export default {
  title: "Components/Chart/ActivityGauge",
  component: ActivityGauge,
  argTypes: {
    chartData: {
      description: `<div><strong>chartData is an array of object:-</strong></div><i>Accepted key value pairs:</i><table bgcolor="#f5f5f5"><thead><tr><th>key</th><th>value</th></tr></thead><tbody><tr><td>value<span style="color:red">*</span></td><td>Number | String</td></tr><tr><td>label<span style="color:red">*</span></td><td>String</td></tr><tr><td>color<span style="color:red">*</span></td><td>String</td></tr></tbody></table>`,
      control: {
        type: false,
      },
    },
    size: {
      description:
        "If you are change the Donut chart height and width then use size prop",
      control: {
        type: "number",
      },
      defaultValue: 250,
    },

    tooltip: {
      description:
        "If you can showing tooltip when mouse hover then use tooltip prop and pass the value true",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    tooltipValue: {
      description:
        "If you can showing tooltip value percentage or value then use tooltipValue prop and select inside options",
      control: {
        type: "radio",
        options: ["percentage", "value"],
      },
      defaultValue: "percentage",
    },
    totalPercentage: {
      description:
        "If you can showing total percentage value then use percentage prop and pass the value true",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    customClass: {
      description: "Add custom class if need to change the design",
      control: {
        type: "text",
      },
    },
  },
};

const Template = ({ ...rest }) => {
  const chartData = [
    { value: 800, total: "900", label: "Series A", color: "#C5B8EA" },
    // { value: 700, total: "800", label: "Series B", color: "#F0EDFA" },
    // { value: 600, total: "700", label: "Series C", color: "#9984DB" },
    // { value: 500, total: "600", label: "Series D", color: "#D1E9FF" },
    // { value: 400, total: "500", label: "Series E", color: "#B2DDFF" },
    // { value: "500", total: "700", label: "Series F", color: "#53B1FD" },
  ];
  return (
    <Card>
      <FlexLayout halign="center">
        <ActivityGauge chartData={chartData} {...rest} />
      </FlexLayout>
    </Card>
  );
};

export const Primary = Template.bind({});
