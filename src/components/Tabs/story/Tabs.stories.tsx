import React, { useState } from "react";
import { Card, FlexLayout } from "../..";
import TabDoc from "../Dcoument/TabDoc";
import Tabs, { TabI } from "../Tabs";
import tabs2 from "./DataFIle";

export default {
  title: "Components/Navigation/Tabs",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=4915-440276&t=vybTUvZSW4IIqAUa-0",
    },
  },
  component: Tabs,
  argTypes: {
    tabs: {
      description: `<table>
      <thead>
        <tr>
          <th>Prop Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>icon</code></td>
          <td><code>React.ReactNode</code></td>
          <td>The icon component to render before label on the tab</td>
        </tr>
        <tr>
          <td><code>badge</code></td>
          <td><code>React.ReactNode</code></td>
          <td>The badge component to render after label on the tab</td>
        </tr>
        <tr>
          <td><code>label<span style="color:red" >*</span></code></td>
          <td><code>string</code> or <code>React.ReactNode</code></td>
          <td>The text label to render on the tab</td>
        </tr>
        <tr>
          <td><code>key<span style="color:red" >*</span></code></td>
          <td><code>string</code> or <code>number</code></td>
          <td>The unique identifier for the tab</td>
        </tr>
        <tr>
          <td><code>isDisabled</code></td>
          <td><code>boolean</code></td>
          <td>If true, disables the tab</td>
        </tr>
      </tbody>
    </table>`,
      control: {
        type: "object",
        disable: true,
      },
    },
    value: {
      description: "The key of the currently active tab.",
      control: {
        type: "text",
        disable: true,
      },
    },
    onChange: {
      description: "A function that is called when the active tab changes.",
      control: {
        type: "function",
      },
    },
    direction: {
      description:
        "The direction in which the tabs are displayed. Defaults to horizontal. <br><span style='color:red'>Note*</span><br> Vertical Tabs only show when window <code>width > = 768px</code>",
      control: {
        type: "radio",
        options: ["horizontal", "vertical"],
      },
      defaultValue: "horizontal",
    },
    spacing: {
      description:
        "Manages the spacing between Tabs Nav and Content <table><thead><tr><th>Props</th><th>Value</th></tr></thead><tbody><tr><td><strong>none</strong></td><td>0</td></tr><tr><td><strong>extraTight</strong></td><td>4px</td></tr><tr><td><strong>mediumTight</strong></td><td>8px</td></tr><tr><td><strong>tight</strong></td><td>12px</td></tr><tr><td><strong>loose (Default)</strong></td><td>16px</td></tr><tr><td><strong>mediumLoose</strong></td><td>20px</td></tr><tr><td><strong>extraLoose</strong></td><td>24px</td></tr><tbody></table>",
      control: {
        type: "radio",
        options: [
          "none",
          "extraTight",
          "mediumTight",
          "tight",
          "loose",
          "mediumLoose",
          "extraLoose",
        ],
      },
      defaultValue: "none",
    },
    children: {
      description: "The content of the tabs.",
      control: {
        disable: true,
      },
    },
    isFitted: {
      description: "Whether the tabs should be fitted to their content.",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    customClass: {
      description: "A custom class name to be added to the Tabs component.",
      control: {
        type: "text",
      },
      defaultValue: "custom_class",
    },
  },
};

const Template = ({ ...rest }) => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [tabArr, setTabArr] = useState(tabs2);

  return (
    <Card>
      <Tabs
        {...rest}
        tabs={tabArr}
        value={selectedTab}
        onChange={(newTab: any) => setSelectedTab(newTab)}
        direction={rest.direction}
      >
        <Card>
          <h1>{selectedTab}</h1>
        </Card>
      </Tabs>
    </Card>
  );
};

export const Primary = Template.bind({});

export const verticalTabs: any = Template.bind({});
verticalTabs.decorators = [
  () => {
    const [selectedTab, setSelectedTab] = useState("All");
    return (
      <Card>
        <Tabs
          tabs={tabs2}
          value={selectedTab}
          onChange={(newTabKey: any) => setSelectedTab(newTabKey)}
          direction="vertical"
        >
          <Card>
            <h1>{selectedTab}</h1>
          </Card>
        </Tabs>
      </Card>
    );
  },
];

