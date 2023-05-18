//types
import type { TextareaProps } from '../types';
//react
import React from 'react';
//hooks
import useTextarea from '../hooks/useTextarea';
//helpers
import { makeStyles } from '../utils';

/**
 * Generic Textarea Field Component (Main)
 */
const Textarea: React.FC<TextareaProps> = (props) => {
  //separate component related props from field attributes
  const {   
    label, 
    error, 
    errorColor = '#DC3545',
    style,
    onChange,
    onUpdate,
    passRef,
    ...attributes 
  } = props;
  //hooks
  const { handlers } = useTextarea({ onChange, onUpdate });
  //variables
  const map = makeStyles(style, {
    borderColor: error ? errorColor: 'black',
    borderStyle: 'solid',
    borderWidth: '1px',
    color: 'black',
    paddingBottom: '8px',
    paddingLeft: '8px',
    paddingRight: '8px',
    paddingTop: '8px',
    width: '100%'
  }) || {};
  //render
  return (
    <textarea 
      {...attributes} 
      style={style !== false ? map: undefined} 
      ref={passRef} 
      onChange={handlers.change} 
    />
  );
}

export default Textarea;