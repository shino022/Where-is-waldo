import { BrowserRouter } from "react-router-dom";
import Header from './components/Header.js';
import Main from './components/Main.js';
import { useState, useEffect } from 'react';


const App = (props) => {
  const [ timeTaken, setTimeTaken ] = useState(0);
  const [ playGame, setPlayGame ] = useState(true);

  useEffect(()=>{
  },[timeTaken])
 
  return (
    <BrowserRouter>
      <Header playGame={playGame} setPlayGame={setPlayGame} timeTaken={timeTaken} />
      <Main playGame={playGame} setPlayGame={setPlayGame} db={props.db} setTimeTaken={setTimeTaken} />
    </BrowserRouter>
  );
}

export default App;
