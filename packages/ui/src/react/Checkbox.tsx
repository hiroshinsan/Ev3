//types
import type { CheckboxProps } from '../types';
//react
import React from 'react';
//hooks
import useToggler from '../hooks/useToggler';

/**
 * Styled Checkbox Field Component (Main)
 */
const Checkbox: React.FC<CheckboxProps> = (props) => {
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
    <label className={`checkbox checkbox-${theme}`} style={style}>
      <input onChange={handlers.change} type="checkbox" {...attributes} />
      <span>{label}</span>
    </label>
  );
}

export default Checkbox;