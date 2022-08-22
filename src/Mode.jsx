import React from "react";
import dark from "./images/moon.png";
import light from "./images/sun.png";

const Mode = ({ changeMode, mode }) => {
  if (mode) {
    return (
      <div className="thememode" onClick={changeMode}>
        <img src={dark} alt="" />
        <p>Dark</p>
      </div>
    );
  } else {
    return (
      <div
        className="thememode"
        onClick={changeMode}
        style={{
          backgroundColor: "white",
          color: "black",
          borderWidth: "3px",
        }}
      >
        <img src={light} alt="" />
        <p>Light</p>
      </div>
    );
  }
};

export default Mode;
