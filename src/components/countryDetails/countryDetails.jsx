import CountryData from "../countryData/countryData";

const CountryDetails = (props) => {
    const {country, handleVisitedCountry, handleVisitedFlags} = props;
    return (
        <div>
            <h3>Country Details</h3>
            <hr />
            {/* <CountryData
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            ></CountryData> */}
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetails;