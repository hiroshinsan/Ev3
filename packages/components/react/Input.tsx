//types
import type { ChangeEvent } from 'react';
import type { HTMLInputProps } from './types';
export type InputProps = HTMLInputProps & {
  label?: string,
  error?: string,
  errorColor?: string,
  styles?: Record<string, React.CSSProperties|false|undefined>|false,
  classNames?: Record<string, string|false|undefined>|false,
  onUpdate?: (value: string) => void
};
//react
import React from 'react';
//helpers
import { makeGroupClasses } from '../helpers/makeClasses';
import { makeGroupStyles } from '../helpers/makeStyles';

/**
 * Generic Input Component (Main)
 */
const Input: React.FC<InputProps> = (props) => {
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

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
    onUpdate && onUpdate(e.target.value);
  }

  const map = {
    styles: makeGroupStyles(styles, {
      container: error?.length ? {
        color: errorColor
      } : undefined,
      label: { display: 'block' },
      field: undefined,
      control: {
        borderColor: error?.length ? errorColor: 'black',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: 'black',
        paddingBottom: '8px',
        paddingLeft: '8px',
        paddingRight: '8px',
        paddingTop: '8px',
        width: '100%'
      },
      error: undefined
    }),
    classNames: makeGroupClasses(classNames, {
      container: undefined,
      label: undefined,
      field: undefined,
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
      <div className={map.classNames.field} style={map.styles.field}>
        <input 
          className={map.classNames.control} 
          style={map.styles.control} 
          onChange={change}
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

export default Input;