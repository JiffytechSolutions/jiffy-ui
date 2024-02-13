import React, { useId, useRef, useState } from "react";
import FileDetails from "./component/FileDetails";
import getClassNames from "../../utilities/getClassnames";
import TextLink from "../TextLink/TextLink";
import Text from "../Text/Text";
import "./FileUpload.css";

const FileUpload = ({
  id,
  innerLabel,
  isMultiple = true,
  isDragable = true,
  onChange = () => null,
  onRemove = () => null,
  isDisabled = false,
  type = "primary",
  maxCount,
  accept,
  helpText,
  helpIcon,
  maxSizeAllowed,
  customClass = "",
  clearAll = false,
}: UploadI) => {
  const [filesData, setFilesData] = useState<any | null>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const inputUploadRef = useRef<HTMLInputElement>(null);
  const inputWrapperRef = useRef<HTMLLabelElement>(null);
  const rID = useId();
  // type
  const checkType = {
    primary: "inte-fileUpload__dropZone--primary",
    secondary: "inte-fileUpload__dropZone--secondary",
  };
  const FileUploadType = checkType[type];
  // Selecting files by clicking on input box
  const handleInputChange = (event: { target: { files: any } }) => {
    const files = event.target.files;
    if (files.length > 0) {
      handleMultipleFiles(files);
    }
  };
  // Handling files by drag and drop
  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    if (isDisabled || !isDragable || filesData.length === maxCount) return;
    e.stopPropagation();
    e.preventDefault();
    setIsDragOver(true);
  };
  const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    if (isDisabled || !isDragable) return;
    e.stopPropagation();
    e.preventDefault();
    setIsDragOver(false);
  };
  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    if (isDisabled || !isDragable) return;
    e.stopPropagation();
    e.preventDefault();
    setIsDragOver(false);
    const dt = e.dataTransfer;
    const files = dt.files;
    handleMultipleFiles(files);
  };
  const handleMultipleFiles = (files: any[] | FileList) => {
    if (!isMultiple) {
      let selectOneFile = [files[0]];
      handleFiles(selectOneFile);
    } else {
      handleFiles(files);
    }
  };
  const isValidFileType = (item: any) => {
    const validTypes = new Set(accept);
    const fileExtension = item.data.name.split(".").pop().toLowerCase();
    return validTypes.has(fileExtension);
  };
  const isFileSizeValid = (item: any) => {
    return !maxSizeAllowed || item.data.size <= maxSizeAllowed;
  };
  const isFileValid = (item: any) => {
    if (accept && maxSizeAllowed) {
      return isValidFileType(item) && isFileSizeValid(item);
    } else if (accept && !maxSizeAllowed) {
      return isValidFileType(item);
    } else if (!accept && maxSizeAllowed) {
      return isFileSizeValid(item);
    }
    return item
  };
  const handleFiles = (e: any[] | FileList) => {
    function appendUniqueId(e: any) {
      const file = e;
      let files: any[] = [];
      let idCounter = 1;
      for (const k of file) {
        files = [
          ...files,
          {
            data: k,
            id: `${new Date().getTime().toString()}${idCounter}`,
          },
        ];
        idCounter++;
      }
      return files;
    }
    const files = appendUniqueId(e);
    const totalSelectedFiles = filesData.concat(files);
    const filteredFiles = totalSelectedFiles.filter(isFileValid);
    const singleFiltered=files.filter(isFileValid)
    if (isMultiple) {
      if (maxCount && totalSelectedFiles.length > maxCount) {
        const truncatedFiles = maxCount
          ? filteredFiles.slice(0, maxCount)
          : totalSelectedFiles;
        onChange(truncatedFiles, singleFiltered.slice(0,maxCount - filesData.length));
        setFilesData(totalSelectedFiles.slice(0,maxCount));
      } else {
        const truncatedFiles = maxCount
          ? filteredFiles.slice(0, maxCount)
          : totalSelectedFiles;
        truncatedFiles.length > 0 && onChange(truncatedFiles, singleFiltered);
        setFilesData(totalSelectedFiles);
      }
    } else {
      setFilesData(files);
      singleFiltered.length > 0 && onChange(singleFiltered,singleFiltered);
    }
    if (inputUploadRef.current) {
      inputUploadRef.current.value = "";
    }
  };
  const removeImage = (id: any) => {
    const files = filesData.filter((item: { id: any }) => item.id !== id);
    const removedFile=filesData.filter((item: { id: any }) => item.id === id);
    const filteredFiles = filesData.filter(isFileValid);
    const isFound=filteredFiles.some((ele:any,ind:any)=>{
      if(ele.id === id){
        return true
      }
      return false
    })
    isFound && onRemove(removedFile);
    setFilesData([...files]);
  };
  return (
    <div
      className={getClassNames({
        "inte-fileUpload": true,
        [customClass]: customClass,
      })}
    >
      <label
        htmlFor={id || `inte-fileUpload-${rID}`}
        className={getClassNames({
          "inte-fileUpload__dropZone": true,
          "inte-fileUpload--dragOver": isDragOver,
          "inte-fileUpload__dropZone--disabled":
            isDisabled || filesData.length === maxCount,
          [FileUploadType]: FileUploadType,
        })}
        ref={inputWrapperRef}
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDragLeave={(e) => handleDragLeave(e)}
        aria-disabled={
          isDisabled || filesData.length === maxCount ? "true" : "false"
        }
      >
        <input
          type="file"
          ref={inputUploadRef}
          id={id || `inte-fileUpload-${rID}`}
          className="inte-fileUpload__inputBox"
          onChange={(e) => handleInputChange(e)}
          multiple={isMultiple}
          disabled={isDisabled || filesData.length === maxCount}
        />
        <div className="inte-fileUpload__dropZoneText">
          {type === "primary" && (
            <>
              <svg
                width="40"
                height="40"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="3"
                  width="40"
                  height="40"
                  rx="20"
                  fill={`${isDragOver ? "var(--inte-P40)" : "var(--inte-G40)"}`}
                />
                <g clipPath="url(#clip0_2527_210733)">
                  <path
                    d="M29.9924 28.3257C30.8052 27.8826 31.4473 27.1814 31.8174 26.3328C32.1874 25.4842 32.2643 24.5365 32.036 23.6394C31.8076 22.7422 31.287 21.9466 30.5563 21.3782C29.8256 20.8098 28.9264 20.5009 28.0006 20.5003H26.9506C26.6983 19.5246 26.2282 18.6188 25.5755 17.851C24.9228 17.0832 24.1045 16.4733 23.1822 16.0673C22.2598 15.6612 21.2574 15.4696 20.2504 15.5067C19.2433 15.5438 18.2577 15.8087 17.3678 16.2815C16.4778 16.7543 15.7066 17.4228 15.1122 18.2365C14.5178 19.0503 14.1156 19.9882 13.9358 20.9798C13.756 21.9714 13.8034 22.9909 14.0743 23.9615C14.3453 24.9322 14.8327 25.8288 15.5 26.5839M23.0004 30.5008V23.0004M23.0004 23.0004L26.3339 26.3328M23.0004 23.0004L19.6669 26.3328"
                    stroke={`${
                      isDisabled || filesData.length === maxCount
                        ? "var(--inte-G50)"
                        : isDragOver
                        ? "var(--inte-P900)"
                        : "var(--inte-G800)"
                    } `}
                    strokeWidth="1.66674"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <rect
                  x="3"
                  y="3"
                  width="40"
                  height="40"
                  rx="20"
                  stroke={`${
                    isDragOver ? "var(--inte-P30)" : "var(--inte-G30)"
                  }`}
                  strokeWidth="6"
                />
                <defs>
                  <clipPath id="clip0_2527_210733">
                    <rect
                      width="20.0009"
                      height="20.0009"
                      fill="white"
                      transform="translate(13 13)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="inte-fileUpload__uploadTextWrapper">
                <div className="inte-fileUpload__uploadText">
                  {innerLabel || (
                    <>
                      <span>Click to upload</span>
                      <span> or drag and drop</span>
                    </>
                  )}
                </div>
                {accept && (
                  <span className="inte-fileUpload__fileType">
                    {accept?.join()}
                  </span>
                )}
              </div>
            </>
          )}
          {type === "secondary" && (
            <>
              <svg
                width="24"
                height="24"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="24"
                  height="24"
                  rx="12"
                  fill="#E0E1E3"
                />
                <g clipPath="url(#clip0_5184_270948)">
                  <path
                    d="M18.1954 17.1954C18.6831 16.9295 19.0684 16.5088 19.2904 15.9997C19.5125 15.4905 19.5586 14.9219 19.4216 14.3836C19.2846 13.8453 18.9722 13.368 18.5338 13.0269C18.0954 12.6859 17.5558 12.5006 17.0004 12.5002H16.3703C16.219 11.9148 15.9369 11.3713 15.5453 10.9106C15.1537 10.4499 14.6627 10.084 14.1093 9.84038C13.5559 9.59675 12.9545 9.48174 12.3502 9.504C11.746 9.52626 11.1546 9.68522 10.6207 9.96892C10.0867 10.2526 9.62399 10.6537 9.26733 11.1419C8.91067 11.6302 8.66933 12.193 8.56147 12.7879C8.45361 13.3829 8.48203 13.9945 8.64459 14.5769C8.80716 15.1593 9.09963 15.6973 9.50003 16.1504M14.0002 18.5005V14.0003M14.0002 14.0003L16.0003 15.9997M14.0002 14.0003L12.0001 15.9997"
                    stroke={`${
                      isDisabled || filesData.length === maxCount
                        ? "var(--inte-G50)"
                        : "#1C2433"
                    } `}
                    strokeWidth="1.00005"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <rect
                  x="2"
                  y="2"
                  width="24"
                  height="24"
                  rx="12"
                  stroke="#ECEDEE"
                  strokeWidth="3.6"
                />
                <defs>
                  <clipPath id="clip0_5184_270948">
                    <rect
                      width="12.0006"
                      height="12.0006"
                      fill="white"
                      transform="translate(8 8)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <div className="inte-fileUpload__uploadText">
                  {innerLabel || (
                    <>
                      <span>Click to upload</span>
                      <span> or drag and drop</span>
                    </>
                  )}
                </div>
                {accept && (
                  <span className="inte-fileUpload__fileType">
                    {accept?.join()}
                  </span>
                )}
              </div>
            </>
          )}
        </div>
      </label>
      {helpText && (
        <span
          className={getClassNames({
            "inte-fileUpload__itemHelp": true,
            "inte-fileUpload__itemHelp--HasHelpIcon": helpIcon,
          })}
        >
          {helpIcon ?? null}
          <span>{helpText}</span>
        </span>
      )}
      {filesData.length !== 0 && (
        <>
          {clearAll && (
            <div className="inte-fileUpload__clearWrapper">
              <Text fontweight="bold" type="T-7">
                Uploaded File
              </Text>
              <TextLink label="Clear all" onClick={() => setFilesData([])} />
            </div>
          )}

          {filesData.map((i: { id: React.Key | null | undefined }) => {
            return (
              <FileDetails
                key={i.id}
                removeImage={removeImage}
                accept={accept}
                item={i}
                sizeAllowed={maxSizeAllowed}
              />
            );
          })}
        </>
      )}
    </div>
  );
};
export interface UploadI {
  id?: string;
  innerLabel?: React.ReactNode;
  type?: "primary" | "secondary";
  accept?: string[];
  isMultiple?: boolean;
  isDragable?: boolean;
  isDisabled?: boolean;
  clearAll?: boolean;
  maxCount?: number;
  maxSizeAllowed?: number;
  helpText?: string;
  helpIcon?: React.ReactNode;
  onChange?: (e: any, single?: any) => void;
  onRemove?: (e: any) => void;
  customClass?: string;
}
export default FileUpload;
