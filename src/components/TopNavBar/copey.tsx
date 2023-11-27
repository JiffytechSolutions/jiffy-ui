import React, { useContext } from "react";
import Button from "../Button/Button";
import getClassNames from "../../utilities/getClassnames";
import {
  AlertCircle,
  HelpCircle,
  Home,
  Menu,
  Phone,
  Settings,
  ShoppingBag,
} from "../../icons";
import { AppContext } from "../../utilities/context/AppContext";
import "./TopNavBar.css";
import Badge from "../Badge/Badge";
import SideBar from "../SideBar/SideBar";

export interface AppBarI {
  connectLeft?: React.ReactNode;
  connectRight?: React.ReactNode;
  stickyTop?: boolean;
  customClass?: string;
}

const TopNavBar = ({
  connectLeft,
  connectRight,
  stickyTop = true,
  customClass = "",
}: AppBarI) => {
  const context = useContext(AppContext);
  const toggleSideBar = () => {
    context.sideBar[1](!context.sideBar[0]);
  };
  const menu = [
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
      icon: <Settings size="20" color="#1c2433" />,
    },
    {
      id: "help",
      label: "Help",
      path: "/help",
      icon: <HelpCircle size="20" color="#1c2433" />,
    },
    {
      id: "faq",
      label: "FAQ",
      path: "/faq",
      icon: <AlertCircle size="20" color="#1c2433" />,
    },
  ];

  const menu2 = [
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
      id: "mobile",
      label: "Contact Us",
      path: "/contactUs",
      icon: <Phone size="20" color="#1c2433" />,
    },
  ];

  const sideBar = () => {
    const handelMenuChange = (newPath: string) => {
      console.log("newPath => ", newPath);
    };

    return (
      <SideBar onChange={handelMenuChange}>
        <SideBar.Section menu={menu} />
        <SideBar.Section menu={menu2} />
      </SideBar>
    );
  };

  const hasChildren = menu.some((item) => item.children !== undefined);
  if (hasChildren) {
    const childrenData = menu
      .filter((item) => item.children !== undefined)
      .map((item) => item.children);

    // Assuming you want to work with the first child object (index 0)
    if (childrenData.length > 0) {
      const firstChild = childrenData[0];

      // Now you can access the data within the first child object
      console.log("Data of the first child:", firstChild);
    } else {
      console.log("No child data available.");
    }
  } else {
    console.log("None of the items have children.");
  }

  return (
    <header
      className={getClassNames({
        "inte-appBar--container": true,
        "inte-appBar--stickyTop": stickyTop,
        "inte-topNavBar": true,
        [customClass]: customClass,
      })}
    >
      <div className="inte-appBar__connectLeft">
        <div className="inte-appBar__toggleButton">
          <Button
            accessibilityLabel="toggle-button"
            icon={<Menu size={20} />}
            type={"outlined"}
            onClick={toggleSideBar}
          />
        </div>
        {connectLeft ?? null}
      </div>

      {connectRight && (
        <div className="inte-appBar__connectRight">{connectRight}</div>
      )}

      {sideBar()}
    </header>
  );
};

export default TopNavBar;
