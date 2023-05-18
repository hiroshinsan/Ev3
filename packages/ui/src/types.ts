import type { 
  LegacyRef, 
  ReactNode, 
  ReactElement, 
  ChangeEvent, 
  KeyboardEvent 
} from 'react';

// General types
export type ExtendsType<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;

export type AnyReactChildren = ReactNode|ReactElement|JSX.Element
  |ReactNode[]|ReactElement[]|JSX.Element[]|string;

// HTML types
export type HTMLInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>, 
  HTMLInputElement
>;

export type HTMLTextareaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>, 
  HTMLTextAreaElement
>;

export type HTMLButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>, 
  HTMLButtonElement
>;

// Alert component
export type AlertProps = {
  color?: string,
  error?: boolean, 
  warning?: boolean, 
  info?: boolean, 
  success?: boolean, 
  muted?: boolean, 
  solid?: boolean, 
  outline?: boolean,
  curved?: boolean,
  rounded?: boolean, 
  pill?: boolean,
  style?: React.CSSProperties,
  className?: string,
  children: React.ReactNode
};

// Autocomplete component
export type AutocompleteDropdownProps = { 
  options: string[]
  show: boolean,
  styles?: Record<string, React.CSSProperties|false|undefined>|false,
  classNames?: Record<string, string|false|undefined>|false,
  select: (value: string) => void,
  match: (option: string) => void
};
export type AutocompleteConfig = {
  defaultValue?: string|number|readonly string[],
  onQuery?: (query: string) => void,
  onDropdown?: (show: boolean) => void,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  onUpdate?: (value: string) => void
};
export type AutocompleteProps = InputProps & {
  options: string[],
  error?: boolean,
  errorColor?: string,
  styles?: Record<string, React.CSSProperties|false|undefined>|false,
  classNames?: Record<string, string|false|undefined>|false,
  onQuery?: (query: string) => void,
  onDropdown?: (show: boolean) => void
};

// Badge component
export type BadgeProps = {
  color?: string,
  error?: boolean,  
  warning?: boolean,
  info?: boolean, 
  success?: boolean, 
  muted?: boolean, 
  solid?: boolean, 
  outline?: boolean,
  curved?: boolean,
  rounded?: boolean,
  pill?: boolean,
  style?: React.CSSProperties,
  className?: string,
  children: React.ReactNode
};

// Button component
export type ButtonProps = HTMLButtonProps & {
  block?: boolean,
  color?: string,
  xs?: boolean, 
  sm?: boolean, 
  md?: boolean, 
  lg?: boolean, 
  xl?: boolean, 
  curved?: boolean,
  rounded?: boolean,
  pill?: boolean,
  danger?: boolean, 
  warning?: boolean, 
  success?: boolean,
  info?: boolean,
  muted?: boolean, 
  outline?: boolean, 
  transparent?: boolean, 
  solid?: boolean, 
  style?: React.CSSProperties|false
};

// Checkbox component
export type CheckboxProps = HTMLInputProps & {
  label?: string,
  error?: any,
  theme?: string|number,
  errorColor?: string,
  onUpdate?: (value: string|number|undefined, checked: boolean) => void
};

// Control component
export type ControlProps = {
  label?: string,
  error?: string,
  errorColor?: string,
  style?: React.CSSProperties,
  className?: string,
  styles?: Record<string, React.CSSProperties|false|undefined>|false,
  classNames?: Record<string, string|false|undefined>|false,
  children: React.ReactNode
};

// Date component
export type DateInput = string|number|Date;
export type DateConfig = {
  defaultValue?: DateInput, 
  onUpdate?: (value: string) => void
};
export type DateProps = ExtendsType<InputProps, {
  defaultValue?: DateInput
}>;

