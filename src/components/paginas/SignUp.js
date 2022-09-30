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
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const theme = createTheme();

function SingUp() {

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


  const opciones = [
    {label: '¿Cual es tu comida favorita?'},
    {label: '¿Cual es tu libro favorito?'},
    {label: '¿Cual es el nombre de tu primer mascota?'}
  ]


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="s" style={{ height:"600px" }}>
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
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }} >
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
                  label="Dirección"
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
            <Grid container spacing={2}>
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

            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Alumno" />
                </FormGroup>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Profesor" />
                </FormGroup>
              </Grid>
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
  );
}

export default SingUp;