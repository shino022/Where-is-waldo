import GameBoard from './pages/GameBoard';
import LeaderBoard from './pages/LeaderBoard';
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<GameBoard />}
      />
      <Route
        path="/leader"
        element={<LeaderBoard />}
      />
    </Routes>

  );
}

export default Main;