export const TabsWithBadge: any = Template.bind({});
TabsWithBadge.decorators = [
  () => {
    const [selectedTab, setSelectedTab] = useState("All");
    return (
      <Card>
        <Tabs
          tabs={tabs2.map((i: any) => ({ ...i, icon: undefined }))}
          value={selectedTab}
          onChange={(newTabKey: any) => setSelectedTab(newTabKey)}
        >
          <Card>
            <h1>{selectedTab}</h1>
          </Card>
        </Tabs>
      </Card>
    );
  },
];

export const TabsWithSpacing: any = Template.bind({});
TabsWithSpacing.decorators = [
  () => {
    const [selectedTab, setSelectedTab] = useState("All");
    return (
      <FlexLayout spacing="loose" direction="vertical">
        <Card title="Loose 16px">
          <Tabs
            tabs={tabs2.map((i: any) => ({ ...i, badge: undefined }))}
            value={selectedTab}
            spacing="loose"
            onChange={(newTabKey: any) => setSelectedTab(newTabKey)}
          >
            <Card cardType="bordered">
              <h1>{selectedTab}</h1>
            </Card>
          </Tabs>
        </Card>
        <Card title="mediumLoose 20px">
          <Tabs
            tabs={tabs2.map((i: any) => ({ ...i, badge: undefined }))}
            value={selectedTab}
            spacing="mediumLoose"
            onChange={(newTabKey: any) => setSelectedTab(newTabKey)}
          >
            <Card cardType="bordered">
              <h1>{selectedTab}</h1>
            </Card>
          </Tabs>
        </Card>
        <Card title="extraLoose 24px">
          <Tabs
            tabs={tabs2.map((i: any) => ({ ...i, badge: undefined }))}
            value={selectedTab}
            spacing="extraLoose"
            onChange={(newTabKey: any) => setSelectedTab(newTabKey)}
          >
            <Card cardType="bordered">
              <h1>{selectedTab}</h1>
            </Card>
          </Tabs>
        </Card>
        <Card title="tight 12px">
          <Tabs
            tabs={tabs2.map((i: any) => ({ ...i, badge: undefined }))}
            value={selectedTab}
            spacing="tight"
            onChange={(newTabKey: any) => setSelectedTab(newTabKey)}
          >
            <Card cardType="bordered">
              <h1>{selectedTab}</h1>
            </Card>
          </Tabs>
        </Card>
        <Card title="mediumTight 8px">
          <Tabs
            tabs={tabs2.map((i: any) => ({ ...i, badge: undefined }))}
            value={selectedTab}
            spacing="mediumTight"
            onChange={(newTabKey: any) => setSelectedTab(newTabKey)}
          >
            <Card cardType="bordered">
              <h1>{selectedTab}</h1>
            </Card>
          </Tabs>
        </Card>
        <Card title="extraTight 4px">
          <Tabs
            tabs={tabs2.map((i: any) => ({ ...i, badge: undefined }))}
            value={selectedTab}
            spacing="extraTight"
            onChange={(newTabKey: any) => setSelectedTab(newTabKey)}
          >
            <Card cardType="bordered">
              <h1>{selectedTab}</h1>
            </Card>
          </Tabs>
        </Card>
        <Card title="none 0">
          <Tabs
            tabs={tabs2.map((i: any) => ({ ...i, badge: undefined }))}
            value={selectedTab}
            onChange={(newTabKey: any) => setSelectedTab(newTabKey)}
          >
            <Card cardType="bordered">
              <h1>{selectedTab}</h1>
            </Card>
          </Tabs>
        </Card>
      </FlexLayout>
    );
  },
];

export const TabsWithIcon: any = Template.bind({});
TabsWithIcon.decorators = [
  () => {
    const [selectedTab, setSelectedTab] = useState("All");
    return (
      <Card>
        <Tabs
          tabs={tabs2.map((i: any) => ({ ...i, badge: undefined }))}
          value={selectedTab}
          onChange={(newTabKey: any) => setSelectedTab(newTabKey)}
        >
          <Card>
            <h1>{selectedTab}</h1>
          </Card>
        </Tabs>
      </Card>
    );
  },
];
export function Documentation() {
  return <TabDoc />;
}
