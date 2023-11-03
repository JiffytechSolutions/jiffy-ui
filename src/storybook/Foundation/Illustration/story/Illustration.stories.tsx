import React from "react";
import {
  Add,
  BrokenLink,
  BrokenPage,
  CreateCampaign,
  Signout,
  Email,
  NoAccountConnected,
  NoCampaignFilterAvailable,
  NoCampaignSearchAvailable,
  NoNotification,
  NoProductFoundOnSearch,
  NoProducts,
  NoSearchResultFound,
  NotFound,
  RefreshPage,
  SessionExpired,
  Token,
  WeAreFacingSomeIssue,
} from "../Illustration";
import { Card, CopyClipboard, FlexLayout } from "../../../../components";

export default {
  title: "Foundation/Illustration",
  argTypes: {
    size: {
      description: "Set size of illustration",
      control: {
        type: "text",
      },
      defaultValue: "200",
    },
    customClass: {
      description: "Set customClass for switcher",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
  },
};
const Template = ({ ...rest }) => {
  const Illustration = [
    {
      illustration: <Add {...rest} />,
      name: "Add",
    },
    {
      illustration: <Signout {...rest} />,
      name: "Signout",
    },
    {
      illustration: <Token {...rest} />,
      name: "Token",
    },
    {
      illustration: <Email {...rest} />,
      name: "Email",
    },
    {
      illustration: <RefreshPage {...rest} />,
      name: "RefreshPage",
    },
    {
      illustration: <SessionExpired {...rest} />,
      name: "SessionExpired",
    },
    {
      illustration: <NoSearchResultFound {...rest} />,
      name: "NoSearchResultFound",
    },
    {
      illustration: <WeAreFacingSomeIssue {...rest} />,
      name: "WeAreFacingSomeIssue",
    },
    {
      illustration: <BrokenPage {...rest} />,
      name: "BrokenPage",
    },
    {
      illustration: <NotFound {...rest} />,
      name: "NotFound",
    },
    {
      illustration: <NoAccountConnected {...rest} />,
      name: "NoAccountConnected",
    },
    {
      illustration: <NoNotification {...rest} />,
      name: "NoNotifictaion",
    },
    {
      illustration: <BrokenLink {...rest} />,
      name: "BrokenLink",
    },
    {
      illustration: <NoProductFoundOnSearch {...rest} />,
      name: "NoProductFoundOnSearch",
    },
    {
      illustration: <NoProducts {...rest} />,
      name: "NoProducts",
    },
    {
      illustration: <NoCampaignSearchAvailable {...rest} />,
      name: "NoCampaignSearchAvailable",
    },
    {
      illustration: <NoCampaignFilterAvailable {...rest} />,
      name: "NoCampaignFilterAvailable",
    },
    {
      illustration: <CreateCampaign {...rest} />,
      name: "CreateCampaign",
    },
  ];
  return (
    <Card title="Illustration">
      <FlexLayout
        desktopWidth="33"
        tabWidth="33"
        mobileWidth="100"
        spacing="loose"
        wrap="wrap"
      >
        {Illustration.map((items: any, index: any) => {
          return (
            <Card key={index}>
              <FlexLayout
                direction="vertical"
                valign="center"
                spacing="loose"
                wrap="wrap"
              >
                {items.illustration}
                <CopyClipboard label={items.name} value={`<${items.name} />`} />
              </FlexLayout>
            </Card>
          );
        })}
      </FlexLayout>
    </Card>
  );
};
export const Primary: any = Template.bind({});
