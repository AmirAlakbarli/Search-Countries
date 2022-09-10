import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import Country from "./containers/Country/Country";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("light");
  const [region, setRegion] = useState("All Regions");
  const [inputValue, setInputValue] = useState("");
  const refMode = useRef();

  useEffect(() => {
    async function getCountriesData() {
      setLoading(true);
      const res = await axios.get("https://restcountries.com/v3.1/all");
      setData(res.data);
      setLoading(false);
    }

    getCountriesData();
  }, []);

  useEffect(() => {
    const storedMode = JSON.parse(localStorage.getItem("mode"));
    if (storedMode) setMode(storedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode));
  }, [mode]);

  return (
    <div className={`App ${mode}`}>
      <div className="App-container">
        <Header mode={mode} setMode={setMode} refMode={refMode} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                data={data}
                loading={loading}
                region={region}
                setRegion={setRegion}
                inputValue={inputValue}
                setInputValue={setInputValue}
                refMode={refMode}
              />
            }
          />
          <Route
            path="country-details/:countryName"
            element={<Country data={data} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
