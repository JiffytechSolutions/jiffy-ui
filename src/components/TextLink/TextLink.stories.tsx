import React from "react";
import FlexLayout from "../FlexLayout/FlexLayout";
import TextStyle from "../TextStyle/TextStyle";
import TextLink from "./TextLink";
import { ExternalLink } from "react-feather";
import InlineStack from "../InlineStack/InlineStack";

export default {
  title: "Components/TextLink",
  component: TextLink,
  parameters: { docs: { autodocs: true, }, },
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
        options: ["Left", "Right"],
      },
      defaultValue: "Right",
    },
    linkType: {
      description: "Change Link Type",
      control: {
        type: "radio",
        options: ["Success", "Danger", "Warning", "Default"],
      },
      defaultValue: "Default",
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <>

      <TextLink
        url="https://aws.amazon.com/s3/"
        target={rest.target}
        label={rest.label}
        isDisabled={rest.isDisabled}
        icon={<ExternalLink size="16" />}
        iconAlign={rest.iconAlign}
        linkType={rest.linkType}
        onClick={() => alert("Link clicked")}

      />

    </>
  );
};

export const Primary = Template.bind({});

// Text Links Without Icon and onClick
export const Text_Links_Without_Icon_and_onClick: any = Template.bind({});
Text_Links_Without_Icon_and_onClick.decorators = [
  () => {
    return (

      <TextLink onClick={() => alert("Link clicked")} label="Text Link" />

    );
  },
];

// Text Links With Icon and onClick
export const Text_Links_With_Icon_and_onClick: any = Template.bind({});
Text_Links_With_Icon_and_onClick.decorators = [
  () => {
    return (

      <TextLink
        onClick={() => alert("Link clicked")}
        icon={<ExternalLink size="16" />}
        label="Text Link"
      />

    );
  },
];

// Text Links With url
export const Text_Links_With_Url: any = Template.bind({});
Text_Links_With_Url.decorators = [
  () => {
    return (

      <TextLink
        url="www.google.com"
        target="_blank"
        icon={<ExternalLink size="16" />}
        label="Text Link"
      />

    );
  },
];

// Text Links With Paragraph Without icon
export const Text_Links_With_Paragraph_Without_Icon: any = Template.bind({});
Text_Links_With_Paragraph_Without_Icon.decorators = [
  () => {
    return (
      <TextStyle as="p" textColor="Secondary">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy{" "}
        <TextLink onClick={() => alert("Link clicked")} label="Text Link" />{" "}
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </TextStyle>

    );
  },
];

// Text Links With Paragraph With icon
export const Text_Links_With_Paragraph_With_Icon: any = Template.bind({});
Text_Links_With_Paragraph_With_Icon.decorators = [
  () => {
    return (

      <TextStyle as="p">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy{" "}
        <TextLink
          onClick={() => alert("Link clicked")}
          label="Text Link"
          icon={<ExternalLink size="16" />}
        />{" "}
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </TextStyle>

    );
  },
];

// Text Links With Icon Types
const LinkType = ["Success", "Danger", "Warning", "Default"];
export const Text_Links_With_Link_Types: any = Template.bind({});
Text_Links_With_Link_Types.decorators = [
  () => {
    return (
      <InlineStack gap={2}>
        {LinkType.map((item: any, index) => (
          <TextLink
            key={index}
            linkType={item}
            onClick={() => alert("Link clicked")}
            label="Text Link"
            icon={<ExternalLink size="16" />}
          />
        ))}
      </InlineStack>
    );
  },
];
// export function Documentation() {
//   return <TextLinkDoc />;
// }
