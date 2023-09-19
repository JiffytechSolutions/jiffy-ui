import React, { useState } from "react";
import ActionList from "../ActionList";
import { FlexChild, FlexLayout, Button, Card } from "../..";
import { Delete, Instagram, Plus, Activity, Upload } from "./Icon";
import ActionListDoc from "../Document/ActionListDoc";

export default {
  title: "Components/Actions/ActionList",
  component: ActionList,
  parameters: {
    docs: {
      description: {
        component:
          "<div style='margin-top: 15px;'><div class='inte- flex inte- flex--wrap          inte- flex--spacing- Extraloose inte - flex--vertical'><div class='inte - flex__item'><h4 class='Paragraph  inte__text--light none inte__font--normal inte__Paragraph--font--large'>An action list is a vertical list of interactive actions or options, with room for icons, descriptions, side information, and other rich visuals.. It is used to create a drop down menu or to provide alternatives for users to choose from. It contains one or more actions inside to save space. </h4></div><div class='inte - flex__item'><p><blockquote>Action lists display a list of available options.</blockquote></p></div></div>",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=6026-285231&t=tzMhm7j5DhR6wij0-0",
    },
  },
  argTypes: {
    options: {
      description: `<div><strong>Simple or Multidimensional array:-</strong></div><i>Accepted key value pairs in items data:</i><table bgcolor="#f5f5f5"><thead><tr><th>key</th><th>value</th></tr></thead><tbody><tr><td>title</td><td>string</td></tr><tr><td>items</td><td><table bgcolor="#f5f5f5"><thead><tr><th>key</th><th>value</th></tr></thead><tbody><tr><td>content<span style="color:red">*</span></td><td>string</td></tr><tr><td>destructive</td><td>boolean</td></tr><tr><td>isDisabled</td><td>boolean</td></tr><tr><td>description</td><td>string</td></tr><tr><td>onClick<span style="color:red">*</span></td><td>function</td></tr><tr><td>prefixIcon</td><td>React.ReactNode</td></tr><tr><td>suffixIcon</td><td>React.ReactNode</td></tr></tbody></table></td></tr></tbody></table>`,
      control: {
        type: "array",
      },
      defaultValue: [
        {
          title: "Action List With title Only",
          items: [
            {
              destructive: true,
              content: "Action List content",
              onClick: () => alert("Hello 1"),
            },
            {
              content: "Action List content",
              onClick: () => alert("Hello 2"),
            },
            {
              content: "Action List content",
              onClick: () => alert("Hello 3"),
            },
          ],
        },
        {
          title: "Action List With Icon and Title Only",
          items: [
            {
              prefixIcon: Delete,
              content: "Action List content",
              onClick: () => alert("Hello 1"),
            },
            {
              prefixIcon: Instagram,
              content: "Action List content",
              onClick: () => alert("Hello 1"),
            },
            {
              prefixIcon: Instagram,
              content: "Action List content",
              onClick: () => alert("Hello 1"),
            },
          ],
        },
        {
          title: "Action List With Content And Description",
          items: [
            {
              destructive: true,
              content: "Action List content",
              description:
                "Lorem Ipsumm dollar imset gona fine touch for well eing",
              onClick: () => alert("Hello 1"),
            },
            {
              content: "Action List content",
              description:
                "Lorem Ipsumm dollar imset gona fine touch for well eing",
              onClick: () => alert("Hello 1"),
            },
            {
              content: "Action List content",
              description:
                "Lorem Ipsumm dollar imset gona fine touch for well eing",
              onClick: () => alert("Hello 1"),
            },
          ],
        },
        {
          title: "Action List with Prefix Icon and Content",
          items: [
            {
              content: "Action List content",
              description:
                "Lorem Ipsumm dollar imset gona fine touch for well eing",
              prefixIcon: Delete,
              onClick: () => alert("Hello 1"),
            },
            {
              content: "Single-line item",
              description:
                "Lorem Ipsumm dollar imset gona fine touch for well eing",
              suffixIcon: Delete,
              onClick: () => alert("Hello 1"),
            },
          ],
        },
        {
          title: "Action List with Suffix Icon and Content",
          items: [
            {
              content: "Action List content",
              description:
                "Lorem Ipsumm dollar imset gona fine touch for well eing",
              suffixIcon: Instagram,
              onClick: () => alert("Hello 1"),
            },
            {
              content: "Single-line item",
              description:
                "Lorem Ipsumm dollar imset gona fine touch for well eing",
              suffixIcon: Instagram,
              onClick: () => alert("Hello 1"),
            },
          ],
        },
        {
          items: [
            {
              destructive: true,
              content: "Action List content",
              onClick: () => alert("Hello 1"),
            },
          ],
        },
      ],
    },

    isOpen: {
      description: "Controls the Collapsible behaviour of ActionList",
      control: {
        type: "boolean",
        disable: true,
      },
    },
    customClass: {
      description: "Set any custom Class to be used",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    activator: {
      description: "The component on which actionlist is triggred",
      control: {
        disable: true,
      },
    },
    direction: {
      description: "Change the default direction of ActionList",
      control: {
        type: "radio",
        options: ["left", "right", "auto"],
      },
      defaultValue: "auto",
    },
    customRef: {
      description:
        "Takes a callback and that will be called with the HTML element as a parameter",
    },
    isCloseOnEsc: {
      description: "Enable Action List close on Esc Button click",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    onClose: {
      description:
        "onClose is a callback function that is triggered when a component or element is closed or dismissed.",
      control: {
        type: "function",
      },
    },
    footer: {
      description:
        "You Can add footer in action list , footer prop accept here react node ",
      control: {
        disable: true,
      },
    },
    heading: {
      description: "This heading props is working on only mobile device",
      control: {
        disable: true,
      },
    },
  },
};
const Template = ({ ...rest }) => {
  const [active, setActive] = useState(false);

  return (
    <Card>
      <FlexLayout halign="center">
        <FlexChild>
          <ActionList
            {...rest}
            heading="ActionList Heading"
            isOpen={active}
            isCloseOnEsc={rest.isCloseOnEsc}
            onClose={() => setActive(false)}
            activator={
              <Button
                type="outlined"
                onClick={() => setActive(!active)}
                disclosure
              >
                Action List
              </Button>
            }
            options={rest.options}
            direction={rest.direction}
            footer={
              <Button
                type="outlined"
                icon={Plus}
                content="Add Another Account"
                halign="center"
                size="thin"
                isFullWidth
                onClick={() => alert("Add Another Account")}
              />
            }
          />
        </FlexChild>
      </FlexLayout>
    </Card>
  );
};

export const Primary = Template.bind({});

export const ActionList_with_Action_Only: any = Template.bind({});
ActionList_with_Action_Only.decorators = [
  () => {
    const [active, setActive] = useState(false);

    return (
      <Card>
        <ActionList
          isOpen={active}
          onClose={() => setActive(false)}
          activator={
            <Button
              type="outlined"
              onClick={() => setActive(!active)}
              disclosure
              iconAlign="right"
            >
              ActionList
            </Button>
          }
          options={[
            {
              items: [
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 1"),
                },
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 2"),
                },
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 3"),
                },
              ],
            },
          ]}
        />
      </Card>
    );
  },
];
// actionList with disable
export const ActionList_with_Disabled: any = Template.bind({});
ActionList_with_Disabled.decorators = [
  () => {
    const [active, setActive] = useState(false);

    return (
      <Card>
        <ActionList
          isOpen={active}
          onClose={() => setActive(false)}
          activator={
            <Button
              type="outlined"
              onClick={() => setActive(!active)}
              disclosure
              iconAlign="right"
            >
              ActionList
            </Button>
          }
          options={[
            {
              items: [
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 1"),
                },
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 2"),
                  isDisabled: true,
                },
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 3"),
                },
              ],
            },
          ]}
        />
      </Card>
    );
  },
];

