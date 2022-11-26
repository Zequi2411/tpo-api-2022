import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Divider from '@mui/material/Divider';
import Stack from "@mui/material/Stack";


const CursosProfesor = () => {
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
            id:1,
            nombreMateria:"Analisis Matemático",
            horario:"15:30hs-16:30hs",
            dias:"Lunes, Martes",
            costo:"5000",
            comentario1:"Comentame esta",
            comentario2:"Lo que dijo el primero",
        },
        {
            id:2,
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
                    <Button variant="text" sx={{color:"black"}} href="/solicitud" fullWidth >
                        Solicitudes
                    </Button>
                </Stack>
            </Paper>

            <Grid container xs={12} alignContent="center" justifyContent={"center"}>
                {resultsList.map((singleResult, index) => (
                    <Grid container xs={5} sx={{ backgroundColor: "#e1f7f1",border: " 2px solid #117c6f",borderRadius:2, margin:4, alignItems:"center",}}>
                        <Grid container xs={12} alignItems="center">
                            <Grid container xs={4} marginLeft={3}>
                                <Grid item>
                                    <Typography component="div" variant="h7">
                                        {`${singleResult.nombreMateria}`}
                                    </Typography>
                                </Grid> 
                            </Grid>
                            <Grid container xs={7.5} alignItems="center" justifyContent={"flex-end"}>
                                <Grid item xs={2} sx={{ display:'flex', justifyContent:"flex-end", alignItems:"center"}}>
                                    <IconButton aria-label="delete">
                                        <DeleteIcon fontSize="large"/>
                                    </IconButton>
                                </Grid>
                                <Grid container xs={8} justifyContent="space-evenly" alignItems="center">
                                    <Grid item alignItems="center">
                                        <Typography component="div" variant="body1">
                                            Oculto
                                        </Typography>
                                    </Grid>
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
                                    <Grid item justifyContent={"center"} alignItems="center">
                                        <Typography component="div" variant="body1" justifyContent={"flex-end"}>
                                            Publico
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container xs={12}>
                            <Grid item xs={12}>
                                <Divider variant="middle"/>
                            </Grid>
                        </Grid>
                        <Grid container xs={4} direction={"column"} marginLeft={3}>
                            <Grid item>
                                <Typography component="div" variant="h7">
                                    Horario: {`${singleResult.horario}`}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography component="div" variant="h7">
                                    Dias: {`${singleResult.dias}`}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography component="div" variant="h7">
                                    Tipo: {`${singleResult.dias}`}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography component="div" variant="h7">
                                    Frecuencia: {`${singleResult.dias}`}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography component="div" variant="h7">
                                    Costo: ${`${singleResult.costo}`}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container xs={7.5} direction={"column"}>
                            <Grid container justifyContent={"center"}>
                                <Button>Ingresar a los Comentarios</Button>
                            </Grid>
                            <Grid container justifyContent="center">
                                <Button>Modificar Clase</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </div>
    )

}

export default CursosProfesor