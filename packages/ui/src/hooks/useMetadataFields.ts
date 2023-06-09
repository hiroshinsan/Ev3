//types
import type { MetadataConfig } from '../types';
//hooks
import { useState } from 'react';

export default function useMetadataFields(config: MetadataConfig) {
  const { type, values, index, set } = config;
  //hooks
  const [ name, setName ] = useState(values ? values[index]?.name || '': '');
  const [ value, setValue ] = useState(values ? values[index]?.value || '': '');

  const isNumber = type === 'number';
  const isDate = ['date', 'time', 'datetime'].includes(type || '');
  const isText = !isDate && !isNumber;
  //handlers
  const handlers = {
    update: (key: 'name'|'value', input: string) => {
      const newValues = [ ...(values || []) ];
      if (key === 'name') {
        setName(input);
        newValues[index] = { name: input, value };
      } else {
        setValue(value);
        newValues[index] = { name, value: input };
      }
      set(newValues);
    },
    remove: () => {
      const newValues = [ ...(values || []) ];
      newValues[index] = undefined;
      set(newValues);
    }
  };
  
  return { name, value, handlers, input: { isDate, isText, isNumber } };
}