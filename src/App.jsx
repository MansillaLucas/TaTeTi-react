import { useEffect, useState } from "react";
import Casilla from "./Casilla";

function App() {

  const[xPicks, setXPicks] = useState([]);
  const[oPicks, setOPicks] = useState([]);
  const[isXTurn, setIsXTurn] = useState(true);
  const[gameMessage, setGameMessage] = useState("");
  const[lastIdSquare, setLastIdSquare] = useState(0);

  // Las 8 condiciones en las que uno de los dos puede ganar.
  const winningConditions = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
  ];
  Object.freeze(winningConditions);

  const checkWinningCondition = () => {

    for (const condition of winningConditions) {

      let containsAll = null;
      if(isXTurn){
        const addedXPick = [lastIdSquare, ...xPicks];
        setXPicks(addedXPick);
        containsAll = condition.every(element => {return xPicks.includes(element);});
      }
      else{
        const addedOPick = [lastIdSquare, ...oPicks];
        setOPicks(addedOPick);
        containsAll = condition.every(element => {return oPicks.includes(element);});
      } 
      
      console.log(isXTurn?"Es el turno de la X":"Es el turno de O");
      console.log("Valores de x: " + xPicks);
      console.log("Valores de o: " + oPicks);

      if(containsAll){
        if(isXTurn)
          setGameMessage("¡¡¡❌ es el ganador!!!");
        else
          setGameMessage("¡¡¡⭕ es el ganador!!!");
        return
      }

      if((oPicks.length + xPicks.length) === 9){
        setGameMessage("No hubieron ganadores");
        return
      }

    }

  }

  useEffect(checkWinningCondition, [isXTurn])

  return (
  <div className="container">
    <div>
      <div className="row">
        <Casilla idSquare={1} isXTurn={isXTurn} setIsXTurn={setIsXTurn} xPicks={xPicks} oPicks={oPicks} setLastIdSquare={setLastIdSquare}/>
        <Casilla idSquare={2} isXTurn={isXTurn} setIsXTurn={setIsXTurn} xPicks={xPicks} oPicks={oPicks} setLastIdSquare={setLastIdSquare}/>
        <Casilla idSquare={3} isXTurn={isXTurn} setIsXTurn={setIsXTurn} xPicks={xPicks} oPicks={oPicks} setLastIdSquare={setLastIdSquare}/>
      </div>
      <div className="row">
        <Casilla idSquare={4} isXTurn={isXTurn} setIsXTurn={setIsXTurn} xPicks={xPicks} oPicks={oPicks} setLastIdSquare={setLastIdSquare}/>
        <Casilla idSquare={5} isXTurn={isXTurn} setIsXTurn={setIsXTurn} xPicks={xPicks} oPicks={oPicks} setLastIdSquare={setLastIdSquare}/>
        <Casilla idSquare={6} isXTurn={isXTurn} setIsXTurn={setIsXTurn} xPicks={xPicks} oPicks={oPicks} setLastIdSquare={setLastIdSquare}/>
      </div>
      <div className="row">
        <Casilla idSquare={7} isXTurn={isXTurn} setIsXTurn={setIsXTurn} xPicks={xPicks} oPicks={oPicks} setLastIdSquare={setLastIdSquare}/>
        <Casilla idSquare={8} isXTurn={isXTurn} setIsXTurn={setIsXTurn} xPicks={xPicks} oPicks={oPicks} setLastIdSquare={setLastIdSquare}/>
        <Casilla idSquare={9} isXTurn={isXTurn} setIsXTurn={setIsXTurn} xPicks={xPicks} oPicks={oPicks} setLastIdSquare={setLastIdSquare}/>
      </div>
    </div>
    <div className="messageDisplay">
      {gameMessage !== ""?gameMessage:"Juego en curso"}
    </div>
  </div>);
}

export default App;
