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
    errorColor,
    styles = {},
    classNames = {},
    ...attributes 
  } = props;
  //hooks
  const { showing, toggle } = usePassword();
  //variables
  const map = {
    styles: makeGroupStyles(styles, {
      field: { display: 'flex' },
      control: undefined,
      toggle: {
        padding: '8px',
        backgroundColor: '#EEEEEE',
        borderColor: error ? errorColor : 'black',
        borderStyle: 'solid',
        borderBottomWidth: '1px',
        borderRightWidth: '1px',
        borderTopWidth: '1px',
        color: error ? errorColor : '#666666'
      },
      icon: {
        marginTop: '1px'
      }
    }),
    classNames: makeGroupClasses(classNames, {
      field: undefined,
      control: undefined,
      toggle: undefined,
      icon: [
        'fas',
        'fa-fw',
        showing ? 'fa-eye-slash': 'fa-eye'
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