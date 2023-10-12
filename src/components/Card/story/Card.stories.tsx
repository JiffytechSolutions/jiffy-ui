import React, { useState } from "react";
import { Story } from "@storybook/react";
import { Card, Button, TextField, Text, TextLink, FlexChild } from "../..";
import { CardI } from "../Card";
import { FormElement } from "../../Form";
import FlexLayout from "../../FlexLayout/FlexLayout";
import {
  ArrowRight,
  MoreVertical,
} from "../../../storybook/Foundation/Icons/Icons";
import { logo } from "./log";
import video_guide from "../component/video_guide.png";
import CardDoc from "../Document/CardDoc";

export default {
  title: "Components/Layout/Card",
  component: Card,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=6110-334307&t=tb1dL4Z7hEk2Cb1x-0",
    },
  },
  argTypes: {
    cardType: {
      description: "Set card type as per your need",
      control: {
        type: "radio",
        options: ["borderLess", "bordered", "shadowed", "filled"],
      },
      defaultValue: "bordered",
    },
    spacing: {
      description:
        "Set card spacing as per your need. <strong> Tight has 16px of space and loose has 20px of space </strong>",
      control: {
        type: "radio",
        options: ["loose", "tight"],
      },
      defaultValue: "tight",
    },
    customClass: {
      description: "Set any customClass for your custom requirement",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    title: {
      description: "set card title",
      control: {
        type: "text",
      },
      defaultValue: "Name",
    },

    subTitle: {
      description: "set card Sub Title",
      control: {
        type: "text",
      },
      defaultValue: "SubTitle",
    },
    media: {
      description: "Card Media , Enter Any Image Url to check results",
      control: {
        type: "text",
      },
      defaultValue: video_guide,
    },
    action: {
      description: "Card Action",
      control: {
        disable: true,
      },
    },
    primaryAction: {
      description: `Card Action in array format   
      <u><strong>Note<span style="color: red;">*</span></strong></u>
          Give Primary Action like this:-
          <pre>
            <code>
              { 
                content:"Primary",
                type: "primary" 
              }
            </code>
          </pre>`,
      control: {
        type: "array",
        disable: true,
      },
    },
    secondaryAction: {
      description: `Card Action in array format 
       <u><strong>Note<span style="color: red; ">*</span></strong></u>
          Give Seconadary Action like this
        <pre>
          <code>
            {
              content:"Primary",
              type: "primary" 
            }
          </code>
        </pre>`,
      control: {
        type: "array",
        disable: true,
      },
    },
    avatar: {
      description: `Set Avatar 
      <u><strong>Note<span style="color: red; ">*</span></strong></u>
         Set Avatar like this
         all the props of Avatar component accessible here
        <pre>
          <code>
     {
      text: "jade Pixel"
      size:"Small"
     }
          </code>
        </pre> `,
      control: {
        disable: true,
      },
    },
  },
};

function BodyFun() {
  const [text, setText] = useState("");

  return (
    <React.Fragment>
      <TextField
        value={text}
        label="Label"
        onChange={(e) => {
          setText(e);
        }}
        placeHolder="Placeholder..."
      />
    </React.Fragment>
  );
}

const Template: Story<CardI> = (args) => (
  <Card
    cardType={args.cardType}
    avatar={{
      text: "jade Pixel",
    }}
    title={args.title}
    subTitle={args.subTitle}
    action={<Button type="textButton" icon={<MoreVertical />} />}
    spacing={args.spacing}
    media={args.media}
    primaryAction={{ content: "Primary", type: "primary" }}
    secondaryAction={{ content: "Secondary", type: "outlined" }}
  >
    <Text type="T-7" fontweight="bolder" textcolor="default">
      Title placeholder
    </Text>
    <Text textcolor="secondary" as="p" type="T-8">
      Placeholder for card text. Enter text into this container to describe the
      card feature.
    </Text>
  </Card>
);

export const Primary = Template.bind({});

