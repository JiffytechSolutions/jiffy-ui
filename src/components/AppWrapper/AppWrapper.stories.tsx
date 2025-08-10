import React from "react";

import AppWrapper from "./AppWrapper";
import Card from "../Card/Card";

const emphasis = ["Subtile", "Intense"];
const color = ["Primary", "Positive", "Negative", "Waiting", "Neutral"];

export default {
    title: "Components(Done)/AppWrapper",
    component: AppWrapper,
    tags: ["autodocs"],
    argTypes: {

    },
};

const Template = ({ ...rest }) => {
    return (
        <AppWrapper
            content={<Card type={"Shadow"}>
                App content
            </Card>}
            sideBar={<div className="demo-sidebar">Sidebar content here</div>}
            announcementBar={<div className="demo-announcementbar">Announcement bar</div>}
            footer={<div className="demo-footer">Footer content</div>}
            topBar={<div className="demo-topbar">Topbar here</div>}
        />
    );
};

export const Primary = Template.bind({});
