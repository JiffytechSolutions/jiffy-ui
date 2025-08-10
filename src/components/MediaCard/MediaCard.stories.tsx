
import { Download, FileText, RefreshCcw } from "react-feather";
import MediaCard from "./MediaCard";
import React from "react";

export default {
  title: "Components(Done)/MediaCard",
  component: MediaCard,
  tags: ["autodocs"],
  argTypes: {
    type: {
      description: "Select card type",
      control: {
        type: "radio",
        options: ["Plain", "Shadow", "Borderd", "BorderWithShadow"],
      },
      defaultValue: "Plain",
    },
    // headerTitle: {
    //     description: "Card title",
    //     control: {
    //         type: "text",
    //     },
    //     defaultValue: ""
    // },
    // headerSubTitle: {
    //     description: "Card title description",
    //     control: {
    //         type: "text",
    //     },
    //     defaultValue: "Default card title descriotion"
    // },
    title: {
      description: "Enable Border Radius",
      control: {
        type: "text",
      },
      defaultValue: "Footer title",
    },
    subtitle: {
      description: "Enable Border Radius",
      control: {
        type: "text",
      },
      defaultValue: "Footer subtitle",
    },

    primaryAction: {
      description: "Card primary action",
      control: {
        type: "text",
      },
      defaultValue: "Default card description",
    },
    secondaryAction: {
      description: "Card secondary action",
      control: {
        type: "text",
      },
      defaultValue: "Default card description",
    },
    mediaSrc: {
      description: "Card secondary action",
      control: {
        type: "text",
      },
      defaultValue: "Default card description",
    },
  },
};
const primaryAction1 = {
  isLoading: false,
  content: "Proceed",
  onClick: () => {
    alert("Conngratulations You proceeded :)");
  },
};
const secondoryAction1 = {
  isLoading: false,
  content: "Cancel",
  onClick: () => {
    alert("Conngratulations You proceeded :)");
  },
};

const Template = ({ ...rest }) => {
  return (
    <MediaCard
      mediaSrc={rest.mediaSrc}
      orientation={rest.orientation}
      primaryAction={primaryAction1}
      secondaryAction={secondoryAction1}
      headerActions={rest.headerActions}
      type={rest.type}
      title={rest.title}
      subtitle={rest.subtitle}
    />
  );
};

export const Default = Template.bind({});

// Button with Color
export const CardWithNoImage: any = Template.bind({});
CardWithNoImage.decorators = [
  () => {
    return (
      <MediaCard
        headerActions={[{
          items: [
            {
              content: "Refresh",
              onClick: () => { alert('Action1') },
              prefixIcon: <RefreshCcw size={15} />
            },
            {
              content: "Export",
              onClick: () => { alert('Action2') },
              prefixIcon: <FileText size={15} />
            },
            {
              content: "Download",
              onClick: () => { alert('Action3') },
              prefixIcon: <Download size={15} />
            }
          ]
        }]}
        type={"Borderd"}
        title="Lorem ipsum is placeholder"
        subtitle="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries"
      />
    );
  },
];

// Horizontal media card
export const HorizontalMediaCard: any = Template.bind({});
HorizontalMediaCard.decorators = [
  () => {
    return (
      <MediaCard
        orientation="Horizontal"
        headerActions={[{
          items: [
            {
              content: "Refresh",
              onClick: () => { alert('Action1') },
              prefixIcon: <RefreshCcw size={15} />
            },
            {
              content: "Export",
              onClick: () => { alert('Action2') },
              prefixIcon: <FileText size={15} />
            },
            {
              content: "Download",
              onClick: () => { alert('Action3') },
              prefixIcon: <Download size={15} />
            }
          ]
        }]}
        primaryAction={primaryAction1}
        secondaryAction={secondoryAction1}
        type={"Borderd"}
        title="Lorem ipsum is placeholder"
        subtitle="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries"
      />
    );
  },
];
