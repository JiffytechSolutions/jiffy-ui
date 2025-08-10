import { Info } from "react-feather";
import  Button  from "../Button/Button";
import Tooltip from "./Tooltip";
import React from "react";

export default {
    title: "Components/Tooltip",
    component: Tooltip,
    tags: ["autodocs"],
    argTypes: {

    },
};
const Template = ({ ...rest }) => {
    return (
        <Tooltip openInMobileUisngAction={true} content="Lorem ipsum sdgfsdgdf dgdsdfsdfsdfsdf sef werwe trwetwegtew" placement="bottom">
            <Info />
        </Tooltip>
    );
};
export const Primary = Template.bind({});
