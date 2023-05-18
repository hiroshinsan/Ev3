//types
import type { InputProps } from '../types';
//react
import React from 'react';
//hooks
import useInput from '../hooks/useInput';
//helpers
import { makeClasses } from '../utils';

/**
 * Generic Input Field Component (Main)
 */
const Input: React.FC<InputProps> = (props) => {
  //separate component related props from field attributes
  const {   
    label, 
    error, 
    errorColor = '#DC3545',
    className,
    style,
    onChange,
    onUpdate,
    passRef,
    ...attributes 
  } = props;
  //hooks
  const { handlers } = useInput({ onChange, onUpdate });
  //variables
  const map = makeClasses(className, [
    'border',
    error ? 'border-[#DC3545]': 'border-black',
    'text-black',
    'p-2',
    'w-full'
  ].filter(Boolean).join(' '));
  //render
  return (
    <input 
      {...attributes} 
      className={map} 
      style={style || undefined} 
      ref={passRef} 
      onChange={handlers.change} 
    />
  );
}

export default Input;