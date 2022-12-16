import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import CursoCard from '../CursoCard/CursoCard';
//import { getAllCursos } from '../CursosSearch/mockData';
import data from '../CursosSearch/mockData';
import { useState, useEffect } from 'react';



export default function CursosContainer() {
    const [datos, setDatos] = useState();

    const mostrarCursos = async () => {
        const respuesta = await fetch(`${"http://localhost:4000/cursos"}`);
        const cursos = await respuesta.json();
        setDatos(cursos);
        console.log(datos.data.docs);
    };
    
    /* useEffect(() =>{
        mostrarCursos();
    }) */
    
    mostrarCursos();

    return (

        <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={2} margin={6} >
                {

                    datos.data.docs.map(product => (
                        <Grid xs={12} sm={6} md={4} lg={3}>
                            <CursoCard key={product.id}
                                title={product.title}
                                materia={product.materia}
                                ubicacion={product.ubicacion}
                                tipo={product.tipo}
                                frecuencia={product.frecuencia}
                                price={product.price}
                                image={product.image}
                                id={product.id}
                                description={product.description}
                                rating={product.rating} />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
}
//product={product}