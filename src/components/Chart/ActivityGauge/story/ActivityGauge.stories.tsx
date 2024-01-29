import React from "react";
import ActivityGauge, { activityGaugeData } from "../ActivityGauge";
import { Card } from "../../../Card";
import { FlexLayout } from "../../../FlexLayout";
import Text from "../../../Text/Text";

export default {
  title: "Components/Chart/ActivityGauge",
  component: ActivityGauge,
  argTypes: {
    chartData: {
      description: `<div><strong>chartData is an array of object:-</strong></div><i>Accepted key value pairs:</i><table bgcolor="#f5f5f5"><thead><tr><th>key</th><th>value</th></tr></thead><tbody><tr><td>value<span style="color:red">*</span></td><td>Number | String</td></tr><tr><td>label<span style="color:red">*</span></td><td>String</td></tr><tr><td>color<span style="color:red">*</span></td><td>String</td></tr></tbody></table>`,
      control: {
        type: false,
      },
    },
    size: {
      description:
        "If you are change the ActivityGauge chart height and width then use size prop and change then prop",
      control: {
        type: "radio",
        options: ["small", "medium", "large"],
      },
      defaultValue: "large",
    },
    animationDuration: {
      description:
        "If you can showing total percentage value then use percentage prop and pass the value true",
      control: {
        type: "number",
      },
      defaultValue: 2,
    },
    customClass: {
      description: "Add custom class if need to change the design",
      control: {
        type: "text",
      },
    },
  },
};
const chartData: activityGaugeData[] = [
  { value: 800, total: "900", label: "Series A", color: "#5834C3" },
  { value: 700, total: "800", label: "Series B", color: "#269E6C" },
  { value: 600, total: "700", label: "Series C", color: "#FEC84B" },
  { value: 500, total: "600", label: "Series D", color: "#EC5B51" },
];

const Template = ({ ...rest }) => {
  return (
    <Card>
      <FlexLayout halign="start">
        <ActivityGauge chartData={chartData} {...rest} />
      </FlexLayout>
    </Card>
  );
};

export const Primary = Template.bind({});

// Activity Gauge Size
export const ActivityGaugeSize = ({ ...rest }) => {
  const size = ["small", "medium", "large"];
  return (
    <Card title="Activity Gauge Size ">
      <FlexLayout halign="center" valign="center" spacing="loose">
        {size.map((size: any) => {
          return (
            <FlexLayout valign="center" direction="vertical" spacing="loose">
              <Text fontweight="bold">{size}</Text>
              <ActivityGauge size={size} chartData={chartData} />
            </FlexLayout>
          );
        })}
      </FlexLayout>
    </Card>
  );
};
