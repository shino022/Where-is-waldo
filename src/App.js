import { BrowserRouter } from "react-router-dom";
import Header from './components/Header.js';
import Main from './components/Main.js';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Main/>
    </BrowserRouter>
  );
}

export default App;
