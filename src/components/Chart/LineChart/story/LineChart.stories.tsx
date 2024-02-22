import React from "react";
import { Card } from "../../../Card";
import LineChart, { LineChartI } from "../LineChart";
import { FlexLayout } from "../../../FlexLayout";

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
        disable: true
      },
    },
    paddingLeft: {
      description: "Spacing from the left of the chart",
      control: {
        type: 'number',
      },
      defaultValue: 60
    },
    paddingBottom: {
      description: "Spacing from the bottom of the chart",
      control: {
        type: 'number',
      },
      defaultValue: 50
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
        disable: true
      },
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
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    y: 10
  },
  dataSet: [
    {
      name: "Orders",
      color: "red",
      points: [60, 70, 80, 25, 90],
      animationDuration: 300,
    },
    {
      color: "blue",
      points: [60, 30, 80, 95, 20],
      name: "Sales",
      animationDuration: 1000,
    },
    {
      name: "Purchase",
      color: "green",
      points: [20, 50, 80, 40, 20],
      animationDuration: 700,
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
        backgroundGrid={{
          xLines: {
            color: "steelblue",
            type: "dashed",
            show: true
          },
          yLines: {
            color: "red",
            type: "solid",
            show: true
          }
        }}
        legend={{ show: true, position: rest.legend }}
        dataSet={[demoDataSetLineChart.dataSet[2]]}
        labels={demoDataSetLineChart.labels}
      />
    </Card>
  )
}

export const Primary = Template.bind({})

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
        backgroundGrid={{}}
      />
    </Card>
  )
}

export const LineChartCurveBeginAtOrigin = ({ ...rest }) => {
  const dataSet = [...demoDataSetLineChart.dataSet].map(i => {
    const curritem = { ...i, beginAtOrigin: true }
    return curritem
  })
  return (
    <Card>
      <LineChart
        {...rest}
        width={"100%"}
        height={500}
        dataSet={dataSet}
        labels={demoDataSetLineChart.labels}
        legend={{ show: true, position: rest.legend }}
        backgroundGrid={{}}
      />
    </Card>
  )
}

export const LineChartWithBackgroundGrid = ({ ...rest }) => {
  const dataSet = [...demoDataSetLineChart.dataSet].map(i => {
    const curritem = { ...i, beginAtOrigin: true }
    return curritem
  })
  return (
    <Card>
      <LineChart
        {...rest}
        width={"100%"}
        height={500}
        dataSet={[dataSet[1]]}
        labels={demoDataSetLineChart.labels}
        legend={{ show: true, position: rest.legend }}
        backgroundGrid={{
          xLines: {
            color: "slategrey",
            type: "dashed",
            show: true
          },
          yLines: {
            color: "grey",
            type: "solid",
            show: true
          }
        }}
      />
    </Card>
  )
}

export const LineChartWithBackgroundGridHavingOnlyXLines = ({ ...rest }) => {
  const dataSet = [...demoDataSetLineChart.dataSet].map(i => {
    const curritem = { ...i, beginAtOrigin: true }
    return curritem
  })
  return (
    <Card>
      <LineChart
        {...rest}
        width={"100%"}
        height={500}
        dataSet={[dataSet[1]]}
        labels={demoDataSetLineChart.labels}
        legend={{ show: true, position: rest.legend }}
        backgroundGrid={{
          yLines: {
            show: false
          }
        }}
      />
    </Card>
  )
}

export const LineChartWithBackgroundGridHavingOnlyYLines = ({ ...rest }) => {
  const dataSet = [...demoDataSetLineChart.dataSet].map(i => {
    const curritem = { ...i, beginAtOrigin: true }
    return curritem
  })
  return (
    <Card>
      <LineChart
        {...rest}
        width={"100%"}
        height={500}
        dataSet={[dataSet[1]]}
        labels={demoDataSetLineChart.labels}
        legend={{ show: true, position: rest.legend }}
        backgroundGrid={{
          xLines: {
            show: false
          }
        }}
      />
    </Card>
  )
}

export const LineChartWithLegendAtTop = ({ ...rest }) => {
  const dataSet = [...demoDataSetLineChart.dataSet]
  return (
    <Card>
      <LineChart
        {...rest}
        width={"100%"}
        height={500}
        dataSet={dataSet}
        labels={demoDataSetLineChart.labels}
        legend={{ show: true, position: "top" }}
        backgroundGrid={{
          xLines: {
            color: "slategrey",
            type: "dashed",
            show: true
          },
          yLines: {
            color: "grey",
            type: "solid",
            show: true
          }
        }}
      />
    </Card>
  )
}

export const LineChartWithSmallLabels = ({ ...rest }) => {
  const dataSet = [...demoDataSetLineChart.dataSet]

  const labels = {
    x: ['January', 'February', 'March', 'April', 'May'],
    y: 10
  }

  return (
    <Card cardType="filled" title="Resize screen to small size to see the samll labels">
      <FlexLayout desktopWidth="50" mobileWidth="50" tabWidth="50" spacing="extraLoose">
        <Card>
          <LineChart
            {...rest}
            width={"100%"}
            height={500}
            dataSet={[dataSet[0]]}
            labels={labels}
            legend={{ show: true, position: "top" }}
            backgroundGrid={{}}
          />
        </Card>
        <Card>
          <LineChart
            {...rest}
            width={"100%"}
            height={500}
            dataSet={[dataSet[1]]}
            labels={labels}
            legend={{ show: true, position: "top" }}
            backgroundGrid={{}}
          />
        </Card>
      </FlexLayout>
    </Card>
  )
}
