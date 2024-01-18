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
      defaultValue: false,
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
      description: "Add custom class",
      control: {
        type: "text",
      },
    },
  },
};

const Template = ({ ...rest }) => {
  const chartData: PieChartData[] = [
    { value: 25, label: "Series A", color: "#F0EDFA" },
    { value: 20, label: "Series B", color: "#C5B8EA" },
    { value: 15, label: "Series C", color: "#9984DB" },
    { value: 15, label: "Series D", color: "#D1E9FF" },
    { value: 15, label: "Series E", color: "#B2DDFF" },
    { value: 10, label: "Series F", color: "#53B1FD" },
  ];

  return (
    <Card>
      <FlexLayout halign="center">
        <PieChart
          chartData={chartData}
          height={rest.height}
          width={rest.width}
        />
      </FlexLayout>
    </Card>
  );
};

export const Primary = Template.bind({});
