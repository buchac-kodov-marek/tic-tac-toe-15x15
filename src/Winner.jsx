import React from "react";

const Winner = ({ XjeNarade, vyherca }) => {
  //   if (XjeNarade) {
  //     return (
  //       <p>
  //         Na rade je hráč <span className="X">X</span>
  //       </p>
  //     );
  //   } else {
  //     return (
  //       <p>
  //         Na rade je hráč <span className="O">O</span>
  //       </p>
  //     );
  //   }
  // } else {
  //   return (
  //     <p>
  //       Vyhral hráč <span>{vyherca}</span>
  //     </p>
  //   );
  // }

  if (vyherca !== "nikto") {
    return (
      <p>
        Vyhral hráč <span className={vyherca}>{vyherca}</span>
      </p>
    );
  } else if (XjeNarade) {
    return (
      <p>
        Na rade je hráč <span className="X">X</span>
      </p>
    );
  } else {
    return (
      <p>
        Na rade je hráč <span className="O">O</span>
      </p>
    );
  }
};

export default Winner;
