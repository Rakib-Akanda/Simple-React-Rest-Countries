import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import "./countries.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedCountryFlags, setVisitedFlags] = useState([]);
  useEffect(() => {
      fetch("https://restcountries.com/v3.1/all#")
      .then((res) => res.json())
      .then((data) => setCountries(data));
    }, []);
    const handleVisitedCountry = (country) =>{
      const newVisitedCountries = [...visitedCountries, country.name.common];
      setVisitedCountries(newVisitedCountries);
    }
    const handleVisitedFlags = flags =>{
      const newVisitedCountryFlags = [...visitedCountryFlags,flags];
      setVisitedFlags(newVisitedCountryFlags);
    }
    // remove item from an array in a state
    // use filter to select all the elements expect the one you want remove.

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      {/* visited country */}
      <div>
        <h5>Visited Countries</h5>
        <ol>
            {
                visitedCountries.map((country, idx) => 
                <li key={idx}>{country}</li>)
            }
        </ol>
      </div>
      <div className="flag-container">
            {
                visitedCountryFlags.map((flag, idx) =><img key={idx} src={flag}></img>)
            }
      </div>
      {/* display countries */}
      <div className="country-container">
        {countries.map((country) => (
          <Country 
          handleVisitedFlags={handleVisitedFlags}
          handleVisitedCountry={handleVisitedCountry} key={country.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
