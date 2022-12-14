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
      setCharList(charList.filter((char) => charName !== char));
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
      // cover
      // start button
      // measure time taken
      // if theres no more char left in the list, post it on the leader board
      //
    };

    useEffect(() => {
      const timer = setInterval(() => {
        props.setTimeTaken((timeTaken) => timeTaken+1); 
    }, 1000);
      return ()=>{clearInterval(timer)};
    },[])
  return (
    <div>
      <Board onClick={handleClick} src={board}/>
      {shown && <DropDown 
        playGame={props.playGame} 
        setPlayGame={props.setPlayGame}
        setShown={setShown}
        timeTaken={props.timeTaken} 
        deleteChar={deleteChar}
        charList={charList}
        db={props.db} 
        absCoordinate={absCoordinate}
        relCoordinate={relCoordinate}/>}
    </div>
  );
}

export default GameBoard;
