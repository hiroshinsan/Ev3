//types
import type { InputProps } from '../react/Input';
export type { InputProps };

//react
import React from 'react';
//components
import ReactInput from '../react/Input';
//helpers
import { makeGroupClasses } from '../helpers/makeClasses';

/**
 * Generic Input Component (Main)
 */
const Input: React.FC<InputProps> = (props) => {
  //separate component related props from field attributes
  const { error, classNames = {}, ...attributes } = props;

  const classMap = makeGroupClasses(classNames, {
    container: error?.length ? 'text-[#DC3545]' : undefined,
    label: 'block',
    field: undefined,
    control: [
      'border',
      error?.length ? 'border-[#DC3545]': 'border-black',
      'text-black',
      'p-2',
      'w-full'
    ].filter(Boolean).join(' '),
    error: undefined
  });

  return (
    <ReactInput classNames={classMap} {...attributes} styles={false} />
  );
}

export default Input;