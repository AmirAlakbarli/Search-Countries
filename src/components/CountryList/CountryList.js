import React from "react";
import { useNavigate } from "react-router-dom";
import "./countryList.scss";

const CountryList = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="countryList"
      onClick={() => navigate(`/country-details/${props.shortName}`)}
    >
      <div className="countryFlag">
        <img src={props.flag} alt={props.name} />
      </div>
      <div className="countryInfo">
        <h4>{props.name}</h4>
        <p>
          <strong>Population:</strong> {props.population}
        </p>
        <p>
          <strong>Region:</strong> {props.region}
        </p>
        <p>
          <strong>Capital:</strong> {props.capital}
        </p>
      </div>
    </div>
  );
};

export default CountryList;
