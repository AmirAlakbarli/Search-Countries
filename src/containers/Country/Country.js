import React from "react";
import CountryDetails from "../../components/CountryDetails/CountryDetails";
import { useNavigate, useParams } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import "./country.scss";

const Country = ({ data }) => {
  const navigate = useNavigate();
  const { countryName } = useParams();
  const country = data.find((item) => item.cca3 === countryName);

  return (
    <div>
      <div className="country">
        <button className="buttonBack" onClick={() => navigate(-1)}>
          <FaLongArrowAltLeft />
          Back
        </button>
        {country && <CountryDetails data={country} allCountry={data} />}
      </div>
    </div>
  );
};

export default Country;
