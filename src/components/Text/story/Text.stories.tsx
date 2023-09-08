import React from "react";
import { FlexLayout, Text } from "../..";
import { Card } from "../../Card";
import { TextI } from "../Text";

export default {
  title: "Components/Entity/Text",
  component: Text,
  argTypes: {
    children: {
      description: "Your content goes here",
      control: {
        type: "text",
      },
      defaultValue:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    type: {
      description: `You Can change the Text size  
            <code>
             <pre><b> Here are the value of types</b>   
              "T-1" :-40px
              "T-2" :-38px
              "T-3" :-32px
              "T-4" :-24px
              "T-5" :-20px
              "T-6" :-18px
              "T-7" :-16px
              "T-8" :-14px
              "T-9" :-13 px
              "T-10" :-12px
             </pre>
            </code>
`,
      control: {
        type: "radio",
        options: [
          "T-1",
          "T-2",
          "T-3",
          "T-4",
          "T-5",
          "T-6",
          "T-7",
          "T-8",
          "T-9",
          "T-10",
        ],
      },
      defaultValue: "T-8",
    },
    as: {
      description: "You Can change the Text element tag name",
      control: {
        type: "radio",
        options: [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "p",
          "span",
          "label",
          "em",
          "strong",
        ],
      },
      defaultValue: "p",
    },
    textcolor: {
      description: "Change the Text Color",
      control: {
        type: "radio",
        options: [
          "default",
          "secondary",
          "subdued",
          "disabled",
          "negative",
          "success",
          "primary",
          "warning",
        ],
      },
      defaultValue: "default",
    },

    alignment: {
      description: "Change the alignment of your Text",
      control: {
        type: "radio",
        options: ["left", "right", "center"],
      },
      defaultValue: "left",
    },
    wordBreak: {
      description: "Break Word",
      control: {
        type: "radio",
        options: ["breakWord", "breakAll", "keepAll", "normal"],
      },
      defaultValue: "normal",
    },
    customClass: {
      description: "set customClass of text",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    truncate: {
      description: "set truncate",
      control: {
        type: "number",
      },
      defaultValue: "",
    },
    textDecoration: {
      description: "Change the Text underLine Style",
      control: {
        type: "radio",
        options: ["underLine", "lineThrough"],
      },
      defaultValue: "",
    },
    fontweight: {
      description: "set Fontweight of text",
      control: {
        type: "radio",
        options: ["normal", "bold", "bolder"],
      },
      defaultValue: "normal",
    },
  },
};

const Template = (rest: TextI) => {
  return (
    <Card>
      <Text
        {...rest}
        truncate={rest.truncate}
        customClass={rest.customClass}
        as={rest.as}
        type={rest.type}
      >
        {rest.children}
      </Text>
    </Card>
  );
};

export const Primary = Template.bind({});
//Text Colors types
export const TextColors: any = Template.bind({});
TextColors.decorators = [
  () => {
    return (
      <Card title="Text Colors">
        <FlexLayout spacing="loose" direction="vertical">
          {[
            "default",
            "secondary",
            "subdued",
            "disabled",
            "negative",
            "success",
            "primary",
            "warning",
          ].map((items: any, index: number) => {
            return (
              <Text
                key={index}
                textcolor={items}
              >{`TextStyle ${items} Color`}</Text>
            );
          })}
        </FlexLayout>
      </Card>
    );
  },
];
//Text Types
export const TextTypes: any = Template.bind({});
TextTypes.decorators = [
  () => {
    return (
      <Card title="Text Types">
        <FlexLayout spacing="loose" direction="vertical">
          {[
            "T-1",
            "T-2",
            "T-3",
            "T-4",
            "T-5",
            "T-6",
            "T-7",
            "T-8",
            "T-9",
            "T-10",
          ].map((items: any, index: number) => {
            return (
              <Text key={index} type={items}>{`TextStyle ${items} Type`}</Text>
            );
          })}
        </FlexLayout>
      </Card>
    );
  },
];
//Text Fontweight
export const TextFontWeight: any = Template.bind({});
TextFontWeight.decorators = [
  () => {
    return (
      <Card title="Text FontWeight">
        <FlexLayout spacing="loose" direction="vertical">
          {["normal", "bold", "bolder"].map((items: any, index: number) => {
            return (
              <Text
                key={index}
                fontweight={items}
              >{`TextStyle ${items} Font Weight`}</Text>
            );
          })}
        </FlexLayout>
      </Card>
    );
  },
];
//Text Alignment
export const TextAlignment: any = Template.bind({});
TextAlignment.decorators = [
  () => {
    return (
      <Card title="Text Alignment">
        <FlexLayout spacing="loose" direction="vertical">
          {["left", "center", "right"].map((items: any, index: number) => {
            return (
              <Text
                key={index}
                alignment={items}
              >{`TextStyle ${items} Alignment`}</Text>
            );
          })}
        </FlexLayout>
      </Card>
    );
  },
];
//