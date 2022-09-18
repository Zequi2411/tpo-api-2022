import MiNavBar from './components/MiNavBar';
import './App.css';
import Fotoprofesor from './components/FotoProfesor';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { createBrowserHistory } from 'history';
//import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MiNavBar />}>
        </Route>
      </Routes>
    </BrowserRouter>

      <Fotoprofesor>
      </Fotoprofesor>
    </div>
  );
}

export default App;
