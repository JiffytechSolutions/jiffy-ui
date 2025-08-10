import React, { useEffect, useState } from "react";
import { classnames } from "../../utilities/globalFunction";
import { Menu } from "react-feather";
// import LogoSrc from '../../assets/Logo/logo.svg';
import "./topbar.css";

import Portal from "../../utilities/Portal";
export interface TopBarI {
  connectLeft?: React.ReactNode;
  connectRight?: React.ReactNode;
  stickyTop?: boolean;
  mobileLogo?: string;
  connectCenter?: React.ReactNode;
}

const TopBar = (props: TopBarI) => {
  const { connectRight, connectLeft, connectCenter = "center", mobileLogo = "", stickyTop = true } = props;

  const [isOpenMobileSidebar, OpenMobileSideBar] = useState(false);
  function manageMobileSidebar() {

    //OpenMobileSideBar(true);
    if (!isOpenMobileSidebar) {
      OpenMobileSideBar(true);
      document.body.classList.add('new-body-class');
    } else {
      OpenMobileSideBar(false);
      document.body.classList.remove('new-body-class');
    }
  }

  return (
    <>
      <header
        className={`Pixel-appBar--container`}
      >
        <div className="appBar__connectLeft">
          <div className="jiffyui-mobile_toggle" onClick={manageMobileSidebar}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"></path></svg></div>
          {mobileLogo && <a className="jiffyui-mobile_logo" href="">
            <img src={mobileLogo} />
          </a>}
          {connectLeft}
        </div>

        {connectRight && (
          <div className="Pixel-appBar__connectRight">{connectRight}</div>
        )}
      </header>
      {
        isOpenMobileSidebar && <Portal>
          <div className="jiffyui-sidebar_overlay" onClick={manageMobileSidebar} > </div>
        </Portal>
      }

    </>
  );
};

export default TopBar;
