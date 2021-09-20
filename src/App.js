import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Countries />
    </div>
  );
}

function Countries() {
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
    </div>
  );
}

export default App;
