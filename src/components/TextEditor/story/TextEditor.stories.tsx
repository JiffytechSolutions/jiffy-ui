import React from "react";
import TextEditor from "../TextEditor";
import { Card } from "../../Card";

export default {
  title: "Components/TextEditor",
  component: TextEditor,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-ver3.0.2-(Production)?type=design&node-id=16756-1366&mode=design&t=Eb9j5huo4gkBGMHa-0",
    },
  },
  argTypes: {
    placeholder: {
      description: "Add placeholder in TextEditor",
      control: {
        type: "text",
      },
      defaultValue: "Start Typing Here...",
    },
    onChange: {
      description: "This function triggers when the editor value changes",
      control: {
        disable: true
      }
    },
    value: {
      description: "Set the editor value to html <br /> Note<span style='color:red;'>*</span> This prop is not sync with textEditor value",
      control: {
        disable: true
      }
    },
    onError: {
      description: "This function triggers when the editor has Error",
      control: {
        disable: true
      }
    },
    customClass: {
      description: "Add custom class in TextEditor",
      control: {
        type: "text",
      },
      defaultValue: "",
    },

  },
};

const Template = ({ ...rest }) => {
  return (
    <Card title="Text Editor Primary">
      <TextEditor {...rest} />
    </Card>
  );
};
export const Primary: any = Template.bind({});

export const TextEditorWithDefaultValue: any = ({ ...rest }) => {
  return (
    <Card title="Text Editor Primary">
      <TextEditor value="<h1>Hello World</h1>" />
    </Card>
  )
}
