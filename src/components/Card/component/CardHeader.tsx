/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Avatar, { AvatarI } from "../../Avatar/Avatar";


export interface CardHeaderI {
  title?: string;
  subTitle?: string;
  action?: React.ReactNode;
  avatar?: AvatarI
}

function CardHeader({
  title,
  action,
  subTitle,
  avatar
}: CardHeaderI): JSX.Element | null {
  const checkForTitleandSubtitle = () => {
    return (
      <>
        {(title || subTitle) && <div className="inte-card__headerContent">
          {title && <h3 className="inte-card__headerTitle">{title}</h3>}
          {subTitle && (
            <h4 className="inte-card__headerSubtitle">
              {subTitle}
            </h4>
          )}
        </div>}
      </>
    );

  };

  return (
    <div className={`inte-card__header`}>
      <div className={`inte-card__headerLeft ${avatar ? "inte-card__headerLeft--hasAvatar" : ""}`.replace(/\s\s+/g, " ")
        .trim()}>
        {avatar && <div className="inte-card__avatar">
          <Avatar size="large" {...avatar} />
        </div>}
        {checkForTitleandSubtitle()}
      </div>
      {action && action}
    </div>
  );
}

export default CardHeader;
