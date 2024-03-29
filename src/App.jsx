import React from "react";
import Row from "./Row";
import Mode from "./Mode";
import Winner from "./Winner";
import Reset from "./Reset";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stvorce: [
        Array(15).fill(null),
        Array(15).fill(null),
        Array(15).fill(null),
        Array(15).fill(null),
        Array(15).fill(null),
        Array(15).fill(null),
        Array(15).fill(null),
        Array(15).fill(null),
        Array(15).fill(null),
        Array(15).fill(null),
        Array(15).fill(null),
        Array(15).fill(null),
        Array(15).fill(null),
        Array(15).fill(null),
        Array(15).fill(null),
      ],
      XjeNarade: true,
      darkMode: true,
    };
  }
  render() {
const resetGame =() =>{
  this.setState({
    stvorce: [
      Array(15).fill(null),
      Array(15).fill(null),
      Array(15).fill(null),
      Array(15).fill(null),
      Array(15).fill(null),
      Array(15).fill(null),
      Array(15).fill(null),
      Array(15).fill(null),
      Array(15).fill(null),
      Array(15).fill(null),
      Array(15).fill(null),
      Array(15).fill(null),
      Array(15).fill(null),
      Array(15).fill(null),
      Array(15).fill(null),
    ],
    XjeNarade: true,
    darkMode: true,
  });
}

    let mojavar = this.state.stvorce;

    const stlpce2 = (i) => {
      return this.state.stvorce.map((prvok) => {
        return prvok[i];
      });
    };

    const stlpce = () => {
      let i = -1;
      return this.state.stvorce.map(() => {
        i++;
        return stlpce2(i);
      });
    };

    const Bullish = () => {
      let result = [];
      let counter = 0;
      while (result.length < 15) {
        let innerArray = [];
        for (let i = counter; i >= 0; i--) {
          innerArray.push(mojavar[i][counter - i]);
        }
        result.push(innerArray);
        counter++;
      }

      counter = 14;
      let second = 0;
      while (result.length < 29) {
        let innerArray = [];
        second++;
        let second2 = second;
        for (let i = 0; i < counter; i++) {
          innerArray.push(mojavar[14 - i][second2]);
          // innerArray.push(`${14 - i}-${second2}`);
          second2++;
        }
        result.push(innerArray);
        counter--;
      }
      return result;
    };

    const Bearish = () => {
      let result = [];
      let counter = 0;
      while (result.length < 15) {
        let innerArray = [];
        for (let i = counter; i >= 0; i--) {
          innerArray.push(mojavar[14 - i][counter - i]);
          // innerArray.push(`${14 - i}-${counter - i}`);
        }
        result.push(innerArray);
        counter++;
      }

      counter = 14;

      let second = 0;
      while (result.length < 29) {
        let innerArray = [];
        second++;
        let second2 = second;
        for (let i = 0; i < counter; i++) {
          innerArray.push(mojavar[i][second2]);
          // innerArray.push(`${i}-${second2}`);
          second2++;
        }
        result.push(innerArray);
        counter--;
      }
      return result;
    };

    // +++
    // pocitadlo
    // +++

    // const pocitadlo = (array, pocet) => {
    //   let skontrolovane;
    //   let zaSebou = 1;
    //   return array.forEach((stvorcek) => {
    //     if (stvorcek === skontrolovane && stvorcek !== null) {
    //       zaSebou++;

    //       if (pocet === zaSebou) {
    //         return stvorcek;
    //       }
    //     } else {
    //       zaSebou = 1;
    //       skontrolovane = stvorcek;
    //     }
    //   });
    // };
    const pocitadlo = (arr, amount) => {
      var last = null;
      var count = 0;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== last) {
          last = arr[i];
          count = 0;
        }
        count += 1;
        if (amount <= count && arr[i] !== null) {
          return arr[i];
        }
      }
      return null;
    };

    //  vyherca
    //  +++
    const vsetkyArrays = [
      ...this.state.stvorce.slice(),
      ...stlpce(),
      ...Bullish(),
      ...Bearish(),
    ];

    const vyherca = vsetkyArrays.map((prvky) => {
      return pocitadlo(prvky, 4);
    });
    const winner = vyherca.find((hodnoty) => {
      return hodnoty !== null;
    });
    // console.log(winner);

     // +++
    // end of game
    // +++
    
    let setVyherca = () => {
      if (winner === "X" || winner === "O") {
        return winner;
      } else {
        return "nikto";
      }
    };
    // +++
    // handleclikk
    // +++

    const handleClick = (riadok, poradie) => {
      let array0 = this.state.stvorce.slice();
      let array1 = this.state.stvorce.slice();

      if (array1[riadok][poradie] === null) {
        array1[riadok][poradie] = this.state.XjeNarade ? "X" : "O";
        if(setVyherca() !== "nikto"){
          alert("Hra skončila, vyhral hráč " + winner);
          return;
        }

        this.setState({
          stvorce: (array0[riadok] = array1),
          XjeNarade: !this.state.XjeNarade,
          darkMode: this.state.darkMode,
        });
      }
      // console.log(stlpce());
    };
   


    // +++
    //     style
    // +++

    const darkMode = {
      backgroundColor: "rgb(48, 48, 48)",
      color: "white",
    };
    const lightMode = {
      backgroundColor: "white",
      color: "rgb(48, 48, 48)",
    };

    // +++
    // change mode
    // +++

    const changeMode = () => {
      console.log("click");
      this.setState((state) => {
        return {
          stvorce: state.stvorce,
          XjeNarade: state.XjeNarade,
          darkMode: !state.darkMode,
        };
      });
    };
    // const Bullish = () => {
      
      // }
      // Bullish();
      
      return (
        <div className="app" style={this.state.darkMode ? darkMode : lightMode}>
        <header>
        <div className="hidden"></div>
        <h1>Tic Tac Toe 15x15</h1>
      <Mode changeMode={changeMode} mode={this.state.darkMode} />
        </header>
        <div className="m_cont">
        <div className="tictactoe">
          <Row
            stav={this.state.stvorce[0]}
            handleClick={handleClick}
            row={0}
            mode={this.state.darkMode}
          />
          <Row
            stav={this.state.stvorce[1]}
            handleClick={handleClick}
            row={1}
            mode={this.state.darkMode}
          />
          <Row
            stav={this.state.stvorce[2]}
            handleClick={handleClick}
            row={2}
            mode={this.state.darkMode}
          />
          <Row
            stav={this.state.stvorce[3]}
            handleClick={handleClick}
            row={3}
            mode={this.state.darkMode}
          />
          <Row
            stav={this.state.stvorce[4]}
            handleClick={handleClick}
            row={4}
            mode={this.state.darkMode}
          />
          <Row
            stav={this.state.stvorce[5]}
            handleClick={handleClick}
            row={5}
            mode={this.state.darkMode}
          />
          <Row
            stav={this.state.stvorce[6]}
            handleClick={handleClick}
            row={6}
            mode={this.state.darkMode}
          />
          <Row
            stav={this.state.stvorce[7]}
            handleClick={handleClick}
            row={7}
            mode={this.state.darkMode}
          />
          <Row
            stav={this.state.stvorce[8]}
            handleClick={handleClick}
            row={8}
            mode={this.state.darkMode}
          />
          <Row
            stav={this.state.stvorce[9]}
            handleClick={handleClick}
            row={9}
            mode={this.state.darkMode}
          />
          <Row
            stav={this.state.stvorce[10]}
            handleClick={handleClick}
            row={10}
            mode={this.state.darkMode}
          />
          <Row
            stav={this.state.stvorce[11]}
            handleClick={handleClick}
            row={11}
            mode={this.state.darkMode}
          />
          <Row
            stav={this.state.stvorce[12]}
            handleClick={handleClick}
            row={12}
            mode={this.state.darkMode}
          />
          <Row
            stav={this.state.stvorce[13]}
            handleClick={handleClick}
            row={13}
            mode={this.state.darkMode}
          />
          <Row
            stav={this.state.stvorce[14]}
            handleClick={handleClick}
            row={14}
            mode={this.state.darkMode}
          />
        </div>
        <div className="right_cont">

        <div className="legenda">
          <Winner XjeNarade={this.state.XjeNarade} vyherca={setVyherca()} />
        </div>
          <Reset mode={this.state.darkMode}  resetGame={resetGame}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
