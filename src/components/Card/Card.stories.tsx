import React from "react";
import TextStyle from "../TextStyle/TextStyle";
import VerticalFlex from "../VerticalFlex/VerticalFlex";
import  Card  from "./Card";

import { Download, FileText, RefreshCcw } from "react-feather";

const cardType = ["Plain", "Shadow", "Borderd", "BorderWithShadow"];
export default {
  title: "Components(Done)/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    type: {
      description: "Select card type",
      control: {
        type: "radio",
        options: ["Plain", "Shadow", "Borderd", "BorderWithShadow"],
      },
      defaultValue: "Plain",
    },
    headerTitle: {
      description: "Card title",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    headerSubTitle: {
      description: "Card title description",
      control: {
        type: "text",
      },
      defaultValue: "Default card title descriotion",
    },
    footerTitle: {
      description: "Enable Border Radius",
      control: {
        type: "text",
      },
      defaultValue: "Footer title",
    },
    footerSubtitle: {
      description: "Enable Border Radius",
      control: {
        type: "text",
      },
      defaultValue: "Footer subtitle",
    },

    primaryAction: {
      description: "Card primary action",
      control: {
        type: "text",
      },
      defaultValue: "Default card description",
    },
    secondaryAction: {
      description: "Card secondary action",
      control: {
        type: "text",
      },
      defaultValue: "Default card description",
    },
    children: {
      description: "Card secondary action",
      control: {
        type: "text",
      },
      defaultValue: "Default card description",
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <Card
      primaryAction={{
        children: "Ok",
        color: "Primary",
        isDisabled: false,
        isLoading: false,
        onClick: () => {
          alert("Primary action click1");
        },
      }}
      secondaryAction={{
        children: "Cancel",
        color: "Primary",
        isDisabled: false,
        isLoading: false,
        onClick: () => {
          alert("Secondary action click:)");
        },
      }}
      type={rest.type}
      // headerActions={[
      //     {
      //         title: "title 1",
      //         items: [
      //             {
      //                 content: " Action 1 1",
      //                 onClick: () => alert("Hello 1 1"),
      //             },
      //             {
      //                 content: " Action 1 2",
      //                 onClick: () => alert("Hello 1 2"),
      //             },
      //             {
      //                 content: "Action 1 3",
      //                 onClick: () => alert("Hello 1 3"),
      //             },
      //         ],
      //     }]}
      headerTitle={rest.headerTitle}
      headerSubTitle={rest.headerSubTitle}
      footerTitle={rest.footerTitle}
      footerSubtitle={rest.footerSubtitle}
    >
      {rest.children}
    </Card>
  );
};

export const Default = Template.bind({});

//card_width_multiple type
export const CardWithMultipleType: any = Template.bind({});
CardWithMultipleType.decorators = [
  () => {
    return (
      <VerticalFlex gap={18}>
        {cardType.map((item: any, ind) => {
          return (
            <Card
              key={ind}
              type={item}
              headerTitle={item + "Card"}
              primaryAction={{
                children: "Ok",
                color: "Primary",
                isDisabled: false,
                isLoading: false,
                onClick: () => {
                  alert("Primary action click1");
                },
              }}
            >
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </Card>
          );
        })}
      </VerticalFlex>
    );
  },
];

//card_width_header_actions
export const CardWithHeaderActions: any = Template.bind({});
CardWithHeaderActions.decorators = [
  () => {
    return (
      <Card
        type={"Shadow"}
        headerActions={[
          {
            items: [
              {
                content: "Refresh",
                onClick: () => {
                  alert("Action1");
                },
                prefixIcon: <RefreshCcw size={15} />,
              },
              {
                content: "Export",
                onClick: () => {
                  alert("Action2");
                },
                prefixIcon: <FileText size={15} />,
              },
              {
                content: "Download",
                onClick: () => {
                  alert("Action3");
                },
                prefixIcon: <Download size={15} />,
              },
            ],
          },
        ]}
        headerTitle={"Card with actions"}
        headerSubTitle="Lorem ipsum is placeholder text commonly"
        primaryAction={{
          children: "Ok",
          color: "Primary",
          isDisabled: false,
          isLoading: false,
          onClick: () => {
            alert("Primary action click1");
          },
        }}
      >
        <TextStyle as="p">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and p
        </TextStyle>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </Card>
    );
  },
];
