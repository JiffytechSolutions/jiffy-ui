import React from "react";
import { Card } from "../../../Card";
import BarChart from "../BarChart";

export default {
  title: "Components/Chart/BarChart",
  component: BarChart,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-ver3.0.2-(Production)?type=design&node-id=16849-32209&mode=design&t=7qQbcrOlutiCJwvn-0",
    },
  },
  argTypes: {
    barWidth: {
      description: "You can change bar width",
      control: {
        type: "number",
      },
      defaultValue: 15,
    },
    width: {
      description: "Set the width of Bar Chart",
      control: {
        type: "text",
      },
      defaultValue: "100%",
    },
    height: {
      description: "Set the height of Bar Chart",
      control: {
        type: "number",
      },
      defaultValue: 350,
    },
    type: {
      description: "Set the type of Bar Chart",
      control: {
        type: "radio",
        options: ["group", "stack"],
      },
      defaultValue: "group",
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
        disable: true,
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
            <td>beginAtOrigin</td>
            <td>Set the starting of curve at origin (0)</td>
          </tr>
          <tr>
            <td>animationDuration</td>
            <td>Set the duration of animation of dataSet in <code>millisecond</code></td>
          </tr>
          <tr>
            <td colspan="2">Note<span style="color:red">*</span> Length of Points >= labels.length</td>
          </tr>
        </tbody>
      </table>`,
      control: {
        disable: true,
      },
    },
    backgroundGrid: {
      description: `Customize the background grid
      <table>
        <tbody>
          <tr>
            <td>xLines</td>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>show</td>
                    <td>show or hide the horizontal grid line</td>
                  </tr>
                  <tr>
                    <td>color</td>
                    <td>Color of the horizontal lines of background grid <code> string </code></td>
                  </tr>
                  <tr>
                  <td>type</td>
                  <td>Type of horizontal lines of grid i.e <code> solid | dashed </code></td>
                  </tr>
                </tbody>
              </table>
            </td>
          <tr>
          <tr>
            <td>yLines</td>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>show</td>
                    <td>show or hide the Vertical grid line</td>
                  </tr>
                  <tr>
                    <td>color</td>
                    <td>Color of the Vertical lines of background grid <code> string </code></td>
                  </tr>
                  <tr>
                  <td>type</td>
                  <td>Type of Vertical lines of grid i.e <code> solid | dashed </code></td>
                  </tr>
                </tbody>
              </table>
            </td>
          <tr>
        </tbody>
      </table>`,
      control: {
        disable: true,
      },
    },
    legend: {
      description: "Whether to show the legend and its positioning",
      control: {
        type: "radio",
        options: ["top", "bottom"],
      },
      defaultValue: "bottom",
    },
    customClass: {
      description: "Add any desired custom class on dropdown",
      control: {
        type: "text",
      },
    },
    paddingLeft: {
      control: {
        disable: true,
      },
    },
    paddingBottom: {
      control: {
        disable: true,
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
        {...rest}
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
      color: "red",
      points: [45, 50, 70],
    },

    {
      name: "Variants",
      color: "green",
      points: [30, 45, 50],
    },
    {
      name: "Variants",
      color: "blue",
      points: [35, 40, 65],
    },
    // {
    //   name: "Variants",
    //   color: "red",
    //   points: [45, 35, 55],
    // },
    // {
    //   name: "Variants",
    //   color: "magenta",
    //   points: [25, 39, 45],
    // },
    // {
    //   name: "Variants",
    //   color: "blue",
    //   points: [30, 45, 50],
    // },
    // {
    //   name: "Variants",
    //   color: "green",
    //   points: [30, 45, 50],
    // },
    // {
    //   name: "Variants",
    //   color: "red",
    //   points: [45, 35, 55],
    // },
    // {
    //   name: "Variants",
    //   color: "pink",
    //   points: [25, 39, 45],
    // },
    // {
    //   name: "Variants",
    //   color: "blue",
    //   points: [35, 40, 65],
    // },
    // {
    //   name: "Variants",
    //   color: "pink",
    //   points: [25, 39, 45],
    // },
  ],
};
export const ThreeBarChart = ({ ...rest }) => {
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
        dataSet={threeBarData.dataSet}
        labels={threeBarData.labels}
      />
    </Card>
  );
};

const aniBarData = {
  labels: {
    x: ["Jan", "Feb", "Mar", "Apr", "May"],
    y: 10,
  },
  dataSet: [
    {
      name: "Orders",
      color: "blue",
      points: [90, 100, 85, 90, 95],
      animationDuration: 800,
    },

    {
      name: "Variants",
      color: "green",
      points: [70, 80, 75, 75, 82],
      animationDuration: 800,
    },

    {
      name: "Orders",
      color: "magenta",
      points: [50, 60, 55, 59, 50],
      animationDuration: 800,
    },
    {
      name: "Variants",
      color: "purple",
      points: [30, 40, 25, 35, 30],
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
        barWidth={25}
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
        {...rest}
        type="stack"
        height={500}
        legend={{ show: true, position: rest.legend }}
        dataSet={aniBarData.dataSet}
        labels={aniBarData.labels}
      />
    </Card>
  );
};
