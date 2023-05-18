//types
import type { CountryOption, CountryConfig } from '../types';
//data
import countries from '../countries.json';

export default function useSelectCountry(config: CountryConfig) {
  const { value, map } = config;
  //generate options
  const options = countries
    .filter(country => country.currencyType === 'fiat')
    .map(map);

  const selected = typeof value === 'string' 
    ? options.filter(
        option => option.value?.countryCode === value
      )[0] as CountryOption
    : undefined;

  return { selected, options };
  
};