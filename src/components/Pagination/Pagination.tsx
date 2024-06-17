import React, { useEffect, useMemo, useState } from "react";
import { utilPagination, DOTS } from "./components/utilPagination";
import { Button, Select, Text, TextField } from "../..";
import {
  ChevronRight,
  ChevronLeft,
} from "../../storybook/Foundation/Icons/Icons";
import "./Pagination.css";
export interface PaginationI {
  type?: "fullLength" | "navButton";
  currentPage: number;
  totalitem: number;
  siblingCount?: number;
  countPerPage: number;
  onNext?: () => void;
  onPrevious?: () => void;
  onEnter?: (page: number) => void;
  onCountChange?: (count: number) => void;
  onPageChange: (onPage: number) => void;
  optionPerPage?: Array<ObjI> | any;
  customClass?: string;
  internalText?:{go : string}
}

interface ObjI {
  label?: string;
  value?: string;
}

const Pagination: React.FC<PaginationI> = ({
  optionPerPage,
  type = "fullLength",
  customClass = "",
  countPerPage,
  totalitem,
  siblingCount = 1,
  currentPage,
  onEnter = () => {
    //
  },
  onPrevious = () => {
    //
  },
  onNext = () => {
    //
  },
  onCountChange = () => {
    //
  },
  onPageChange = () => {
    //
  },
  ...props
}: PaginationI) => {
  const [value, setValue] = useState<any>("");
  const totalPageCount = Math.ceil(totalitem / countPerPage);

  const TextValue =
    totalPageCount > value ? value : totalPageCount === 0 ? "" : totalPageCount;

  const [activePage, updateActivePage] = useState<any>(currentPage);
  const [pageReplica, setpageReplica] = useState(activePage);
  const [width, setWidth] = useState(0); // hold window resize width

  const paginationRange: any = utilPagination({
    currentPage,
    totalitem,
    siblingCount,
    countPerPage,
    TextValue,
  });

  const lastPage = paginationRange[paginationRange.length - 1];

  useEffect(() => {
    updateActivePage(currentPage);
    setpageReplica(currentPage);
  }, [currentPage]);

  // window resize
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  const optPerPage = useMemo(() => {
    if (optionPerPage === undefined) {
      let defaultOptions = [
        { label: "10", value: 10 },
        { label: "15", value: 15 },
        { label: "20", value: 20 },
        { label: "25", value: 25 },
        { label: "30", value: 30 },
        { label: "35", value: 35 },
        { label: "40", value: 40 },
        { label: "45", value: 45 },
        { label: "50", value: 50 },
        { label: "55", value: 55 },
        { label: "60", value: 60 },
        { label: "65", value: 65 },
        { label: "70", value: 70 },
        { label: "75", value: 75 },
        { label: "80", value: 80 },
        { label: "85", value: 85 },
        { label: "90", value: 90 },
        { label: "95", value: 95 },
        { label: "100", value: 100 },
      ];
      defaultOptions = defaultOptions.filter(
        (i) => Number(i.value) <= totalitem
      );
      return defaultOptions;
    } else return optionPerPage;
  }, [totalitem, optionPerPage]);

  return (
    <div
      className={`inte-pagination ${customClass}`.replace(/\s\s+/g, " ").trim()}
    >
      {type == "fullLength" && (
        <div className="inte-pagination__perPage">
          <div className="inte-pagination__select">
            <Select
              isClearable={false}
              options={optPerPage}
              onChange={(e: any) => {
                onCountChange(e);
              }}
              value={countPerPage}
              customClass="inte-pagination__selectItem"
            />
          </div>

          {width >= 500 && type == "fullLength" && (
            <div className="inte-pagination__label">
              {pageReplica == 0
                ? totalitem === 0
                  ? 0
                  : countPerPage * 1 + 1 - countPerPage
                : totalitem === 0
                ? 0
                : countPerPage * pageReplica + 1 - countPerPage}{" "}
              -{" "}
              {pageReplica * countPerPage >= totalitem
                ? totalitem
                : pageReplica == 0
                ? 1 * countPerPage
                : pageReplica * countPerPage}{" "}
              of {totalitem}
            </div>
          )}
        </div>
      )}

      <div className="inte-pagination__controls">
        <div className="inte-pagination__buttons">
          <Button
            accessibilityLabel="previous-arrow"
            type="outlined"
            size="thin"
            icon={
              <ChevronLeft
                size="20"
                color={`${
                  currentPage === 1 || totalitem === 0 ? "#E0E1E3" : "#1C2433"
                }`}
              />
            }
            isDisabled={!!(currentPage === 1 || totalitem === 0)}
            onClick={onPrevious}
          />

          {type == "fullLength" && width < 768 && (
            <div className="inte-pagination__showCurrentLastPage">
              <Text type="T-7" textcolor="subdued">
                {totalitem === 0 ? 0 : currentPage} of{" "}
                {totalitem === 0 ? 0 : lastPage}
              </Text>
            </div>
          )}

          {type !== "navButton" && width >= 768 && type == "fullLength" && (
            <div className="inte-pagination__items">
              {paginationRange.map((pageNumber: any, index: number) => {
                if (pageNumber === DOTS) {
                  return (
                    <div key={index} className="inte-pagination__dotItems">
                      &#8230;
                    </div>
                  );
                }

                return (
                  <Button
                    key={index}
                    type={pageNumber === currentPage ? "primary" : "textButton"}
                    onClick={() => onPageChange(pageNumber)}
                    content={pageNumber}
                  />
                );
              })}
            </div>
          )}

          <Button
            accessibilityLabel="next-arrow"
            type="outlined"
            size="thin"
            icon={
              <ChevronRight
                size="20"
                color={`${
                  currentPage === lastPage || totalitem === 0
                    ? "#E0E1E3"
                    : "#1C2433"
                }`}
              />
            }
            isDisabled={currentPage === lastPage || totalitem === 0}
            onClick={onNext}
          />
        </div>

        {type !== "navButton" && width >= 768 && type == "fullLength" && (
          <div className="inte-pagination__goPage">
            <TextField
              customClass="inte-pagination__textField"
              type="text"
              value={TextValue}
              isDisabled={totalitem === 0 || totalPageCount <= 1}
              onChange={(e: any) => {
                const reg: any = /^[0-9]*$/;
                if ((reg.test(parseInt(e)) && e.charAt(0) !== "0") || e == "") {
                  if (e == "") {
                    setValue(e);
                  } else if (
                    parseInt(e) >= 0 &&
                    parseInt(e) <= totalPageCount
                  ) {
                    setValue(parseInt(e, 10));
                  } else {
                    setValue(totalPageCount);
                  }
                }
              }}
              onEnter={() => {
                if (TextValue !== "" && typeof TextValue !== "string") {
                  onEnter(TextValue);
                  setValue("");
                }
              }}
            />

            <Button
              icon={<ChevronRight size={20} color="currentColor" />}
              content={props.internalText ? props.internalText.go : "Go"}
              iconAlign="right"
              type="textButton"
              onClick={() => {
                if (TextValue !== "" && typeof TextValue !== "string") {
                  onEnter(TextValue);
                  setValue("");
                }
              }}
              isDisabled={!!(TextValue == "" || typeof TextValue === "string")}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
