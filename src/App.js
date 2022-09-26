import React from 'react';
//import MiNavBar from './components/MiNavBar';
import './App.css';
//import Fotoprofesor from './components/FotoProfesor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Inicio from './components/paginas/Inicio';
import Cursos from './components/paginas/Cursos';
import Nosotros from './components/paginas/Nosotros';
import SignUp from './components/paginas/SignUp';
import Login from './components/paginas/Login';
import Footer from './components/Footer/Footer';
import ItemListConteiner from './components/paginas/ItemListContainer';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Inicio />} />
          <Route path="cursos" element={<ItemListConteiner greeting='Hola, Bienveni@s!' />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="login" element={<Login />} />
          <Route path="singup" element={<SignUp />} />

        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>

    

    {/* <MiNavBar></MiNavBar>
    <Fotoprofesor></Fotoprofesor> */}
    </>
  );
}

export default App;
