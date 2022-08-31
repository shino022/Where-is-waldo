import board from '../../images/game-board.jpg';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import DropDown from './DropDown.js';
const Board = styled.img`
  width: 100%;
`;


const GameBoard = (props) => {
    const [absCoordinate, setAbsCoordinate] = useState({});
    const [relCoordinate, setRelCoordinate] = useState({});
    const [shown, setShown] = useState(false);

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


      // const convertToBox = () => {
      //   const xStart
      //   const xEnd
      //   const yStart
      //   const yEnd
      // }

      //convert it to the size of targeting box
      //store it
      //retrieve it after user clicks a char in the list
      //get the coordinates of the char user selected
      //see if the coordinates are in the scope
      //mark that char

    };
    
  return (
    <div>
      <Board onClick={handleClick} src={board}/>
      {shown && <DropDown 
        db={props.db} 
        absCoordinate={absCoordinate}
        relCoordinate={relCoordinate}/>}
    </div>
  );
}

export default GameBoard;
