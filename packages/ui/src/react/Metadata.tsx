//types
import type { FieldsProps, FieldsetProps } from '../types';
import type { MetadataType } from '../types';
//react
import React from 'react';
//components
import Input from './Input';
import Button from './Button';
import make from './Fieldset';
import NumberField from './Number';
import { Date, Time, Datetime } from './Date';
//hooks
import useMetadataFields from '../hooks/useMetadataFields';
//helpers
import { makeGroupStyles, makeGroupClasses } from '../utils';

/**
 * Key/Value Component 
 */
const Fields: React.FC<FieldsProps<MetadataType>> = (props) => {
  const { 
    type,
    min, 
    max,
    step,
    values, 
    index, 
    error,
    errorColor,
    styles,
    classNames,
    set
  } = props;
  const { handlers, input } = useMetadataFields({ 
    type, 
    values, 
    index, 
    set 
  });
  
  //variables
  const map = {
    styles: makeGroupStyles(styles, {
      row: {
        display: 'flex',
        marginBottom: '4px'
      },
      button: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '4px',
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingTop: '2px'
      },
      name: {
        borderColor: error ? errorColor: 'black',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: error ? errorColor: 'black',
        flexBasis: '30%',
        marginRight: '4px',
        paddingBottom: '8px',
        paddingLeft: '8px',
        paddingRight: '8px',
        paddingTop: '8px',
        width: '100%'
      },
      value: {
        borderColor: error ? errorColor: 'black',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: error ? errorColor: 'black',
        flexBasis: '70%',
        marginRight: '4px',
        paddingBottom: '8px',
        paddingLeft: '8px',
        paddingRight: '8px',
        paddingTop: '8px',
        width: '100%'
      }
    }),
    classNames: makeGroupClasses(classNames, {
      row: undefined,
      button: undefined,
      name: undefined,
      value: undefined
    })
  };
  
  //render
  return (
    <div className={map.classNames.row} style={map.styles.row}>
      <Input 
        style={map.styles.name}
        className={map.classNames.name}
        defaultValue={values ? values[index]?.name: undefined}
        onUpdate={(name) => handlers.update('name', name)}
        error={error}
        required 
      />
      {input.isText && (
        <Input 
          type={type}
          style={map.styles.value}
          className={map.classNames.value}
          defaultValue={values ? values[index]?.value as string|number: undefined}
          onUpdate={(value) => handlers.update('value', value)}
          error={error}
          required 
        />
      )}
      {input.isNumber && (
        <NumberField
          min={min}
          max={max}
          step={step}
          style={map.styles.value}
          className={map.classNames.value}
          defaultValue={values ? values[index]?.value as string|number: undefined}
          onUpdate={(value) => handlers.update('value', value)}
          error={error}
          required 
        />
      )}
      {input.isDate && type === 'date' && (
        <Date 
          type="date"
          style={map.styles.value}
          className={map.classNames.value}
          defaultValue={values ? values[index]?.value: undefined}
          onUpdate={(value) => handlers.update('value', value)}
          error={error}
          required 
        />
      )}
      {input.isDate && type === 'time' && (
        <Time 
          type="time"
          style={map.styles.value}
          className={map.classNames.value}
          defaultValue={values ? values[index]?.value: undefined}
          onUpdate={(value) => handlers.update('value', value)}
          error={error}
          required 
        />
      )}
      {input.isDate && (type === 'datetime' || type === 'datetime-local') && (
        <Datetime 
          type="datetime-local"
          style={map.styles.value}
          className={map.classNames.value}
          defaultValue={values ? values[index]?.value: undefined}
          onUpdate={(value) => handlers.update('value', value)}
          error={error}
          required 
        />
      )}
      <Button 
        outline
        danger
        onClick={handlers.remove}
        style={map.styles.button}
        className={map.classNames.button}
      >
        &times;
      </Button>
    </div>
  );
};

/**
 * Metadata Fieldset Component (Main)
 */
const Metadata: React.FC<FieldsetProps<MetadataType>> = (props) => {
  const { label, value, type, onChange, ...attributes } = props;
  const Fieldset = make<MetadataType>(Fields);

  return (
    <Fieldset 
      {...attributes}
      value={value} 
      label={label} 
      type={type}
      emptyValue={{ name: '', value: '' }}
      onChange={onChange} 
    />
  );
}

export default Metadata;