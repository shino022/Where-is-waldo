import board from '../../images/game-board.jpg';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import DropDown from './DropDown.js';
const Board = styled.img`
  width: 100%;
`;


const GameBoard = (props) => {
    const [ charList, setCharList ] = useState(["Wally", "Odlaw", "White beard"]);
    const [absCoordinate, setAbsCoordinate] = useState({});
    const [relCoordinate, setRelCoordinate] = useState({});
    const [shown, setShown] = useState(false);

    const deleteChar = (charName) => {
      console.log(charList, charName);
  
      setCharList(charList.filter((char) => charName !== char));
      console.log("deleted");
    }

    const toggleShown = () => {
      setShown(!shown);
    }

    const handleClick = (e) => {      
      const calcRelCoordinates = () => {
        const xLocation = e.pageX - e.target.offsetLeft;
        const yLocation = e.pageY - e.target.offsetTop;
        const xCoordinate = Math.floor(xLocation / e.target.width * 100);
        const yCoordinate = Math.floor(yLocation / e.target.height * 100);
        return {x: xCoordinate, y: yCoordinate};
      };

      toggleShown();
      setAbsCoordinate({x: e.pageX, y: e.pageY});
      setRelCoordinate(calcRelCoordinates());


    // if thres no more char left in the list leader board

    };
    
  return (
    <div>
      <Board onClick={handleClick} src={board}/>
      {shown && <DropDown 
        deleteChar={deleteChar}
        charList={charList}
        db={props.db} 
        absCoordinate={absCoordinate}
        relCoordinate={relCoordinate}/>}
    </div>
  );
}

export default GameBoard;
