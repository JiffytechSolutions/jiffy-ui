import React from "react";
import Video from "./Video";

export default {
  title: "Components/Media/Video",
  component: Video,
  argTypes: {
    src: {
      description: "Specifies the URL",
      control: {
        type: "text",
      },
      defaultValue: "http://bit.ly/can-tom-n-jerry",
    },
    width: {
      description: "Specifies the width",
      control: {
        type: "text",
      },
      defaultValue: "100%",
    },
    height: {
      description: "Specifies the height",
      control: {
        type: "text",
      },
      defaultValue: "100%",
    },
    controls: {
      description: "Specifies that the video controls gets displayed.",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    autoPlay: {
      description: "Specifies that the video will play automatically.",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    loop: {
      description:
        "Specifies that the video will start again every time after finish.",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    muted: {
      description: "Specifies that the audio should be muted.",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    preload: {
      description:
        "Specifies what author thinks will lead to user experience at its best.",
      control: {
        type: "radio",
        options: ["auto", "metadata", "none"],
      },
      defaultValue: "none",
    },
    poster: {
      description:
        "	Specifies the image to be shown while the video is downloading.",
      control: {
        type: "text",
      },
      defaultValue:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0on_IOqg2WJKiXTO-LzceQiW9_oNPHmDpyw&usqp=CAU",
    },
    type: {
      description: "It specifies the type of the video file.",
      control: {
        type: "text",
      },
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <Video
      src={rest.src}
      width={rest.width}
      height={rest.height}
      controls={rest.controls}
      autoPlay={rest.autoPlay}
      loop={rest.loop}
      muted={rest.muted}
      preload={rest.preload}
      poster={rest.poster}
      type={rest.type}
    />
  );
};

export const Primary = Template.bind({});