export const ActionList_with_Action_and_title: any = Template.bind({});
ActionList_with_Action_and_title.decorators = [
  () => {
    const [active, setActive] = useState(false);

    return (
      <Card>
        <ActionList
          onClose={() => setActive(false)}
          activator={
            <Button
              type="outlined"
              onClick={() => setActive(!active)}
              disclosure
              iconAlign="right"
            >
              ActionList
            </Button>
          }
          isOpen={active}
          options={[
            {
              title: "Action List Title",
              items: [
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 1"),
                },
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 2"),
                },
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 3"),
                },
              ],
            },
          ]}
        />
      </Card>
    );
  },
];

export const ActionList_with_Action_title_and_prefix_icon: any = Template.bind(
  {}
);
ActionList_with_Action_title_and_prefix_icon.decorators = [
  () => {
    const [active, setActive] = useState(false);

    return (
      <Card>
        <ActionList
          onClose={() => setActive(false)}
          activator={
            <Button
              type="outlined"
              onClick={() => setActive(!active)}
              disclosure
              iconAlign="right"
            >
              ActionList
            </Button>
          }
          isOpen={active}
          options={[
            {
              title: "Action List Title with prefix Icon",
              items: [
                {
                  content: "Action 1",
                  prefixIcon: Activity,
                  onClick: () => alert("Hello 1"),
                },
                {
                  content: "Action 1",
                  prefixIcon: Upload,
                  onClick: () => alert("Hello 2"),
                },
                {
                  content: "Action 1",
                  prefixIcon: Activity,
                  onClick: () => alert("Hello 3"),
                },
              ],
            },
          ]}
        />
      </Card>
    );
  },
];

