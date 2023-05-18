//types
import type { PasswordProps } from '../types';
//react
import React from 'react';
//components
import Input from './Input';
//hooks
import usePassword from '../hooks/usePassword';
//helpers
import { makeGroupStyles, makeGroupClasses } from '../utils';

/**
 * Password Field Component (Main)
 */
const Password: React.FC<PasswordProps> = (props) => {
  //remove type
  const { 
    error,
    styles = {},
    classNames = {},
    ...attributes 
  } = props;
  //hooks
  const { showing, toggle } = usePassword();
  //variables
  const map = {
    styles: makeGroupStyles(styles, {
      field: undefined,
      control: undefined,
      toggle: undefined,
      icon: undefined
    }),
    classNames: makeGroupClasses(classNames, {
      field: 'flex',
      control: undefined,
      toggle: [
        'p-2',
        'bg-[#EEEEEE]',
        'border-y',
        'border-r',
        error ? 'border-[#DC3545]' :'border-black',
        error ? 'text-[#DC3545]' :'text-[#666666]'
      ].filter(Boolean).join(' ').trim(),
      icon: [
        'fas',
        'fa-fw',
        showing ? 'fa-eye-slash': 'fa-eye',
        'mt-0.5'
      ].filter(Boolean).join(' ').trim()
    })
  };

  return (
    <div style={map.styles.field} className={map.classNames.field}>
      <Input 
        {...attributes} 
        error={error} 
        type={showing ? 'text': 'password'} 
        style={map.styles.control} 
        className={map.classNames.control}
      />
      <span 
        style={map.styles.toggle} 
        className={map.classNames.toggle} 
        onClick={toggle}
      >
        <i style={map.styles.icon} className={map.classNames.icon}></i>
      </span>
    </div>
  );
};

export default Password;