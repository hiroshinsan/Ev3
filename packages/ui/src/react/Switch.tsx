//types
import type { SwitchProps } from '../types';
//react
import React from 'react';
//hooks
import useToggler from '../hooks/useToggler';

/**
 * Styled Switch Component (Main)
 */
const Switch: React.FC<SwitchProps> = (props) => {
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
    <label className={`switch switch-${theme}`} style={style}>
      <input onChange={handlers.change} type="checkbox" {...attributes} />
      <span>{label}</span>
    </label>
  );
}

export default Switch;