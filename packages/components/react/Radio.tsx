//types
import type { ChangeEvent } from 'react';
import type { HTMLInputProps } from './types';
export type RadioProps = HTMLInputProps & {
  label?: string,
  error?: string,
  errorColor?: string,
  type?: string|number
  styles?: Record<string, React.CSSProperties|false|undefined>|false,
  classNames?: Record<string, string|false|undefined>|false,
  onUpdate?: (value: boolean) => void
};
//react
import React from 'react';
//helpers
import { makeGroupClasses } from '../helpers/makeClasses';
import { makeGroupStyles } from '../helpers/makeStyles';

/**
 * Radio  (Main)
 */
const Radio: React.FC<RadioProps> = (props) => {
  //separate component related props from field attributes
  const {   
    label, 
    error, 
    value,
    errorColor = '#DC3545',
    type = '1',
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

  const map = {
    styles: makeGroupStyles(styles, {
      container: error?.length ? {
        color: errorColor
      } : undefined,
      label: { display: 'block' },
      field: undefined,
      control: undefined,
      error: undefined
    }),
    classNames: makeGroupClasses(classNames, {
      container: undefined,
      label: undefined,
      field: `radio radio-${type}`,
      control: undefined,
      error: undefined
    })
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
          type="radio" 
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

export default Radio;