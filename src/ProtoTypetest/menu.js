import React from "react";
import { home, bag, box, note, setting } from "../Icon/Icon";

export const panelFunctions = {
  getMenu: () => {
    return [
      {
        id: "dashboard",
        content: "Dashboard",
        path: "/panel/dashboard",
        icon: home,
      },
      {
        id: "profiling",
        content: "Profile",
        path: "/panel/profiling",
        icon: box,
      },
      {
        id: "products",
        content: "Products",
        path: "/panel/products",
        icon: note,
      },
      {
        id: "order",
        content: "Orders",
        path: "/panel/order",
        icon: bag,
      },
      {
        id: "configuration",
        content: "Configuration",
        path: "/panel/config",
        icon: setting,
      },
      {
        id: "queuedtasks",
        content: "Activities",
        path: "/panel/queuedtasks",
        icon: box,
      },
    ];
  },
};
