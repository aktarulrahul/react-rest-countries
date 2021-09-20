import React from 'react';
import './Country.css';

const Country = ({ country }) => {
  const { name, capital, flag, population, region } = country;
  return (
    <div className="country">
      <img src={flag} alt="" />
      <h2>Name: {name}</h2>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
    </div>
  );
};

export default Country;
