import React, { useState } from "react";
import AnnouncementBar from "../AnnouncementBar";
import AnnouncementBarDoc from "../Doument/AnnouncementBarDoc";
import Carousel from "../../Carousel/Carousel";
import Marquee from "../../Marquee/Marquee";
import { Card } from "../../Card";
import "./story.css";

export default {
  title: "Components/Feedback/AnnouncementBar",
  component: AnnouncementBar,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-ver3.0.2-(Production)?type=design&node-id=5743-246102&mode=design&t=fJIBZJVp9olvgZpq-0",
    },
  },
  argTypes: {
    children: {
      description: "This is announcement bar children",
      control: {
        type: "text",
      },
      defaultValue:
        "Update available, click on download button to get the best out of our app",
    },
    bgImage: {
      description: "set the Src for announcment",
      control: {
        type: "text",
      },
      defaultValue: "https://i.imgur.com/zpGUiXt.png",
    },
    type: {
      description:
        "This is type of Announcement Bar which changes Backgroud color",
      control: {
        type: "radio",
        options: ["warning", "success", "danger", "primary", "neutral"],
      },
      defaultValue: "warning",
    },
    onClose: {
      description: "Manage onClose Function",
      control: {
        type: "function",
      },
    },
    isOpen: {
      description: "Show and hide Announcement",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    destroy: {
      description: "Show and hide cross button ",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    customClass: {
      description: "Set the customClass",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    action: {
      description: "Set the action for announcement bar you can set ",
      control: {
        disable: true,
      },
    },
  },
};
const types = ["primary", "danger", "success", "warning", "neutral"];
const Template = ({ ...rest }) => {
  const [active, setActive] = useState(true);

  const destroyf = () => {
    active ? setActive(false) : setActive(true);
    alert("Cross Button Clicked");
  };
  return (
    <AnnouncementBar
      type={rest.type}
      isOpen={rest.active && active}
      destroy={rest.destroy}
      onClose={destroyf}
      children={rest.children}
      bgImage={rest.bgImage}
      customClass={rest.customClass}
    />
  );
};

export const Primary = Template.bind({});

export const announcementbar_types: any = Template.bind({});
announcementbar_types.decorators = [
  () => (
    <div className="story-announcement">
      {types.map((item: any, index) => (
        <AnnouncementBar key={index} type={item}>
          Update available, click on download button to get the best out of our
          app!
        </AnnouncementBar>
      ))}
    </div>
  ),
];

export const announcmentbar_with_Action: any = Template.bind({});
announcmentbar_with_Action.decorators = [
  () => (
    <div className="story-announcement">
      {types.map((item: any, index) => (
        <AnnouncementBar
          destroy={true}
          key={index}
          type={item}
          action={{ content: "Button" }}
        >
          Update available, click on download button to get the best out of our
          app!
        </AnnouncementBar>
      ))}
    </div>
  ),
];

export const announcmentbar_with_All: any = Template.bind({});
announcmentbar_with_All.decorators = [
  () => (
    <div className="story-announcement">
      {types.map((item: any, index) => (
        <AnnouncementBar
          destroy={true}
          key={index}
          type={item}
          action={{ content: "Button" }}
          bgImage="https://i.imgur.com/zpGUiXt.png"
        >
          Update available, click on download button to get the best out of our
          app!
        </AnnouncementBar>
      ))}
    </div>
  ),
];

export const announcmentbar_with_slider: any = Template.bind({});
announcmentbar_with_slider.decorators = [
  () => (
    <AnnouncementBar type="primary" destroy={false}>
      <Carousel
        slidesToShow={1}
        isAutoplay
        isEndless
        autoplaySpeed={1500}
        showArrows={false}
        showDots={false}
      >
        <div>
          Update available, click on download button to get the best out of our
          app!
        </div>
        <div>
          Update available, click on download button to get the best out of our
          app!
        </div>
        <div>
          Update available, click on download button to get the best out of our
          app!
        </div>
      </Carousel>
    </AnnouncementBar>
  ),
];

export const announcmentbar_with_marquee: any = Template.bind({});
announcmentbar_with_marquee.decorators = [
  () => (
    <Card>
      <AnnouncementBar type="primary" destroy={false}>
        <Marquee
          align="center"
          content="Update available, click on download button to get the best out of our  app!"
        />
      </AnnouncementBar>
    </Card>
  ),
];

export function Documentation() {
  return <AnnouncementBarDoc />;
}