// Fieldset component
export type FieldsetConfig<ValueType = any> = {
  value?: ValueType[],
  emptyValue?: ValueType,
  onChange?: (values: ValueType[]) => void,
  onUpdate?: (values: ValueType[]) => void
}
//use this type in your custom fieldset wrapper
//ex. const Custom: React.FC<FieldsetProps<YOUR ROW TYPE>> = (props) => {}
export type FieldsetProps<ValueType = any> = ExtendsType<ButtonProps, {
  label?: string,
  type?: string,
  value?: ValueType[],
  min?: number|string,
  max?: number|string,
  step?: number|string,
  emptyValue?: ValueType,
  error?: boolean,
  errorColor?: string,
  styles?: Record<string, React.CSSProperties|false|undefined>|false,
  classNames?: Record<string, string|false|undefined>|false,
  onChange?: (values: ValueType[]) => void,
  onUpdate?: (values: ValueType[]) => void
}>;
//use this type in your custom fields component
//ex. const Fields: React.FC<FieldsProps<YOUR ROW TYPE>> = (props) => {}
export type FieldsProps<ValueType = any> = {
  type?: string,
  min?: number|string,
  max?: number|string,
  step?: number|string,
  values?: (ValueType|undefined)[],
  index: number,
  error?: boolean,
  errorColor: string,
  styles?: Record<string, React.CSSProperties|false|undefined>|false,
  classNames?: Record<string, string|false|undefined>|false,
  set: (values: (ValueType|undefined)[]) => void
};

// Input component
export type InputConfig = {
  onChange?: Function, 
  onUpdate?: Function
};
export type InputProps = ExtendsType<HTMLInputProps, {
  style?: React.CSSProperties|false,
  label?: string,
  error?: any,
  errorColor?: string,
  onUpdate?: (value: string) => void,
  passRef?: LegacyRef<HTMLInputElement>
}>;

// Input mask component
export type InputMaskProps = InputProps & { 
  mask?: string,
  regex?: string,
  alias?: string,
  repeat?: number,
  greedy?: boolean,
  numericInput?: boolean,
  rightAlign?: boolean,
  definitions?: Record<string, any>
  onReady?: Function
};

// Loading component
export type LoaderProps = {
  color?: string,
  show?: boolean,
  label?: string,
  style?: React.CSSProperties,
  className?: string,
};

// Metadata component
export type MetadataType = { name: string, value: string|number|Date };
export type MetadataConfig = {
  type?: string,
  values?: (MetadataType|undefined)[],
  index: number,
  set: (values: (MetadataType|undefined)[]) => void
};

// Modal component
export type ModalProps = {
  opened: boolean,
  onClose: Function,
  title?: string,
  style?: React.CSSProperties,
  className?: string,
  styles?: Record<string, React.CSSProperties|false|undefined>|false,
  classNames?: Record<string, string|false|undefined>|false,
  children?: React.ReactNode
};

// Number component
export type NumberOptions = {
  min?: number,
  max?: number,
  separator?: string,
  decimal?: string,
  decimals?: number,
  absolute?: boolean
};
export type NumberProps = InputProps & {
  separator?: string,
  decimal?: string,
  absolute?: boolean,
  width?: string,
  controls?: Function,
  onUpdate?: Function
};

// Password component
export type PasswordProps = InputProps & {
  error?: boolean,
  errorColor?: string,
  styles?: Record<string, React.CSSProperties|false|undefined>|false,
  classNames?: Record<string, string|false|undefined>|false
};

// Radio component
export type RadioProps = HTMLInputProps & {
  label?: string,
  error?: any,
  theme?: string|number,
  errorColor?: string,
  onUpdate?: (value: string|number|undefined, checked: boolean) => void
};

