import React from "react";
import { Home, Phone, Settings, ShoppingBag } from "../../../icons";
import Badge from "../../Badge/Badge";

export const menu = [
  {
    id: "home",
    label: "Home",
    path: "/",
    icon: <Home size="20" color="#1c2433" />,
    badge: (
      <Badge type="success" variant="accent" size="small">
        New
      </Badge>
    ),
  },
  {
    id: "proList",
    label: "Product List",
    path: "/productList",
    icon: <ShoppingBag size="20" color="#1c2433" />,
    children: [
      {
        id: "pro1",
        label: "pro1",
        path: "/product1",
        badge: (
          <Badge type="success" size="small">
            54
          </Badge>
        ),
      },
      {
        id: "pro2",
        label: "Product 2",
        path: "/product2",
        children: [
          {
            id: "pro11",
            label: "pro11",
            path: "/product1",
            badge: (
              <Badge type="success" size="small">
                54
              </Badge>
            ),
          },
          {
            id: "pro21",
            label: "pro21",
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
        id: "pro31",
        label: "pro31",
        path: "/product3",
      },
    ],
  },
  {
    id: "order",
    label: "Order  List",
    path: "/order",
    icon: <Settings size="20" color="#1c2433" />,
    children: [
      {
        id: "pro1",
        label: "pro1",
        path: "/product1",
        badge: (
          <Badge type="success" size="small">
            54
          </Badge>
        ),
      },
      {
        id: "pro2",
        label: "Product 2",
        path: "/product2",
      },
      {
        id: "pro31",
        label: "pro31",
        path: "/product3",
      },
    ],
  },
  {
    id: "setting",
    label: "Setting",
    path: "/setting",
    icon: <Settings size="20" color="#1c2433" />,
  },
  {
    id: "setting",
    label: "Setting",
    path: "/setting",
    icon: <Settings size="20" color="#1c2433" />,
  },
];

export const menu2 = [
  {
    id: "get",
    label: "Get In Touch",
    path: "/getInTouch",
    icon: <Home size="20" color="#1c2433" />,
    badge: (
      <Badge type="success" size="small">
        5
      </Badge>
    ),
    children: [
      {
        id: "pro1",
        label: "pro1",
        path: "/product1",
        badge: (
          <Badge type="success" size="small">
            54
          </Badge>
        ),
      },
      {
        id: "pro2",
        label:
          "pro2 sd fsdfg jsfdg jsldfjgksdjfgk sjdflg sfjdkgl sdkfjgl sdfjg hsfld",
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
    id: "mobile",
    label: "Contact Us",
    path: "/contactUs",
    icon: <Phone size="20" color="#1c2433" />,
  },
];
