import React from "react";
import {
  AlertCircle,
  ChevronDown,
  HelpCircle,
  Home,
  Logout,
  Phone,
  Settings,
  ShoppingBag,
} from "../../storybook/Foundation/Icons/Icons";
import Badge from "../Badge/Badge";
export const menu = [
  {
    id: "home",
    label: "Home",
    path: "/",
    icon: <Home size="20" />,
    // badge: (
    //   <Badge type="success" variant="accent" size="small">
    //     New
    //   </Badge>
    // ),
  },
  {
    id: "proList",
    label: "Product List",
    path: "/productList",
    icon: <ShoppingBag size="20" />,
    children: [
      {
        id: "pro1",
        label: "pro1",
        path: "/product1",
        // badge: (
        //   <Badge type="success" size="small">
        //     54
        //   </Badge>
        // ),
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
    icon: <Settings size="20" />,
  },
  {
    id: "help",
    label: "Help",
    path: "/help",
    icon: <HelpCircle size="20" />,
  },
  {
    id: "faq",
    label: "FAQ",
    path: "/faq",
    icon: <AlertCircle size="20" />,
    children: [
      {
        id: "FAQ1",
        label: "FAQ",
        path: "/product1",
      },
      {
        id: "FAQ2",
        label: "FAQ2",
        path: "/FAQ",
      },
      {
        id: "pro3",
        label: "pro3",
        path: "/FAQ3",
      },
    ],
  },
  {
    id: "help1",
    label: "Help1",
    path: "/help1",
    icon: <HelpCircle size="20" />,
  },
  {
    id: "help2",
    label: "Help2",
    path: "/help2",
    icon: <HelpCircle size="20" />,
  },
  {
    id: "help3",
    label: "Help3",
    path: "/help3",
    icon: <HelpCircle size="20" />,
  },
  {
    id: "help4",
    label: "Help4",
    path: "/help4",
    icon: <HelpCircle size="20" />,
  },
  {
    id: "help5",
    label: "Help5",
    path: "/help5",
    icon: <HelpCircle size="20" />,
  },
  {
    id: "help6",
    label: "Help6",
    path: "/help6",
    icon: <HelpCircle size="20" />,
  },
  {
    id: "help7",
    label: "Help7",
    path: "/help7",
    icon: <HelpCircle size="20" />,
  },
  {
    id: "help8",
    label: "Help8",
    path: "/help8",
    icon: <HelpCircle size="20" />,
  },
  {
    id: "help9",
    label: "Help9",
    path: "/help9",
    icon: <HelpCircle size="20" />,
  },
  {
    id: "help10",
    label: "Help10",
    path: "/help10",
    icon: <HelpCircle size="20" />,
  },
  {
    id: "help11",
    label: "Help11",
    path: "/help11",
    icon: <HelpCircle size="20" />,
  },
  {
    id: "help12",
    label: "Help12",
    path: "/help12",
    icon: <HelpCircle size="20" />,
  },
  {
    id: "help13",
    label: "Help13",
    path: "/help13",
    icon: <HelpCircle size="20" />,
  },
  {
    id: "help14",
    label: "Help14",
    path: "/help14",
    icon: <HelpCircle size="20" />,
  },
  {
    id: "help15",
    label: "Help15",
    path: "/help15",
    icon: <HelpCircle size="20" />,
  },
];
