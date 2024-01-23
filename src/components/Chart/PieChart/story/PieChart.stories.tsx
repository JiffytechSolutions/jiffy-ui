import React from "react";
import { Card } from "../../../Card";
import PieChart, { PieChartData } from "../PieChart";
import { FlexLayout } from "../../../FlexLayout";

export default {
  title: "Components/Chart/PieChart",
  component: PieChart,

  argTypes: {
    chartData: {
      description: `<div><strong>chartData is an array of object:-</strong></div><i>Accepted key value pairs:</i><table bgcolor="#f5f5f5"><thead><tr><th>key</th><th>value</th></tr></thead><tbody><tr><td>value<span style="color:red">*</span></td><td>Number | String</td></tr><tr><td>label<span style="color:red">*</span></td><td>String</td></tr><tr><td>color<span style="color:red">*</span></td><td>String</td></tr></tbody></table>`,
      control: {
        type: false,
      },
    },
    size: {
      description:
        "If you are change the pie chart height and width then use size prop",
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
const chartData: PieChartData[] = [
  { value: 25, label: "Series A", color: "#F0EDFA" },
  { value: 20, label: "Series B", color: "#C5B8EA" },
  { value: 15, label: "Series C", color: "#9984DB" },
  { value: 15, label: "Series D", color: "#D1E9FF" },
  { value: 15, label: "Series E", color: "#B2DDFF" },
  { value: 10, label: "Series F", color: "#53B1FD" },
];
const Template = ({ ...rest }) => {
  return (
    <Card>
      <FlexLayout halign="center">
        <PieChart {...rest} chartData={chartData} size={rest.height} />
      </FlexLayout>
    </Card>
  );
};

export const Primary = Template.bind({});

// Pie Chart Percentage
export const PieChartPercentage = ({ ...rest }) => {
  return (
    <Card title="Pie Chart with showing total percentage">
      <FlexLayout halign="center">
        <PieChart totalPercentage chartData={chartData} size={250} />
      </FlexLayout>
    </Card>
  );
};

// Pie Chart with tooltip
export const PieChartTooltip = ({ ...rest }) => {
  return (
    <Card title="Pie Chart with tooltip (Mouse hover any particular area then showing tooltip)">
      <FlexLayout spacing="mediumLoose" wrap="wrap" halign="center">
        <PieChart
          tooltip
          chartData={[
            { value: 250, label: "Series A", color: "#F0EDFA" },
            { value: 400, label: "Series B", color: "#C5B8EA" },
            { value: 550, label: "Series C", color: "#9984DB" },
            { value: 310, label: "Series D", color: "#D1E9FF" },
            { value: 100, label: "Series E", color: "#B2DDFF" },
          ]}
          size={250}
          tooltipValue="percentage"
        />

        <PieChart
          tooltip
          chartData={[
            { value: 250, label: "Series A", color: "#F0EDFA" },
            { value: 400, label: "Series B", color: "#C5B8EA" },
            { value: 550, label: "Series C", color: "#9984DB" },
            { value: 310, label: "Series D", color: "#D1E9FF" },
            { value: 100, label: "Series E", color: "#B2DDFF" },
          ]}
          size={250}
          tooltipValue="value"
        />
      </FlexLayout>
    </Card>
  );
};

// Pie Chart with All
export const PieChartAll = ({ ...rest }) => {
  return (
    <Card title="Pie Chart with tooltip (Mouse hover any particular area then showing tooltip)">
      <FlexLayout spacing="loose" wrap="wrap">
        <PieChart tooltip totalPercentage chartData={chartData} size={250} />
        <PieChart
          tooltip
          totalPercentage
          chartData={[
            { value: 25, label: "Series A", color: "#F0EDFA" },
            { value: 15, label: "Series B", color: "#C5B8EA" },
            { value: 20, label: "Series C", color: "#9984DB" },
            { value: 15, label: "Series D", color: "#D1E9FF" },
            { value: 25, label: "Series E", color: "#B2DDFF" },
          ]}
          size={250}
        />
        <PieChart
          tooltip
          totalPercentage
          chartData={[
            { value: 25, label: "Series A", color: "#53B1FD" },
            { value: 25, label: "Series B", color: "#D1E9FF" },
            { value: 25, label: "Series C", color: "#9984DB" },
            { value: 25, label: "Series D", color: "#B2DDFF" },
          ]}
          size={200}
        />
        <PieChart
          tooltip
          totalPercentage
          chartData={[
            { value: 50, label: "Series A", color: "#53B1FD" },
            { value: 25, label: "Series B", color: "#D1E9FF" },
            { value: 25, label: "Series C", color: "#9984DB" },
          ]}
          size={200}
        />
        <PieChart
          tooltip
          totalPercentage
          chartData={[
            { value: 50, label: "Series A", color: "#9984DB" },
            { value: 50, label: "Series B", color: "#D1E9FF" },
          ]}
          size={200}
        />
        <PieChart
          tooltip
          totalPercentage
          chartData={[{ value: 100, label: "Series A", color: "#9984DB" }]}
          size={200}
        />
      </FlexLayout>
    </Card>
  );
};
