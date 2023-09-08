import React from "react";
import { Card, TextLink, Button, Text } from "../../..";
import {
  Check,
  GitCommit,
  GitPullRequest,
  GitBranch,
  RefreshCcw,
} from "../../../storybook/Foundation/Icons/Icons";
import PageHeader from "../PageHeader";
import { Meta } from "@storybook/react/types-6-0";
import PageHeaderDoc from "../Document/PageHeaderDoc";

export default {
  title: "Components/Layout/PageHeader",
  component: PageHeader,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=4413-263083&t=fwx7SHLr0Vi8Wxq1-0",
    },
  },
  argTypes: {
    title: {
      description: "Header title, in large font type.",
      control: {
        type: "text",
      },
      defaultValue: "Header title",
    },
    isSticky: {
      description: "Header get fixed after setting to true",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    hasReverseNavigation: {
      description:
        "After setting this prop to true, a back button will appear before the header title. You can perform the back action by clicking on that button , you must provide onclick for performing any action on this button click",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    description: {
      description: "Header description in simple font type",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    onClick: {
      description:
        "This callback function can only be used if the hasReverseNavigation prop is set to true. Additionally, you need to pass an onClick callback function for the back button that appears before the title",
      control: {
        disable: true,
      },
    },
    titleBadge: {
      description:
        "Important and non-interactive status information is displayed immediately after the title.",
      control: {
        disable: true,
      },
    },
    primaryAction: {
      description: `Provide primary header action as button. <br/> <div style="textDecoration:underline">For Example- <span style="color:red"}>*</span>: </div>
      <div style="border:1px solid black">
      <pre>
         <code>
            const primaryAction = {
              content: "Submit",
              onClick: () => yourFunction();
            };
        </code>
      </pre></div>`,
      control: {
        disable: true,
      },
    },
    secondaryAction: {
      description: `Provide secondary actions as collection of secondary actions.<br/> <div style="textDecoration:underline">For Example- <span style="color:red"}>*</span>: </div>
        <div style="border:1px solid black">
        <pre>
           <code>
           const secondaryAction = [
                {
                  content: "Sync With MarketPlace",
                  onClick: () => yourFunction();
                },
                {
                  content: "Sync With MarketPlaces",
                  onClick: () => yourFunction()
                }
          ];
          </code>
        </pre></div>`,
      control: {
        disable: true,
      },
    },
    tertiaryAction: {
      description: `Provide tertiary header action as action list items <br/> <div style="textDecoration:underline">For Example- <span style="color:red"}>*</span>: </div>
      <div style="border:1px solid black">
      <pre>
         <code>
            const tertiaryAction = {
              content: "Refund",
              onClick: () => alert()
            };
        </code>
      </pre></div>`,
      control: {
        disable: true,
      },
    },
    isEmbededView: {
      description:
        "The 'isEmbededView' prop will be used when your content is opened in an embedded view.",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    connectRight: {
      description: "Provide connect right as react node",
      control: {
        disable: true,
      },
    },
    actionHeading: {
      description:
        "Provide action's heading , it will be only shown when action comes on mobile device",
      control: {
        type: "text",
      },
      defaultValue: "Perform an action",
    },
    customClass: {
      description: "Set Custom class",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
  },
} as Meta;

const Template = ({ ...rest }) => {
  return (
    <Card>
      <PageHeader {...rest} title={rest.title} />
    </Card>
  );
};

const primaryAction1 = {
  content: "Submit",
  onClick: () => {
    alert("Conngratulations You proceeded :)");
  },
};

const secondaryAction1 = [
  {
    content: "Sync With MarketPlace 1",
    onClick: () => {
      alert("Conngratulation,You Syned with marketplace:)");
    },
  },
  {
    content: "Sync With MarketPlace 2",
    onClick: () => {
      alert("Conngratulations You Syned :)");
    },
  },
  {
    destructive: true,
    content: "Delete Listing",
    onClick: () => {
      alert("Conngratulations , delete listing proceeded :)");
    },
  },
];

const tertiaryAction1 = {
  content: "Refund",
  onClick: () => {
    alert("Refund Intiated:)");
  },
};

const primaryActionWithIcon = {
  content: "Submit",
  onClick: () => {
    alert("Conngratulations You proceeded :)");
  },
  icon: <Check size={20} />,
};

const secondaryActionWithIcon = [
  {
    content: "Sync With MarketPlace",
    onClick: () => {
      alert("Conngratulation,You Syned with marketplace:)");
    },
    prefixIcon: <GitCommit size={20} />,
  },
  {
    content: "Sync With MarketPlaces",
    onClick: () => {
      alert("Conngratulations You Syned :)");
    },
    prefixIcon: <GitPullRequest size={20} />,
  },
  {
    destructive: true,
    content: "Delete Listing",
    onClick: () => {
      alert("Conngratulations , delete listing proceeded :)");
    },
    prefixIcon: <RefreshCcw size={20} />,
  },
];

const tertiaryActionWithIcon = {
  content: "Refund",
  onClick: () => {
    alert("Refund Intiated:)");
  },
  prefixIcon: <GitBranch size={20} />,
};

export const Primary = Template.bind({});

//  Page Title and Description
export const Page_header_with_title_and_description: any = Template.bind({});
Page_header_with_title_and_description.decorators = [
  () => (
    <Card>
      <PageHeader
        title="Page Header"
        description="A product can be a service or an item. It can be physical or in virtual or cyber form."
      ></PageHeader>
    </Card>
  ),
];
// Description with link
export const Page_header_with_title_and_description_with_link: any =
  Template.bind({});
Page_header_with_title_and_description_with_link.decorators = [
  () => (
    <Card>
      <PageHeader
        title="Page Header"
        description={
          <Text textcolor="secondary">
            {" "}
            Choose which products you would like to enable shopping with Buy
            with Prime. <TextLink label="Link" onClick={() => {}} />
          </Text>
        }
      ></PageHeader>
    </Card>
  ),
];
//  Page Title and Description and reverse Navigation
export const Page_header_with_title_and_reverse_navigation: any = Template.bind(
  {}
);
Page_header_with_title_and_reverse_navigation.decorators = [
  () => (
    <Card>
      <PageHeader
        hasReverseNavigation
        title="Page Header"
        description="Page Description"
        onClick={() => {
          alert("Go Back Cliked");
        }}
      ></PageHeader>
    </Card>
  ),
];
//  Page Title and titleBadge
export const Page_header_with_title_and_titleBadge: any = Template.bind({});
Page_header_with_title_and_titleBadge.decorators = [
  () => (
    <Card>
      <PageHeader
        titleBadge={{
          type: "success",
          children: "Connected",
          variant: "accent",
          size: "small",
        }}
        title="Page Header"
        onClick={() => {
          alert("Go Back Cliked");
        }}
      ></PageHeader>
    </Card>
  ),
];
// With primary action
export const Page_header_with_primary_action: any = Template.bind({});
Page_header_with_primary_action.decorators = [
  () => {
    return (
      <Card>
        <PageHeader
          title="Page Header"
          primaryAction={primaryAction1}
          secondaryAction={secondaryAction1}
          actionHeading="Perform an action"
        ></PageHeader>
      </Card>
    );
  },
];
//  Page Title  and Actions
export const Page_header_with_title_and_All_Action: any = Template.bind({});
Page_header_with_title_and_All_Action.decorators = [
  () => {
    return (
      <Card>
        <PageHeader
          title="Page Header"
          primaryAction={primaryAction1}
          secondaryAction={secondaryAction1}
          tertiaryAction={tertiaryAction1}
          hasReverseNavigation
          onClick={() => {
            alert("Go Back Cliked");
          }}
        ></PageHeader>
      </Card>
    );
  },
];
//  Page Title  with connect right
export const Page_header_with_connect_right: any = Template.bind({});
Page_header_with_connect_right.decorators = [
  () => {
    return (
      <Card>
        <PageHeader
          title="Page Header"
          connectRight={<Button type="outlined" children="Connect right" />}
        ></PageHeader>
      </Card>
    );
  },
];
// Without reverse navigation
export const Page_header_without_reverse_navigation: any = Template.bind({});
Page_header_without_reverse_navigation.decorators = [
  () => {
    return (
      <Card>
        <PageHeader
          title="Samsung Galaxy Active Watch 2.0"
          description={
            <Text textcolor="secondary">
              {" "}
              Get GST invoice and save up to 18% on business purchases Measure ,
              body composition with the Powerful Samsung BioActive Sensor{" "}
              <TextLink label="Link" onClick={() => {}} />
            </Text>
          }
          primaryAction={primaryAction1}
          onClick={() => {
            alert("Go Back Cliked");
          }}
          titleBadge={{
            type: "success",
            children: "Connected",
            variant: "accent",
            size: "small",
          }}
        ></PageHeader>
      </Card>
    );
  },
];
// Page header with icons in primary , secondary and tertiary action
export const Page_header_with_icon_in_all_actions: any = Template.bind({});
Page_header_with_icon_in_all_actions.decorators = [
  () => {
    return (
      <Card>
        <PageHeader
          title="Samsung Galaxy Active Watch 2.0"
          primaryAction={primaryActionWithIcon}
          secondaryAction={secondaryActionWithIcon}
          tertiaryAction={tertiaryActionWithIcon}
        ></PageHeader>
      </Card>
    );
  },
];
//  Page Header with all features
export const Page_header_with_all_features: any = Template.bind({});
Page_header_with_all_features.decorators = [
  () => {
    return (
      <Card>
        <PageHeader
          hasReverseNavigation
          title="Samsung Galaxy Active Watch 2.0"
          description={
            <Text textcolor="secondary">
              Get GST invoice and save up to 18% on business{" "}
              <TextLink label="Link" onClick={() => {}} />
            </Text>
          }
          primaryAction={primaryAction1}
          secondaryAction={secondaryAction1}
          tertiaryAction={tertiaryAction1}
          onClick={() => {
            alert("Go Back Cliked");
          }}
          titleBadge={{
            type: "success",
            children: "Connected",
            variant: "accent",
            size: "small",
          }}
        ></PageHeader>
      </Card>
    );
  },
];
export function Documentation() {
  return <PageHeaderDoc />;
}
