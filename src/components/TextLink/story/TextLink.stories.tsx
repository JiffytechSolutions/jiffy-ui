import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Card } from "../../Card";
import { FlexLayout } from "../../FlexLayout";
import { ExternalLink } from "../../../storybook/Foundation/Icons/Icons";
import TextLink from "../TextLink";
import Text from "../../Text/Text";
import { TextLinkI } from "../TextLink";
import * as Icons from "../../../storybook/Foundation/Icons/Icons";
import TextLinkDoc from "../Document/TextLInkDoc";
const allIcons: any = { ...Icons };

export default {
  title: "Components/Actions/TextLink",
  component: TextLink,
  parameters: {
    docs: {
      description: {
        component:
          "<div style='margin-top: 15px;'><div class='inte- flex inte- flex--wrap inte- flex--spacing- Extraloose inte - flex--vertical'><div class='inte - flex__item'><h4 class='Paragraph  inte__text--light none inte__font--normal inte__Paragraph--font--large'>Text Link is an actionable text component with connection to another web pages. They are used as navigational elements that may appear on their own, within a sentence or paragraph, or directly following the content.</h4></div><div class='inte - flex__item'><p><blockquote>A link is a reference to a resource.</blockquote></p></div></div>",
      },
    },
    design : {
      type : 'figma',
      url : "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-ver3.0.2-(Production)?type=design&node-id=165-12056&mode=design&t=JpmkWVh9faGpjD3H-0"
    }
  },
  argTypes: {
    label: {
      description: "Kindly Enter Label",
      control: {
        type: "text",
      },
      defaultValue: "Text Link",
    },
    customClass: {
      description: "You can add any customClass",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    isDisabled: {
      description: "Make text link disabled",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    icon: {
      description: "Choose icon",
      control: {
        type: "select",
        options: Object.keys(allIcons),
      },
      defaultValue: "ExternalLink",
    },
    url: {
      description: "Kindly Enter the url",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    target: {
      description: "Url will open in targeted page",
      control: {
        type: "radio",
        options: ["_self", "_blank", "_parent", "_top"],
      },
      defaultValue: "_blank",
    },
    iconAlign: {
      description: "IconAlignment",
      control: {
        type: "radio",
        options: ["left", "right"],
      },
      defaultValue: "right",
    },
    linkType: {
      description: "Change Link Type",
      control: {
        type: "radio",
        options: ["danger", "warning", "default"],
      },
      defaultValue: "default",
    },
  },
} as ComponentMeta<typeof TextLink>;

interface NewI extends TextLinkI {
  icon: "ExternalLink";
}

const Template = (rest: NewI) => {
  return (
    <>
      <Card title={"Primary Text Link"}>
        <TextLink
          {...rest}
          target={rest.target}
          label={rest.label}
          isDisabled={rest.isDisabled}
          icon={allIcons[rest.icon]({
            size: `16`,
            color: `currentColor`,
          })}
          onClick={() => alert("Link clicked")}
        />
      </Card>
    </>
  );
};

export const Primary = Template.bind({});

// Text Links Without Icon and onClick
export const Text_Links_Without_Icon_and_onClick: any = Template.bind({});
Text_Links_Without_Icon_and_onClick.decorators = [
  () => {
    return (
      <Card title=" Text Links Without Icon and onClick">
        <FlexLayout spacing="loose">
          <TextLink onClick={() => alert("Link clicked")} label="Text Link" />
        </FlexLayout>
      </Card>
    );
  },
];

// Text Links With Icon and onClick
export const Text_Links_With_Icon_and_onClick: any = Template.bind({});
Text_Links_With_Icon_and_onClick.decorators = [
  () => {
    return (
      <Card title=" Text Links With Icon and onClick">
        <FlexLayout spacing="loose">
          <TextLink
            onClick={() => alert("Link clicked")}
            icon={<ExternalLink size="16" />}
            label="Text Link"
          />
        </FlexLayout>
      </Card>
    );
  },
];

// Text Links With url
export const Text_Links_With_Url: any = Template.bind({});
Text_Links_With_Url.decorators = [
  () => {
    return (
      <Card title=" Text Links With Url">
        <FlexLayout spacing="loose">
          <TextLink
            url="www.google.com"
            target="_blank"
            icon={<ExternalLink size="16" />}
            label="Text Link"
          />
        </FlexLayout>
      </Card>
    );
  },
];

// Text Links With Paragraph Without icon
export const Text_Links_With_Paragraph_Without_Icon: any = Template.bind({});
Text_Links_With_Paragraph_Without_Icon.decorators = [
  () => {
    return (
      <Card title=" Text Links With Icon">
        <Text as="p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy{" "}
          <TextLink onClick={() => alert("Link clicked")} label="Text Link" />{" "}
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </Card>
    );
  },
];

// Text Links With Paragraph With icon
export const Text_Links_With_Paragraph_With_Icon: any = Template.bind({});
Text_Links_With_Paragraph_With_Icon.decorators = [
  () => {
    return (
      <Card title=" Text Links With Icon">
        <Text as="p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy{" "}
          <TextLink
            onClick={() => alert("Link clicked")}
            label="Text Link"
            icon={<ExternalLink size="16" />}
          />{" "}
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </Card>
    );
  },
];

// Text Links With Icon Types
const LinkType = ["danger", "warning", "default"];
export const Text_Links_With_Link_Types: any = Template.bind({});
Text_Links_With_Link_Types.decorators = [
  () => {
    return (
      <Card title=" Text Links With Icon">
        <FlexLayout direction="vertical" spacing="loose">
          {LinkType.map((item: any, index) => (
            <TextLink
              key={index}
              linkType={item}
              onClick={() => alert("Link clicked")}
              label="Text Link"
              icon={<ExternalLink size="16" />}
            />
          ))}
        </FlexLayout>
      </Card>
    );
  },
];
export function Documentation() {
  return <TextLinkDoc />;
}
