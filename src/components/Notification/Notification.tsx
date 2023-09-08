
import React, { ReactNode } from "react";
import { error, info, neutral, success, warning } from "./story/icon";
import "./Notification.css";
const Notification: React.FC<NotificationI> = ({
  type,
  desciption,
  title,
  date,
  customClass
}: NotificationI) => {
  const checkNotificationType: { [key: string]: React.ReactNode } = {
    warning: warning,
    danger: error,
    success: success,
    info: info,
    neutral: neutral
  };
  const typeNotify = type && checkNotificationType[type];
  return (
    <div
      className={`inte-notification  ${customClass ? customClass : ""}`.replace(/\s\s+/g, ' ').trim()}
    >
      <div className={`inte-notification__content inte-notification__hasCircleIcon `} >
        <div className="inte-notification__circleIcon">{typeNotify}</div>
        <div className={"inte-notification__text"}>
        {title&&<div className="inte-notification__title" style={{
              fontWeight: !desciption ? 'normal':""
            }}>{title}</div>}
          {desciption &&
            <div className="inte-notification__description" 
            >
              {desciption}
            </div>
          }
          {date &&
            <div className="inte-notification__date"
            >
              {date}
            </div>
          }
        </div>
      </div>
    </div >
  );
};
export interface NotificationI {
  type?: "warning" | "success" | "danger" | "info" | "neutral";
  desciption?: string | ReactNode;
  title?: string;
  date?: string;
  customClass?: string
}

export default Notification;
