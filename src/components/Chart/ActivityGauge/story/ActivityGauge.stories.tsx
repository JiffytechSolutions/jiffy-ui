import React from "react";
import ActivityGauge, { activityGaugeData } from "../ActivityGauge";
import { Card } from "../../../Card";
import { FlexLayout } from "../../../FlexLayout";
import Text from "../../../Text/Text";
import Seprator from "../../../Seprator/Seprator";

export default {
  title: "Components/Chart/ActivityGauge",
  component: ActivityGauge,
  argTypes: {
    chartData: {
      description: `<div><strong>chartData is an array of object:-</strong></div><i>Accepted key value pairs:</i><table bgcolor="#f5f5f5"><thead><tr><th>key</th><th>value</th></tr></thead><tbody><tr><td>value<span style="color:red">*</span></td><td>Number | String</td></tr><tr><td>label<span style="color:red">*</span></td><td>String</td></tr><tr><td>color<span style="color:red">*</span></td><td>String</td></tr><tr><td>total<span style="color:red">*</span></td><td>Number | String;</td></tr></tbody></table>`,
      control: {
        type: false,
      },
    },
    size: {
      description:
        "If you are change the Activity Gauge chart height and width then use size prop",
      control: {
        type: "radio",
        options: ["small", "medium", "large"],
      },
      defaultValue: "large",
    },
    animationDuration: {
      description: "You can change activity gauge speed",
      control: {
        type: "number",
      },
      defaultValue: 2,
    },
    enableValue: {
      description:
        "If you are showing value format percentage or number then use enableValue prop",
      control: {
        type: "radio",
        options: ["number", "percentage"],
      },
      defaultValue: "number",
    },
    customClass: {
      description: "Add custom class if need to change the design",
      control: {
        type: false,
      },
    },
  },
};

const chartData: activityGaugeData[] = [
  { value: 800, total: "900", label: "Series A", color: "#5834C3" },
  { value: 680, total: "800", label: "Series B", color: "#269E6C" },
  { value: 550, total: "700", label: "Series C", color: "#FEC84B" },
  { value: 400, total: "600", label: "Series D", color: "#EC5B51" },
];

const matchColor: activityGaugeData[] = [
  { value: 600, total: "900", label: "Series A", color: "#7A5DCF" },
  { value: 500, total: "800", label: "Series B", color: "#9984DB" },
  { value: 500, total: "700", label: "Series C", color: "#BBADE7" },
  { value: 300, total: "600", label: "Series D", color: "#D0C6EE" },
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
const size = ["small", "medium", "large"];

// Activity Gauge Size
export const ActivityGaugeSize = ({ ...rest }) => {
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

// Activity Gauge Animation Duration
export const ActivityGaugeAnimationDuration = ({ ...rest }) => {
  return (
    <Card title="Activity Gauge Animation Duration">
      <Card title="Activity Gauge animation duration 1s">
        <FlexLayout halign="center" valign="center" spacing="loose">
          {size.map((size: any) => {
            return (
              <ActivityGauge
                size={size}
                chartData={matchColor}
                animationDuration={1}
              />
            );
          })}
        </FlexLayout>
      </Card>

      <Card title="Activity Gauge animation duration 2s">
        <FlexLayout halign="center" valign="center" spacing="loose">
          {size.map((size: any) => {
            return <ActivityGauge size={size} chartData={chartData} />;
          })}
        </FlexLayout>
      </Card>
    </Card>
  );
};

// Activity Gauge enableValue
export const ActivityGaugeEnableValue = ({ ...rest }) => {
  return (
    <Card title="Activity Gauge enableVale">
      <Card title="Activity Gauge enableValue in number format">
        <FlexLayout halign="center" valign="center" spacing="loose">
          {size.map((size: any) => {
            return (
              <ActivityGauge
                size={size}
                chartData={matchColor}
                animationDuration={1}
              />
            );
          })}
        </FlexLayout>
      </Card>

      <Card title="Activity Gauge enableValue in percentage format">
        <FlexLayout halign="center" valign="center" spacing="loose">
          {size.map((size: any) => {
            return (
              <ActivityGauge
                size={size}
                chartData={chartData}
                enableValue="percentage"
              />
            );
          })}
        </FlexLayout>
      </Card>
    </Card>
  );
};

// Activity Gauge  All
export const ActivityGaugeAll = ({ ...rest }) => {
  return (
    <Card title="Activity Gauge Size ">
      <FlexLayout direction="vertical" spacing="loose">
        <FlexLayout halign="center" valign="center" spacing="loose">
          {size.map((size: any) => {
            return <ActivityGauge size={size} chartData={matchColor} />;
          })}
        </FlexLayout>
        <Seprator />

        <FlexLayout halign="center" valign="center" spacing="loose">
          {size.map((size: any) => {
            return <ActivityGauge size={size} chartData={chartData} />;
          })}
        </FlexLayout>
      </FlexLayout>
    </Card>
  );
};
