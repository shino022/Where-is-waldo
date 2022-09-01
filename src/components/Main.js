import Home from './pages/Home';
import GameBoard from './pages/GameBoard';
import LeaderBoard from './pages/LeaderBoard';
import { Routes, Route } from "react-router-dom";

const Main = (props) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/game"
        element={<GameBoard db={props.db} setTimeTaken={props.setTimeTaken} />}
      />
      <Route
        path="/leader"
        element={<LeaderBoard />}
      />
    </Routes>

  );
}

export default Main;
