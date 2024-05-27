export type SelectI = {
  id?: string;
  options: SimpleObjI[] | GroupedObjI[];
  value: string | string[] | number | number[];
  onChange?: (e: any , selectedOptionsData:any) => void;
  onInputChange?: (e: any) => void;
  isRequired?: boolean;
  label?: React.ReactNode;
  placeholder?: string;
  helpText?: string;
  helpIcon?: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  isMultiSelect?: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
  isCreatable?: boolean;
  isVirtualSelect?: boolean;
  accessibilityLabel?: string;
  controlStates?: "success" | "warning" | "error" | "default";
  heading?: string;
  footer?: React.ReactNode;
  customClass?: string;
  width?: number;
};
export interface SimpleObjI {
  label: string;
  value: string | number;
  description?: string;
  isDisabled?: boolean;
}
export interface GroupedObjI {
  label: string;

  group: SimpleObjI[];
}
