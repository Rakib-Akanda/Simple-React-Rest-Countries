import { useState } from 'react';
import './country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        // setVisited(true);
        setVisited(!visited) // toggle (mane button e ekbar click kole true arekbar korle false ashobe and etake bole toggle (! bang use mane false nah/ true nah ))
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited?'purple':'white' }}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() =>{handleVisitedCountry(country), handleVisitedFlags(country.flags.png)}}>Mark Visited</button>
            <button onClick={handleVisited}>{visited?'Visited':'Going'}</button> <br />
            {visited? 'I have visited this country' : 'I want to visit'}
        </div>
    );
};

export default Country;