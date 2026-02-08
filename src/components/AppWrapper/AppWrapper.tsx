import React, { useEffect, useRef, useState } from "react";
import './appwrapper.css';
// import '../../style.css';

export interface AppWrapperI {
  topBar?: string | React.ReactNode;
  sideBar?: string | React.ReactNode;
  announcementBar?: string | React.ReactNode;
  content?: string | React.ReactNode;
  footer?: string | React.ReactNode;
}

const AppWrapper = ({ topBar, sideBar, footer, announcementBar, content, ...props }: AppWrapperI) => {

  const [scrolled, setScrolled] = useState(false);
  const [topBarHeight, setTopBarHeight] = useState<number | null>(null);
  const topBarRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (topBarRef.current) {
        setTopBarHeight(topBarRef.current.offsetHeight + 15);
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [topBarRef]);
  return (
    <main className='jiffyui-app_wrapper'>
      <div className="jiffyui-announcement_wrapper">
        {announcementBar}
      </div>
      <div className="jiffyui-sidebar__Wrapper">
        {sideBar}
      </div>
      <div className="jiffyui-main__content">
        <div ref={topBarRef} className={`jiffyui-topbar__wrapper ${scrolled ? "header-sticky" : ""}`}>
          
          {topBar}
        </div>
        <div className="jiffyui-content_wrapper" style={{ "paddingTop": topBarHeight + 'px' }}>
          {content}
        </div>
        <div className="jiffyui-footer__wrapper">
          {footer}
        </div>
      </div>
    </main>
  )
};
export default AppWrapper;