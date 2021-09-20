import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
  const [countries, SetCountries] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then((res) => res.json())
      .then((data) => SetCountries(data));
  }, []);
  return (
    <div>
      <h2>Traveling around the world</h2>
      <h4>Countries Available {countries.length}</h4>
      {countries.map((country) => (
        <Country
          name={country.name}
          capital={country.capital}
          population={country.population}
        />
      ))}
    </div>
  );
};

export default Countries;
