import React from 'react';
import MiNavBar from './components/MiNavBar';
import './App.css';
import Fotoprofesor from './components/FotoProfesor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Inicio from './components/paginas/Inicio';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Inicio />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <MiNavBar></MiNavBar>
    <Fotoprofesor></Fotoprofesor>
    </>
  );
}

export default App;
