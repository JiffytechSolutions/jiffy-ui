import React from "react";
import { Badge } from "../..";
import { Minimize } from "../../../storybook/Foundation/Icons/Icons";

export const tabs2: any = [
  {
    label: "All",
    badge: (
      <Badge variant="accent" type="primary" size="small">
        55
      </Badge>
    ),
    icon: <Minimize size="16" color={"currentColor"} />,
    key: "All",
  },
  {
    label: "Product",
    badge: (
      <Badge variant="accent" type="primary" size="small">
        55
      </Badge>
    ),
    icon: <Minimize size="16" color={"currentColor"} />,
    key: "Product",
    isDisabled: true,
  },
  {
    label: "Pending",
    badge: (
      <Badge variant="accent" type="error" size="small">
        55
      </Badge>
    ),
    icon: <Minimize size="16" color={"currentColor"} />,
    key: "Pending",
  },
  {
    label: "Warnings",
    badge: (
      <Badge variant="accent" type="warning" size="small">
        55
      </Badge>
    ),
    icon: <Minimize size="16" color={"currentColor"} />,
    key: "warning",
  },
  {
    label: "Finished",
    badge: (
      <Badge variant="accent" type="secondary" size="small">
        55
      </Badge>
    ),
    icon: <Minimize size="16" color={"currentColor"} />,
    key: "finished",
  },
  {
    label: "Not Uploaded",
    badge: (
      <Badge variant="accent" size="small">
        55
      </Badge>
    ),
    icon: <Minimize size="16" color={"currentColor"} />,
    key: "not",
  },
];
export default tabs2;
