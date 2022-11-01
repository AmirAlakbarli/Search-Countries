import React, { useEffect, useState, useMemo, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoIosArrowDown } from "react-icons/io";
import Form from "../../components/Form/Form";
import Selection from "../../components/Selection/Selection";
import CountryList from "../../components/CountryList/CountryList";
import Spinner from "../../components/Loading Spinner/Spinner";
import "./home.scss";

const Home = ({
  data,
  loading,
  region,
  setRegion,
  inputValue,
  setInputValue,
  refMode
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const refHeader = useRef();
  const [result, setResult] = useState([]);

  const resData = useMemo(() => {
    let res = [...data];
    if (region !== "All Regions")
      res = data.filter((item) => item.region === region);
    if (inputValue.trim().length > 0)
      res = res.filter((item) =>
        item.name.common.toLowerCase().includes(inputValue.trim().toLowerCase())
      );
    return res;
  }, [data, inputValue, region]);

  useEffect(() => {
    setResult(resData);
  }, [resData]);

  return (
    <div className="home">
      <div className="homeContainer">
        <div className="searching">
          <Form inputValue={inputValue} setInputValue={setInputValue} />
          <div className="selectRegion">
            <div className="dropDownContainer">
              <div
                className="dropDownHeader"
                onClick={toggling}
                ref={refHeader}
              >
                {region}
                <IoIosArrowDown />
              </div>
              <Selection
                refHeader={refHeader}
                refMode={refMode}
                setRegion={setRegion}
                show={isOpen}
                setShow={setIsOpen}
                onClickOutside={() => {
                  setIsOpen(false);
                }}
              />
            </div>
          </div>
        </div>
        <div className="allCountries">
          {loading ? (
            <div className="loadingSpinner">{<Spinner />}</div>
          ) : (
            result.map((country) => {
              return (
                <CountryList
                  key={uuidv4()}
                  flag={country.flags.png}
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  shortName={country.cca3}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
