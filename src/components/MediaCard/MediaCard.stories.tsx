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
        options: ["Plain", "Shadow", "Bordered", "BorderWithShadow"],
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
        headerActions={[
          {
            label: "Refresh",
            onClick: () => { alert('Action1') },
            leading: <RefreshCcw size={15} />
          },
          {
            label: "Export",
            onClick: () => { alert('Action2') },
            leading: <FileText size={15} />
          },
          {
            label: "Download",
            onClick: () => { alert('Action3') },
            leading: <Download size={15} />
          }
        ]}
        type={"Bordered"}
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
        headerActions={[
          {
            label: "Refresh",
            onClick: () => { alert('Action1') },
            leading: <RefreshCcw size={15} />
          },
          {
            label: "Export",
            onClick: () => { alert('Action2') },
            leading: <FileText size={15} />
          },
          {
            label: "Download",
            onClick: () => { alert('Action3') },
            leading: <Download size={15} />
          }
        ]}
        primaryAction={primaryAction1}
        secondaryAction={secondoryAction1}
        type={"Bordered"}
        title="Lorem ipsum is placeholder"
        subtitle="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries"
      />
    );
  },
];

// MediaCard with Header Actions Showcase
export const MediaCardWithHeaderActions: any = Template.bind({});
MediaCardWithHeaderActions.args = {
  type: "Bordered",
  mediaSrc: "https://placehold.co/1000x700",
  title: "Product Management Dashboard",
  subtitle: "Complete analytics and insights for your product performance with detailed metrics and reports",
  headerActions: [
    {
      label: "Refresh Data",
      onClick: () => { alert('Refreshing data...') },
      leading: <RefreshCcw size={15} />
    },
    {
      label: "Export Report", 
      onClick: () => { alert('Exporting report...') },
      leading: <FileText size={15} />
    },
    {
      label: "Download Image",
      onClick: () => { alert('Downloading image...') },
      leading: <Download size={15} />
    }
  ],
  primaryAction: {
    children: "View Details",
    onClick: () => { alert('Viewing details...') }
  },
  secondaryAction: {
    children: "Edit",
    onClick: () => { alert('Editing...') }
  }
};

// Header Actions Only (No Footer Actions)
export const HeaderActionsOnly: any = Template.bind({});
HeaderActionsOnly.decorators = [
  () => {
    return (
      <MediaCard
        type={"Shadow"}
        mediaSrc="https://placehold.co/800x600"
        title="Design System Components"
        subtitle="A comprehensive collection of reusable UI components for modern web applications"
        headerActions={[
          {
            label: "Copy Link",
            onClick: () => { alert('Link copied to clipboard!') },
            leading: <RefreshCcw size={15} />
          },
          {
            label: "Share",
            onClick: () => { alert('Opening share menu...') },
            leading: <FileText size={15} />
          },
          {
            label: "Bookmark",
            onClick: () => { alert('Added to bookmarks!') },
            leading: <Download size={15} />
          }
        ]}
      />
    );
  },
];