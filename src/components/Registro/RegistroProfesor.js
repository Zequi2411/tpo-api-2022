import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import SchoolIcon from '@mui/icons-material/School';

const theme = createTheme();

    const opciones = [
        {label: '¿Cual es tu comida favorita?'},
        {label: '¿Cual es tu libro favorito?'},
        {label: '¿Cual es el nombre de tu primer mascota?'}
    ]

function RegistroProfesor() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          nombre: data.get('nombre'),
          apellido: data.get('apellido'),
          email: data.get('email'),
          contraseña: data.get('contraseña'),
          respuesta: data.get('respuesta')
    
        });
      };
    
  return (
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="1920px" sx={{marginBottom:8,}}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <SchoolIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Registrate como Profesor
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}  >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="given-name"
                        name="nombre"
                        required
                        fullWidth
                        id="nombre"
                        label="Nombre"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id="apellido"
                        label="Apellido"
                        name="apellido"
                        autoComplete="family-name"
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Correo"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="telefono"
                        label="Telefono"
                        name="telefono"
                        autoFocus
                    />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="contraseña"
                        label="Contraseña"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mt: 0.5, mb:1 }}>
                <Grid item xs={12} sm={6}>
                    <Autocomplete
                        disablePortal
                        id="pregunta-seguridad"
                        options={opciones} 
                        margin="normal"
                        required
                        fullWidth
                        renderInput={(params) => <TextField {...params} label="Pregunta de seguridad" />}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        name="respuesta"
                        label="Respuesta"
                        id="respuesta"
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mt:2 }} alignItems={"center"}>
                <Grid item xs={12} sm={3}  >
                    <h5>Titulo: </h5>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <TextField
                        required
                        fullWidth
                        name="titulo"
                        label="Ingrese su Titulo"
                        id="titulo"
                    />
                </Grid>
            </Grid>
            <Grid container sx={{ mt: 4 }} justifyContent={"center"}>
                <TextField
                    id="experiencia"
                    label="Experiencia"
                    multiline
                    rows={4}
                    fullWidth
                />
            </Grid>
  
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Crear Cuenta
            </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
  )
}

export default RegistroProfesor
