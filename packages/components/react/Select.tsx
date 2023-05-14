//types
import type { ReactNode, KeyboardEvent } from 'react';
export type SelectOption = {
  label: ReactNode,
  value?: any,
  keyword?: string|Function
};
export type SelectDropdownProps = { 
  options: SelectOption[]
  show: boolean,
  searchable?: boolean,
  styles?: Record<string, React.CSSProperties|false|undefined>|false,
  classNames?: Record<string, string|false|undefined>|false,
  select: (value: SelectOption) => void,
  search: (e: KeyboardEvent) => void,
  match: (option: SelectOption) => void
};
export type SelectProps = {
  value?: SelectOption,
  options: SelectOption[],
  searchable?: boolean,
  label?: string,
  placeholder?: string,
  error?: string,
  errorColor?: string,
  styles?: Record<string, React.CSSProperties|false|undefined>|false,
  classNames?: Record<string, string|false|undefined>|false,
  onSelected?: (value: SelectOption) => void,
  onUpdate?: (value: string|number) => void
};
//hooks
import React, { useState } from 'react';
//components
import Input from './Input';

/**
 * Select Dropdown - Can be used separately (like in autocomplete)
 */
export const SelectDropdown: React.FC<SelectDropdownProps> = (props) => {
  const { 
    options, 
    show, 
    searchable,
    classNames = {},
    styles = {}, 
    select, 
    search, 
    match 
  } = props;

  if (styles !== false) {
    //if dropdown styles, add default styles
    if (styles.dropdown !== false) {
      styles.dropdown = Object.assign({}, {
        backgroundColor: '#EFEFEF',
        borderColor: 'black',
        borderStyle: 'solid',
        borderBottomWidth: '1px',
        borderLeftWidth: '1px',
        borderRightWidth: '1px',
        marginTop: '-1px',
        position: 'absolute',
        width: '100%'
      }, styles.dropdown || {});
      if (!show) {
        styles.dropdown.display = 'none';
      }
    }
    //if search field styles, add default styles
    if (styles.searchField !== false) {
      styles.searchField = Object.assign({}, {
        paddingBottom: '4px',
        paddingLeft: '4px',
        paddingRight: '4px',
        paddingTop: '4px',
        position: 'relative'
      }, styles.searchField || {});
    }
    //if search field styles, add default styles
    if (styles.searchControl !== false) {
      styles.searchControl = Object.assign({}, {
        paddingRight: '32px'
      }, styles.searchControl || {});
    }
    //if search icon styles, add default styles
    if (styles.searchIcon !== false) {
      styles.searchIcon = Object.assign({}, {
        backgroundColor: 'white',
        color: 'black',
        padding: '4px',
        position: 'absolute',
        right: '9px',
        top: '9px'
      }, styles.searchIcon || {});
    }
    //if options styles, add default styles
    if (styles.options !== false) {
      styles.options = Object.assign({}, {
        maxHeight: '256px',
        overflow: 'auto'
      }, styles.options || {});
    }
    //if option styles, add default styles
    if (styles.option !== false) {
      styles.option = Object.assign({}, {
        alignItems: 'center',
        borderColor: '#AAAAAA',
        borderStyle: 'solid',
        borderTopWidth: '1px',
        cursor: 'pointer',
        display: 'flex',
        paddingBottom: '8px',
        paddingLeft: '12px',
        paddingRight: '12px',
        paddingTop: '8px'
      }, styles.option || {});
    }
    
  }

  const map = {
    styles: {
      dropdown: styles && styles.dropdown 
        ? styles.dropdown 
        : undefined,
      searchField: styles && styles.searchField 
        ? styles.searchField 
        : undefined,
      searchControl: styles && styles.searchControl 
        ? styles.searchControl 
        : undefined,
      searchIcon: styles && styles.searchIcon 
        ? styles.searchIcon 
        : undefined,
      options: styles && styles.options 
        ? styles.options 
        : undefined,
      option: styles && styles.option 
        ? styles.option 
        : undefined
    },
    classNames: {
      dropdown: classNames && classNames.dropdown 
        ? classNames.dropdown 
        : undefined,
      searchField: classNames && classNames.searchField 
        ? classNames.searchField 
        : undefined,
      searchControl: classNames && classNames.searchControl 
        ? classNames.searchControl 
        : undefined,
      searchIcon: classNames && classNames.searchIcon 
        ? classNames.searchIcon 
        : undefined,
      options: classNames && classNames.options 
        ? classNames.options 
        : undefined,
      option: classNames && classNames.option 
        ? classNames.option 
        : undefined
    }
  };

  return (
    <div className={map.classNames.dropdown} style={map.styles.dropdown}>
      {searchable && (
        <Input 
          classNames={{ 
            field: map.classNames.searchField,
            control: map.classNames.searchControl 
          }} 
          styles={{ 
            field: map.styles.searchField,
            control: map.styles.searchControl 
          }} 
          onKeyUp={search}
        >
          <span 
            className={map.classNames.searchIcon} 
            style={map.styles.searchIcon}
          >
            <i className="fas fa-search"></i>
          </span>
        </Input>
      )}
      <div className={map.classNames.options} style={map.styles.options}>
        {options.filter(match).map((option, i) => (
          <div 
            key={i} 
            onClick={_ => select(option)} 
            className={map.classNames.option} 
            style={map.styles.option}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 *  Select (Main)
 */
const Select: React.FC<SelectProps> = (props) => {
  const { 
    options,
    searchable,
    value,
    label, 
    placeholder = 'Choose an Option',
    error, 
    errorColor = '#DC3545',
    classNames = {},
    styles = {},
    onSelected,
    onUpdate
  } = props;

  //search query string
  const [ query, setQuery ] = useState('');
  //selected option
  const [ selected, setSelected ] = useState(value);
  //whether to show dropdown
  const [ showing, show ] = useState(false);
  
  const toggle = () => show(!showing);
  //updates query string
  const search = (e: KeyboardEvent) => {
    setTimeout(() => {
      const input = e.target as HTMLInputElement;
      setQuery(input.value);
    });
  };
  //matches options with query string
  const match = (option: SelectOption) => {
    const keyword = (query || '').toLowerCase();
    if (typeof option.keyword === 'string') {
      return option.keyword
        .toLowerCase()
        .indexOf(keyword) >= 0;
    } else if (typeof option.keyword === 'function') {
      return option.keyword(keyword);
    }
  };
  //selects an option from the dropdown
  const select = (option: SelectOption) => {
    show(false);
    setSelected(option);
    onSelected && onSelected(option);
    onUpdate && onUpdate(option.value);
  };

  if (styles !== false) {
    //if container styles and errors, add error styles
    if (styles.container !== false) {
      styles.container = Object.assign({}, {
        position: 'relative'
      }, styles.container || {});
      if (error?.length) {
        styles.container.color = errorColor;
      }
    }
    //if label, make it into a block
    if (styles.label !== false) {
      styles.label = Object.assign({}, {
        display: 'block'
      }, styles.container || {});
    }
    //if control, add default styles
    if (styles.control !== false) {
      styles.control = Object.assign({}, {
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: 'black',
        display: 'flex',
        paddingBottom: '8px',
        paddingLeft: '8px',
        paddingRight: '8px',
        paddingTop: '8px',
        whiteSpace: 'nowrap',
        width: '100%'
      }, styles.control || {});
      if (error?.length) {
        styles.control.color = errorColor;
        styles.control.borderColor = errorColor;
      }
    }
  }

  const map = {
    styles: {
      container: styles && styles.container 
        ? styles.container 
        : undefined,
      label: styles && styles.label 
        ? styles.label 
        : undefined,
      field: styles && styles.field 
        ? styles.field 
        : undefined,
      control: styles && styles.control 
        ? styles.control 
        : undefined,
      error: styles && styles.error 
        ? styles.error 
        : undefined
    },
    classNames: {
      container: classNames && classNames.container 
        ? classNames.container 
        : undefined,
      label: classNames && classNames.label 
        ? classNames.label 
        : undefined,
      field: classNames && classNames.field 
        ? classNames.field 
        : undefined,
      control: classNames && classNames.control 
        ? classNames.control 
        : undefined,
      error: classNames && classNames.error 
        ? classNames.error 
        : undefined
    }
  };

  return (
    <div className={map.classNames.container} style={map.styles.container}>
      {label?.length && (
        <label className={map.classNames.label} style={map.styles.label}>
          {label}
        </label>
      )}
      <div className={map.classNames.field} style={map.styles.field}>
        <div 
          className={map.classNames.control} 
          style={map.styles.control} 
          onClick={toggle}
        >
          {value?.label || selected?.label || (
            <span style={{ color: '#666666' }}>{placeholder}</span>
          )}
        </div>
        <SelectDropdown 
          options={options} 
          show={showing} 
          searchable={searchable} 
          classNames={classNames}
          styles={styles}
          select={select} 
          search={search} 
          match={match} 
        />
      </div>
      {error?.length && (
        <div className={map.classNames.error} style={map.styles.error}>
          {error}
        </div>
      )}
    </div>
  );
};

export default Select;