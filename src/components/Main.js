import Home from './pages/Home';
import GameBoard from './pages/GameBoard';
import LeaderBoard from './pages/LeaderBoard';
import { Routes, Route } from "react-router-dom";

const Main = (props) => {
  return (
    <Routes>
      <Route
        path="/Where-is-waldo"
        element={<Home />}
      />
      <Route
        path="/Where-is-waldo/game"
        element={
          <GameBoard 
            playGame={props.playGame} 
            setPlayGame={props.setPlayGame} 
            db={props.db} 
            setTimeTaken={props.setTimeTaken} 
            timeTaken={props.timeTaken}
          />}
      />
      <Route
        path="/Where-is-waldo/leader"
        element={
          <LeaderBoard 
            timeTaken={props.timeTaken} 
            setTimeTaken={props.setTimeTaken} 
            db={props.db} 
        />}
      />
    </Routes>

  );
}

export default Main;
