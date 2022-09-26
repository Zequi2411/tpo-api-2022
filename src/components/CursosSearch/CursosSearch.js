import React from 'react';
import '../../App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function CursosSearch() {

    const [cursos, setCursos] = useState([]); //Tabla de forma dinamica
    const [tablaCursos, setTablaCursos] = useState([]); //Tabla de forma estatica
    const [busqued, setBusqueda] = useState(""); //Controlar que se escribe en la barra de busqueda

const peticionGet=()=>{
    
}

  return (
    <div>CursosSearch</div>
  )
}

export default CursosSearch