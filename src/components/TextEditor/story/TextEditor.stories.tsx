import React, { useState } from "react";
import TextEditor from "../TextEditor";
import { Card } from "../../Card";
import Button from "../../Button/Button";
import { TextField } from "../../Form";

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
    hasError: {
      description: "Make textEditor state error ",
      control: {
        type: "boolean"
      },
      defaultValue: false
    },
    toolbarItems: {
      description: `<table>
      <thead>
        <tr>
          <th>Toolbar Item</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>headings</td>
          <td><code>boolean</code></td>
        </tr>
        <tr>
          <td>fontFamily</td>
          <td><code>boolean</code></td>
        </tr>
        <tr>
          <td>bold</td>
          <td><code>boolean</code></td>
        </tr>
        <tr>
          <td>italic</td>
          <td><code>boolean</code></td>
        </tr>
        <tr>
          <td>underline</td>
          <td><code>boolean</code></td>
        </tr>
        <tr>
          <td>strikeThrough</td>
          <td><code>boolean</code></td>
        </tr>
        <tr>
          <td>subScript</td>
          <td><code>boolean</code></td>
        </tr>
        <tr>
          <td>subScript</td>
          <td><code>boolean</code></td>
        </tr>
        <tr>
          <td>textColor</td>
          <td><code>boolean</code></td>
        </tr>
        <tr>
          <td>fontSize</td>
          <td><code>boolean</code></td>
        </tr>
        <tr>
          <td>code</td>
          <td><code>boolean</code></td>
        </tr>
        <tr>
          <td>fontColor</td>
          <td><code>boolean</code></td>
        </tr>
        <tr>
          <td>clearFormatting</td>
          <td><code>boolean</code></td>
        </tr>
        <tr>
          <td>list</td>
          <td style="padding:0">
            <table>
              <tr>
                <td>orderedList</td>
                <td><code>boolean</code></td>
              </tr>
              <tr>
                <td>unOrderedList</td>
                <td><code>boolean</code></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>textAlign</td>
          <td style="padding:0">
            <table>
              <tr>
                <td>left</td>
                <td><code>boolean</code></td>
              </tr>
              <tr>
                <td>right</td>
                <td><code>boolean</code></td>
              </tr>
              <tr>
                <td>center</td>
                <td><code>boolean</code></td>
              </tr>
              <tr>
                <td>justify</td>
                <td><code>boolean</code></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>link</td>
          <td><code>boolean</code></td>
        </tr>
        <tr>
          <td>image</td>
          <td><code>boolean</code></td>
        </tr>
        <tr>
          <td>table</td>
          <td><code>boolean</code></td>
        </tr>
        <tr>
          <td>codeBlock</td>
          <td><code>boolean</code></td>
        </tr>
      </tbody>
    </table>`
    },
    hasAutoFocus: {
      description: "Set focus to the editor when it loads",
      control: {
        type: "boolean"
      },
      defaultValue: false,
    },
    isDisabled: {
      description: "Make textEditor state disable ",
      control: {
        type: "boolean"
      },
      defaultValue: false
    },
    customClass: {
      description: "Add custom class in TextEditor",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    onError: {
      description: "This function triggers when the editor has internal Error",
      control: {
        disable: true
      }
    },
  },
};

function generateRandomContent(): string {
  const content: string[] = ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua'];
  return content[Math.floor(Math.random() * content.length)];
}

const Template = ({ ...rest }) => {
  const [value, setValue] = useState("")
  return (
    <Card title="Text Editor Primary">
      <TextEditor {...rest} onChange={(newValue) => console.log(newValue, "editor")} />
    </Card>
  );
};
export const Primary: any = Template.bind({});

export const TextEditorWithDefaultValue: any = ({ ...rest }) => {

  const [initialHtml, setinitialHtml] = useState("<p>akdhfjg<b>sdfhkjdasdjhas </b><i><b>aksdkas</b></i></p>")


  const changeHtml = () => {
    setinitialHtml('<p dir="ltr"><b>asdasdasd</b><i><b>asdasdasdasdasd</b></i><i>asdasdasdasd</i><i><b>asdasdasddddd</b></i><i>ddd</i><i><b>ddddd</b></i></p>')
  }
  console.log(initialHtml)
  return (
    <Card title="Text Editor Primary" primaryAction={{
      content: "Change HTML",
      onClick: changeHtml
    }}>
      {/* <div style={{ minHeight: 1000 }}></div> */}
      <TextEditor
        {...rest}
        value={initialHtml}
        onChange={(newState) => {
          setinitialHtml(newState);
        }}
        toolbarItems={{
          headings: false,
          fontFamily: false,
          fontSize: false,
          // bold : false,
          // italic : false,
          clearFormatting: false,
          code: false,
          codeBlock: false,
          fontColor: false,
          // list: {
          //   orderedList : false,
          //   unOrderedList : false
          // },
          link: false,
          image: false,
          strikeThrough: false,
          subScript: false,
          superScript: false,
          table: false,
          textAlign: {
            center: false,
            justify: false,
            left: false,
            right: false
          },
          // underline : false,
        }}
      />
    </Card>
  )
}
