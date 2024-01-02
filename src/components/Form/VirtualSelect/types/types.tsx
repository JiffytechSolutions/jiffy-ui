import { GroupedObjI, SimpleObjI } from "../../Select/types/types";

export type VirtualSelectI = {
  id?: string;
  options: SimpleObjI[] | GroupedObjI[];
  value: string | string[] | number | number[];
  onChange?: (e: any) => void;
  onInputChange?: (e: any) => void;
  isRequired?: boolean;
  label?: string;
  placeholder?: string;
  helpText?: string;
  helpIcon?: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  isMultiSelect?: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
  isCreatable?: boolean;
  accessibilityLabel?: string;
  controlStates?: "success" | "warning" | "error" | "default";
  customClass?: string;
};
