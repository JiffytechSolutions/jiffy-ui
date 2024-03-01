import React from "react";
import { Card } from "../../../Card";
import { DonutChart, donutChartData } from "../DonutChart";
import { FlexLayout } from "../../../FlexLayout";
import DonutChartTemplate from "./DonutChartTemplate";

export default {
  title: "Components/Chart/DonutChart",
  component: DonutChart,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-ver3.0.2-(Production)?type=design&node-id=16582-60451&mode=design&t=vSRg5vCN35kbyqeL-0",
    },
  },
  argTypes: {
    chartData: {
      description: `<div><strong>chartData is an array of object:-</strong></div><i>Accepted key value pairs:</i><table bgcolor="#f5f5f5"><thead><tr><th>key</th><th>value</th></tr></thead><tbody><tr><td>value<span style="color:red">*</span></td><td>Number</td></tr><tr><td>label<span style="color:red">*</span></td><td>String</td></tr><tr><td>color<span style="color:red">*</span></td><td>String</td></tr></tbody></table>`,
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
        "show or hide the tooltip",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    totalItems: {
      description:
        "If you can showing totalItems value then use totalItems prop  and totalItems is an object type",
      control: {
        type: "object",
      },
      defaultValue: { show: false, type: "number" || "percentage" },
    },
    legend: {
      description:
        `Show the legend
          <table>
            <tbody>
              <tr>
                <td>desktop</td>
                <td>Show legend in desktop device or not <code>boolean</code></td>
              </tr>
              <tr>
                <td>tab</td>
                <td>Show legend in tab device or not <code>boolean</code></td>
              </tr>
              <tr>
                <td>mobile</td>
                <td>Show legend in mobile device or not <code>boolean</code></td>
              </tr>
            </tbody>
          </table>
        `,
      control: {
        type: "object",
      },
      defaultValue: { mobile: true, tab: true , desktop: true },
    },
    animationDuration: {
      description:
        "Set the duration of animation in <code> millisecond </code>",
      control: {
        type: "number",
      },
      defaultValue: 2000,
    },
    customClass: {
      description: "Add custom class if need to change the design",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
  },
};
const chartData: donutChartData[] = [
  { value: 30, label: "Series A", color: "red" },
  { value: 40, label: "Series B", color: "blue" },
  { value: 10, label: "Series C", color: "green" },
  { value: 20, label: "Series D", color: "yellow" },
  { value: 15, label: "Series E", color: "#B2DDFF" },
  { value: 10, label: "Series F", color: "#53B1FD" },
  { value: 16, label: "Series F", color: "pink" },
];

const Template = ({ ...rest }) => {
  return (
    <Card>
      <FlexLayout halign="center">
        <DonutChart 
          {...rest} 
          chartData={chartData} 
        />
      </FlexLayout>
    </Card>
  );
};

export const Primary = Template.bind({});

export const DonutChartTemplateWithDemoData = () => <DonutChartTemplate />

