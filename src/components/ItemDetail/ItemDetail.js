import * as React from 'react';
import { Avatar, Button, Divider, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Rating from '@mui/material/Rating'

const ItemDetail = ({ Item }) => {
    const rating = 3;
    return (
        <Grid container margin={2} justifyContent={"space-evenly"}>
            <Grid container xs={8} justifyContent={"center"} sx={{backgroundColor: "#e1f7f1", border: " 2px solid #117c6f", borderRadius:2}} marginBottom={2}>
                <Grid container xs={12}>
                    <Grid item marginLeft={2}>
                        <Typography variant="h5">
                            {Item.title}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container xs={12} marginTop={1} marginBottom={1}>
                    <Grid item xs={12}>
                        <Divider variant="middle"/>
                    </Grid>
                </Grid>
                <Grid container xs={12} marginTop={1}>
                    <Grid container xs={3} justifyContent={"center"} >
                        <Grid item justifyContent={"center"} >
                            <Avatar sx={{ width: 100, height: 100 }} src={Item.image}/>    
                        </Grid>
                    </Grid>
                    <Grid container xs={6} direction={"column"}>
                        <Grid container direction={"column"}>
                            <Grid item>
                                <Typography variant='body2' fontWeight={"bold"}>
                                    {Item.profesor}
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
                        <Grid container marginLeft={2} marginTop={1}>
                            <Grid container direction={"row"} spacing={0.5}>
                                <Grid item>
                                    <Typography variant='body2'>
                                        {Item.description} 
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container marginLeft={2} marginTop={1}>
                            <Grid container direction={"row"} spacing={0.5}>
                                <Grid item>
                                    <Typography variant='body2' fontWeight={"bold"}>
                                        Costo: 
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='body2'>
                                        {Item.price} 
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container xs={3} justifyContent={"center"} alignItems={"center"} marginBottom={8}>
                        <Grid item>
                            <Rating value={rating} readOnly />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container xs={12} direction={"column"} justifyContent={"center"} alignItems={"center"} marginTop={2}>
                    <Grid container xs={8} spacing={0.5} justifyContent={"center"}>
                        <Grid item >
                            <Typography variant='body2' fontWeight={"bold"}>
                                Valoraciones de alumnos y ex-alumnos de
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='body2' fontWeight={"bold"}>
                                {Item.profesor}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container xs={8} marginBottom={5}>
                        <Grid container xs={12} sx={{border: " 2px solid #117c6f"}}>
                            <Grid container xs={8} direction={"column"}>
                                <Grid item margin={1}>
                                    <Typography>{Item.profesor}</Typography>
                                </Grid>
                                <Grid item margin={1}>
                                    <Typography>hola que tal todo el mundo</Typography>
                                </Grid>
                            </Grid>
                            <Grid container xs={4} alignItems={"center"} justifyContent={"center"}>
                                <Grid item>
                                    <Rating value={rating} readOnly />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container xs={3} maxHeight="370px">
                <Grid container xs={12} sx={{border: " 2px solid #117c6f", borderRadius:2}} >
                    <Grid container xs={12} margin={2}>
                        <Grid item>
                            <TextField label={"Telefono"} size="small"/>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} margin={2}>
                        <Grid item>
                            <TextField label={"Mail"} size="small"/>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} spacing={1} margin={2} justifyContent="space-between">
                        <Grid item>
                            <TextField label={"Hora de Inicio"} size="small"/>
                        </Grid>
                        <Grid item>
                            <TextField label={"Hora de Fin"} size="small"/>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} margin={2}>
                        <Grid item xs={12}>
                            <TextField label={"Mensaje"} size="small" fullWidth multiline rows={2}/>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} justifyContent={"center"} marginBottom={2}>
                        <Grid item>
                            <Button>Contratar Clase</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ItemDetail
