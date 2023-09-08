import React from "react";
import AnimatingIllustration from "../Illustration";
import "../Animating.css";

export default {
  title: "Components/Layout/AnimatingIllustration",
  component: AnimatingIllustration,
  argTypes: {
    animationData: {
      description: "Choose animated Illustration as per your requriement",
      control: {
        type: "radio",
        options: [
          "CreateCampaign",
          "NoAccountConnect",
          "NoCampaignAvailabel",
          "Nonotification",
          "NoAccountSearch",
          "Add",
          "PageNotFound",
          "ConnectedSucessfully",
          "Mail",
          "Meeting",
          "NoInternet",
          "Journal",
          "BrokenPage",
          "BrokenLink",
          "WeAreFacingIssue",
          "Ticket",
          "Refresh",
          "SessionExpire",
          "NoProductSearchAvailabel1",
          "NoProductSearchAvailabel2",
          "NoSearchResult",
          "NoProductAvailabel1",
          "NoProductAvailabel2",
          "NoOrderFoundOnSearch",
          "NoOrderFound",
          "Logout",
          "NoAccountConnected"
        ],
      },
      defaultValue: "CreateCampaign",
    },
    customClass: {
      description: "set customClass as per your need",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    loop: {
      description: "Set animation Looping ",
      control: {
        type: "boolean",
      },
      defaultValue:false,
    },
    style: {
      description: "Set style as per your need",
      control: {
       disable:true
      },
     
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <div className="inte-animatinIllustration">
      <AnimatingIllustration loop={rest.loop} {...rest} />
    </div>
  );
};

export const Primary = Template.bind({});
