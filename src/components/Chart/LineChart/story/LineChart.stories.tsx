import React from "react";
import { Card } from "../../../Card";
import LineChart, { LineChartI } from "../LineChart";

export default {
  title: "Components/Chart/LineChart",
  component: LineChart,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-ver3.0.2-(Production)?type=design&node-id=16798-42618&mode=design&t=IDeG69ZTIEmrpP9x-0",
    },
  },
  argTypes: {
    width: {
      description: "Set the width of LineChart",
      control: {
        type: "text",
        disable: true
      },
    },
    height: {
      description: "Set the height of LineChart",
      control: {
        type: "text",
        disable: true
      },
    },
    lineType: {
      description: "Set the type of line",
      control: {
        type: 'radio',
        options: ["curved", "straight"],
      },
    },
    labels: {
      description: `Set the labels of chart  
      <table>
        <tbody>
          <tr>
            <td>x</td>
            <td>give array of string <code>or</code> total number of label (For X-axis)</td>
          </tr>
          <tr>
            <td>y</td>
            <td>give array of string <code>or</code> total number of label (For Y-axis)</td>
          </tr>
        </tbody>
      </table>`,
      control: {
        disable: true
      },
    },
    dataSet: {
      description: `Set The dataPoints of chart according to Y-axis <code>Takes Array of object and every object have below properties</code>
        <table>
        <tbody>
          <tr>
            <td>name</td>
            <td>Name for the dataSet points</td>
          </tr>
          <tr>
            <td>color</td>
            <td>Color for the dataSet Points</td>
          </tr>
          <tr>
            <td>points</td>
            <td>Array of Number (Points on Y-axis)</td>
          </tr>
          <tr>
            <td colspan="2">Note<span style="color:red">*</span> Length of Points >= labels.length</td>
          </tr>
        </tbody>
      </table>`,
      control: {
        disable: true
      },
    },
    xPadding: {
      description: "Spacing from the left of the chart",
      control: {
        type: 'number',
      },
      defaultValue: 60
    },
    yPadding: {
      description: "Spacing from the bottom of the chart",
      control: {
        type: 'number',
      },
      defaultValue: 50
    },
    showBackgroundGrid: {
      description: "Whether to show the background grid or not",
      control: {
        type: 'boolean',
      },
      defaultValue: true
    },
    legend: {
      description: "Whether to show the legend and its positioning",
      control: {
        type: 'radio',
        options: ["top", "bottom"]
      },
      defaultValue: "bottom"
    },
    customClass: {
      description: "Add custom class to the Chart",
      control: {
        type: 'text',
      },
      defaultValue: ""
    }
  }
}

const demoDataSetLineChart: LineChartI = {
  labels: {
    x: ['January', 'February', 'March', 'April', 'May'],
    y: 5
  },
  dataSet: [
    {
      name: "Orders",
      color: "red",
      points: [40, 70, 80, 25, 90],
    },
    {
      color: "blue",
      points: [60, 30, 80, 95, 20],
      name: "Sales"
    },
    {
      name: "Purchase",
      color: "green",
      points: [20, 50, 80, 40, 20],
    },
  ],
};

const Template = ({ ...rest }) => {
  return (
    <Card>
      <LineChart
        {...rest}
        width={"100%"}
        height={500}
        legend={{ show: true, position: rest.legend }}
        dataSet={[demoDataSetLineChart.dataSet[2]]}
        labels={demoDataSetLineChart.labels}
      />
    </Card>
  )
}

export const Primary = Template.bind({})

export const LineChartWith3Lines = ({ ...rest }) => {
  return (
    <Card>
      <LineChart
        {...rest}
        width={"100%"}
        height={500}
        lineType={"curved"}
        dataSet={demoDataSetLineChart.dataSet}
        labels={demoDataSetLineChart.labels}
        legend={{ show: true, position: rest.legend }}
      />
    </Card>
  )
}

export const LineChartWithStraightLines = ({ ...rest }) => {
  return (
    <Card>
      <LineChart
        {...rest}
        width={"100%"}
        height={500}
        lineType={"straight"}
        dataSet={[demoDataSetLineChart.dataSet[1]]}
        labels={demoDataSetLineChart.labels}
        legend={{ show: true, position: rest.legend }}
      />
    </Card>
  )
}