export const ActionList_with_Action_title_and_suffix_icon: any = Template.bind(
  {}
);
ActionList_with_Action_title_and_suffix_icon.decorators = [
  () => {
    const [active, setActive] = useState(false);

    return (
      <Card>
        <ActionList
          onClose={() => setActive(false)}
          activator={
            <Button
              type="outlined"
              onClick={() => setActive(!active)}
              disclosure
              iconAlign="right"
            >
              ActionList
            </Button>
          }
          isOpen={active}
          options={[
            {
              title: "Action List Title with Suffix Icon",
              items: [
                {
                  content: "Action 1",
                  suffixIcon: Activity,
                  onClick: () => alert("Hello 1"),
                },
                {
                  content: "Action 1",
                  suffixIcon: Activity,
                  onClick: () => alert("Hello 2"),
                },
                {
                  content: "Action 1",
                  suffixIcon: Activity,
                  onClick: () => alert("Hello 3"),
                },
              ],
            },
          ]}
        />
      </Card>
    );
  },
];

export const ActionList_with_Action_title_and_description: any = Template.bind(
  {}
);
ActionList_with_Action_title_and_description.decorators = [
  () => {
    const [active, setActive] = useState(false);

    return (
      <Card>
        <ActionList
          onClose={() => setActive(false)}
          activator={
            <Button
              type="outlined"
              onClick={() => setActive(!active)}
              disclosure
              iconAlign="right"
            >
              ActionList
            </Button>
          }
          isOpen={active}
          options={[
            {
              title: "Action List Title with Description",
              items: [
                {
                  content: "Action 1",
                  description: "Description text",
                  onClick: () => alert("Hello 1"),
                },
                {
                  content: "Action 1",
                  description: "Description text",
                  onClick: () => alert("Hello 2"),
                },
                {
                  content: "Action 1",
                  description: "Description text",
                  onClick: () => alert("Hello 3"),
                },
              ],
            },
          ]}
        />
      </Card>
    );
  },
];

export const ActionList_with_Action_title_description_and_prefixIcon: any =
  Template.bind({});
ActionList_with_Action_title_description_and_prefixIcon.decorators = [
  () => {
    const [active, setActive] = useState(false);

    return (
      <Card>
        <ActionList
          onClose={() => setActive(false)}
          activator={
            <Button
              type="outlined"
              onClick={() => setActive(!active)}
              disclosure
              iconAlign="right"
            >
              ActionList
            </Button>
          }
          isOpen={active}
          options={[
            {
              title: "Action List Title with Description",
              items: [
                {
                  content: "Action 1",
                  description: "Description text",
                  prefixIcon: Activity,
                  onClick: () => alert("Hello 1"),
                },
                {
                  content: "Action 1",
                  description: "Description text",
                  prefixIcon: Activity,
                  onClick: () => alert("Hello 2"),
                },
                {
                  content: "Action 1",
                  description: "Description text",
                  prefixIcon: Activity,
                  onClick: () => alert("Hello 3"),
                },
              ],
            },
          ]}
        />
      </Card>
    );
  },
];

// ActionList_with_Section
export const ActionList_with_Section: any = Template.bind({});
ActionList_with_Section.decorators = [
  () => {
    const [active, setActive] = useState(false);

    return (
      <Card>
        <ActionList
          onClose={() => setActive(false)}
          activator={
            <Button
              type="outlined"
              onClick={() => setActive(!active)}
              disclosure
              iconAlign="right"
            >
              ActionList
            </Button>
          }
          isOpen={active}
          options={[
            {
              items: [
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 1"),
                },
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 2"),
                },
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 3"),
                },
              ],
            },
            {
              items: [
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 4"),
                },
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 5"),
                },
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 6"),
                },
              ],
            },
          ]}
        />
      </Card>
    );
  },
];

export function Documentation() {
  return <ActionListDoc />;
}
