import React, { useEffect, useId, useRef, useState } from "react";

import FileItem from "./FileItem";
import "./FileUpload.css";
import { classnames } from "../../../utilities/globalFunction";

 const FileUpload = (props: UploadI) => {
  const {
    isMultiple,
    isDragable = true,
    onChange,
    onRemove,
    isDisabled,
    maxCount,
    accept,
    helpText,
    helpIcon,
    maxSize,
    onError,
    isFileUploaded,
  } = props;
  const [filesData, setFilesData] = useState<any | null>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const inputUploadRef = useRef<HTMLInputElement>(null);
  const inputWrapperRef = useRef<HTMLLabelElement>(null);
  const [items, setItems] = useState<any>([]);
  const rID = useId();
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
    return !maxSize || item.data.size <= maxSize;
  };
  const isFileValid = (item: any) => {
    setItems(item);
    if (accept && maxSize) {
      return isValidFileType(item) && isFileSizeValid(item);
    } else if (accept && !maxSize) {
      return isValidFileType(item);
    } else if (!accept && maxSize) {
      return isFileSizeValid(item);
    }
    return item;
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
    const singleFiltered = files.filter(isFileValid);
    if (isMultiple) {
      if (maxCount && totalSelectedFiles.length > maxCount) {
        const truncatedFiles = maxCount
          ? filteredFiles.slice(0, maxCount)
          : totalSelectedFiles;
        onChange?.(
          truncatedFiles,
          singleFiltered.slice(0, maxCount - filesData.length)
        );
        setFilesData(totalSelectedFiles.slice(0, maxCount));
      } else {
        const truncatedFiles = maxCount
          ? filteredFiles.slice(0, maxCount)
          : totalSelectedFiles;
        truncatedFiles.length > 0 && onChange?.(truncatedFiles, singleFiltered);
        setFilesData(totalSelectedFiles);
      }
    } else {
      setFilesData(files);
      singleFiltered.length > 0 && onChange?.(singleFiltered, singleFiltered);
    }
    if (inputUploadRef.current) {
      inputUploadRef.current.value = "";
    }
  };
  const removeImage = (id: any) => {
    const files = filesData.filter((item: { id: any }) => item.id !== id);
    const removedFile = filesData.filter((item: { id: any }) => item.id === id);
    const filteredFiles = filesData.filter(isFileValid);
    const isFound = filteredFiles.some((ele: any, ind: any) => {
      if (ele.id === id) {
        return true;
      }
      return false;
    });
    isFound && onRemove?.(removedFile);
    setFilesData([...files]);
  };

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    if (!maxSize || items?.data?.size <= maxSize) {
      return;
    }
    onError?.(items, "This size  is not allowed");
  }, [onError, items, maxSize]);

  const dottedArray = accept?.map((item) => "." + item);
  const acceptValue = dottedArray?.join(", ");

  return (
    <div
      className={classnames({
        "jiffyui-fileUpload": true,
      })}
    >
      <label
        htmlFor={`jiffyui-fileUpload-${rID}`}
        className={classnames({
          "jiffyui-fileUpload__dropZone": true,
          "jiffyui-fileUpload--dragOver": isDragOver,
          "jiffyui-fileUpload__dropZone--disabled":
            isDisabled || filesData.length === maxCount,
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
          id={`jiffyui-fileUpload-${rID}`}
          className="jiffyui-fileUpload__inputBox"
          onChange={(e) => handleInputChange(e)}
          multiple={isMultiple}
          disabled={isDisabled || filesData.length === maxCount}
          accept={`${acceptValue}`}
        />
        <div className="jiffyui-fileUpload__uploadText">
          <span>Drag files here or</span>
          <span>Upload</span>
        </div>
      </label>
      {helpText && (
        <span
          className={classnames({
            "jiffyui-fileUpload__itemHelp": true,
            "jiffyui-fileUpload__itemHelp--HasHelpIcon": helpIcon,
          })}
        >
          {helpIcon ?? null}
          <span>{helpText}</span>
        </span>
      )}
      {filesData.length !== 0 && (
        <>
          {filesData.map(
            (i: { id: React.Key | null | undefined }, ind: number) => {
              return (
                <FileItem
                  key={i.id}
                  removeImage={removeImage}
                  accept={accept}
                  item={i}
                  sizeAllowed={maxSize}
                  fileUpload={isFileUploaded[ind]}
                />
              );
            }
          )}
        </>
      )}
    </div>
  );
};
export interface UploadI {
  accept?: string[];
  isMultiple?: boolean;
  isDragable?: boolean;
  isDisabled?: boolean;
  maxCount?: number;
  maxSize?: number;
  helpText?: string;
  helpIcon?: React.ReactNode;
  onChange?: (e: any, single?: any) => void;
  onError?: (errorData: any, message: string) => void;
  onRemove?: (e: any) => void;
  isFileUploaded: boolean[];
}
export default FileUpload;
