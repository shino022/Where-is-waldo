import board from '../../images/game-board.jpg';
import styled from 'styled-components';
import { useEffect } from 'react';

const Board = styled.img`
  width: 100%;
`;

const GameBoard = () => {
    const handleClick = (e) => {
      //console.log((e.clientX - e.target.offsetLeft));//find coordinate in percentage
      //image size: target.height, target.width
      //mouse location: e.clientX - e.target.offsetLeft, e.clientY - e.target.offsetTop
      const xLocation = e.clientX - e.target.offsetLeft;
      const yLocation = e.clientY - e.target.offsetTop;
      const xCoordinate = Math.floor(xLocation / e.target.width * 100);
      const yCoordinate = Math.floor(yLocation / e.target.height * 100);

      console.log(xCoordinate, yCoordinate);
    };
  return (
    <Board onClick={handleClick} src={board}/>
  );
}

export default GameBoard;
