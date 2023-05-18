//types
import type { DateProps } from '../types';
//react
import React from 'react';
//components
import Input from './Input';
//hooks
import { useDate, useTime, useDatetime } from '../hooks/useDate';
//helpers
import { makeStyles } from '../utils';

const padding = {
  paddingBottom: '7px',
  paddingLeft: '7px',
  paddingRight: '7px',
  paddingTop: '7px'
};

/**
 * Date Field Component
 */
const DateField: React.FC<DateProps> = (props) => {
  const { defaultValue, style, onUpdate, ...attributes } = props;
  const map = makeStyles(style, padding) || {};
  const update = useDate({ onUpdate });
  return (
    <Input 
      type="date"
      defaultValue={defaultValue 
        ? new Date(defaultValue).toISOString().split('T')[0]
        : undefined
      }
      {...attributes}
      onUpdate={update}
      style={style !== false ? map: false}
    />
  );
};

/**
 * Time Field Component
 */
const Time: React.FC<DateProps> = (props) => {
  const { defaultValue, style, ...attributes } = props;
  const map = makeStyles(style, padding) || {};
  const value = useTime({ defaultValue });
  return (
    <Input 
      type="time"
      defaultValue={value}
      {...attributes}
      style={style !== false ? map: false}
    />
  );
};

/**
 * Datetime Field Component
 */
const Datetime: React.FC<DateProps> = (props) => {
  const { defaultValue, style, onUpdate, ...attributes } = props;
  const map = makeStyles(style, padding) || {};
  const { value, update } = useDatetime({ defaultValue, onUpdate });
  return (
    <Input 
      type="datetime-local"
      defaultValue={value}
      {...attributes}
      onUpdate={update}
      style={style !== false ? map: false}
    />
  );
};

export {
  DateField as Date,
  Time,
  Datetime
};