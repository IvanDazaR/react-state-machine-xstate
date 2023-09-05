const COUNTRIES_API = 'https://restcountries.com/v3.1/region/ame';

export const fetchCountries = () =>
  fetch(COUNTRIES_API)
    .then((response) => response.json());