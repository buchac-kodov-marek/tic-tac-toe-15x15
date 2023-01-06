import React from "react";

const Stvorec = ({ value, handleClick, row, poradie, mode }) => {
  const darkMode = {
    border: "1.7px solid white",
  };
  const lightMode = {
    border: "1.7px solid rgb(48, 48, 48)",
  };
  return (
    <div
      style={mode ? darkMode : lightMode}
      className={`stvorec ${value !== null && value}`}
      onClick={() => {
        handleClick(row, poradie);
      }}
    >
      {value}
    </div>
  );
};

export default Stvorec;
