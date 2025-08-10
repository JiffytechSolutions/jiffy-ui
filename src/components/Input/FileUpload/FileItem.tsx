import React, { useEffect, useState } from "react";

import { Trash2 } from "react-feather";
import Fileprogress from "./Fileprogress";
import { classnames } from "../../../utilities/globalFunction";
import { CheckIcon, FileType } from "../../../assets/icons/Icons";

const FileItem = ({
  removeImage,
  accept,
  item,
  sizeAllowed,
  fileUpload,
}: any) => {
  const [isError, setIsError] = useState(false);
  const [status, setStatus] = useState("");
  const formatBytes = (bytes: number) => {
    let units = ["B", "KB", "MB"];
    let i = 0;
    for (i; bytes > 1024; i++) {
      bytes /= 1024;
    }
    return bytes.toFixed(1) + " " + units[i];
  };
  const fileExtension = item.data.name.split(".").pop().toLowerCase();
  useEffect(() => {
    const validTypes = new Set(accept);
    const checkType = () => validTypes.has(fileExtension);
    const checkSize = () => item.data.size > sizeAllowed;
    function callTimeout() {
      setStatus("Uploaded");
      setIsError(false);
    }
    const checkValidTypes = () => {
      if (sizeAllowed && !checkSize()) {
        callTimeout();
      } else if (!sizeAllowed) {
        callTimeout();
      } else {
        setStatus("Size not allowed");
        setIsError(true);
      }
    };
    if (accept && checkType()) {
      checkValidTypes();
    } else if (!accept) {
      checkValidTypes();
    } else {
      setStatus("unsupported file");
      setIsError(true);
    }
  }, []);
  return (
    <div className="jiffyui-fileItem">
      <div
        className={classnames({
          "jiffyui-item__wrapper": true,
          "jiffyui-item--error": isError,
        })}
      >
        <div className="jiffyui-item">
          <div className="jiffyui-item__container">
            <div className="jiffyui-item__formatIcon">
              <div className="jiffyui-item__format">
                <FileType />
                <p className="jiffyui-item__formatName">.{fileExtension}</p>
              </div>
            </div>
            <div className="jiffyui-item__name">
              <div className="jiffyui-item__nameWrapper">
                <div className="jiffyui-item__fileName">
                  <p> {item.data.name}</p>
                </div>
                {fileUpload && <CheckIcon />}
              </div>
              <p className="jiffyui-item__size">
                {" "}
                {formatBytes(item.data.size)}{" "}
                {isError && <span>- {status}</span>}
              </p>
            </div>
            <div className="jiffyui-item__clear">
              <button
                type="button"
                aria-label="Remove File"
                className="jiffyui-item__button"
                onClick={() => removeImage(item.id)}
              >
                <Trash2 height={16} width={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {!fileUpload && <Fileprogress />}
    </div>
  );
};

export default React.memo(FileItem);
