import type { ChangeEvent } from 'react';
import type { InputConfig } from '../types';

export default function useToggler({ onChange, onUpdate }: InputConfig) {
  return {
    handlers: {
      change: (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        onUpdate && onUpdate(e.target.value, e.target.checked);
      }
    }
  };
}