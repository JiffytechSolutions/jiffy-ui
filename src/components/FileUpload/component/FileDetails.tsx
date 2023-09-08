import React, { useEffect, useState } from "react";
import {
  AlertCircle,
  CheckCircle,
  X,
} from "../../../storybook/Foundation/Icons/Icons";
import getClassNames from "../../../utilities/getClassnames";
import Badge from "../../Badge/Badge";

const FileDetails = ({ removeImage, accept, item, sizeAllowed }: any) => {
  const [animate, setAnimate] = useState(true);
  const [status, setStatus] = useState("Uploading");
  const [isError, setIsError] = useState(false);
  const formatBytes = (bytes: number) => {
    let units = ["B", "KB", "MB"];
    let i = 0;
    for (i; bytes > 1024; i++) {
      bytes /= 1024;
    }
    return bytes.toFixed(1) + " " + units[i];
  };
  useEffect(() => {
    let timeoutId: any;
    const validTypes = new Set(accept);
    const fileExtension = item.data.name.split(".").pop().toLowerCase();
    const checkType = () => validTypes.has(fileExtension);
    const checkSize = () => item.data.size > sizeAllowed;
    function callTimeout() {
      setAnimate(false);
      setStatus("Uploaded");
      setIsError(false);
    }
    const checkValidTypes = () => {
      if (sizeAllowed && !checkSize()) {
        timeoutId = setTimeout(callTimeout, 1000);
      } else if (!sizeAllowed) {
        timeoutId = setTimeout(callTimeout, 1000);
      } else {
        setStatus("Size not allowed");
        setIsError(true);
        setAnimate(false);
      }
    };
    if (accept && checkType()) {
      checkValidTypes();
    } else if (!accept) {
      checkValidTypes();
    } else {
      setStatus("unsupported file");
      setIsError(true);
      setAnimate(false);
    }
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div
      className={getClassNames({
        "inte-fileUpload__itemWrapper": true,
        "inte-fileUpload__itemWrapper--error": isError,
        "inte-fileUpload__itemWrapper--success": !isError && !animate,
      })}
    >
      {animate && (
        <div
          className={getClassNames({ "inte-fileUpload__progressBar": animate })}
        ></div>
      )}
      <div className="inte-fileUpload__item">
        <div className="inte-fileUpload__itemTextWithIcon">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="2"
              width="32"
              height="32"
              rx="16"
              fill={`${isError ? "var(--inte-R55)" : "#E7E1F6"}`}
            />
            <path
              d="M18.6665 11.3333H13.9998C13.6462 11.3333 13.3071 11.4738 13.057 11.7238C12.807 11.9739 12.6665 12.313 12.6665 12.6666V23.3333C12.6665 23.6869 12.807 24.026 13.057 24.2761C13.3071 24.5261 13.6462 24.6666 13.9998 24.6666H21.9998C22.3535 24.6666 22.6926 24.5261 22.9426 24.2761C23.1927 24.026 23.3332 23.6869 23.3332 23.3333V15.9999M18.6665 11.3333V15.9999H23.3332M18.6665 11.3333L23.3332 15.9999"
              stroke={`${isError ? "var(--inte-R400)" : "#413BBC"}`}
              strokeWidth="1.33327"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="2"
              y="2"
              width="32"
              height="32"
              rx="16"
              stroke={`${isError ? "var(--inte-R50)" : "#F0EDFA"}`}
              strokeWidth="4"
            />
          </svg>
          <div className="inte-fileUpload__itemText">
            <div className={`inte-fileUpload__fileName`}>{item.data.name}</div>
            <div className="inte-fileUpload__itemTextWithStatus">
              <div className="inte-fileUpload__fileSize">
                {formatBytes(item.data.size)} -
              </div>
              {isError ? (
                <Badge
                  customBgColor="transparent"
                  helpPosition="bottom"
                  icon={<AlertCircle size="16" color="var(--inte-R400)" />}
                  iconAlign="left"
                  size="small"
                  type="error"
                  variant="accent"
                >
                  {status}
                </Badge>
              ) : (
                <div className="inte-fileUpload__status">
                  <Badge
                    badgeTextColor={animate ? "var(--inte-G200)" : ""}
                    customBgColor="transparent"
                    helpPosition="bottom"
                    icon={
                      !animate && (
                        <CheckCircle size="16" color="var(--inte-GR300)" />
                      )
                    }
                    iconAlign="left"
                    size="small"
                    type={animate ? "secondary" : "success"}
                    variant="accent"
                  >
                    {status}
                  </Badge>
                </div>
              )}
            </div>
          </div>
        </div>
        <button
          className="inte-fileUpload__fileClear"
          onClick={() => removeImage(item.id)}
          aria-label="clear"
        >
          <X size={20} color="var(--inte-G800)" />
        </button>
      </div>
    </div>
  );
};
export default React.memo(FileDetails);
