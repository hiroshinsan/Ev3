//types
import type { DateProps } from '../types';
//react
import React from 'react';
//components
import Input from './Input';
//hooks
import { useDate, useTime, useDatetime } from '../hooks/useDate';
//helpers
import { makeClasses } from '../utils';

/**
 * Date Field Component
 */
const DateField: React.FC<DateProps> = (props) => {
  const { 
    defaultValue, 
    error, 
    className, 
    onUpdate, 
    ...attributes 
  } = props;
  const map = makeClasses(
    className, 
    [
      'items-center',
      'border',
      'bg-white',
      error ? 'border-[#DC3545]' : 'border-black',
      error ? 'text-[#DC3545]' : 'tet-black',
      'flex',
      'p-[7px]',
      'whitespace-nowrap',
      'w-full'
    ].filter(Boolean).join(' ')
  );
  const update = useDate({ onUpdate });
  return (
    <Input 
      {...attributes}
      type="date"
      className={map} 
      error={error}
      defaultValue={defaultValue 
        ? new Date(defaultValue).toISOString().split('T')[0]
        : undefined
      }
      onUpdate={update}
    />
  );
};

/**
 * Time Field Component
 */
const Time: React.FC<DateProps> = (props) => {
  const { 
    defaultValue, 
    error, 
    className, 
    onUpdate, 
    ...attributes 
  } = props;
  const map = makeClasses(
    className, 
    [
      'items-center',
      'border',
      'bg-white',
      error ? 'border-[#DC3545]' : 'border-black',
      error ? 'text-[#DC3545]' : 'tet-black',
      'flex',
      'p-[7px]',
      'whitespace-nowrap',
      'w-full'
    ].filter(Boolean).join(' ')
  );
  const value = useTime({ defaultValue });
  return (
    <Input 
      {...attributes}
      type="time"
      className={map} 
      error={error}
      defaultValue={value}
    />
  );
};

/**
 * Datetime Field Component
 */
const Datetime: React.FC<DateProps> = (props) => {
  const { 
    defaultValue, 
    error, 
    className, 
    onUpdate, 
    ...attributes 
  } = props;
  const map = makeClasses(
    className, 
    [
      'items-center',
      'border',
      'bg-white',
      error ? 'border-[#DC3545]' : 'border-black',
      error ? 'text-[#DC3545]' : 'tet-black',
      'flex',
      'p-[7px]',
      'whitespace-nowrap',
      'w-full'
    ].filter(Boolean).join(' ')
  );
  const { value, update } = useDatetime({ defaultValue, onUpdate });
  return (
    <Input 
      {...attributes}
      type="datetime-local"
      className={map} 
      error={error}
      defaultValue={value}
      onUpdate={update}
    />
  );
};

export {
  DateField as Date,
  Time,
  Datetime
};