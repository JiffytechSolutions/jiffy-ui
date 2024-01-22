import React from "react";
import Linechart from "../Linechart";

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
    return (
        <Linechart datasets={chartData}/>
    )
}

export const Primary = Template.bind({})