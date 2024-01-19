import React from "react";
import { Card } from "../../../Card";
import PieChart, { PieChartData } from "../PieChart";
import { FlexLayout } from "../../../FlexLayout";

export default {
  title: "Components/PieChart",
  component: PieChart,

  argTypes: {
    height: {
      description: "You can change pie chart height",
      control: {
        type: "number",
      },
      defaultValue: 250,
    },
    width: {
      description: "You can change pie chart width",
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
      defaultValue: true,
    },
    percentage: {
      description:
        "If you can showing total percentage value then use percentage prop and pass the value true",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    customClass: {
      description: "Add custom class",
      control: {
        type: "text",
      },
    },
  },
};
const chartData: PieChartData[] = [
  // { value: 20, label: "Series A", color: "#F0EDFA" },
  // { value: 35, label: "Series B", color: "#C5B8EA" },
  // { value: 20, label: "Series C", color: "#9984DB" },
  // { value: 5, label: "Series D", color: "#D1E9FF" },
  // { value: 15, label: "Series E", color: "#B2DDFF" },
  // { value: 5, label: "Series F", color: "#53B1FD" },
  // { value: 15, label: "Series E", color: "#B2DDFF" },

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
        <PieChart
          {...rest}
          chartData={chartData}
          height={rest.height}
          width={rest.width}
        />
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
        <PieChart percentage chartData={chartData} height={200} width={200} />
      </FlexLayout>
    </Card>
  );
};
// Pie Chart with tooltip
export const PieChartTooltip = ({ ...rest }) => {
  return (
    <Card title="Pie Chart with tooltip (Mouse hover any particular area then showing tooltip)">
      <FlexLayout halign="center">
        <PieChart tooltip chartData={chartData} height={200} width={200} />
      </FlexLayout>
    </Card>
  );
};

// Pie Chart with All
export const PieChartAll = ({ ...rest }) => {
  return (
    <Card title="Pie Chart with tooltip (Mouse hover any particular area then showing tooltip)">
      <FlexLayout spacing="loose">
        <PieChart tooltip chartData={chartData} height={200} width={200} />
        <PieChart
          tooltip
          chartData={[
            { value: 25, label: "Series A", color: "#53B1FD" },
            { value: 25, label: "Series B", color: "#D1E9FF" },
            { value: 25, label: "Series C", color: "#9984DB" },
            { value: 25, label: "Series  ghdfgh dfgh d D", color: "#B2DDFF" },
          ]}
          height={200}
          width={200}
        />
        <PieChart
          tooltip
          chartData={[
            { value: 50, label: "Series A", color: "#53B1FD" },
            { value: 25, label: "Series B", color: "#D1E9FF" },
            { value: 25, label: "Series C", color: "#9984DB" },
          ]}
          height={200}
          width={200}
        />
        <PieChart
          tooltip
          chartData={[
            { value: 50, label: "Series A", color: "#9984DB" },
            { value: 50, label: "Series B", color: "#D1E9FF" },
          ]}
          height={200}
          width={200}
        />
        <PieChart
          tooltip
          chartData={[{ value: 100, label: "Series A", color: "#9984DB" }]}
          height={200}
          width={200}
        />
      </FlexLayout>
    </Card>
  );
};
