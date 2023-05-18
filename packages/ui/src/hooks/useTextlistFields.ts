//types
import type { TextlistConfig } from '../types';

export default function useTextlistFields(config: TextlistConfig) {
  const { values, index, set } = config;
  //handlers
  const handlers = {
    update: (value: string) => {
      const newValues = [ ...(values || []) ]
      newValues[index] = value;
      set(newValues);
    },
    remove: () => {
      const newValues = [ ...(values || []) ];
      newValues[index] = undefined;
      set(newValues);
    }
  };
  
  return { handlers };
}