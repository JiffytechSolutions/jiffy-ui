
import React from "react";
import Lottie from "lottie-react";
import CreateCampaign from "./components/CreateCampaignAnimation.json";
import NoAccountConnect from "./components/NoaccountConnectedEmptyProfile.json";
import NoCampaignAvailabel from "./components/NoCampaignAvailable.json";
import NoAccountSearch from "./components/NoAccountSearchFound.json";
import Nonotification from "./components/NoNotification.json";
import Add from "./components/Add.json";
import PageNotFound from "./components/404PageNotFound.json";
import ConnectedSucessfully from "./components/ConnectedSuccessful.json";
import Mail from "./components/MailIllustration.json";
import Meeting from "./components/Meeting.json";
import NoInternet from "./components/Nointernet.json";
import Journal from "./components/Journal.json";
import BrokenPage from "./components/BrokenPage.json";
import BrokenLink from "./components/BrokenLink.json";
import WeAreFacingIssue from "./components/Werefacingsomeissue.json";
import Ticket from "./components/TicketIllustration.json";
import Refresh from "./components/Refreshthepage.json";
import SessionExpire from "./components/SessionExpire.json";
import NoSearchResult from "./components/NoSearchResult.json";
import NoProductSearchAvailabel1 from "./components/NoProductSearchAvailable.json";
import NoProductSearchAvailabel2 from "./components/NoProductSearchAvailableV2.json";
import NoProductAvailabel1 from "./components/NoproductAvailable.json";
import NoProductAvailabel2 from "./components/NoProductAvailableV2.json";
import NoOrderFoundOnSearch from "./components/NoOrderFoundonSearch.json";
import NoOrderFound from "./components/NoOrderFound.json";
import Logout from "./components/LogoutSuccessfully.json";
import NoAccountConnected from "./components/NoaccountConnectedEmptyProfile.json";

const AnimatingIllustration: React.FC<AnimatingIllustrationI> = ({
  animationData = "CreateCampaign",
  loop=false,
  style,
  customClass,
}: AnimatingIllustrationI) => {

  const getanimationData =   {
      "CreateCampaign": CreateCampaign,
      "NoAccountConnect": NoAccountConnect,
      "NoCampaignAvailabel": NoCampaignAvailabel,
      "NoAccountSearch": NoAccountSearch,
      "Nonotification": Nonotification,
      "Add": Add,
      "PageNotFound": PageNotFound,
      "ConnectedSucessfully": ConnectedSucessfully,
      "Mail": Mail,
      "Meeting": Meeting,
      "NoInternet": NoInternet,
      "Journal":Journal,
      "BrokenPage":BrokenPage,
      "BrokenLink":BrokenLink,
      "WeAreFacingIssue":WeAreFacingIssue,
      "Ticket":Ticket,
      "Refresh":Refresh,
      "SessionExpire":SessionExpire,
      "NoSearchResult":NoSearchResult,
      "NoProductSearchAvailabel1":NoProductSearchAvailabel1,
      "NoProductSearchAvailabel2":NoProductSearchAvailabel2,
      "NoProductAvailabel1":NoProductAvailabel1,
      "NoProductAvailabel2":NoProductAvailabel2,
      "NoOrderFoundOnSearch":NoOrderFoundOnSearch,
      "NoOrderFound":NoOrderFound,
      "Logout":Logout,
      "NoAccountConnected":NoAccountConnected
  };
  const AnimationData = getanimationData[animationData];
  return (
      <Lottie
        className={`inte-animatingIllustration ${customClass}`}
        loop={loop}
        animationData={AnimationData}
        style={style}
      />
  );
};
export interface AnimatingIllustrationI {
  animationData?:
    | "CreateCampaign"
    | "NoAccountConnect"
    | "NoCampaignAvailabel"
    | "NoAccountSearch"
    | "Nonotification"
    | "Add"
    | "PageNotFound"
    | "ConnectedSucessfully"
    | "Mail"
    | "Meeting"
    | "NoInternet"
    |"Journal"
    |"BrokenPage"
    |"BrokenLink"
    |"WeAreFacingIssue"
    |"Ticket"
    |"Refresh"
    |"SessionExpire"
    |"NoSearchResult"
    |"NoProductSearchAvailabel1"
    |"NoProductSearchAvailabel2"
    |"NoProductAvailabel1"
    |"NoProductAvailabel2"
    |"NoOrderFoundOnSearch"
    |"NoOrderFound"
    |"Logout"
    |"NoAccountConnected";
  style?: any;
  loop?: boolean;
  customClass?: string;
}
export default AnimatingIllustration;
