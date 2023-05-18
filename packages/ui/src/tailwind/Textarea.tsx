//types
import type { TextareaProps } from '../types';
//react
import React from 'react';
//hooks
import useTextarea from '../hooks/useTextarea';
//helpers
import { makeClasses } from '../utils';

/**
 * Generic Textarea Field Component (Main)
 */
const Textarea: React.FC<TextareaProps> = (props) => {
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
  const { handlers } = useTextarea({ onChange, onUpdate });
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
    <textarea 
      {...attributes} 
      className={map} 
      style={style || undefined} 
      ref={passRef} 
      onChange={handlers.change} 
    />
  );
}

export default Textarea;