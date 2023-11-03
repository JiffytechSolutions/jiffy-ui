import React from "react";
import { SelectI } from "./types/types";
import VirtualSelect from "../VirtualSelect/VirtualSelect";
import SimpleSelect from "./components/SimpleSelect";

const Select = ({ isVirtualSelect = false, ...props }: SelectI) => {
  return isVirtualSelect ? (
    <VirtualSelect {...props} />
  ) : (
    <SimpleSelect {...props} />
  );
};

export default Select;
