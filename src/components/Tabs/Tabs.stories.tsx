
import  Tabs  from "./Tabs";
import { useState } from "react";
import  Card  from "../Card/Card";
import Tag from "../Tag/Tag";
import React from "react";

export default {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};

const tabs2: any = [
  {
    label: "All",
    badge: <Tag>51</Tag>,
    key: "All",
  },
  {
    label: "Product",
    badge: <Tag>52</Tag>,
    key: "Product",
  },
  {
    label: "Pending",
    badge: <Tag>53</Tag>,
    key: "Pending",
  },
  {
    label: "Warnings",
    badge: <Tag>54</Tag>,
    key: "warning",
  },
];

const Template = ({ ...rest }) => {
  const [selectedTab, setSelectedTab] = useState("All");
  return (
    <Card type="Borderd">
      <Tabs
        tabs={tabs2}
        value={selectedTab}
        onChange={(newTab: any) => setSelectedTab(newTab)}
      >
        <p>{selectedTab}</p>
      </Tabs>
    </Card>
  );
};
export const Default = Template.bind({});

export const VerticalTab: any = Template.bind({});
VerticalTab.decorators = [
  () => {
    const [selectedTab, setSelectedTab] = useState("All");
    return (
      <Card type="Borderd">
        <Tabs
          tabs={tabs2}
          value={selectedTab}
          onChange={(newTab: any) => setSelectedTab(newTab)}
          direction="vertical"
        >
          <p>{selectedTab}</p>
        </Tabs>
      </Card>
    );
  },
];
