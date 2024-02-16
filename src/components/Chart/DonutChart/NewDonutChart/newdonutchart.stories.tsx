import React from "react";
import { Card } from "../../../Card";
import DonutChart, { donutChartData } from "../DonutChart";
import { FlexLayout } from "../../../FlexLayout";
import { NewDonutChart } from "./NewDonutChart";

export default {
  title: "Components/Chart/NewDonutChart",
  component: NewDonutChart,
};

const chartData: donutChartData[] = [
  { value: -150, label: "Series A", color: "blue" },
  { value: 250, label: "Series B", color: "pink" },
  { value: 120, label: "Series C", color: "silver" },
  { value: -60, label: "Series D", color: "#D1E9FF" },

  { value: -150, label: "Series E", color: "#B2DDFF" },
  { value: 400, label: "Series F", color: "#53B1FD" },
];

const Template = ({ ...rest }) => {
  return (
    <Card>
      <FlexLayout halign="center" spacing="extraLoose">
        <NewDonutChart chartData={chartData} border />
        <NewDonutChart chartData={chartData} />
      </FlexLayout>
    </Card>
  );
};

export const Primary = Template.bind({});
