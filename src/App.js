import React from 'react';
//import MiNavBar from './components/MiNavBar';
import './App.css';
//import Fotoprofesor from './components/FotoProfesor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Inicio from './components/paginas/Inicio';
import Nosotros from './components/paginas/Nosotros';
import Login from './components/paginas/Login';
import Footer from './components/Footer/Footer';
import Recuperar from './components/paginas/Recuperar';
import ItemListConteiner from './components/paginas/ItemListContainer';
import CursosProfesor from './components/paginas/CursosProfesor';
import ItemDetailContainer from './components/paginas/ItemDetailContainer';
import CrearCursos from './components/paginas/CrearCursos';
import PaginaSolicitud from './components/paginas/Solicitudes';
import TipoUsuario from './components/Registro/TipoUsuario';
import RegistroAlumno from './components/Registro/RegistroAlumno';
import RegistroProfesor from './components/Registro/RegistroProfesor';
import BuscarCurso from './components/CursosSearch/BuscarCurso';
import Cursos from './components/paginas/Cursos';
//import Profile from './components/profile';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Inicio />} />
          <Route path="cursos" element={<ItemListConteiner greeting='Hola, Bienveni@s!' />} />
          <Route path='detail/:id' element={<ItemDetailContainer />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="login" element={<Login />} />
          <Route path="recuperar" element={<Recuperar />} />
          <Route path="cursosprofesor" element={<CursosProfesor />}/>
          <Route path="crearcursos" element={<CrearCursos />}/>
          <Route path="solicitud" element={<PaginaSolicitud />}/>
          <Route path="tipousuario" element={<TipoUsuario />}/>
          <Route path="registroalumno" element={<RegistroAlumno />}/>
          <Route path="registroprofesor" element={<RegistroProfesor />}/>
          <Route path="buscarcurso" element={<BuscarCurso />}/>
          <Route path="curso" element={<Cursos />}/>
          {/* <Route path="perfil" element={<Profile/>}/> */}

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
