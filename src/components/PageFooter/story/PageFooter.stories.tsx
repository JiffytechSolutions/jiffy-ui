import React from "react";
import PageFooter from "../PageFooter";
import { Meta } from "@storybook/react/types-6-0";
import TextLink from "../../TextLink/TextLink";
import { ExternalLink } from "../../../storybook/Foundation/Icons/Icons";
import FooterDoc from "../Document/FooterDoc";

export default {
  title: "Components/Layout/PageFooter",
  component: PageFooter,
  parameters: {
    docs: {
      description: {
        component:
          "<div style='margin-top: 15px;'><div class='inte- flex inte- flex--wrap          inte- flex--spacing- Extraloose inte - flex--vertical'><div class='inte - flex__item'><h4 class='Paragraph  inte__text--light none inte__font--normal inte__Paragraph--font--large'>Footers are important website components because they display helpful information, including navigational links, contact details, policies, copyright info, and social media links, so users can learn more about your business. </h4></div><div class='inte - flex__item'><p><blockquote>A website's footer is an area located at the bottom of every page on a website, below the main body content.</blockquote></p></div></div>",
      },
    },
    design: {
      type: "figma",
      url: " https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=3529-236783&t=fwx7SHLr0Vi8Wxq1-0",
    },
  },
  argTypes: {
    children: {
      description: "Content to display inside the footer",
      control: { type: "text" },
      defaultValue: " ©2023 Cedcommerce Inc Product.",
    },
    customClass: {
      description: "custom class",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
  },
} as Meta;

const Template = ({ ...rest }) => {
  return (
    <PageFooter customClass={rest.customClass}>{rest.children}</PageFooter>
  );
};
export const Primary = Template.bind({});
export const footer_with_link: any = Template.bind({});
footer_with_link.decorators = [
  () => {
    return (
      <PageFooter>
        ©2023 <TextLink label="Cedcommerce Inc Product." />
      </PageFooter>
    );
  },
];

export const footer_with_support_text: any = Template.bind({});
footer_with_support_text.decorators = [
  () => {
    return (
      <PageFooter>
        ©2023{" "}
        <div>
          Need Help? <TextLink label="Get Support" />
        </div>{" "}
      </PageFooter>
    );
  },
];

export const footer_with_brand_name_and_support_text: any = Template.bind({});
footer_with_brand_name_and_support_text.decorators = [
  () => {
    return (
      <PageFooter>
        ©2023 Cedcommerce Inc Product.{" "}
        <div>
          Need Help? <TextLink label="Get Support" />
        </div>{" "}
      </PageFooter>
    );
  },
];

export const footer_with_brand_link_and_support_text: any = Template.bind({});
footer_with_brand_link_and_support_text.decorators = [
  () => {
    return (
      <PageFooter>
        ©2023{" "}
        <TextLink
          label="Cedcommerce Inc Product."
          url="https://cedcommerce.com/"
        />{" "}
        <div>
          Need Help?{" "}
          <TextLink
            label="Get Support"
            icon={<ExternalLink size="16" color="var(--inte-B80)" />}
          />
        </div>
      </PageFooter>
    );
  },
];
export function Documentation() {
  return <FooterDoc />;
}
