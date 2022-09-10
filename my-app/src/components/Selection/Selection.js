import React, { useRef, useEffect } from "react";
import "./selection.scss";

const Selection = ({
  setRegion,
  show,
  setShow,
  onClickOutside,
  refHeader,
  refMode
}) => {
  const changeHandler = (e) => {
    setRegion(e.target.getAttribute("value"));
    setShow(!show);
  };
  const refList = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        refList.current &&
        !refList.current.contains(event.target) &&
        !refHeader.current.contains(event.target) &&
        !refMode.current.contains(event.target)
      ) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside, refHeader, refMode]);

  if (!show) return null;

  return (
    <div className={`dropDownListContainer `} ref={refList}>
      <ul className="dropDownList">
        <li className="listItem" value="All Regions" onClick={changeHandler}>
          All Regions
        </li>
        <li className="listItem" value="Africa" onClick={changeHandler}>
          Africa
        </li>
        <li className="listItem" value="Americas" onClick={changeHandler}>
          Americas
        </li>
        <li className="listItem" value="Asia" onClick={changeHandler}>
          Asia
        </li>
        <li className="listItem" value="Europe" onClick={changeHandler}>
          Europe
        </li>
        <li className="listItem" value="Oceania" onClick={changeHandler}>
          Oceania
        </li>
      </ul>
    </div>
  );
};

export default Selection;
