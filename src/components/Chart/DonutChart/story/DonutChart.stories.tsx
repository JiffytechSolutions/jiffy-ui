import React from "react";
import { Card } from "../../../Card";
import { DonutChart, donutChartData } from "../DonutChart";
import { FlexLayout } from "../../../FlexLayout";

export default {
  title: "Components/Chart/DonutChart",
  component: DonutChart,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-ver3.0.2-(Production)?type=design&node-id=16582-60451&mode=design&t=vSRg5vCN35kbyqeL-0",
    },
  },
  argTypes: {
    chartData: {
      description: `<div><strong>chartData is an array of object:-</strong></div><i>Accepted key value pairs:</i><table bgcolor="#f5f5f5"><thead><tr><th>key</th><th>value</th></tr></thead><tbody><tr><td>value<span style="color:red">*</span></td><td>Number</td></tr><tr><td>label<span style="color:red">*</span></td><td>String</td></tr><tr><td>color<span style="color:red">*</span></td><td>String</td></tr></tbody></table>`,
      control: {
        type: false,
      },
    },
    size: {
      description:
        "If you are change the Donut chart height and width then use size prop",
      control: {
        type: "number",
      },
      defaultValue: 250,
    },
    tooltip: {
      description:
        "If you can showing tooltip then use tooltip prop  and tooltip is an object type",
      control: {
        type: "object",
      },
      defaultValue: { show: false, type: "number" },
    },
    totalItems: {
      description:
        "If you can showing totalItems value then use totalItems prop  and totalItems is an object type",
      control: {
        type: "object",
      },
      defaultValue: { show: false, type: "number" || "percentage" },
    },
    animationDuration: {
      description:
        "Set the duration of animation in <code> millisecond </code>",
      control: {
        type: "number",
      },
      defaultValue: 2000,
    },
    customClass: {
      description: "Add custom class if need to change the design",
      control: {
        type: "text",
      },
    },
  },
};
const chartData: donutChartData[] = [
  { value: 30, label: "Series A", color: "red" },
  { value: 40, label: "Series B", color: "blue" },
  { value: 10, label: "Series C", color: "green" },
  { value: 20, label: "Series D", color: "yellow" },
  { value: 15, label: "Series E", color: "#B2DDFF" },
  { value: 10, label: "Series F", color: "#53B1FD" },
  { value: 16, label: "Series F", color: "pink" },
];

const Template = ({ ...rest }) => {
  return (
    <Card>
      <FlexLayout halign="center">
        <DonutChart {...rest} chartData={chartData} />
      </FlexLayout>
    </Card>
  );
};

export const Primary = Template.bind({});

// Donut Chart Percentage
// export const DonutChartTotalitems = ({ ...rest }) => {
//   return (
//     <Card title="Donut Chart with showing total percentage">
//       <FlexLayout halign="center" spacing="mediumLoose">
//         <DonutChart
//           // totalItems={{ show: true }}
//           chartData={chartData}
//           size={250}
//         />
//         <DonutChart
//           totalItems={{ show: true, type: "percentage" }}
//           chartData={chartData}
//           size={250}
//         />
//       </FlexLayout>
//     </Card>
//   );
// };

// Donut Chart with tooltip
// export const DonutChartTooltip = ({ ...rest }) => {
//   return (
//     <Card title="Donut Chart with tooltip (Mouse hover any particular area then showing tooltip)">
//       <FlexLayout spacing="mediumLoose" wrap="wrap" halign="center">
//         <DonutChart
//           chartData={[
//             { value: 250, label: "Series A", color: "#F0EDFA" },
//             { value: 400, label: "Series B", color: "#C5B8EA" },
//             { value: 550, label: "Series C", color: "#9984DB" },
//             { value: 310, label: "Series D", color: "#D1E9FF" },
//             { value: 100, label: "Series E", color: "#B2DDFF" },
//           ]}
//           size={250}
//           tooltip={{ show: true, type: "percentage" }}
//         />

//         <DonutChart
//           tooltip={{ show: true }}
//           chartData={[
//             { value: 250, label: "Series A", color: "#F0EDFA" },
//             { value: 400, label: "Series B", color: "#C5B8EA" },
//             { value: 550, label: "Series C", color: "#9984DB" },
//             { value: 310, label: "Series D", color: "#D1E9FF" },
//             { value: 100, label: "Series E", color: "#B2DDFF" },
//           ]}
//           size={250}
//         />
//       </FlexLayout>
//     </Card>
//   );
// };

// Donut Chart with All
// export const DonutChartAll = ({ ...rest }) => {
//   return (
//     <Card title="Donut Chart with tooltip (Mouse hover any particular area then showing tooltip)">
//       <FlexLayout spacing="loose" wrap="wrap">
//         <DonutChart
//           totalItems={{ show: true, type: "number" }}
//           chartData={chartData}
//           size={250}
//           tooltip={{ show: true }}
//         />
//         <DonutChart
//           totalItems={{ show: true, type: "number" }}
//           chartData={[
//             { value: 25, label: "Series A", color: "#F0EDFA" },
//             { value: 15, label: "Series B", color: "#C5B8EA" },
//             { value: 20, label: "Series C", color: "#9984DB" },
//             { value: 15, label: "Series D", color: "#D1E9FF" },
//             { value: 25, label: "Series E", color: "#B2DDFF" },
//           ]}
//           size={250}
//           tooltip={{ show: true }}
//         />
//         <DonutChart
//           totalItems={{ show: true, type: "number" }}
//           chartData={[
//             { value: 25, label: "Series A", color: "#53B1FD" },
//             { value: 25, label: "Series B", color: "#D1E9FF" },
//             { value: 25, label: "Series C", color: "#9984DB" },
//             { value: 25, label: "Series D", color: "#B2DDFF" },
//           ]}
//           size={250}
//           tooltip={{ show: true }}
//         />
//         <DonutChart
//           totalItems={{ show: true, type: "number" }}
//           chartData={[
//             { value: 50, label: "Series A", color: "#53B1FD" },
//             { value: 25, label: "Series B", color: "#D1E9FF" },
//             { value: 25, label: "Series C", color: "#9984DB" },
//           ]}
//           size={250}
//           tooltip={{ show: true }}
//         />
//         <DonutChart
//           totalItems={{ show: true, type: "number" }}
//           chartData={[
//             { value: 50, label: "Series A", color: "#9984DB" },
//             { value: 50, label: "Series B", color: "#D1E9FF" },
//           ]}
//           size={250}
//           tooltip={{ show: true }}
//         />
//         <DonutChart
//           totalItems={{ show: true, type: "number" }}
//           chartData={[{ value: 100, label: "Series A", color: "#9984DB" }]}
//           size={250}
//           tooltip={{ show: true }}
//         />
//       </FlexLayout>
//     </Card>
//   );
// };