import React from 'react'

const Reset = ({resetGame, mode}) => {
    if (mode) {
        return (
            <button className='reset' onClick={()=>{resetGame()}} >Reset</button>
        );
      } else {
          
        return (
            <button style={{
                backgroundColor: "white",
                color: "black",
                // borderWidth: "3px",
              }} className='reset' onClick={()=>{resetGame()}} >Reset</button>
        );
      }
    };

export default Reset