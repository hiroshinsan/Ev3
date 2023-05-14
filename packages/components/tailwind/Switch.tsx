//types
import type { SwitchProps } from '../react/Switch';
export type { SwitchProps };
//react
import React from 'react';
//components
import ReactSwitch from '../react/Switch';
//helpers
import { makeGroupClasses } from '../helpers/makeClasses';

/**
 * Switch (Main)
 */
const Switch: React.FC<SwitchProps> = (props) => {
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
    <ReactSwitch classNames={classMap} {...attributes} styles={false} />
  );
};

export default Switch;