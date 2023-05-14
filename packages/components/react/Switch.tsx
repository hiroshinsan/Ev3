//types
import type { ChangeEvent } from 'react';
import type { HTMLInputProps } from './types';
export type SwitchProps = HTMLInputProps & {
  label?: string,
  error?: string,
  errorColor?: string,
  type?: string|number,
  styles?: Record<string, React.CSSProperties|false|undefined>|false,
  classNames?: Record<string, string|false|undefined>|false,
  onUpdate?: (value: boolean) => void
};
//react
import React from 'react';

/**
 * Switch  (Main)
 */
const Switch: React.FC<SwitchProps> = (props) => {
  //separate component related props from field attributes
  const {   
    label, 
    error, 
    value,
    errorColor = '#DC3545',
    type = '2',
    styles = {},
    classNames = {},
    onChange,
    onUpdate,
    ...attributes 
  } = props;
  
  const change = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
    onUpdate && onUpdate(e.target.checked);
  }

  if (styles !== false) {
    //if container styles and errors, add error styles
    if (styles.container !== false && error?.length) {
      styles.container = Object.assign({}, {
        color: errorColor
      }, styles.container || {});
    }
    //if label, make it into a block
    if (styles.label !== false) {
      styles.label = Object.assign({}, {
        display: 'block'
      }, styles.container || {});
    }
  }

  if (classNames !== false && classNames.field !== false) {
    classNames.field = `switch switch-${type} ${classNames.field || ''}`.trim();
  }

  const map = {
    styles: {
      container: styles && styles.container 
        ? styles.container 
        : undefined,
      label: styles && styles.label 
        ? styles.label 
        : undefined,
      field: styles && styles.field 
        ? styles.field 
        : undefined,
      control: styles && styles.control 
        ? styles.control 
        : undefined,
      value: styles && styles.value 
        ? styles.value 
        : undefined,
      error: styles && styles.error 
        ? styles.error 
        : undefined
    },
    classNames: {
      container: classNames && classNames.container 
        ? classNames.container 
        : undefined,
      label: classNames && classNames.label 
        ? classNames.label 
        : undefined,
      field: classNames && classNames.field 
        ? classNames.field 
        : undefined,
      control: classNames && classNames.control 
        ? classNames.control 
        : undefined,
      value: classNames && classNames.value 
        ? classNames.value 
        : undefined,
      error: classNames && classNames.error 
        ? classNames.error 
        : undefined
    }
  };
  return (
    <div className={map.classNames.container} style={map.styles.container}>
      {label?.length && (
        <label className={map.classNames.label} style={map.styles.label}>
          {label}
        </label>
      )}
      <label className={map.classNames.field} style={map.styles.field}>
        <input 
          className={map.classNames.control} 
          style={map.styles.control} 
          onChange={change}
          type="checkbox" 
          {...attributes}  
        />
        <span className={map.classNames.value} style={map.styles.value}>
          {value}
        </span>
      </label>
      {error?.length && (
        <div className={map.classNames.error} style={map.styles.error}>
          {error}
        </div>
      )}
    </div>
  );
};

export default Switch;