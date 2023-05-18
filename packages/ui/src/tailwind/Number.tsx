//types
import type { NumberProps } from '../types';
//react
import React from 'react';
//components
import Input from './Input';
//hooks
import useNumber from '../hooks/useNumber';

/**
 * Number Field Component (Main)
 */
const NumberField: React.FC<NumberProps> = (props) => {
  //expand props
  const { 
    name,
    defaultValue,
    min,
    max,      
    separator = ',', 
    decimal = '.', 
    step, 
    absolute = false,
    controls,
    onUpdate,
    onChange,
    ...attributes 
  } = props;

  const { displayValue, handlers } = useNumber({
    defaultValue,
    min,
    max,      
    separator, 
    decimal, 
    step, 
    absolute,
    controls,
    onUpdate,
    onChange
  });

  return (
    <Input 
      passRef={handlers.passRef} 
      {...attributes}
      onChange={handlers.format} 
      onBlur={handlers.defocus} 
      value={displayValue}  
    />
  );
};

export default NumberField;