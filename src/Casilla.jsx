import { useState } from "react";

const Casilla = ({idSquare, isXTurn, setIsXTurn, xPicks, oPicks, setLastIdSquare}) => {

    const[showIcon, setShowIcon] = useState("❔");
    const[classNameSquare, setClassNameSquare] = useState("");

    const handleClick = () => {

        if(xPicks.includes(idSquare) || oPicks.includes(idSquare)){
            alert("No puedes elegir una casilla ya elegida");
            return;
        }

        if(isXTurn){
            setShowIcon("❌");
            setClassNameSquare("crossPick");
        } 
        else{
            setShowIcon("⭕");
            setClassNameSquare("circlePick");
        }

        setLastIdSquare(idSquare);
        setIsXTurn(!isXTurn);
    }

    return(
    <div className={'square ' + classNameSquare} onClick={handleClick}>
        <h1>{showIcon}</h1>
    </div>);

}

export default Casilla;