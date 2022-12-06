import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { AccountCircle } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { signup } from '../Controller/miApp.controller';

const carreras = [
    {
        value: 'prim',
        label: 'Primario',
    },
    {
        value: 'sec',
        label: 'Secundario',
    },
    {
        value: 'uni',
        label: 'Universitario',
    },
];


const theme = createTheme();

function RegistroAlumno() {

    const [fechaSeleccionada, CambiarFechaSeleccionada] = useState(new Date());
    const [MostrarAlumno, setMostrarAlumno] = useState(false)
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [usuarioValido, setUsuarioValido] = React.useState(false);

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

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }


    const opciones = [
        { label: '¿Cual es tu comida favorita?' },
        { label: '¿Cual es tu libro favorito?' },
        { label: '¿Cual es el nombre de tu primer mascota?' }
    ]

    //Ejecuto el endopoint para validar login
    const validarSignup = async function () {
        let datos = {
            email: email,
            password: password
        }
        let getSignup = await signup(datos);
        if (getSignup.rdo === 0) {
            setUsuarioValido(true);
        }
        if (getSignup.rdo === 1) {
            alert(getSignup.mensaje)
        }

    }

    //Valido campos y llamo endpoint
    const signupUser = () => {
        if (email !== "" && password !== "") {
            validarSignup();
        }
        else {
            alert("Debe completar usuario y password");
        }
    }


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="1920px" sx={{ marginBottom: 8 }}>
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
                        <AccountCircle />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Registrate
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
                        <Grid container spacing={2} sx={{ mt: 2 }} alignItems={"center"}>
                            <Grid item xs={12} sm={4}  >
                                <h5>Indique nivel academico: </h5>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <TextField
                                    required
                                    fullWidth
                                    select
                                    id="nivelacademico"
                                    type="Select"
                                // value={nombrecurso}
                                // onChange={(e) => setNombreCurso(e.target.value)}
                                >
                                    {carreras.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ mt: 4 }} justifyContent={"center"}>
                            <TextField
                                id="date"
                                label="Fecha de Nacimiento"
                                type="date"
                                sx={{ width: 220 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
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
    );
}

export default RegistroAlumno
