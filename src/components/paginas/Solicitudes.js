import React from 'react';
import Grid  from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";

function Solicitudes() {

    const [resultsList, setresultsList] = useState([
        {

        }
    ]);

  return (
    <Box sx={{ flexGrow: 1, marginLeft:15, marginRight:15, marginTop:6, marginBottom:6, alignItems:"center"}}>
        <Grid container spacing={2} bgcolor={"#d8e8e8"} alignContent={"center"} alignItems={"center"}>
            <Grid xs={10} md={4} lg={3}>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems:"center"}}>
                    <Avatar sx={{ m: 1, bgcolor: 'red' }}>
                        <AccountCircle />
                    </Avatar>
                    <Typography component="div" variant="h5">
                        Cosme Fulanito
                    </Typography>
                </Box>
            </Grid>
            <Grid container xs={12} md={7} lg={8} direction={'row'} spacing={4}>
                <Grid xs={12} md={12} lg={12}>
                    <Box sx={{ display: 'flex',alignItems:"left",height: 50, border: '1px dashed grey' }}>
                        <Typography component="div" variant="h7">
                            Clase Ejemplo - Materia Ejemplo
                        </Typography>
                    </Box>
                </Grid>
                <Grid xs={12} md={7} lg={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems:"left"}}>
                            <Typography component="div" variant="h7">
                                Telefono:
                            </Typography>
                            <Typography component="div" variant="h7">
                                Mail:
                            </Typography>
                            <Typography component="div" variant="h7">
                                Horario Referencia:
                            </Typography>
                            <Typography component="div" variant="h7">
                                Estado:
                            </Typography>
                        </Box> 
                    </Box>
                </Grid>
                <Grid xs={12} md={5} lg={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                        <Box sx={{ display: 'flex'}}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Comentario"
                                multiline
                                rows={3}
                                fullWidth
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around"}}>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                >
                                    Aceptar
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                >
                                Rechazar
                            </Button>
                        </Box>   
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Solicitudes
