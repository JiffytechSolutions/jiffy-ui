import React, { useState } from "react";
import Accordion from "../Accordion";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "../../Card";
import { Badge, Text } from "../..";
import { Github, Home, User } from "../../../storybook/Foundation/Icons/Icons";
import Thumbnail from "../../Thumbnail/Thumbnail";
import AccordionDoc from "../Document/AccordionDoc";

export default {
  title: "Components/Behaviour/Accordion",
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component:
          "Accordion is a special kind of Collapse, which allows only one panel to be expanded at a time. An accordion is used to show (and hide) HTML content.",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=3802-246959&t=65FndS2UPMZ4Xjb5-0",
    },
  },
  argTypes: {
    children: {
      description: "Content to display inside the accordion.",
      control: {
        disable: true,
      },
    },
    title: {
      description: "Accordion Title",
      control: {
        disable: true,
      },
    },
    subTitle: {
      description: "Accordion sub-title",
      control: {
        disable: true,
      },
    },
    icon: {
      description: "Provide icon that is to be set before title",
      control: {
        disable: true,
      },
    },
    badge: {
      description: "Provide badge that is to be set next to title",
      control: {
        disable: true,
      },
    },
    isActive: {
      description: "Toggle whether the accordion is expanded or not.",
      control: {
        type: "boolean",
        disable: true,
      },
    },
    onClick: {
      description: "Callback when clicking on accordion",
      control: {
        disable: true,
      },
    },
    customClass: {
      description: "Add custom Class",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
  },
} as ComponentMeta<any>;

const accordionArr = [
  {
    title: "Accordion Header",
    subTitle: "SubHeading Content1",
    icon: <User size={20} />,
    badge: (
      <Badge variant="accent" type="success" children="Active" size="small" />
    ),
    answer:
      "1 Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
  },
  {
    title: "Accordion Header",
    subTitle: "SubHeading Content2",
    icon: <Home size={20} />,
    badge: (
      <Badge variant="accent" type="error" children="Error" size="small" />
    ),
    answer:
      "2 Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
  },
  {
    title: "Accordion Header",
    subTitle: "SubHeading Content3",
    icon: <Github size={20} />,
    badge: (
      <Badge variant="accent" type="warning" children="Warning" size="small" />
    ),
    answer:
      "3 Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
  },
];

const Template: ComponentStory<typeof Accordion> = (args) => {
  const [clicked, setClicked] = useState<number>(-1);
  const handleToggle = (index: number) => {
    if (clicked === index) {
      setClicked(-1);
    } else {
      setClicked(index);
    }
  };

  return (
    <>
      <Card>
        {accordionArr.map((items, index: number) => {
          return (
            <Accordion
              title={items.title}
              key={index}
              isActive={clicked == index}
              onClick={() => handleToggle(index)}
              customClass={args.customClass}
            >
              <Text textcolor="secondary">{items.answer}</Text>
            </Accordion>
          );
        })}
      </Card>
    </>
  );
};
export const Primary = Template.bind({});

export const Accordion_with_icon: any = Template.bind({});
Accordion_with_icon.decorators = [
  () => {
    const [clicked, setClicked] = useState<number>(-1);
    const handleToggle = (index: number) => {
      if (clicked === index) {
        setClicked(-1);
      } else {
        setClicked(index);
      }
    };
    return (
      <Card>
        {accordionArr.map((items, index: number) => {
          return (
            <Accordion
              key={index}
              isActive={clicked == index}
              onClick={() => handleToggle(index)}
              icon={items.icon}
              title={items.title}
            >
              <Text textcolor="secondary">{items.answer}</Text>
            </Accordion>
          );
        })}
      </Card>
    );
  },
];

export const Accordion_with_subTitle: any = Template.bind({});
Accordion_with_subTitle.decorators = [
  () => {
    const [clicked, setClicked] = useState<number>(-1);
    const handleToggle = (index: number) => {
      if (clicked === index) {
        setClicked(-1);
      } else {
        setClicked(index);
      }
    };
    return (
      <Card>
        {accordionArr.map((items, index: number) => {
          return (
            <Accordion
              key={index}
              isActive={clicked == index}
              onClick={() => handleToggle(index)}
              subTitle={items.subTitle}
              title={items.title}
            >
              <Text textcolor="secondary">{items.answer}</Text>
            </Accordion>
          );
        })}
      </Card>
    );
  },
];

export const Accordion_with_badge: any = Template.bind({});
Accordion_with_badge.decorators = [
  () => {
    const [clicked, setClicked] = useState<number>(-1);
    const handleToggle = (index: number) => {
      if (clicked === index) {
        setClicked(-1);
      } else {
        setClicked(index);
      }
    };
    return (
      <Card>
        {accordionArr.map((items, index: number) => {
          return (
            <Accordion
              key={index}
              isActive={clicked == index}
              onClick={() => handleToggle(index)}
              badge={items.badge}
              title={items.title}
            >
              <Text textcolor="secondary">{items.answer}</Text>
            </Accordion>
          );
        })}
      </Card>
    );
  },
];

export const Accordion_with_thumbnail: any = Template.bind({});
Accordion_with_thumbnail.decorators = [
  () => {
    const accordionCloseArr = [
      {
        title: "Accordion Header",
        answer:
          "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
        icon: (
          <Thumbnail
            src="https://png.pngtree.com/element_pic/16/11/30/b43b3fb865dbe971071dd8c4bef32e8b.jpg"
            alt="thumbnail"
            size="extraSmall"
          ></Thumbnail>
        ),
      },
      {
        title: "Accordion Header",
        answer:
          "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
        icon: (
          <Thumbnail
            src="https://png.pngtree.com/element_pic/16/11/30/b43b3fb865dbe971071dd8c4bef32e8b.jpg"
            size="extraSmall"
            alt="thumbnail"
          ></Thumbnail>
        ),
      },
      {
        title: "Accordion Header",
        answer:
          "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
        icon: (
          <Thumbnail
            src="https://png.pngtree.com/element_pic/16/11/30/b43b3fb865dbe971071dd8c4bef32e8b.jpg"
            size="extraSmall"
            alt="thumbnail"
          ></Thumbnail>
        ),
      },
    ];
    const [clicked, setClicked] = useState<number>(-1);
    const handleToggle = (index: number) => {
      if (clicked === index) {
        setClicked(-1);
      } else {
        setClicked(index);
      }
    };
    return (
      <Card>
        {accordionCloseArr.map((items, index: number) => {
          return (
            <Accordion
              key={index}
              isActive={clicked == index}
              onClick={() => handleToggle(index)}
              icon={items.icon}
              title={items.title}
            >
              <Text textcolor="secondary">{items.answer}</Text>
            </Accordion>
          );
        })}
      </Card>
    );
  },
];

export const Accordion_with_all_features: any = Template.bind({});
Accordion_with_all_features.decorators = [
  () => {
    const [clicked, setClicked] = useState<number>(-1);
    const handleToggle = (index: number) => {
      if (clicked === index) {
        setClicked(-1);
      } else {
        setClicked(index);
      }
    };
    return (
      <Card>
        {accordionArr.map((items, index: number) => {
          return (
            <Accordion
              key={index}
              isActive={clicked == index}
              onClick={() => handleToggle(index)}
              icon={items.icon}
              badge={items.badge}
              subTitle={items.subTitle}
              title={items.title}
            >
              <Text textcolor="secondary" fontweight="normal">
                {items.answer}
              </Text>
            </Accordion>
          );
        })}
      </Card>
    );
  },
];
export function Documentation() {
  return <AccordionDoc />;
}
