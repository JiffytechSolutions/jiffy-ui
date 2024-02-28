import React from "react";
import { Card } from "../../../Card";
import BarChart from "../BarChart";

export default {
  title: "Components/Chart/BarChart",
  component: BarChart,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-ver3.0.2-(Production)?type=design&node-id=16849-32209&mode=design&t=Uw1cX8yCxV8aUaWj-0",
    },
  },
  argTypes: {
    chartData: {
      description: `<div><strong>chartData is an array of object:-</strong></div><i>Accepted key value pairs:</i><table bgcolor="#f5f5f5"><thead><tr><th>key</th><th>value</th></tr></thead><tbody><tr><td>value<span style="color:red">*</span></td><td>Number</td></tr><tr><td>label<span style="color:red">*</span></td><td>String</td></tr><tr><td>color<span style="color:red">*</span></td><td>String</td></tr><tr><td>total<span style="color:red">*</span></td><td>Number</td></tr></tbody></table>`,
      control: {
        type: false,
      },
    },

    customClass: {
      description: "Add custom class if need to change the design",
      control: {
        type: "text",
      },
    },
  },
};

const demoDataSetLineChart = {
  labels: {
    x: ["Jan", "Feb", "Mar"],
    y: 10,
  },
  dataSet: [
    {
      name: "Products",
      color: "red",
      points: [65, 80, 90],
    },
    {
      name: "Orders",
      color: "blue",
      points: [45, 50, 70],
    },
    {
      name: "Variants",
      color: "green",
      points: [30, 40, 50],
    },
    // {
    //   name: "Variants",
    //   color: "yellow",
    //   points: [26, 30, 45],
    // },
    // {
    //   name: "Orders",
    //   color: "blue",
    //   points: [45, 50, 70],
    // },
    // {
    //   name: "Variants",
    //   color: "green",
    //   points: [30, 40, 50],
    // },
  ],
};
const Template = ({ ...rest }) => {
  return (
    <Card>
      <BarChart
        {...rest}
        width={"100%"}
        height={500}
        backgroundGrid={{
          xLines: {
            color: "steelblue",
            type: "dashed",
            show: true,
          },
          yLines: {
            color: "silver",
            type: "dashed",
            show: true,
          },
        }}
        legend={{ show: true, position: rest.legend }}
        dataSet={demoDataSetLineChart.dataSet}
        labels={demoDataSetLineChart.labels}
      />
    </Card>
  );
};

export const Primary = Template.bind({});
