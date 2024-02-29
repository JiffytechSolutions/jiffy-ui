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
    // chartData: {
    //   description: `<div><strong>chartData is an array of object:-</strong></div><i>Accepted key value pairs:</i><table bgcolor="#f5f5f5"><thead><tr><th>key</th><th>value</th></tr></thead><tbody><tr><td>value<span style="color:red">*</span></td><td>Number</td></tr><tr><td>label<span style="color:red">*</span></td><td>String</td></tr><tr><td>color<span style="color:red">*</span></td><td>String</td></tr><tr><td>total<span style="color:red">*</span></td><td>Number</td></tr></tbody></table>`,
    //   control: {
    //     type: false,
    //   },
    // },
    // customClass: {
    //   description: "Add custom class if need to change the design",
    //   control: {
    //     type: "text",
    //   },
    // },
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

    // {
    //   name: "Variants",
    //   color: "green",
    //   points: [30, 40, 50],
    // },
    // {
    //   name: "Variants",
    //   color: "yellow",
    //   points: [26, 30, 45],
    // },

    // {
    //   name: "Orders",
    //   color: "magenta",
    //   points: [45, 50, 70],
    // },
    // {
    //   name: "Variants",
    //   color: "purple",
    //   points: [30, 40, 50],
    // },
    // {
    //   name: "Variants",
    //   color: "steelblue",
    //   points: [30, 40, 50],
    // },
    // {
    //   name: "Variants",
    //   color: "slategray",
    //   points: [26, 30, 45],
    // },
  ],
};
const Template = ({ ...rest }) => {
  return (
    <Card>
      <BarChart
        // {...rest}
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

// one data
const oneData = {
  labels: {
    x: ["Jan", "Feb", "Mar"],
    y: 10,
  },
  dataSet: [
    {
      name: "Products",
      color: "magenta",
      points: [65, 80, 90],
    },
  ],
};
const data = {
  labels: {
    x: ["Jan", "Feb", "Mar"],
    y: 10,
  },
  dataSet: [
    {
      name: "Orders",
      color: "blue",
      points: [90, 100, 85],
    },

    {
      name: "Variants",
      color: "green",
      points: [70, 80, 75],
    },

    {
      name: "Orders",
      color: "magenta",
      points: [50, 60, 55],
    },
    {
      name: "Variants",
      color: "purple",
      points: [30, 40, 25],
    },
  ],
};

export const BarChartTypes = ({ ...rest }) => {
  return (
    <Card>
      <Card title="Bar Chart ">
        <BarChart
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
          dataSet={data.dataSet}
          labels={data.labels}
        />
      </Card>
      <Card title="Bar Chart stack">
        <BarChart
          type="stack"
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
          dataSet={data.dataSet}
          labels={data.labels}
        />
      </Card>
    </Card>
  );
};

export const OneChart = ({ ...rest }) => {
  return (
    <Card>
      <BarChart
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
        dataSet={oneData.dataSet}
        labels={oneData.labels}
      />
    </Card>
  );
};

// Two Bar Chart
const twoBarData = {
  labels: {
    x: ["Jan", "Feb", "Mar"],
    y: 10,
  },
  dataSet: [
    {
      name: "Products",
      color: "magenta",
      points: [65, 80, 90],
    },
    {
      name: "Products",
      color: "#04AA6D",
      points: [45, 70, 50],
    },
  ],
};
export const TwoBarChart = ({ ...rest }) => {
  return (
    <Card>
      <BarChart
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
        dataSet={twoBarData.dataSet}
        labels={twoBarData.labels}
      />
    </Card>
  );
};
// three Bar Chart
const threeBarData = {
  labels: {
    x: ["Jan", "Feb", "Mar"],
    y: 10,
  },
  dataSet: [
    {
      name: "Orders",
      color: "magenta",
      points: [45, 50, 70],
    },

    {
      name: "Variants",
      color: "steelblue",
      points: [30, 45, 50],
    },
    {
      name: "Variants",
      color: "purple",
      points: [35, 40, 65],
    },
  ],
};
export const ThreeBarChart = ({ ...rest }) => {
  return (
    <Card>
      <BarChart
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
        dataSet={threeBarData.dataSet}
        labels={threeBarData.labels}
      />
    </Card>
  );
};

const aniBarData = {
  labels: {
    x: ["Jan", "Feb", "Mar"],
    y: 10,
  },
  dataSet: [
    {
      name: "Orders",
      color: "blue",
      points: [90, 100, 85],
      animationDuration: 800,
    },

    {
      name: "Variants",
      color: "green",
      points: [70, 80, 75],
      animationDuration: 800,
    },

    {
      name: "Orders",
      color: "magenta",
      points: [50, 60, 55],
      animationDuration: 800,
    },
    {
      name: "Variants",
      color: "purple",
      points: [30, 40, 25],
      animationDuration: 800,
    },
  ],
};
export const BarChartAnimation = ({ ...rest }) => {
  return (
    <Card title="Bar chart animation in stack 800ms">
      <BarChart
        height={400}
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
        dataSet={aniBarData.dataSet}
        labels={aniBarData.labels}
      />
    </Card>
  );
};

export const BarChartAnimationStack = ({ ...rest }) => {
  return (
    <Card title="Bar chart animation in stack 800ms">
      <BarChart
        type="stack"
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
        dataSet={aniBarData.dataSet}
        labels={aniBarData.labels}
      />
    </Card>
  );
};

// Bar chart stack with out background border
export const StackWithOutBGLine = ({ ...rest }) => {
  return (
    <Card title="Bar chart stack with out background border">
      <BarChart
        type="stack"
        height={500}
        legend={{ show: true, position: rest.legend }}
        dataSet={aniBarData.dataSet}
        labels={aniBarData.labels}
      />
    </Card>
  );
};