// Card Types
const cardType = ["borderLess", "bordered", "filled", "shadowed"];
export const Card_Type: any = Template.bind({});
Card_Type.decorators = [
  () => (
    <Card cardType="borderLess">
      <FlexLayout
        spacing="loose"
        desktopWidth="50"
        tabWidth="50"
        wrap="wrap"
        mobileWidth="100"
      >
        {cardType.map((variant: any, index: any) => (
          <Card key={index} cardType={variant} title={variant + " Card"}>
            <FormElement>
              <BodyFun />
              <BodyFun />
            </FormElement>
          </Card>
        ))}
      </FlexLayout>
    </Card>
  ),
];

// Card with header action

export const Card_with_Header_and_header_action: any = Template.bind({});
Card_with_Header_and_header_action.decorators = [
  () => (
    <Card
      cardType={"bordered"}
      title="Name"
      subTitle={"Subtitle"}
      avatar={{
        text: "jade pixel",
      }}
      action={<TextLink label="link here" />}
    >
      <FormElement>
        <BodyFun />
        <BodyFun />
      </FormElement>
    </Card>
  ),
];
// card with footer actions

export const card_with_footer_actions: any = Template.bind({});
card_with_footer_actions.decorators = [
  () => (
    <Card
      cardType={"bordered"}
      primaryAction={{ content: "Button", type: "primary" }}
      secondaryAction={{
        content: "Button",
        type: "outlined",
      }}
    >
      <FormElement>
        <BodyFun />
        <BodyFun />
      </FormElement>
    </Card>
  ),
];
// Card with media
export const Card_with_media: any = Template.bind({});
Card_with_media.decorators = [
  () => (
    <Card
      title="Name"
      subTitle={"Subtitle"}
      avatar={{
        text: "jade pixel",
      }}
      action={<TextLink label="link here" />}
      cardType={"bordered"}
      media={video_guide}
      primaryAction={{ content: "Button" }}
      secondaryAction={{
        content: "Button",
        type: "outlined",
      }}
    >
      <FormElement>
        <BodyFun />

        <BodyFun />
      </FormElement>
    </Card>
  ),
];

// Card with diffrent spacing
const cardSpacingArr = ["loose", "tight"];
export const cardSpacing: any = Template.bind({});
cardSpacing.decorators = [
  () => (
    <Card>
      <FlexLayout
        spacing="loose"
        desktopWidth="50"
        tabWidth="50"
        mobileWidth="100"
        wrap="wrap"
      >
        {cardSpacingArr.map((variant: any, index: number) => (
          <Card
            key={index}
            cardType={"bordered"}
            spacing={variant}
            title={variant + " Card"}
          >
            <FormElement>
              <BodyFun />
              <BodyFun />
            </FormElement>
          </Card>
        ))}
      </FlexLayout>
    </Card>
  ),
];
// Card with diffrent spacing

export const InterativeCard: any = Template.bind({});
InterativeCard.decorators = [
  () => (
    <Card>
      <FlexLayout
        spacing="loose"
        desktopWidth="50"
        tabWidth="50"
        mobileWidth="100"
        wrap="wrap"
      >
        {cardSpacingArr.map((variant: any, index: number) => (
          <Card
            key={index}
            onClick={() => {}}
            cardType={"bordered"}
            spacing={variant}
          >
            <FlexLayout direction="vertical" spacing="mediumLoose">
              <FlexChild>
                <FlexLayout halign="fill" valign="center">
                  <Text fontweight="bolder" type="T-7">
                    Total Revenue
                  </Text>
                  <Button type="textButton" icon={<ArrowRight />} />
                </FlexLayout>
              </FlexChild>
              <FlexChild>
                <Text type="T-1" fontweight="bolder">
                  $12250.00
                </Text>
              </FlexChild>
              <FlexChild>
                <FlexLayout halign="fill" valign="center">
                  {logo}
                  <Text textcolor="success" type="T-8">
                    +9.09%
                  </Text>
                </FlexLayout>
              </FlexChild>
            </FlexLayout>
          </Card>
        ))}
      </FlexLayout>
    </Card>
  ),
];
export function Documentation() {
  return <CardDoc />;
}
