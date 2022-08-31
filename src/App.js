import { BrowserRouter } from "react-router-dom";
import Header from './components/Header.js';
import Main from './components/Main.js';

const App = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <Main db={props.db} />
    </BrowserRouter>
  );
}

export default App;
