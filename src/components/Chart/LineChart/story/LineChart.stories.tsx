import React from "react";
import LineChart from "../LineChart";
import LineChart2, { dataSetLineChart } from "../LineChart2";
import { Card } from "../../../Card";
import LineChartSvg from "../LineChartSvg";

export default {
  title: "Components/Chart/LineChart",
  component: LineChartSvg,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-ver3.0.2-(Production)?type=design&node-id=16798-42618&mode=design&t=IDeG69ZTIEmrpP9x-0",
    },
  },
}

const demoDataSetLineChart: dataSetLineChart = {
  labels: ["Jan", "Feb", "Mar", "Apr" , "May", "Jun", "Jul", "Aug","Sep", "Oct" , "Nov", "Dec"],
  dataSet: [
    // {
    //   color: "red",
    //   points: Array(12).fill(0).map(i => Math.floor(Math.random()*100)),
    // },
    {
      color: "steelblue",
      points: [10 , 40 , 90 , 20 , 50 , 60 , 60 , 38 , 77 , 49 , 11 , 22]
    },
    // {
    //   color: "green",
    //   points: Array(12).fill(0).map(i => Math.floor(Math.random()*100)),
    // },
  ],
};

const Template = ({ ...rest }) => {
  return (
    <Card>
      <LineChartSvg
        width={800}
        height={450}
        lineType={rest.lineType}
        dataSet={demoDataSetLineChart.dataSet}
        labels={{
          x: demoDataSetLineChart.labels,
          y: 5
        }}
      />
    </Card>
  )
}

export const Primary = Template.bind({})