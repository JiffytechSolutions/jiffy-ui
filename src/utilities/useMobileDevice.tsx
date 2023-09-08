import React, { useEffect, useState } from "react";

const mobileDevicePatterns = [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i,
  /Kindle/i,
  /Silk/i,
  /Opera Mini/i,
  /Mobile/i, // Additional pattern for general mobile devices
];

const useMobileDevice = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(() => {
        return mobileDevicePatterns.some((device) => {
          return navigator.userAgent.match(device);
        });
      });
    };
    handleResize()
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export const isMobileDevice = () => {
  return mobileDevicePatterns.some((device) => {
    return navigator.userAgent.match(device);
  });
}

export default useMobileDevice;