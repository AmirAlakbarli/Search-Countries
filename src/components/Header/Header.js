import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.scss";
import { IoMoon } from "react-icons/io5";

const Header = ({ mode, setMode, refMode }) => {
  const navigate = useNavigate();
  const handleChangemode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div className={`navbar navbar-${mode}`}>
      <div className="navbarContainer">
        <div className="navbar-left">
          <h2 onClick={() => navigate("/")}>Where in the world?</h2>
        </div>
        <div className="navbar-right">
          <button onClick={handleChangemode} ref={refMode}>
            <IoMoon />
            {mode === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
