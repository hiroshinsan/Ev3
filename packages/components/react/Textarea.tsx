//types
import type { ChangeEvent } from 'react';
import type { HTMLTextareaProps } from './types';
export type TextareaProps = HTMLTextareaProps & {
  label?: string,
  error?: string,
  errorColor?: string,
  styles?: Record<string, React.CSSProperties|false|undefined>|false,
  classNames?: Record<string, string|false|undefined>|false,
  onUpdate?: (value: string) => void
};
//react
import React from 'react';

/**
 * Generic Textarea  Component (Main)
 */
const Textarea: React.FC<TextareaProps> = (props) => {
  //separate component related props from field attributes
  const {   
    label, 
    error, 
    children,
    errorColor = '#DC3545',
    classNames = {},
    styles = {},
    onChange,
    onUpdate,
    ...attributes 
  } = props;

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
    //if control, add default styles
    if (styles.control !== false) {
      styles.control = Object.assign({}, {
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: 'black',
        paddingBottom: '8px',
        paddingLeft: '8px',
        paddingRight: '8px',
        paddingTop: '8px',
        width: '100%'
      }, styles.control || {});
      if (error?.length) {
        styles.control.borderColor = errorColor;
      }
    }
  }

  const map = {
    styles: {
      container: styles && styles.container ? styles.container : undefined,
      label: styles && styles.label ? styles.label : undefined,
      field: styles && styles.field ? styles.field : undefined,
      control: styles && styles.control ? styles.control : undefined,
      error: styles && styles.error ? styles.error : undefined
    },
    classNames: {
      container: classNames && classNames.container ? classNames.container : undefined,
      label: classNames && classNames.label ? classNames.label : undefined,
      field: classNames && classNames.field ? classNames.field : undefined,
      control: classNames && classNames.control ? classNames.control : undefined,
      error: classNames && classNames.error ? classNames.error : undefined
    }
  };

  const change = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange && onChange(e);
    onUpdate && onUpdate(e.target.value);
  }

  return (
    <div className={map.classNames.container} style={map.styles.container}>
      {label?.length && (
        <label className={map.classNames.label} style={map.styles.label}>
          {label}
        </label>
      )}
      <div className={map.classNames.field} style={map.styles.field}>
        <textarea 
          onChange={change}
          className={map.classNames.control} 
          style={map.styles.control} 
          {...attributes} 
        />
        {children}
      </div>
      {error?.length && (
        <div className={map.classNames.error} style={map.styles.error}>
          {error}
        </div>
      )}
    </div>
  );
}

export default Textarea;