import React from "react";
import { Card } from "../../../Card";
import { FlexLayout } from "../../../FlexLayout";
import PieChart, { PieChartData } from "../PieChart";

export default {
  title: "Components/Chart/PieChart",
  component:PieChart ,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-ver3.0.2-(Production)?type=design&node-id=16582-60451&mode=design&t=vSRg5vCN35kbyqeL-0",
    },
  },
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
    showTooltip: {
      description:
        "If you can showing tooltip when mouse hover then use showTooltip prop and pass the value true",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    border: {
      description:
        "If you can showing  border in pie chart then use border prop, and border prop accept object",
      control: {
        type: "object",
      },
      defaultValue: { show: false, width: 1, color: "#fff" },
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
  { value: 55, label: "Series A", color: "#F0EDFA" },
  { value: 20, label: "Series B", color: "#C5B8EA" },
  { value: 30, label: "Series C", color: "#9984DB" },
  { value: 15, label: "Series D", color: "#D1E9FF" },
  { value: 15, label: "Series E", color: "#B2DDFF" },
  { value: 10, label: "Series F", color: "#53B1FD" },
];
const chartData1: PieChartData[] = [
  { value: 700, label: "Series A", color: "#5834C3" },
  { value: 600, label: "Series B", color: "#269E6C" },
  { value: 550, label: "Series C", color: "#FEC84B" },
  { value: 400, label: "Series D", color: "#EC5B51" },
  { value: 350, label: "Series C", color: "#9984DB" },
  { value: 300, label: "Series F", color: "#53B1FD" },
];
const Template = ({ ...rest }) => {
  return (
    <Card>
      <FlexLayout halign="center">
        <PieChart {...rest} chartData={chartData} size={rest.height} animationDuration={500}/>
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
        <PieChart percentage chartData={chartData} size={250} />
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
          chartData={[
            { value: 250, label: "Series A", color: "#F0EDFA" },
            { value: 400, label: "Series B", color: "#C5B8EA" },
            { value: 550, label: "Series C", color: "#9984DB" },
            { value: 310, label: "Series D", color: "#D1E9FF" },
            { value: 100, label: "Series E", color: "#B2DDFF" },
          ]}
          size={250}
          tooltip={{ show: true, type: "percentage" }}
        />

        <PieChart
          chartData={[
            { value: 250, label: "Series A", color: "#F0EDFA" },
            { value: 400, label: "Series B", color: "#C5B8EA" },
            { value: 550, label: "Series C", color: "#9984DB" },
            { value: 310, label: "Series D", color: "#D1E9FF" },
            { value: 100, label: "Series E", color: "#B2DDFF" },
          ]}
          size={250}
          tooltip={{ show: true, type: "value" }}
        />
      </FlexLayout>
    </Card>
  );
};

// Pie Chart with All
export const PieChartWithBorder = ({ ...rest }) => {
  return (
    <Card title="Pie Chart with tooltip (Mouse hover any particular area then showing tooltip)">
      <FlexLayout spacing="loose" wrap="wrap">
        <PieChart
          percentage
          chartData={chartData}
          size={250}
          border={{ show: true, width: 1, color: "red" }}
          tooltip={{ show: true, type: "value" }}
        />
        <PieChart
          percentage
          chartData={chartData1}
          size={250}
          border={{ show: true, width: 1, color: "#fff" }}
          tooltip={{ show: true, type: "value" }}
        />
        <PieChart
          chartData={chartData1}
          size={250}
          border={{ show: true, width: 1, color: "#000" }}
          tooltip={{ show: true, type: "value" }}
        />
        <PieChart
          chartData={chartData1}
          size={250}
          border={{ show: true, width: 1, color: "#fff" }}
          tooltip={{ show: true, type: "value" }}
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
        <PieChart
          tooltip={{ show: true, type: "value" }}
          percentage
          chartData={chartData}
          size={250}
        />
        <PieChart
          tooltip={{ show: true, type: "value" }}
          percentage
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
          tooltip={{ show: true, type: "value" }}
          percentage
          chartData={[
            { value: 25, label: "Series A", color: "#53B1FD" },
            { value: 25, label: "Series B", color: "#D1E9FF" },
            { value: 25, label: "Series C", color: "#9984DB" },
            { value: 25, label: "Series D", color: "#B2DDFF" },
          ]}
          size={200}
        />
        <PieChart
          tooltip={{ show: true, type: "value" }}
          percentage
          chartData={[
            { value: 50, label: "Series A", color: "#53B1FD" },
            { value: 25, label: "Series B", color: "#D1E9FF" },
            { value: 25, label: "Series C", color: "#9984DB" },
          ]}
          size={200}
        />
        <PieChart
          tooltip={{ show: true, type: "value" }}
          percentage
          chartData={[
            { value: 50, label: "Series A", color: "#9984DB" },
            { value: 50, label: "Series B", color: "#D1E9FF" },
          ]}
          size={200}
        />
        <PieChart
          tooltip={{ show: true, type: "value" }}
          percentage
          chartData={[{ value: 100, label: "Series A", color: "#9984DB" }]}
          size={200}
        />
      </FlexLayout>
    </Card>
  );
};
