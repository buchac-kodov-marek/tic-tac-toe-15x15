import React from "react";
import Stvorec from "./Stvorec";

const Row = ({ stav, handleClick, row }) => {
  const riadok = stav.map((stvorcek, index) => {
    return (
      <Stvorec
        key={index}
        value={stvorcek}
        handleClick={handleClick}
        row={row}
        poradie={index}
      />
    );
  });
  return <div className="row">{riadok}</div>;
};
export default Row;
