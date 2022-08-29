import board from '../../images/game-board.jpg';
import styled from 'styled-components';
import { useEffect } from 'react';

const Board = styled.img`
  width: 100%;
`;

const GameBoard = () => {
    const handleClick = (e) => {

      const calcCoordinates = () => {
        console.log(e);
        const xLocation = e.pageX - e.target.offsetLeft;
        const yLocation = e.pageY - e.target.offsetTop;
        const xCoordinate = Math.floor(xLocation / e.target.width * 100);
        const yCoordinate = Math.floor(yLocation / e.target.height * 100);
        return {xCoordinate, yCoordinate};
      };
      
      console.log(calcCoordinates());

      //convert it to the size of targeting box
      //store it
      //retrieve it after user clicks a char in the list
      //get the coordinates of the char user selected
      //see if the coordinates are in the scope
      //mark that char

    };
  return (
    <Board onClick={handleClick} src={board}/>
  );
}

export default GameBoard;
