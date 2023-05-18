//types
import type { RadioProps } from '../types';
//react
import React from 'react';
//hooks
import useToggler from '../hooks/useToggler';

/**
 * Styled Radio Field Component (Main)
 */
const Radio: React.FC<RadioProps> = (props) => {
  //separate component related props from field attributes
  const {   
    label, 
    error, 
    errorColor = '#DC3545',
    theme = '1',
    onChange,
    onUpdate,
    ...attributes 
  } = props;
  //variables
  const style = { color: error ? errorColor: undefined };
  //handlers
  const { handlers } = useToggler({ onChange, onUpdate });
  //render
  return (
    <label className={`radio radio-${theme}`} style={style}>
      <input onChange={handlers.change} type="radio" {...attributes} />
      <span>{label}</span>
    </label>
  );
}

export default Radio;