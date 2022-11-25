import { Avatar, Divider, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import React from 'react'




const DetalleClase = ({Item}) => { 
  return (
    <Grid container margin={2} justifyContent={"space-evenly"}>
        <Grid container xs={8} sx={{backgroundColor: "#e1f7f1", border: " 2px solid #117c6f"}}>
            <Grid container xs={12}>
                <Grid item marginLeft={2}>
                    <Typography>
                        {Item.title}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container xs={12}>
                <Grid item xs={12}>
                    <Divider variant="middle"/>
                </Grid>
            </Grid>
            <Grid container xs={12} marginTop={1}>
                <Grid container xs={3}>
                    <Grid item xs={12} justifyContent={"center"} alignItems={"flex-start"}>
                        <Avatar>
                        </Avatar>    
                    </Grid>
                </Grid>
                <Grid container xs={6} direction={"column"}>
                    <Grid container direction={"column"}>
                        <Grid item>
                            <Typography variant='body2' fontWeight={"bold"}>
                                Gabriel
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='body2'>
                                Clases Particulares de Ingles
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction={"column"} marginLeft={2} marginTop={1}>
                        <Grid container direction={"row"} spacing={0.5}>
                            <Grid item>
                            <Typography variant='body2' fontWeight={"bold"}>
                                Para alumnos de nivel: 
                            </Typography>
                            </Grid>
                            <Grid item>
                            <Typography variant='body2'>
                                Primario
                            </Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction={"row"} spacing={0.5}>
                            <Grid item>
                            <Typography variant='body2' fontWeight={"bold"}>
                                Nivel: 
                            </Typography>
                            </Grid>
                            <Grid item>
                            <Typography variant='body2'>
                                Medio
                            </Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction={"row"} spacing={0.5}>
                            <Grid item>
                            <Typography variant='body2' fontWeight={"bold"}>
                                Duración: 
                            </Typography>
                            </Grid>
                            <Grid item>
                            <Typography variant='body2'>
                                18.30 a 20.30
                            </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid container direction={"row"} spacing={0.5}>
                            <Grid item>
                            <Typography variant='body2' fontWeight={"bold"}>
                                Duración: 
                            </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container xs={3}>

                </Grid>
            </Grid>
        </Grid>
        <Grid container xs={3} sx={{backgroundColor: "#e1f7f1", border: " 2px solid #117c6f"}}>

        </Grid>
    </Grid>
  )
}

export default DetalleClase