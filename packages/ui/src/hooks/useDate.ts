import type { DateConfig } from '../types';

export function useDate({ onUpdate }: DateConfig) {
  return (value: string) => {
    if (onUpdate && value) {
      try {
        const utc = new Date(value).toUTCString();
        onUpdate(new Date(utc).toISOString());
      } catch(e) {} 
    }
  };
};

export function useTime({ defaultValue }: DateConfig) {
  let value: string|undefined = undefined;
  if (defaultValue) {
    try {
      const [ date, min ] = new Date(defaultValue).toISOString().split(':')
      value = [ date.split('T')[1], min ].join(':');
    } catch(e) {}
  }

  return value;
};

export function useDatetime({ defaultValue, onUpdate }: DateConfig) {
  const update = useDate({ onUpdate });
  const value = useTime({ defaultValue });
  return { value, update };
};
