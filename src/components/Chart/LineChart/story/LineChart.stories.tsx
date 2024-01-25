import React from "react";
import LineChart from "../LineChart";
import LineChart2, { dataSetLineChart } from "../LineChart2";
import { Card } from "../../../Card";

export default {
    title : "Components/Chart/LineChart",
    component : LineChart,
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-ver3.0.2-(Production)?type=design&node-id=16798-42618&mode=design&t=IDeG69ZTIEmrpP9x-0",
      },
    },
}

const Template = ({...rest}) => {
    const demoDataSetLineChart: dataSetLineChart = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May" , "Jun", "Jul" , "Aug", "Sep", "Oct", "Nov", "Dec"],
        dataSet: [
          {
            color: "#a83232",
            // points: Array(12).fill(0).map(i => Math.floor(Math.random()*100)),
            points : [10 , 20 , 30 , 20 , 10 , 60 , 70 , 80 , 90, 91 , 92 , 93],
            // points:Array(12).fill(0).map(i => Math.ceil(Math.floor(Math.random()*100))),
          },
          // {
          //   color: "#40a832",
          //   points:Array(12).fill(0).map(i => Math.ceil(Math.random()*100)),
          // },
          // {
          //   color: "#a832a2",
          //   points: Array(12).fill(0).map(i => Math.ceil(Math.random()*100)),
          // },
        ],
      };

    return (
        <Card>
          <LineChart {...demoDataSetLineChart}/>
        </Card>
    )
}

export const Primary = Template.bind({})