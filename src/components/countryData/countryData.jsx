const CountryData = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    return (
        <div>
            <p><small>Country Name: {country.name.common}</small></p>
        </div>
    );
};

export default CountryData;