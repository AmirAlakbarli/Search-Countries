import React from "react";
import { Link } from "react-router-dom";
import "./countrydetails.scss";

const CountryDetails = ({ data, allCountry }) => {
  return (
    <div className="countryDetails">
      <div className="detailFlag">
        <img src={data.flags.png} alt={data.name} />
      </div>
      <div className="detailText">
        <h1 className="countryName">{data.name.common}</h1>
        <div className="countryInfo">
          <div className="GeoInfo">
            <p>
              <strong>Native name: </strong>
              {data.altSpellings[1]}
            </p>
            <p>
              <strong>Population: </strong>
              {data.population}
            </p>
            <p>
              <strong>Region: </strong>
              {data.region}
            </p>
            <p>
              <strong>Sub Region: </strong>
              {data.subregion}
            </p>
            <p>
              <strong>Capital: </strong>
              {data.capital}
            </p>
          </div>

          <div className="publicInfo">
            <p>
              <strong>Top Level Domain: </strong>
              {data.tld.join(", ")}
            </p>
            <p>
              <strong>Currencies: </strong>
              {Object.values(data.currencies).reduce(
                (acc, el, index, array) =>
                  index !== array.length - 1
                    ? acc + el.name + ","
                    : acc + el.name,
                ""
              )}
            </p>
            <p>
              <strong>Languages: </strong>
              {Object.values(data.languages).join(", ")}
            </p>
          </div>
        </div>
        <div className="borderCountries">
          <p>
            <strong>Border Countries: </strong>
            {data.borders &&
              data.borders.map((item, index) => {
                return (
                  <Link
                    to={`/country-details/${item}`}
                    key={index}
                    className="borderLink"
                  >
                    {allCountry.find((name) => item === name.cca3).name.common}
                  </Link>
                );
              })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
