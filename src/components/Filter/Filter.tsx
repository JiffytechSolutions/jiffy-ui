import React, { useCallback, useMemo, useState } from "react";
import { X } from "../../storybook/Foundation/Icons/Icons";
import Badge from "../Badge/Badge";
import Button, { ButtonI } from "../Button/Button";
import Popover from "../Popover/Popover";
import Sheet from "../Sheet/Sheet";
import Tabs from "../Tabs/Tabs";
import { FlexChild, FlexLayout } from "../FlexLayout";
import getClassNames from "../../utilities/getClassnames";
import useMobileDevice from "../../utilities/useMobileDevice";
import "./Filter.css";

const Filter: React.FC<FilterI> = ({
  filters,
  onClose,
  heading,
  activator,
  isOpen,
  isCloseOnEsc = true,
  customClass,
  primaryAction,
  secondaryAction,
}: FilterI) => {
  const [selectedTab, setSelectedTab] = useState(filters[0]?.key);

  const isMobile = useMobileDevice();

  const newFilterObj = useMemo(() => {
    return filters.map((item) => {
      if (item.badgeCount) {
        return {
          ...item,
          badge: <Badge size="small">{item.badgeCount}</Badge>,
        };
      }
      return item;
    });
  }, [filters]);

  const handelFilterBody = (ele: HTMLDivElement) => {
    const filterEle = document.getElementsByClassName(
      "inte-filter--popover"
    )[0] as HTMLElement;
    if (filterEle && ele && !isMobile) {
      if (filterEle.classList.contains("inte-popover--animation--reverse"))
        return;
      filterEle.classList.add("inte-filter--popover--animating");
      filterEle.style.setProperty("max-height", `${filterEle.scrollHeight}px`);
      setTimeout(() => {
        filterEle.classList.remove("inte-filter--popover--animating");
        filterEle.style.setProperty("max-height", ``);
      }, 200);
    }
  };

  const handelFilterChange = useCallback((newFilterKey: string) => {
    setSelectedTab(newFilterKey);
  }, []);

  const filterBody = (
    direction: "vertical" | "horizontal" = "vertical",
    isSheet = false
  ) => (
    <div className="inte-filter__body" ref={handelFilterBody}>
      <Tabs
        spacing="none"
        tabs={newFilterObj}
        value={selectedTab}
        onChange={handelFilterChange}
        direction={direction}
        customClass={isSheet ? "inte-filter-sheet" : undefined}
      >
        {filters.map((i, ind) => {
          if (i.key == selectedTab)
            return (
              <React.Fragment key={ind}>
                {i.children}
                {i.isApplied && (
                  <div className="inte-filter__clearBtn">
                    <Button onClick={i.onRemove} type="textButton">
                      Clear
                    </Button>
                  </div>
                )}
              </React.Fragment>
            );
        })}
      </Tabs>
    </div>
  );

  return filters.length > 2 ? (
    <Sheet
      closeOnEsc={isCloseOnEsc}
      customClass={getClassNames({
        "inte-filter--sheet": true,
        [customClass ?? ""]: customClass,
      })}
      activator={activator}
      onClose={onClose}
      heading={heading ?? ""}
      isOpen={isOpen}
      secondaryAction={secondaryAction}
      primaryAction={primaryAction}
      overlayClose={true}
    >
      {filterBody("vertical", true)}
    </Sheet>
  ) : (
    <Popover
      isCloseOnEsc={isCloseOnEsc}
      customClass={getClassNames({
        "inte-filter--popover": true,
        [customClass ?? ""]: customClass,
      })}
      activator={activator}
      isOpen={isOpen}
      onClose={onClose}
      heading={heading}
    >
      {!isMobile && (
        <div className={"inte-filter__header"}>
          <span className="inte-filter__title">{heading}</span>
          <span className="inte-filter__closeBtn">
            <Button
              size="thin"
              icon={<X size={24} color="var(--inte-G800)" />}
              type="textButton"
              onClick={onClose}
            />
          </span>
        </div>
      )}
      {filterBody("horizontal")}

      {(primaryAction || secondaryAction) && (
        <div className="inte-filter__footer">
          <FlexLayout spacing="loose" valign="center">
            {secondaryAction && (
              <FlexChild mobileWidth="50" tabWidth="50" desktopWidth="50">
                <Button {...secondaryAction} />
              </FlexChild>
            )}
            {primaryAction && (
              <FlexChild mobileWidth="50" tabWidth="50" desktopWidth="50">
                <Button {...primaryAction} />
              </FlexChild>
            )}
          </FlexLayout>
        </div>
      )}
    </Popover>
  );
};

export interface FilterI {
  filters: FI[];
  heading?: string;
  activator: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  isCloseOnEsc?: boolean;
  customClass?: string;
  primaryAction?: ButtonI;
  secondaryAction?: ButtonI;
}

export interface FI {
  key: string;
  label: string;
  children: React.ReactNode;
  badgeCount?: number;
  isApplied?: boolean;
  onRemove?: () => void;
}

export default Filter;