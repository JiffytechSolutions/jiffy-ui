import React, { useRef, useState } from "react";
import { Button } from "..";
import ActionList, { ActionListItemsI } from "../ActionList/ActionList";
import { ButtonI } from "../Button/Button";
import Badge, { BadgeI } from "../Badge/Badge";
import { ArrowLeft } from "../../storybook/Foundation/Icons/Icons";
import getClassNames from "../../utilities/getClassnames";
import PortalComponent from "../../utilities/PoratalComponent";
import useMobileDevice from "../../utilities/useMobileDevice";
import "./PageHeader.css";
function PageHeader({
  title,
  description,
  isSticky = false,
  hasReverseNavigation = false,
  isEmbededView = false,
  primaryAction,
  secondaryAction,
  tertiaryAction,
  customClass = "",
  actionHeading,
  connectRight,
  ...props
}: PageHeaderI): JSX.Element {
  const [active, setActive] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<any>(null);
  const isMobile = useMobileDevice();
  // handle actions
  const getTertiaryAction = () => {
    return (
      tertiaryAction && (
        <Button
          type="textButton"
          size="large"
          {...(tertiaryAction as ButtonI)}
          content={tertiaryAction?.content}
          icon={tertiaryAction?.prefixIcon}
          {...(isMobile ? { isFullWidth: true, halign: "center" } : {})}
        ></Button>
      )
    );
  };
  const getPrimaryAction = () => {
    return (
      primaryAction && (
        <Button
          type="primary"
          size="large"
          {...primaryAction}
          content={primaryAction?.content}
          icon={primaryAction?.icon}
          {...(isMobile ? { isFullWidth: true, halign: "center" } : {})}
        ></Button>
      )
    );
  };
  const handleActions = () => {
    return (
      <div
        className={getClassNames({
          "inte-pageHeader__action": true,
          "inte-pageHeader__action--atBottom": isMobile,
        })}
      >
        {secondaryAction &&
          !tertiaryAction &&
          secondaryAction?.length < 2 &&
          secondaryAction.map((item: any, index) => {
            return (
              <Button
                halign="center"
                key={index}
                type="outlined"
                size="large"
                {...item}
                content={item.content}
                icon={item.prefixIcon}
              ></Button>
            );
          })}
        {!secondaryAction && getTertiaryAction()}
        {secondaryAction && (secondaryAction?.length > 1 || tertiaryAction) && (
          <ActionList
            heading={actionHeading}
            isOpen={active}
            onClose={() => setActive(false)}
            activator={
              <Button
                size="large"
                type="outlined"
                onClick={() => setActive(!active)}
                content="More Actions"
                isFullWidth={true}
                halign="center"
              ></Button>
            }
            options={[
              ...(secondaryAction
                ? [
                    {
                      items: secondaryAction,
                    },
                  ]
                : []),
              ...(tertiaryAction
                ? [
                    {
                      items: Array.from([tertiaryAction]),
                    },
                  ]
                : []),
            ]}
          ></ActionList>
        )}
        {getPrimaryAction()}
        {connectRight ?? null}
      </div>
    );
  };
  // Display according to width
  const displayAccordingToWidth = () => {
    if (!primaryAction && !secondaryAction && !tertiaryAction && !connectRight)
      return;
    if (!isMobile) {
      return (
        <div className="inte-pageHeader__action">
          {getTertiaryAction()}
          {secondaryAction && secondaryAction.length < 2
            ? secondaryAction.map((item: any, index) => {
                return (
                  <Button
                    key={index}
                    type="outlined"
                    size="large"
                    {...item}
                    content={item.content}
                    icon={item.prefixIcon}
                  ></Button>
                );
              })
            : secondaryAction && (
                <ActionList
                  isOpen={active}
                  onClose={() => setActive(false)}
                  activator={
                    <Button
                      type="outlined"
                      size="large"
                      onClick={() => setActive(!active)}
                      content="More Action"
                      disclosure
                    ></Button>
                  }
                  options={[
                    {
                      items: secondaryAction,
                    },
                  ]}
                ></ActionList>
              )}
          {getPrimaryAction()}
          {connectRight ?? null}
        </div>
      );
    } else {
      return <PortalComponent>{handleActions()}</PortalComponent>;
    }
  };

  return (
    <div
      ref={parentRef}
      className={getClassNames({
        "inte-pageHeader": true,
        "inte-pageHeader--fixed": isSticky,
        "inte-pageHeader--onMobile": isMobile,
        [customClass]: customClass,
      })}
    >
      <div
        className={getClassNames({
          "inte-pageHeader__titleAndReverseNavigation": hasReverseNavigation,
          "inte-pageHeader__titleDescWrapper": !hasReverseNavigation,
        })}
      >
        {hasReverseNavigation && (
          <nav className="inte-pageHeader__reverseNavigation">
            {isMobile ? (
              <ArrowLeft
                size={24}
                color="var(--inte-G800)"
                onClick={() => {
                  if (props.onClick) props.onClick();
                }}
              />
            ) : (
              <Button
                accessibilityLabel="back"
                icon={<ArrowLeft size="20" color="var(--inte-G800)" />}
                onClick={() => {
                  if (props.onClick) props.onClick();
                }}
                type="outlined"
                iconAlign="left"
                size="large"
              ></Button>
            )}
          </nav>
        )}
        <div
          ref={headerRef}
          className={getClassNames({
            "inte-pageHeader__titleDescContainer": true,
            "inte-pageHeader__titleDescContainer--hasBadge": props.titleBadge,
          })}
        >
          {title && (
            <div
              className={getClassNames({
                "inte-pageHeader__title": true,
                "inte-pageHeader--hasTitleBadge": props.titleBadge,
                "inte-pageHeader__title--embededView": isEmbededView,
              })}
            >
              <h1>{title}</h1>
              {props.titleBadge && <Badge {...props.titleBadge} />}
            </div>
          )}
          {description &&
            (typeof description === "string" ? (
              <h2 className="inte-pageHeader__description">{description}</h2>
            ) : (
              description
            ))}
        </div>
      </div>
      {displayAccordingToWidth()}
    </div>
  );
}
export interface PageHeaderI {
  title: React.ReactNode;
  titleBadge?: BadgeI;
  description?: React.ReactNode;
  primaryAction?: ButtonI;
  secondaryAction?: ActionListItemsI[];
  tertiaryAction?: ActionListItemsI;
  connectRight?: React.ReactNode;
  actionHeading?: string;
  onClick?: () => void;
  hasReverseNavigation?: boolean;
  isSticky?: boolean;
  isEmbededView?: boolean;
  customClass?: string;
}

export default PageHeader;
