import React from "react";
import TopNavBar from "../TopNavBar";
import Button from "../../Button/Button";
import { Bell, Info } from "../../../icons";
import SideBar from "../../SideBar/SideBar";
import NavBar from "../TopNavBar";
import {
  Home,
  Phone,
  Settings,
  ShoppingBag,
} from "../../../storybook/Foundation/Icons/Icons";
import Badge from "../../Badge/Badge";
import { FlexLayout } from "../../FlexLayout";
import { fullLogo, logo } from "./logo";
import { menu, menu2 } from "./data";
import { Logo } from "../../../storybook/Foundation/Logo/Logo";
import Carousel from "../../Carousel/Carousel";
import { Card } from "../../Card";
import NewTop from "../NewTop";
import Alert from "../../Alert/Alert";

export default {
  title: "Components/Layout/TopNavBar",
  component: TopNavBar,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=5984-312505&t=vybTUvZSW4IIqAUa-0",
    },
  },
  argTypes: {
    connectLeft: {
      name: "connectLeft",
      description: "Placed on left side of App Bar",
      control: {
        type: "text",
        disable: true,
      },
    },
    connectRight: {
      name: "connectRight",
      description: "Placed on right side of App Bar",
      control: {
        type: "text",
        disable: true,
      },
    },
    customClass: {
      description: "Add custom class",
      control: {
        type: "text",
      },
      defaultValue: "custom_class",
    },
    stickyTop: {
      description: "Fix at the top",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
  },
};

const Template = ({ ...rest }) => {
  const handelMenuChange = (newPath: string) => {
    console.log("newPath => ", newPath);
  };

  return (
    <>
      <NewTop
        menu={menu}
        connectLeft={logo}
        connectRight={
          <FlexLayout spacing="tight">
            <Button
              type="outlined"
              icon={<Info size="20" color="#1c2433" />}
              size="large"
            />
            <Button
              type="outlined"
              icon={<Bell size="20" color="#1c2433" />}
              size="large"
            />
          </FlexLayout>
        }
      />

      {/* <NavBar
        topBar={true}
        onChange={handelMenuChange}
        connectLeft={fullLogo}
        connectRight={
          <FlexLayout spacing="tight">
            <Button
              type="outlined"
              icon={<Info size="20" color="#1c2433" />}
              size="large"
            />
            <Button
              type="outlined"
              icon={<Bell size="20" color="#1c2433" />}
              size="large"
            />
          </FlexLayout>
        }
      >
        <SideBar.Section menu={menu} />
      </NavBar> */}
    </>
  );
};

export const Primary = Template.bind({});

// Tooltip direction
export const Nav_Bar: any = Template.bind({});
Nav_Bar.decorators = [
  () => {
    const handelMenuChange = (newPath: string) => {
      console.log("newPath => ", newPath);
    };
    return (
      <>
        <NavBar
          onChange={handelMenuChange}
          connectLeft={logo}
          connectRight={
            <FlexLayout spacing="tight">
              <Button
                type="outlined"
                icon={<Info size="24" color="#1c2433" />}
                size="thin"
              />
              <Button
                type="outlined"
                icon={<Bell size="24" color="#1c2433" />}
                size="thin"
              />
            </FlexLayout>
          }
        >
          <SideBar.Section menu={menu} />
          <SideBar.Section menu={menu2} />
        </NavBar>
      </>
    );
  },
];