// Select component
export type SelectOption<T = any> = {
  label: ReactNode,
  value?: T,
  keyword?: string|Function
};
export type SelectConfig = {
  value?: SelectOption,
  onDropdown?: (show: boolean) => void,
  onSelected?: (value: SelectOption) => void,
  onUpdate?: (value: string|number) => void
};
export type SelectDropdownProps = { 
  options: SelectOption[]
  show: boolean,
  error?: boolean,
  searchable?: boolean,
  styles?: Record<string, React.CSSProperties|false|undefined>|false,
  classNames?: Record<string, string|false|undefined>|false,
  select: (value: SelectOption) => void,
  search: (e: KeyboardEvent) => void,
  match: (option: SelectOption) => void
};
export type SelectProps = {
  value?: SelectOption,
  options: SelectOption[],
  searchable?: boolean,
  placeholder?: string,
  error?: boolean,
  errorColor?: string,
  style?: React.CSSProperties,
  className?: string,
  styles?: Record<string, React.CSSProperties|false|undefined>|false,
  classNames?: Record<string, string|false|undefined>|false,
  onDropdown?: (show: boolean) => void,
  onSelected?: (value: SelectOption) => void,
  onUpdate?: (value: string|number) => void
};

// Select country component
export type CountryData = {
  countryCode: string,
  countryName: string,
  currencyType: string,
  currencyCode: string,
  currencyName: string,
  currencyPlural: string,
  currencySymbol: string,
  language: string
};
export type CountryOption = SelectOption<CountryData>;
export type CountryConfig = {
  value: string | CountryOption | undefined,
  map: (country: CountryData) => CountryOption
};
export type SelectCountryProps = ExtendsType<SelectProps, {
  options?: undefined,
  value?: CountryOption|string
}>;

// Select currency component
export type CurrencyOption = SelectOption<CountryData>;
export type CurrencyConfig = CountryConfig;
export type SelectCurrencyProps = ExtendsType<SelectProps, {
  options?: undefined,
  value?: CurrencyOption|string
}>;

// Switch component
export type SwitchProps = HTMLInputProps & {
  label?: string,
  error?: any,
  theme?: string|number,
  errorColor?: string,
  onUpdate?: (value: string|number|undefined, checked: boolean) => void
};

// Table component
export type TableRuleProps = { width: string };

export type TableColProps = {
  style?: React.CSSProperties,
  className?: string,
  children?: AnyReactChildren,
  stickyBottom?: boolean,
  stickyLeft?: boolean,
  stickyRight?: boolean,
  stickyTop?: boolean,
  noWrap?: boolean,
  rowSpan?: number,
  colSpan?: number,
  wrap1?: boolean,
  wrap2?: boolean,
  wrap3?: boolean,
  wrap4?: boolean,
  wrap5?: boolean
};

export type TableFootProps = {
  style?: React.CSSProperties,
  className?: string,
  children?: AnyReactChildren,
  stickyBottom?: boolean,
  stickyLeft?: boolean,
  stickyRight?: boolean,
  noWrap?: boolean,
  rowSpan?: number,
  colSpan?: number,
};

export type TableHeadProps = {
  style?: React.CSSProperties,
  className?: string,
  children?: AnyReactChildren,
  stickyLeft?: boolean,
  stickyRight?: boolean,
  stickyTop?: boolean,
  noWrap?: boolean,
  rowSpan?: number,
  colSpan?: number,
};

export type TableRowProps = {
  style?: React.CSSProperties,
  className?: string,
  children?: AnyReactChildren,
  noWrap?: boolean,
  rowSpan?: number,
  colSpan?: number,
};

export type TableProps = {
  children: ReactNode|ReactNode[]
};

// Textarea component
export type TextareaConfig = {
  onChange?: Function, 
  onUpdate?: Function
};
export type TextareaProps = ExtendsType<HTMLTextareaProps, {
  style?: React.CSSProperties|false,
  label?: string,
  error?: any,
  errorColor?: string,
  onUpdate?: (value: string) => void,
  passRef?: LegacyRef<HTMLTextAreaElement>
}>;

// Textlist component
export type TextlistType = string;
export type TextlistConfig = {
  type?: string,
  values?: (TextlistType|undefined)[],
  index: number,
  set: (values: (TextlistType|undefined)[]) => void
};