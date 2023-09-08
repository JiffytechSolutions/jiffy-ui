/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";
import { Campaign } from "../../storybook/Foundation/Icons/Icons";
import Badge, { BadgeI } from "../Badge/Badge";
import TextLink, { TextLinkI } from "../TextLink/TextLink";
import "./Announcement.css";

const Announcement: React.FC<AnnouncementI> = ({
    desciption,
    title,
    badge,
    date,
    customClass,
    action
}: AnnouncementI) => {
    return (
        <div
            className={`inte-announcement ${customClass ? customClass : ""}`.replace(/\s\s+/g, ' ').trim()}
        >
            <div className={`inte-announcement__content`}>
                {<div className="inte-announcement__announcementIcon">
                    <Campaign color="#6E4FCB" size={20} />
                </div>}
                <div className={"inte-announcement__text"}>
                   {(date||badge)&& <div className="inte-announcement__timeline">
                        <div className="inte-announcement__date">{date}</div>
                        {badge && <Badge {...badge} />}
                    </div>}
                    {title&& <div className="inte-announcement__title" >{title}</div>}
                    {desciption && <div className="inte-announcement__description">{desciption}</div>}
                    {action && <div className={"inte-announcement__action"}><TextLink {...action} /></div>}
                </div>
            </div>
        </div >
    );
};
export interface AnnouncementI {
    title?: string;
    date?: string;
    desciption?: string | ReactNode;
    action?: TextLinkI
    badge?: BadgeI;
    customClass?: string
}


export default Announcement;
