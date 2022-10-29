import { React, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import "./form.scss";

const Form = ({ inputValue, setInputValue }) => {
  const inputRef = useRef();
  const handleFocus = () => inputRef.current.focus()
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} onClick={handleFocus}>
      <label htmlFor="search">
        <FaSearch />
      </label>
      <input
        ref={inputRef}
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
