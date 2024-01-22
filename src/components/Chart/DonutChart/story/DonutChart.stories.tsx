import React from "react";
import { Card } from "../../../Card";
import DonutChart from "../DonutChart";

export default {
  title: "Components/Chart/DonutChart",
  component: DonutChart,

  argTypes: {
    chartData: {
      description: `<div><strong>chartData is an array of object:-</strong></div><i>Accepted key value pairs:</i><table bgcolor="#f5f5f5"><thead><tr><th>key</th><th>value</th></tr></thead><tbody><tr><td>value<span style="color:red">*</span></td><td>Number</td></tr><tr><td>label<span style="color:red">*</span></td><td>String</td></tr><tr><td>color<span style="color:red">*</span></td><td>String</td></tr></tbody></table>`,
      control: {
        type: false,
      },
    },

    size: {
      description: "You can change pie chart size",
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
    percentage: {
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
    { value: 250, label: "Series A", color: "rgb(154, 111, 176)" },
    { value: 250, label: "Series B", color: "rgb(224, 172, 43)" },
    { value: 150, label: "Series C", color: "rgb(102, 137, 198)" },
    // { value: 105, label: "Series D", color: "rgb(165, 50, 83)" },
    // { value: 50, label: "Series E", color: "rgb(232, 82, 82)" },
    // { value: 300, label: "Series F", color: "pink" },
  ];

  return (
    <Card>
      <DonutChart {...rest} chartData={chartData} />
    </Card>
  );
};

export const Primary = Template.bind({});
