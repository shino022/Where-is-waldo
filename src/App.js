import { BrowserRouter } from "react-router-dom";
import Header from './components/Header.js';
import Main from './components/Main.js';
import { useState, useEffect } from 'react';


const App = (props) => {
  const [ timeTaken, setTimeTaken ] = useState(0);

  useEffect(()=>{
    console.log(timeTaken);
  },[timeTaken])
 
  return (
    <BrowserRouter>
      <Header timeTaken={timeTaken} />
      <Main db={props.db} setTimeTaken={setTimeTaken}  />
    </BrowserRouter>
  );
}

export default App;
