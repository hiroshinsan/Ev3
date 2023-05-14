//types
import type { TextareaProps } from '../react/Textarea';
export type { TextareaProps };

//react
import React from 'react';
//components
import ReactTextarea from '../react/Textarea';
//helpers
import { makeGroupClasses } from '../helpers/makeClasses';

/**
 * Generic Textarea Component (Main)
 */
const Textarea: React.FC<TextareaProps> = (props) => {
  //separate component related props from field attributes
  const {
    styles,
    error,
    classNames = {},
    ...attributes 
  } = props;

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
    <ReactTextarea classNames={classMap} {...attributes} styles={false} />
  );
}

export default Textarea;