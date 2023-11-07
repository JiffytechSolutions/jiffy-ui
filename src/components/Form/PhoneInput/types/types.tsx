export interface SelectedCountryI {
  name: string;
  iso2: string;
  dialCOde: string;
  format: string | null;
  priority: number;
  areaCodes: [];
}
export interface PhoneInputI {
  onChange?: (phoneNum: string, selectedCountry: SelectedCountryI) => void;
  isRequired?: boolean;
  isDisabled?: boolean;
  isSearchable?: boolean;
  label?: string;
  id?: string;
  placeholder?: string;
  helpText?: string;
  controlStates?: "success" | "warning" | "error";
  helpIcon?: React.ReactNode;
  customClass?: string;
}
