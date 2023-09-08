import React, { useContext, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AppContext } from "../../utilities/context/AppContext";
import getClassNames from "../../utilities/getClassnames";
import useBodyLock from "../../utilities/UseBodyLock";
import { AnnouncementBarI } from "../AnnouncementBar/AnnouncementBar";
import { AppBarI } from "../AppBar/AppBar";
import { PageFooterI } from "../PageFooter/PageFooter";
import { SideBarI } from "../SideBar/SideBar";
import "./AppWrapper.css";
import useMobileDevice from "../../utilities/useMobileDevice";

export interface AppWrapperI {
  children?: any;
  announcementBar?: React.ReactElement<AnnouncementBarI>;
  appBar?: React.ReactElement<AppBarI>;
  sideBar?: React.ReactElement<SideBarI>;
  appFooter?: React.ReactElement<PageFooterI>;
  customClass?: string;
  embeddedView?: boolean
}

const AppWrapper = ({
  announcementBar,
  sideBar,
  children,
  appFooter,
  appBar,
  customClass,
  embeddedView
}: AppWrapperI) => {
  const context = useContext(AppContext);
  const checkSideBarActive = () => {
    return context.sideBar[0] ? context.sideBar[0] : (!embeddedView && window.innerWidth > 991) ? true : false
  }

  const [isSideBarActive , setIsSideBarActive] = useState(checkSideBarActive())

  const appRef = useRef<HTMLDivElement>(null)

  const isMobile = useMobileDevice()
  useBodyLock(context.sideBar[0])

  const calculateElementHeights = () => {
    if (!appRef.current) return;
    const announcementBarElement = appRef.current.getElementsByClassName('inte-announcementBar')[0] as HTMLElement;;
    const appBarElement = appRef.current.getElementsByClassName('inte-appBar--stickyTop')[0] as HTMLElement;;
    const pageHeaderElement = appRef.current.getElementsByClassName('inte-pageHeader--fixed')[0] as HTMLElement;;
    const pageBottomActionElement = document.getElementsByClassName('inte-pageHeader__action--atBottom')[0] as HTMLElement;
    const containerVariable: Record<string, string> = {
      '--anouncementBarHeight': `${announcementBarElement ? announcementBarElement.offsetHeight : 0}px`,
      '--appBarHeight': `${appBarElement ? appBarElement.offsetHeight : 0}px`,
      '--pageHeaderHeight': `${pageHeaderElement ? pageHeaderElement.offsetHeight : 0}px`,
      '--pageBottomAction': `${pageBottomActionElement ? pageBottomActionElement.offsetHeight : 0}px`,
    };
    Object.entries(containerVariable).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });

    setIsSideBarActive(checkSideBarActive())
  };
  useLayoutEffect(() => {
    calculateElementHeights();
    window.addEventListener('resize', calculateElementHeights);
    return () => {
      window.removeEventListener('resize', calculateElementHeights);
    };
  }, [announcementBar , isMobile , context.sideBar[0]]);


  return (
    <div
      className={getClassNames({
        "inte-appWrapper": true,
        "inte-sideBar--active": isSideBarActive,
        'inte-appWrapper--embeddedView': embeddedView,
        [customClass ?? ""]: customClass,
      })}
      ref={appRef}
    >
      {sideBar ?? null}
      {announcementBar ?? null}
      {appBar ?? null}
      <main className="inte-main">
        {children}
      </main>
      {appFooter ?? null}
    </div>
  );
};

export default AppWrapper;
