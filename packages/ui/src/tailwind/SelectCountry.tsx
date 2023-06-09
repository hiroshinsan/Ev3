//types
import type { SelectCountryProps } from '../types';
//react
import React from 'react';
//components
import Select from './Select';
//hooks
import useSelectCountry from '../hooks/useSelectCountry';

/**
 * Styled Country Field Component (Main)
 */
const SelectCountry: React.FC<SelectCountryProps> = (props) => {
  const { value, placeholder = 'Choose a Country', ...attributes } = props;
  const { selected, options } = useSelectCountry({
    value, 
    map: country => ({
      label: (
        <>
          <img 
            alt={`${country.countryName} Flag`} 
            src={`https://flagcdn.com/w40/${country.countryCode.toLowerCase()}.png`} 
            loading="lazy"
          />
          <span className="inline-block ml-2">{country.countryName}</span>  
        </>
      ),
      value: country,
      keyword: (keyword: string) => country.countryCode.toLowerCase().indexOf(keyword) >= 0
        || country.countryName.toLowerCase().indexOf(keyword) >= 0
        || country.currencyCode.toLowerCase().indexOf(keyword) >= 0
    })
  });

  return (
    <Select 
      {...attributes} 
      placeholder={placeholder} 
      value={selected} 
      options={options} 
      searchable={true} 
    />
  );
};

export default SelectCountry;