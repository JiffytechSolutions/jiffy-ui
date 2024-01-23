import React from "react";
import Linechart from "../Linechart";
import LineChart2, { dataSetLineChart } from "../LineChart2";

export default {
    title : "Components/Chart/LineChart",
    component : Linechart
}

const Template = ({...rest}) => {
    const chartData = [
        Array(5).fill(0).map(i => Math.floor(Math.random()*2000)),
        Array(5).fill(0).map(i => Math.floor(Math.random()*2000)),
        Array(5).fill(0).map(i => Math.floor(Math.random()*2000))
    ];

    const demoDataSetLineChart: dataSetLineChart = {
        labels: ["January", "February", "March", "April", "May" , "June", "July" , "August", "September", "October", "November", "December"],
        dataSet: [
          {
            color: "#a83232",
            points: Array(12).fill(0).map(i => Math.floor(Math.random()*1000)),
          },
          {
            color: "#40a832",
            points:Array(12).fill(0).map(i => Math.floor(Math.random()*1000)),
          },
        //   {
        //     color: "#a832a2",
        //     points: Array(12).fill(0).map(i => Math.floor(Math.random()*1000)),
        //   },
        ],
      };

    return (
        <LineChart2 {...demoDataSetLineChart}/>
    )
}

export const Primary = Template.bind({})