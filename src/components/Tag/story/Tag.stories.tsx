import React, { useCallback, useEffect, useState } from "react";
import { Card, Tag } from "../../..";
import { FlexLayout } from "../../FlexLayout";
import Popover from "../../Popover/Popover";
import TagDoc from "../Document/TagDoc";

export default {
  title: "Components/Actions/Tag",
  component: Tag,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=4396-268953&t=fwx7SHLr0Vi8Wxq1-0",
    },
  },
  argTypes: {
    onTogglePopup: {
      description: "function call on tag click",
      control: {
        type: "function",
        disable: true,
      },
    },
    children: {
      description: "Content to display inside tag",
      control: {
        type: "text",
      },
      defaultValue: "Tag",
    },
    onDestroy: {
      description: "Callback executed when destroy button is clicked",
      control: {
        type: "function",
        disable: true,
      },
    },
    hasPopover: {
      description: "Enable Popover on click",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    count: {
      description: "set Count which is to be displayed in popover",
      control: {
        type: "text" || "number",
      },
      defaultValue: "",
    },
    size: {
      description: "Set the size of Tag",
      control: {
        type: "radio",
        options: ["small", "large"],
      },
      defaultValue: "small",
    },
    isDisabled: {
      description: "Disable the tag",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    isActive: {
      description:
        "This prop is working when tag with popover (Toggle the popover)",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    customClass: {
      description: "Add any custom class",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    isAnimation: {
      description:
        "If you are Show and hide Tag component with animation then use isAnimation prop and sent the value true",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    isOpen: {
      description:
        "This prop is working when  isAnimation is true (Show and hide tag component)",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
  },
};

const tags = ["one", "two", "three", "four", "five"];
const Template = ({ ...rest }) => {
  return (
    <Card title="Primary">
      <Tag
        size={rest.size}
        isActive={rest.isActive}
        isDisabled={rest.isDisabled}
        hasPopover={rest.hasPopover}
        count={rest.count}
        customClass={rest.customClass}
        isAnimation={rest.isAnimation}
        isOpen={rest.isOpen}
      >
        {rest.children}
      </Tag>
    </Card>
  );
};

export const Primary: any = Template.bind({});
//Size
export const Size: any = Template.bind({});
Size.decorators = [
  () => (
    <Card title="Tag With Different Sizes">
      <FlexLayout spacing="loose">
        {["small", "large"].map((variant: any, index) => (
          <Tag key={index} size={variant}>
            Tag
          </Tag>
        ))}
      </FlexLayout>
    </Card>
  ),
];
// Disabled tags
export const disabled_tag: any = Template.bind({});
disabled_tag.decorators = [
  () => {
    const [open, togglePopover] = useState<any>(false);
    const togglePop = () => togglePopover((open: any) => !open);
    useEffect(() => {
      togglePopover(open);
    }, [open]);
    const activator = (
      <Tag
        onTogglePopup={togglePop}
        hasPopover
        count={2}
        onDestroy={() => {
          alert("destroyed cliked");
        }}
        isActive={open}
        isDisabled
      >
        Tag
      </Tag>
    );
    return (
      <Card title="Disabled Tags">
        <FlexLayout spacing="loose">
          <Tag isDisabled={true}>Tag</Tag>
          <Tag isDisabled={true} onDestroy={() => alert("Destroy")}>
            Tag
          </Tag>
          <Popover isOpen={open} onClose={togglePop} activator={activator}>
            <FlexLayout spacing="mediumTight">
              <Tag
                onDestroy={() => {
                  alert("closed");
                }}
                isActive={open}
              >
                one
              </Tag>
              <Tag
                onDestroy={() => {
                  alert("closed");
                }}
                isActive={open}
              >
                Two
              </Tag>
            </FlexLayout>
          </Popover>
        </FlexLayout>
      </Card>
    );
  },
];
// Tags With Destroy
export const tags_with_destroy: any = Template.bind({});
tags_with_destroy.decorators = [
  () => {
    const [selectedTags, setSelectedTags] = useState(tags);
    const removeTag = useCallback(
      (tag: any) => () => {
        setSelectedTags((previousTags) =>
          previousTags.filter((previousTag) => previousTag !== tag)
        );
      },
      []
    );
    return (
      <Card title="Tags With Destroy">
        <FlexLayout spacing="loose">
          {selectedTags.map((item: any, index: any) => (
            <Tag key={index} onDestroy={removeTag(item)}>
              {item}
            </Tag>
          ))}
        </FlexLayout>
      </Card>
    );
  },
];

// Tags Without Destroy
export const tags_without_destroy: any = Template.bind({});
tags_without_destroy.decorators = [
  () => {
    return (
      <Card title="Tags Without Destroy">
        <FlexLayout spacing="loose">
          {tags.map((item, index) => (
            <Tag key={index}>{item}</Tag>
          ))}
        </FlexLayout>
      </Card>
    );
  },
];

// Tags With Popover
export const tag_with_popover_and_count: any = Template.bind({});
tag_with_popover_and_count.decorators = [
  () => {
    const [open, togglePopover] = useState<any>(false);
    const togglePop = () => togglePopover((open: any) => !open);
    const activator = (
      <Tag
        onTogglePopup={togglePop}
        hasPopover
        count={"+2"}
        onDestroy={() => {
          alert("destroyed cliked");
        }}
        isActive={open}
      >
        Tag
      </Tag>
    );
    return (
      <Card title="Tag With Popover">
        <Popover
          isOpen={open}
          onClose={() => togglePopover(false)}
          activator={activator}
        >
          <FlexLayout spacing="mediumTight">
            <Tag
              onDestroy={() => {
                alert("closed");
              }}
              isActive={open}
            >
              one
            </Tag>
            <Tag
              onDestroy={() => {
                alert("closed");
              }}
              isActive={open}
            >
              Two
            </Tag>
          </FlexLayout>
        </Popover>
      </Card>
    );
  },
];

// animation tags
export const tag_with_animation: any = Template.bind({});
tag_with_animation.decorators = [
  () => {
    const [open1, setOpen1] = useState<boolean>(true);
    const [open2, setOpen2] = useState<boolean>(true);
    const [open3, setOpen3] = useState<boolean>(true);
    const [open4, setOpen4] = useState<boolean>(true);
    const [open5, setOpen5] = useState<boolean>(true);
    const [open6, setOpen6] = useState<boolean>(true);
    return (
      <Card>
        <FlexLayout spacing="loose">
          <Tag
            onDestroy={() => setOpen1(false)}
            isOpen={open1}
            isAnimation={true}
          >
            Tag1
          </Tag>

          <Tag
            onDestroy={() => setOpen2(false)}
            isOpen={open2}
            isAnimation={true}
          >
            Tag2
          </Tag>

          <Tag
            onDestroy={() => setOpen3(false)}
            isOpen={open3}
            isAnimation={true}
          >
            Tag3
          </Tag>

          <Tag
            onDestroy={() => setOpen4(false)}
            isOpen={open4}
            isAnimation={true}
          >
            Tag4
          </Tag>

          <Tag
            onDestroy={() => setOpen5(false)}
            isOpen={open5}
            isAnimation={true}
          >
            Tag5
          </Tag>

          <Tag
            onDestroy={() => setOpen6(false)}
            isOpen={open6}
            isAnimation={true}
          >
            Tag6
          </Tag>
        </FlexLayout>
      </Card>
    );
  },
];
export function Documentation() {
  return <TagDoc />;
}
