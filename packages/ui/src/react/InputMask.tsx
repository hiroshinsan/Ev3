//types
import type { InputMaskProps } from '../types';
//react
import React from 'react';
//components
import Input from './Input';

/**
 * Mask Field Component (Main)
 */
const InputMask: React.FC<InputMaskProps> = (props) => {
  const { 
    mask,
    regex,
    alias,
    repeat,
    greedy,
    numericInput,
    rightAlign,
    definitions,
    onReady,
    ...attributes 
  } = props;
  const ref = (ref: HTMLInputElement) => {
    if (!ref) return;
    import('inputmask').then(Inputmask => {
      onReady && onReady(Inputmask.default);
      const im = new Inputmask.default({
        mask,
        regex,
        alias,
        repeat,
        greedy,
        numericInput,
        rightAlign,
        definitions
      });
      im.mask(ref);
    });
  }

  return <Input passRef={ref} {...attributes} />
};

export default InputMask;