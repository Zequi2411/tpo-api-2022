import * as React from 'react';
import { useState } from 'react';
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem';
import CursosContainer from '../CursosContainer/CursosContainer';


const Clases = [
    {
        value:'ind',
        label:'Individual'
    },
    {
        value:'gru',
        label:'Grupal'
    },
]

const Frecuencias = [
    {
        value:'uni',
        label:'Única'
    },
    {
        value:'sem',
        label:'Semanal'
    },
    {
        value:'men',
        label:'Mensual'
    },
]

const Calificaciones = [
    {
        value:'1',
        label:'1 Estrella'
    },
    {
        value:'2',
        label:'2 Estrellas'
    },
    {
        value:'3',
        label:'3 Estrellas'
    },
    {
        value:'4',
        label:'4 Estrellas'
    },
    {
        value:'5',
        label:'5 Estrellas'
    },
]

const mockDoctores = [
    {
      nombre: "Dr. Ignacio Alonso Hidalgo",
      especialidad: "Traumatólogo",
      deporte: "Futbol",
      localidad: "CABA",
      calificacion: 5,
      address: "Avenida Callao 875 2d, Capital Federal",
      avatar: "img/prof1.png",
    },
    {
      nombre: "Dr. Eliseo Firman",
      especialidad: "Deportólogo",
      deporte: "Futbol",
      localidad: "CABA",
      calificacion: 3,
      address: "Av Libertador 4992",
      avatar: "img/prof2.png",
    },
    {
      nombre: "Dr. Gustavo Gómez Rodríguez",
      especialidad: "Nutricionista",
      deporte: "Futbol",
      localidad: "CABA",
      calificacion: 2,
      address: "Juramento 2089, 5° piso Of. 505",
      avatar: "img/prof3.png",
    },
    {
      nombre: "Dr. Nicolas Irigoitia",
      especialidad: "Entrenador Personalizado",
      deporte: "Futbol",
      localidad: "CABA",
      calificacion: 4,
      address: "Marcelo T de Alvear 1719 3°Piso",
      avatar: "img/prof4.png",
    },
  ];

function BuscarCurso() {

    const [tipoClase, setClase] = useState();
    const [tipoFrecuencia, setFrecuencia] = useState();
    const [tipoCalificacion, setCalificacion] = useState();

    const [resultsList, setresultsList] = useState([]);

    const mostrarResultados = () => {
        setresultsList(mockDoctores);
      };

  const handleCardEvent = () => {
    console.log("mostrar pagina doctor");
  };
    
    const handleChange = (event) => {
        setClase(event.target.value);
        setFrecuencia(event.target.value);
        setCalificacion(event.target.value);
      };

  return (
    <div>
        <Paper elevation={3} sx={{ mb: 3, p: 1.5 }}>
            <Grid container direction="row" sx={{justifyContent:"space-evenly", alignItems:"center"}} spacing={0.5}>
                <Grid item xs={2}>
                    <TextField 
                        required
                        fullWidth
                        id="materia"
                        label="¿Qué Queres Aprender?"
                        name="materia"
                        placeholder="Ej:Ingles, Matemática..."
                    />
                </Grid>
                
                <Grid container direction={"row"} xs={2}>
                    <Grid item xs={12}>
                        <Typography>
                            Tipo de Clase:
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            select
                            fullWidth
                            value={tipoClase}
                            onChange={handleChange}
                            label="Seleccione"
                        >
                            {Clases.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
                <Grid container direction={"row"} xs={2}>
                    <Grid item xs={12}>
                        <Typography>
                            Frecuencia:
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            select
                            fullWidth
                            value={tipoFrecuencia}
                            onChange={handleChange}
                            label="Seleccione"
                        >
                            {Frecuencias.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
                <Grid container direction={"row"} xs={2}>
                    <Grid item xs={12}>
                        <Typography>
                            Calificación:
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            select
                            fullWidth
                            value={tipoCalificacion}
                            onChange={handleChange}
                            label="Seleccione"
                        >
                            {Calificaciones.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="text" sx={{color:"black"}} fullWidth onClick={() => mostrarResultados()} >
                        Buscar Clase
                    </Button>
                </Grid>
            </Grid>
        </Paper>
        <CursosContainer/>
    </div>
  )
}

export default BuscarCurso
