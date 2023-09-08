import React, { useContext } from "react";
import PortalComponent from "../../../utilities/PoratalComponent";
import { AppContext } from "../../../utilities/context/AppContext";
import "../Toast.css";
const Toast = () => {
  const context = useContext(AppContext);
  return (
    <PortalComponent>
      <div className="inte-toast-wrapper">
        {context.toast.toastItems.map((i: any, index: number) => (
          <React.Fragment key={index}>{i}</React.Fragment>
        ))}
      </div>
    </PortalComponent>
  );
};
export default Toast;
