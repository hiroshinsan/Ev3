//types
import type { CheckboxProps } from '../react/Checkbox';
export type { CheckboxProps };
//react
import React from 'react';
//components
import ReactCheckbox from '../react/Checkbox';
//helpers
import { makeGroupClasses } from '../helpers/makeClasses';

/**
 * Checkbox (Main)
 */
const Checkbox: React.FC<CheckboxProps> = (props) => {
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
    <ReactCheckbox classNames={classMap} {...attributes} styles={false} />
  );
};

export default Checkbox;