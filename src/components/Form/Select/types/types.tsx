export type SelectI = {
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
  isVirtualSelect?: boolean;
  accessibilityLabel?: string;
  controlStates?: "success" | "warning" | "error";
  heading?: string;
  customClass?: string;
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
