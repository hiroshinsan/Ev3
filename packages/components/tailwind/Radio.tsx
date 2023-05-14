//types
import type { RadioProps } from '../react/Radio';
export type { RadioProps };
//react
import React from 'react';
//components
import ReactRadio from '../react/Radio';
//helpers
import { makeGroupClasses } from '../helpers/makeClasses';

/**
 * Radio (Main)
 */
const Radio: React.FC<RadioProps> = (props) => {
  //separate component related props from field attributes
  const { error, classNames = {}, ...attributes } = props;

  const classMap = makeGroupClasses(classNames, {
    container: error?.length ? 'text-[#DC3545]' : undefined,
    label: 'block',
    field: undefined,
    control: undefined,
    error: undefined
  });

  return (
    <ReactRadio classNames={classMap} {...attributes} styles={false} />
  );
};

export default Radio;