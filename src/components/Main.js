import GameBoard from './pages/GameBoard';
import LeaderBoard from './pages/LeaderBoard';
import { Routes, Route } from "react-router-dom";

const Main = (props) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<GameBoard db={props.db} />}
      />
      <Route
        path="/leader"
        element={<LeaderBoard />}
      />
    </Routes>

  );
}

export default Main;
