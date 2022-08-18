import React from "react";

const Stvorec = ({ value, handleClick, row, poradie }) => {
  return (
    <div
      className="stvorec"
      onClick={() => {
        handleClick(row, poradie);
      }}
    >
      {value}
    </div>
  );
};

export default Stvorec;
