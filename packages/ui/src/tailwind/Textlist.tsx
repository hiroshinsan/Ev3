//types
import type { FieldsProps, FieldsetProps, TextlistType } from '../types';
//react
import React from 'react';
//components
import Input from './Input';
import Button from './Button';
import make from './Fieldset';
//hooks
import useTextlistFields from '../hooks/useTextlistFields';
//helpers
import { makeGroupStyles, makeGroupClasses } from '../utils';

/**
 * Text Item Component 
 */
const Fields: React.FC<FieldsProps<TextlistType>> = (props) => {
  const { 
    values, 
    index, 
    error,
    styles,
    classNames,
    set
  } = props;
  //variables
  const map = {
    styles: makeGroupStyles(styles, {
      row: undefined,
      button: undefined,
      value: undefined
    }),
    classNames: makeGroupClasses(classNames, {
      row: [
        'flex',
        'mb-0.5'
      ].filter(Boolean).join(' '),
      button: 'ml-0.5',
      value: undefined
    })
  };
  //handlers
  const { handlers } = useTextlistFields({ values, index, set });

  return (
    <div className={map.classNames.row} style={map.styles.row}>
      <Input 
        style={styles !== false ? map.styles.value : false}
        className={map.classNames.value}
        defaultValue={values ? values[index]: undefined}
        onUpdate={handlers.update}
        error={error}
        required 
      />
      <Button 
        outline
        danger
        onClick={handlers.remove}
        style={styles !== false ? map.styles.button: false}
        className={map.classNames.button}
      >
        <i className="fas fa-times"></i>
      </Button>
    </div>
  );
};

/**
 * Textlist Component (Main)
 */
const Textlist: React.FC<FieldsetProps<TextlistType>> = (props) => {
  const { 
    label, 
    value, 
    error,
    errorColor,
    styles,
    classNames,
    onChange,
    ...attributes 
  } = props;

  const Fieldset = make<TextlistType>(Fields);

  const map = {
    styles: makeGroupStyles(styles, {
      container: undefined,
      label: undefined,
      field: undefined,
      error: undefined
    }),
    classNames: makeGroupClasses(classNames, {
      container: [
        error ? 'text-[#DC3545]' : undefined
      ].filter(Boolean).join(' '),
      label: [
        'block'
      ].filter(Boolean).join(' '),
      field: undefined,
      error: undefined
    })
  };

  return (
    <div className={map.classNames.container} style={map.styles.container}>
      {label?.length && (
        <label className={map.classNames.label} style={map.styles.label}>
          {label}
        </label>
      )}
      <div className={map.classNames.field} style={map.styles.field}>
        <Fieldset 
          {...attributes}
          error={error}
          styles={styles}
          classNames={classNames}
          value={value} 
          label={label} 
          emptyValue={''}
          onChange={onChange} 
        />
      </div>
    </div>
  );
}

export default Textlist;