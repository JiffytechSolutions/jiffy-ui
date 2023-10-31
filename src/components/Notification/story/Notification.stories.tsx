import React from "react";
import { Notification, Card } from "../..";
import NotificationDoc from "../Document/NotificationDoc";

export default {
  title: "Components/Feedback/Notification",
  component: Notification,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=5842-242181&t=4D7MxfpNKQKbShCl-0",
    },
    docs: {
      description: {
        component:
          "<div style='margin-top: 15px;'><h4 class='Paragraph  inte__text--light none inte__font--normal inte__Paragraph--font--large'>Notifications are used to provide feedback to the user. They communicate information about activities, processes, and events in the application.</h4> <blockquote>Notifications are messages that communicate information to the user.</blockquote></div> ",
      },
    },
  },
  argTypes: {
    title: {
      description: "Set tittle ",
      control: {
        type: "text",
      },
      defaultValue: "The product upload has been finished.",
    },
    type: {
      description: "set status of notification",
      control: {
        type: "radio",
        options: ["warning", "success", "danger", "info", "neutral"],
      },
      defaultValue: "success",
    },
    desciption: {
      description: "Set the description ",
      control: {
        type: "text",
      },
      defaultValue:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    },
    date: {
      description: "Set the Timeline",
      control: {
        type: "text",
      },
      defaultValue: "Yesterday",
    },
    customClass: {
      description: "Add customClass for custom requirments ",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
  },
};

const Template = ({ ...rest }: any) => {
  return (
    <Card title="Notification">
      <Notification {...rest} />
    </Card>
  );
};

export const Primary = Template.bind({});

const type = ["warning", "success", "danger", "info"];
export const Types: any = Template.bind({});
Types.decorators = [
  () => (
    <Card>
      {type.map((item: any, id: any) => {
        return (
          <Notification
            key={id}
            type={item}
            title="The product upload has been finished."
            desciption={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet."
            }
            date={"Yesterday"}
          />
        );
      })}
    </Card>
  ),
];

//withdescription
export const NotificationWithDescription: any = Template.bind({});
NotificationWithDescription.decorators = [
  () => (
    <Card>
      <Notification
        title="Notification With Description"
        desciption={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim"
        }
        type={"success"}
      />
    </Card>
  ),
];
//withDate
export const NotificationWithDate: any = Template.bind({});
NotificationWithDate.decorators = [
  () => (
    <Card>
      <Notification
        title=" Notification With SubDescription"
        desciption={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim"
        }
        date={"Yesterday"}
        type={"success"}
      />
    </Card>
  ),
];

export function Documentation() {
  return <NotificationDoc />;
}
