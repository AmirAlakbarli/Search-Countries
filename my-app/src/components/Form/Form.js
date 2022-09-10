import React from "react";
import { FaSearch } from "react-icons/fa";
import "./form.scss";

const Form = ({ inputValue, setInputValue }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">
        <FaSearch />
      </label>
      <input
        id="search"
        type="text"
        value={inputValue}
        placeholder="Search a country..."
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};

export default Form;
