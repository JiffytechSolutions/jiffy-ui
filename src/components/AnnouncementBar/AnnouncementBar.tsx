/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { X } from "../../storybook/Foundation/Icons/Icons";
import Button, { ButtonI } from "../Button/Button";
import getClassNames from "../../utilities/getClassnames";
import useWindowResize from "../../utilities/useWindowResize";
import "./AnnouncementBar.css";

const AnnouncementBar: React.FC<AnnouncementBarI> = ({
  type = "primary",
  children,
  customClass,
  // desrtoy return true or false and show hide icon
  destroy = false,
  //onClose function , User click cross button then hide AnnouncementBar
  onClose,
  bgImage,
  action,
  active = true,
}: AnnouncementBarI) => {
  const { width } = useWindowResize();
  const checkAnnouncementType: { [key: string]: string } = {
    warning: "inte-announcement--warning",
    danger: "inte-announcement--danger",
    success: "inte-announcement--success",
    primary: "inte-announcement--primary",
    neutral: "inte-announcement--neutral",
  };
  const typeAnnouncement = checkAnnouncementType[type];
  const styleBg = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "8.2rem 4.8rem",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "2rem 0",
  };
  return (
    <>
      {active && (
        <div
          {...(bgImage && width >= 768 ? { style: styleBg } : {})}
          className={getClassNames({
            "inte-announcementBar": true,
            [typeAnnouncement]: typeAnnouncement,
            "inte-announcementBar--hasClose": destroy,
            "inte-announcementBar--hasAction": action,
            [customClass as string]: customClass,
          })}
        >
          <div className={"inte-announcementBar__content"}>{children}</div>
          {action && (
            <div className="inte-announcementBar__action">
              <Button
                type="outlined"
                size="extraThin"
                content={action.content}
                onClick={action.onClick}
              />
            </div>
          )}

          {destroy && (
            <div className={"inte-announcementBar__destroy"}>
              <Button
                type="outlined"
                accessibilityLabel="Close"
                size="extraThin"
                onClick={onClose}
                icon={<X size={20} color={"var(--inte-G0)"} strokeWidth={3} />}
              ></Button>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export interface AnnouncementBarI {
  type?: "warning" | "success" | "danger" | "primary" | "neutral";
  children?: any;
  onClose?: () => void;
  destroy?: boolean;
  active?: boolean;
  customClass?: string;
  bgImage?: string;
  action?: ButtonI;
}

export default AnnouncementBar;
