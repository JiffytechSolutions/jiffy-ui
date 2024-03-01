import React from "react";
import { Skeleton, Card, FlexLayout, PageHeader } from "../..";
import { FlexChild } from "../../FlexLayout";
import SkeletonDoc from "../Document/SkeletonDoc";

export default {
  title: "Components/Layout/Skeleton",
  component: Skeleton,
  parameters: {
    docs: {
      description: {
        component: "<div style='margin-top: 15px;'><div class='inte- flex inte- flex--wrap          inte- flex--spacing- Extraloose inte - flex--vertical'><div class='inte - flex__item'><h4 class='Paragraph  inte__text--light none inte__font--normal inte__Paragraph--font--large'>Footers are important website components because they display helpful information, including navigational links, contact details, policies, copyright info, and social media links, so users can learn more about your business. </h4></div><div class='inte - flex__item'><p><blockquote>A website's footer is an area located at the bottom of every page on a website, below the main body content.</blockquote></p></div></div>"
      },
    },
    design : {
      type : "figma",
      url : "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-ver3.0.2-(Production)?type=design&node-id=1994-143765&mode=design&t=JpmkWVh9faGpjD3H-0"
    }
  },
  argTypes: {
    type: {
      description: "Set Type of Skelton",
      control: {
        type: "radio",
        options: ["line", "custom"],
      },
      defaultValue: "line",
    },
    line: {
      description: "Set no of skelton (Works With Line Type Only)",
      control: {
        type: "number",
      },
      defaultValue: 1,
    },
    width: {
      description: "set width of skelton (Either % of px values)",
      control: {
        type: "text",
      },
      defaultValue: "50px",
    },
    height: {
      description: "set height of skelton (Either % of px values)",
      control: {
        type: "text",
      },
      defaultValue: "50px",
    },
    customClass: {
      description: "set customClass ",
      control: {
        type: "text",
      },
      defaultValue:"",
    },
    rounded: {
      description: "Set It rounded (Works With Custom Type Only width equal height and Width for proper circle)",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <Card>
      <Skeleton
        line={rest.line}
        height={rest.height}
        width={rest.width}
        type={rest.type}
        rounded={rest.rounded}
        customClass={rest.customClass}
      />
    </Card>
  );
};

export const Primary = Template.bind({});

//Types Variant
const type = ["line", "custom"];
export const Types: any = Template.bind({});
Types.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="extraLoose" direction="vertical">
        {type.map((type: any) => (
          <>
            {type}
            <Skeleton type={type} line={type === "line" ? 3 : 1} />
          </>
        ))}
      </FlexLayout>
    </Card>
  ),
];

//Custom height Width
export const custom_height_width: any = Template.bind({});
custom_height_width.decorators = [
  () => (
    <Card title="Height 150px Width 150px">
      <Skeleton type="custom" height="150px" width="150px" />
    </Card>
  ),
];

//Custom height Width
export const custom_height_width_Rounded: any = Template.bind({});
custom_height_width_Rounded.decorators = [
  () => (
    <Card title="Height 150px Width 150px">
      <Skeleton rounded type="custom" height="150px" width="150px" />
    </Card>
  ),
];

//various Set of Examples
export const various_set_of_examples: any = Template.bind({});
various_set_of_examples.decorators = [
  () => (
    <Card>
      <FlexLayout
        desktopWidth="100"
        tabWidth="100"
        mobileWidth="100"
        spacing="loose"
      >
        <Card title="Page Header Skeleton" cardType="bordered">
          <PageHeader
            title={
              <FlexLayout spacing="loose">
                <Skeleton height="38px" width="38px" type="custom" />
                <Skeleton height="38px" width="200px" type="custom" />
              </FlexLayout>
            }
            description={<Skeleton height="20px" width="50%" type="custom" />}
          ></PageHeader>
        </Card>
        <Card title={"Heading and Description"} cardType="bordered">
          <FlexLayout spacing="tight" direction="vertical">
            <Skeleton height="38px" width="200px" type="custom" />
            <Skeleton height="20px" width="50%" type="custom" />
          </FlexLayout>
        </Card>
        <Card title={"Heading Description and ParaGraph"} cardType="bordered">
          <FlexLayout direction="vertical" spacing="loose">
            <FlexLayout spacing="tight" direction="vertical">
              <Skeleton height="38px" width="200px" type="custom" />
              <Skeleton height="20px" width="50%" type="custom" />
            </FlexLayout>
            <Skeleton height="10px" type="line" line={4} />
          </FlexLayout>
        </Card>

        <Card title={"Heading and ParaGraph"} cardType="bordered">
          <FlexLayout spacing="loose" direction="vertical">
            <Skeleton height="38px" width="200px" type="custom" />
            <Skeleton height="10px" type="line" line={4} />
          </FlexLayout>
        </Card>

        <Card title={"Icon With Heading"} cardType="bordered">
          <FlexLayout spacing="loose">
            <Skeleton height="38px" width="38px" type="custom" rounded />
            <Skeleton height="38px" width="200px" type="custom" />
          </FlexLayout>
        </Card>

        <Card
          title={"Icon With Heading Descriptiona and Paragraph"}
          cardType="bordered"
        >
          <FlexLayout spacing="loose">
            <Skeleton height="38px" width="38px" type="custom" rounded />
            <FlexChild childWidth="fullWidth">
              <FlexLayout direction="vertical" spacing="loose">
                <FlexLayout spacing="tight" direction="vertical">
                  <Skeleton height="38px" width="200px" type="custom" />
                  <Skeleton height="20px" width="300px" type="custom" />
                </FlexLayout>
                <Skeleton height="10px" type="line" line={4} />
              </FlexLayout>
            </FlexChild>
          </FlexLayout>
        </Card>
        <Card title={"Heading Description and Action"} cardType="bordered">
          <FlexLayout spacing="loose" halign="fill" valign="start">
            <FlexLayout spacing="tight" direction="vertical">
              <Skeleton height="38px" width="200px" type="custom" />
              <Skeleton height="20px" width="50%" type="custom" />
            </FlexLayout>
            <Skeleton width="100px" height="44px" type="custom"></Skeleton>
          </FlexLayout>
        </Card>

        <Card
          title={"Heading Description ParaGraph and Action"}
          cardType="bordered"
        >
          <FlexLayout direction="vertical" spacing="loose">
            <FlexLayout spacing="loose" halign="fill" valign="start">
              <FlexLayout spacing="tight" direction="vertical">
                <Skeleton height="38px" width="200px" type="custom" />
                <Skeleton height="20px" width="50%" type="custom" />
              </FlexLayout>

              <Skeleton width="100px" height="44px" type="custom"></Skeleton>
            </FlexLayout>
            <Skeleton height="10px" type="line" line={4} />
          </FlexLayout>
        </Card>

        <Card
          title={"Heading Description ParaGraph and Footer Action"}
          cardType="bordered"
        >
          <FlexLayout direction="vertical" spacing="loose">
            <FlexLayout spacing="loose" halign="fill" valign="start">
              <FlexLayout spacing="tight" direction="vertical">
                <Skeleton height="38px" width="200px" type="custom" />
                <Skeleton height="20px" width="50%" type="custom" />
              </FlexLayout>
            </FlexLayout>
            <Skeleton height="10px" type="line" line={4} />
            <FlexLayout halign="end">
              <Skeleton width="100px" height="44px" type="custom"></Skeleton>
            </FlexLayout>
          </FlexLayout>
        </Card>
      </FlexLayout>
    </Card>
  ),
];
export function Documentation() {
  return (
    <SkeletonDoc />
  );
}