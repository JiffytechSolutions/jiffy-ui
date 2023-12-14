import React, { useState } from "react";
import AnnouncementBar from "../AnnouncementBar";
import "./story.css";
import AnnouncementBarDoc from "../Doument/AnnouncementBarDoc";
import Carousel from "../../Carousel/Carousel";
import Marquee from "../../Marquee/Marquee";
import { Card } from "../../Card";
import AnimationWrapper from "../../AnimationWrapper/AnimationWrapper";

export default {
  title: "Components/Feedback/AnnouncementBar",
  component: AnnouncementBar,
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
    isAnimation: {
      description:
        "If you are Show and hide Announcement with animation then use isAnimation prop and sent the value true",
      control: {
        type: "boolean",
      },
      defaultValue: false,
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
  const [active, setActive] = useState(rest.active);

  return (
    <AnnouncementBar
      type={rest.type}
      isOpen={active}
      destroy={rest.destroy}
      onClose={() => setActive(!active)}
      children={rest.children}
      bgImage={rest.bgImage}
      customClass={rest.customClass}
    />
  );
};

export const Primary = Template.bind({});

//Announcement bar types
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
          content="
    Update available, click on download button to get the best out of our
    app!"
        />
      </AnnouncementBar>
    </Card>
  ),
];

// AnnouncementBar With Animation
export const AnnouncementBar_With_Animation: any = Template.bind({});
AnnouncementBar_With_Animation.decorators = [
  () => {
    const [showHide1, setShowHide1] = useState(true);
    const [showHide2, setShowHide2] = useState(true);
    const [showHide3, setShowHide3] = useState(true);
    const [showHide4, setShowHide4] = useState(true);
    const [showHide5, setShowHide5] = useState(true);
    return (
      <div className="story-announcement">
        <AnnouncementBar
          isOpen={showHide1}
          destroy
          isAnimation
          type="primary"
          onClose={() => setShowHide1(!showHide1)}
        >
          Update available, click on download button to get the best out of our
          app!
        </AnnouncementBar>
        <AnnouncementBar
          isOpen={showHide2}
          destroy
          isAnimation
          type="neutral"
          onClose={() => setShowHide2(!showHide2)}
        >
          Update available, click on download button to get the best out of our
          app!
        </AnnouncementBar>
        <AnnouncementBar
          isOpen={showHide3}
          destroy
          isAnimation
          type="success"
          onClose={() => setShowHide3(!showHide3)}
        >
          Update available, click on download button to get the best out of our
          app!
        </AnnouncementBar>
        <AnnouncementBar
          isOpen={showHide4}
          destroy
          type="warning"
          isAnimation
          onClose={() => setShowHide4(!showHide4)}
        >
          Update available, click on download button to get the best out of our
          app!
        </AnnouncementBar>
        <AnnouncementBar
          isOpen={showHide5}
          destroy
          type="danger"
          isAnimation
          onClose={() => setShowHide5(!showHide5)}
        >
          Update available, click on download button to get the best out of our
          app!
        </AnnouncementBar>
      </div>
    );
  },
];

// AnnouncementBar With Out animate
export const AnnouncementBar_WithOut_Animation: any = Template.bind({});
AnnouncementBar_WithOut_Animation.decorators = [
  () => {
    const [showHide1, setShowHide1] = useState(true);
    const [showHide2, setShowHide2] = useState(true);
    const [showHide3, setShowHide3] = useState(true);
    const [showHide4, setShowHide4] = useState(true);
    const [showHide5, setShowHide5] = useState(true);
    return (
      <div className="story-announcement">
        <AnnouncementBar
          isOpen={showHide1}
          destroy
          type="primary"
          onClose={() => setShowHide1(!showHide1)}
        >
          Update available, click on download button to get the best out of our
          app!
        </AnnouncementBar>
        <AnnouncementBar
          isOpen={showHide2}
          destroy
          type="neutral"
          onClose={() => setShowHide2(!showHide2)}
        >
          Update available, click on download button to get the best out of our
          app!
        </AnnouncementBar>
        <AnnouncementBar
          isOpen={showHide3}
          destroy
          type="success"
          onClose={() => setShowHide3(!showHide3)}
        >
          Update available, click on download button to get the best out of our
          app!
        </AnnouncementBar>
        <AnnouncementBar
          isOpen={showHide4}
          destroy
          type="warning"
          onClose={() => setShowHide4(!showHide4)}
        >
          Update available, click on download button to get the best out of our
          app!
        </AnnouncementBar>
        <AnnouncementBar
          isOpen={showHide5}
          destroy
          type="danger"
          onClose={() => setShowHide5(!showHide5)}
        >
          Update available, click on download button to get the best out of our
          app!
        </AnnouncementBar>
      </div>
    );
  },
];

export function Documentation() {
  return <AnnouncementBarDoc />;
}
