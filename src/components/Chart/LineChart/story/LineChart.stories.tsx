import React from "react";
import LineChart from "../LineChart";
import LineChart2, { dataSetLineChart } from "../LineChart2";
import { Card } from "../../../Card";
import LineChartSvg from "../LineChartSvg";

export default {
    title : "Components/Chart/LineChart",
    component : LineChartSvg,
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
            points : [5 , 20 , 35 , 20 , 10 , 65 , 70 , 80 , 90, 0 , 92 , 93],
            // points:Array(12).fill(0).map(i => Math.ceil(Math.floor(Math.random()*100))),
          },
          // {
          //   color: "#40a832",
          //   points:Array(12).fill(0).map(i => Math.ceil(Math.random()*90)),
          // },
          // {
          //   color: "#a832a2",
          //   points: Array(12).fill(0).map(i => Math.ceil(Math.random()*100)),
          // },
        ],
      };

    return (
        <Card>
          <LineChartSvg 
            width={800}
            height={500}
            lineType={rest.lineType}
            dataSet={demoDataSetLineChart.dataSet}
            labels={{
              x : demoDataSetLineChart.labels,
              y : 10
            }}
            graphScale = {{
              color: "#9B9EA5",
              lineWidth: 2,
              cutGap: 12,
              cutSize: 9,
              cutPosition: "center",
              textColor: "#1C2433"
            }}
          />
        </Card>
    )
}

export const Primary = Template.bind({})