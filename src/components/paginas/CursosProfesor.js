import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import AgregarAlumno from '../Registro/Alumno/AgregarAlumno';


function CursosProfesor() {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    const [loading, setLoading] = React.useState(true);
    function handleClick() {
      setLoading(true);
    }

    const [resultsList, setresultsList] = useState([
        {
            nombreMateria:"Analisis Matemático",
            horario:"15:30hs-16:30hs",
            dias:"Lunes, Martes",
            costo:"5000",
            comentario1:"Comentame esta",
            comentario2:"Lo que dijo el primero",
        },
        {
            nombreMateria:"Geografia",
            horario:"20hs-21hs",
            dias:"Miercoles, Jueves",
            costo:"4000",
            comentario1:"toy solo",
        },
    ]);


    return(
        <div>
            <Paper elevation={3} sx={{ mb: 3, p: 1 }}>
                <Stack direction="row" sx={{justifyContent:"space-evenly"}}>
                    <Button variant="text" sx={{color:"black"}} href="/CrearCursos" fullWidth>
                        Crear Curso
                    </Button>
                    <Button variant="text" sx={{color:"black"}} fullWidth>
                        Modificar Curso
                    </Button>
                    <Button variant="text" sx={{color:"black"}} href="/solicitud" fullWidth >
                        Solicitudes
                    </Button>
                </Stack>
            </Paper>
        <Container>
            <Grid container>
                {resultsList.map((singleResult, index) => (
                    
                    <Grid item xs={12} sx={{ flexGrow: 1, marginLeft:6, marginRight:6, marginTop:6, marginBottom:6, alignItems:"center"}}>
                        <Card key={index} sx={{ backgroundColor: "grey", border: " 2px solid grey",}}>
                            <Box sx={{ display: 'flex',justifyContent:"flex-start", alignItems:"center",height: 50,}}>
                                <Typography component="div" variant="h7">
                                    {`${singleResult.nombreMateria}`}
                                </Typography>
                                <Grid item xs={4} sx={{ display:'flex', justifyContent:"flex-end", alignItems:"center"}}>
                                    <IconButton aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                                <Typography component="div" variant="body1">
                                    Oculto
                                </Typography>
                                <Grid item sx={{ display:'flex', justifyContent:"flex-end", alignItems:"center"}}>
                                    <FormControlLabel sx={{display: 'block'}} control={
                                        <Switch
                                            checked={loading}
                                            onChange={() => setLoading(!loading)}
                                            name="loading"
                                            color="primary"
                                        />
                                        }
                                    />
                                </Grid>
                                <Typography component="div" variant="body1" justifyContent={"flex-end"}>
                                    Publico
                                </Typography>
                            </Box>
                            <Grid xs={6} md={7} lg={6}>
                                <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems:"left"}}>
                                        <Typography component="div" variant="h7">
                                            Horario: {`${singleResult.horario}`}
                                        </Typography>
                                        <Typography component="div" variant="h7">
                                            Dias: {`${singleResult.dias}`}
                                        </Typography>
                                        <Typography component="div" variant="h7">
                                            Costo: ${`${singleResult.costo}`}
                                        </Typography>
                                    </Box> 
                                </Box>
                            </Grid>
                            <Grid xs={6} md={5} lg={6}>
                                <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around"}}>
                                        <Button
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                            
                                            >
                                            Ingresar a los Comentarios
                                        </Button>
                                    </Box>   
                                </Box>
                            </Grid>
                        </Card>
                        
                    </Grid>
                ))}
            </Grid>
            
        </Container>
        </div>
    )

}

export default CursosProfesor