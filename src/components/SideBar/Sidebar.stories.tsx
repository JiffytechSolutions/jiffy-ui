import {
  AlertCircle,
  Bell,
  HelpCircle,
  Home,
  Phone,
  Settings,
  ShoppingBag,
} from "react-feather";
import  Badge  from "../Badge/Badge";
import SideBar from "./SideBar";
import React from "react";
export default {
  title: "components/SideBar",
  component: SideBar,
  // tags: ["autodocs"],
  argTypes: {},
};
const Template = ({ ...rest }) => {
  const menu = [
    {
      id: "home",
      label: "Home",
      path: "/",
      icon: <Home size="16" />,
      badge: <Badge color="Positive" children="New" size="Medium" />,
    },
    {
      id: "proList",
      label: "Product List",
      path: "/productList",
      icon: <ShoppingBag size="16" />,
      children: [
        {
          id: "pro1",
          label: "pro1",
          path: "/product1",
          //   badge: <Badge color="Positive" label="54" />,
        },
        {
          id: "pro2",
          label: "pro2",
          path: "/product2",
        },
        {
          id: "pro3",
          label: "pro3",
          path: "/product3",
        },
      ],
    },
    {
      id: "setting",
      label: "Setting",
      path: "/setting",
      icon: <Settings size="16" />,
      badge: <Badge color={"Positive"} emphasis="Intense" children="10" size="Medium" />
    },
    {
      id: "help",
      label: "Help",
      path: "/help",
      icon: <HelpCircle size="16" />,
    },
    {
      id: "faq",
      label: "FAQ",
      path: "/faq",
      icon: <AlertCircle size="16" />,
    },
  ];

  const menu2 = [
    {
      id: "get",
      label: "Get In Touch",
      path: "/getInTouch",
      icon: <Home size="16" />,
      //   badge: <Badge color="Positive" label="5" />,
      children: [
        {
          id: "child1",
          label: "child1",
          path: "/product1",
          //   badge: <Badge color="Positive" label="54" />,
        },
        {
          id: "child2",
          label: "child2",
          path: "/product2",
        },
        {
          id: "child3",
          label: "child3",
          path: "/product3",
        },
      ],
    },
    {
      id: "mobile",
      label: "Contact Us",
      path: "/contactUs",
      icon: <Phone size="16" />,
    },
  ];

  const menu3 = [
    {
      id: "notification",
      label: "Notification",
      path: "/notification",
      icon: <Bell size="16" />,
    },
  ];
  const handelMenuChange = (newPath: string) => { };
  return (
    <SideBar {...rest} onChange={handelMenuChange}>
      <SideBar.Item menu={menu} />
      <SideBar.Item title="Group 2" menu={menu2} />
      <SideBar.Item menu={menu3} />
    </SideBar>
  );
};
export const Primary = Template.bind({});
