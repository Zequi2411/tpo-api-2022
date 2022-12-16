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
import { useState } from 'react';
import SchoolIcon from '@mui/icons-material/School';
import { signupprofesor } from '../Controller/miApp.controller';
import { Navigate, useNavigate } from 'react-router';
import MenuItem from '@mui/material/MenuItem';

const theme = createTheme();

const opciones = [
    { value: '¿Cual es tu comida favorita?', label: '¿Cual es tu comida favorita?' },
    { value: '¿Cual es tu libro favorito?', label: '¿Cual es tu libro favorito?' },
    { value: '¿Cual es el nombre de tu primer mascota?', label: '¿Cual es el nombre de tu primer mascota?' }
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
            respuesta: data.get('respuesta'),
            titulo: data.get('titulo'),
            experiencia: data.get('experiencia')
        });
    };

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [nombre, setNombre] = React.useState('');
    const [apellido, setApellido] = React.useState('');
    const [telefono, setTelefono] = React.useState('');
    const [pregunta, setPregunta] = React.useState('');
    const [respuesta, setRespuesta] = React.useState('');
    const [titulo, setTitulo] = React.useState('');
    const [experiencia, setExperiencia] = React.useState('');
    const [usuarioValido, setUsuarioValido] = React.useState(false);

    const handleChange1 = (event) => {
        setPregunta(event.target.value);
    }

    const signupUser = () => {
        if (
            (nombre !== "" && password !== "",
            apellido !== "",
            email !== "" && telefono !== "",
            respuesta !== "", titulo !=="",
            experiencia !=="")
          ) {
            validarSignup();
          } else {
            alert("Alguno de los campos esta vacio");
          }
    }

    const validarSignup = async function () {
        let datos = {
            email: email,
            password: password,
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            pregunta: pregunta,
            respuesta: respuesta,
            titulo: titulo,
            experiencia: experiencia,
            perfil:true,
        }
        let getSignup = await signupprofesor(datos);
        if (getSignup.rdo === 0) {
            setUsuarioValido(true);
        }
        if (getSignup.rdo === 1) {
            alert(getSignup.mensaje)
        }

    }

    const redirect = () => {
        if (usuarioValido) {
          return <Navigate to="/" />;
        }
      };

    return (
        <ThemeProvider theme={theme}>
            {redirect()}
            <Container component="main" maxWidth="1920px" sx={{ marginBottom: 8, }}>
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
                                    onChange={(e) => setNombre(e.target.value)}
                                    value={nombre}
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
                                    onChange={(e) => setApellido(e.target.value)}
                                    value={apellido}
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
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
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
                                    onChange={(e) => setTelefono(e.target.value)}
                                    value={telefono}
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
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{ mt: 0.5, mb: 1 }}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    select
                                    value={pregunta}
                                    onChange={handleChange1}
                                    id="pregunta"
                                    name="pregunta"
                                    type="Select"
                                >
                                    {opciones.map((option) => (
                                        <MenuItem key={option.value} value={option.value} onChange={(e) => setPregunta(e.target.value)}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="respuesta"
                                    label="Respuesta"
                                    id="respuesta"
                                    onChange={(e) => setRespuesta(e.target.value)}
                                    value={respuesta}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{ mt: 2 }} alignItems={"center"}>
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
                                    onChange={(e) => setTitulo(e.target.value)}
                                    value={titulo}
                                />
                            </Grid>
                        </Grid>
                        <Grid container sx={{ mt: 4 }} justifyContent={"center"}>
                            <TextField
                                id="experiencia"
                                label="Experiencia"
                                name="experiencia"
                                multiline
                                rows={4}
                                fullWidth
                                onChange={(e) => setExperiencia(e.target.value)}
                                value={experiencia}
                            />
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={signupUser}
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
