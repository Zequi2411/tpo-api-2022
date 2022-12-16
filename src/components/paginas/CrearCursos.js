import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';
import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';

import Constantes from "./Constantes/Constantes";
import { ToastContainer, toast } from 'react-toastify';

const theme = createTheme();

function CrearCursos() {

  const [nombrecurso, setNombreCurso] = useState('');

  const [nombremateria, setNombreMateria] = useState('');

  const [horainicio, setHoraInicio] = useState('');

  //const handleChange = (event, value) => setHoraInicio(value);

  const handleChange = (event) => {
    setClase(event.target.value);
    setFrecuencia(event.target.value);
  };

  const [horaFin, setHoraFin] = useState('');

  const [lunes, setLunes] = useState('');

  const [tipoClase, setClase] = useState();

  const [tipoFrecuencia, setFrecuencia] = useState();



  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombrecurso) {
      alert('Por Favor Agregue el Nombre del Curso')
      return
    }

    console.log(nombrecurso);

    if (!nombremateria) {
      alert('Por Favor Agregue el Nombre de la Materia')
      return
    }

    console.log(nombremateria);

    console.log.apply(horainicio);

    manejarEnvioDeFormulario();

  };


  const opcionesinicio = [
    { hora: '8:00' },
    { hora: '8:30' },
    { hora: '9:00' },
    { hora: '9:30' },
    { hora: '10:00' },
    { hora: '10:30' },
    { hora: '11:00' },
    { hora: '11:30' },
    { hora: '12:00' },
    { hora: '12:30' },
    { hora: '13:00' },
    { hora: '13:30' },
    { hora: '14:00' },
    { hora: '14:30' },
    { hora: '15:00' },
    { hora: '15:30' },
    { hora: '16:00' },
    { hora: '16:30' },
    { hora: '17:00' },
    { hora: '17:30' },
    { hora: '18:00' },
    { hora: '18:30' },
    { hora: '19:00' },
    { hora: '19:30' },
    { hora: '20:00' },
    { hora: '20:30' },
  ]

  const opcionesfin = [
    { hora: '8:30' },
    { hora: '9:00' },
    { hora: '9:30' },
    { hora: '10:00' },
    { hora: '10:30' },
    { hora: '11:00' },
    { hora: '11:30' },
    { hora: '12:00' },
    { hora: '12:30' },
    { hora: '13:00' },
    { hora: '13:30' },
    { hora: '14:00' },
    { hora: '14:30' },
    { hora: '15:00' },
    { hora: '15:30' },
    { hora: '16:00' },
    { hora: '16:30' },
    { hora: '17:00' },
    { hora: '17:30' },
    { hora: '18:00' },
    { hora: '18:30' },
    { hora: '19:00' },
    { hora: '19:30' },
    { hora: '20:00' },
    { hora: '20:30' },
    { hora: '21:00' },
  ]

  const Clases = [
    {
      value: 'Individual',
      label: 'Individual'
    },
    {
      value: 'Grupal',
      label: 'Grupal'
    },
  ]

  const Frecuencias = [
    {
      value: 'Única',
      label: 'Única'
    },
    {
      value: 'Semanal',
      label: 'Semanal'
    },
    {
      value: 'Mensual',
      label: 'Mensual'
    },
  ]

  const manejarEnvioDeFormulario = async function () {

    // Codificar nuestro curso como JSON
    let datos = {
      nombre: nombrecurso,
      materia: nombremateria,
      //horaInicio: horaInicio,
      //horaFin: horaFin,
      tipo: tipoClase,
      frecuencia: tipoFrecuencia,
      //precio: precio,
      calificacion: 0
    }

    const cargaUtil = JSON.stringify(datos);
    console.log(cargaUtil)
    // ¡Y enviarlo!
    let response = await fetch('http://localhost:4000/cursos/agregarCurso', {
      method: 'POST', // or 'PUT'
      mode: "cors",
      headers: {
        'Accept': 'application/x-www-form-urlencoded',
        // 'x-access-token': WebToken.webToken,
        'Origin': 'http://localhost:3000',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: cargaUtil,

    });

    let rdo = response.status;
    console.log("response", response);
    let data = await response.json();
    console.log("jsonresponse", data);

    //const exitoso = await respuesta.json();
    if (rdo) {
      toast('Curso guardado exitosamente', {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Error guardando. Intenta de nuevo");
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="1920px" sx={{ marginBottom: 4 }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 7,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Registrar Nuevo Curso
          </Typography>
          <Box component="form" onSubmit={handleSubmit} maxWidth="1400px" noValidate sx={{ mt: 3 }} >

            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} sx={{ mt: 2 }} >
                <h5> Ingresar Nombre del Curso: </h5>
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  required
                  fullWidth
                  id="nombrecurso"
                  hora="Nombre del Curso"
                  type="text"
                  value={nombrecurso}
                  onChange={(e) => setNombreCurso(e.target.value)}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={4} sx={{ mt: 2 }} >
                <h5> Ingresar nombre de la Materia: </h5>
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  required
                  fullWidth
                  id="nombremateria"
                  hora="Nombre de la Materia"
                  value={nombremateria}
                  onChange={(e) => setNombreMateria(e.target.value)}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <Autocomplete
                  disablePortal
                  id="horarioinicio"
                  options={opcionesinicio}
                  margin="normal"
                  required
                  fullWidth
                  getOptionLabel={(option) => option.hora}
                  onChange={handleChange}
                  filterSelectedOptions
                  renderInput={(params) => <TextField {...params} label="Horario de Inicio" />}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Autocomplete
                  disablePortal
                  id="horariofin"
                  options={opcionesfin}
                  margin="normal"
                  required
                  fullWidth
                  getOptionLabel={(option) => option.hora}
                  onChange={handleChange}
                  filterSelectedOptions
                  renderInput={(params) => <TextField {...params} label="Horario de Fin" />}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  value={tipoClase}
                  onChange={handleChange}
                  label="Seleccione el Tipo de Clase"
                >
                  {Clases.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  value={tipoFrecuencia}
                  onChange={handleChange}
                  label="Seleccione la Frecuencia"
                >
                  {Frecuencias.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={2}>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="lun" />
                </FormGroup>
              </Grid>
              <Grid item xs={12} sm={2}>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="mar" />
                </FormGroup>
              </Grid>
              <Grid item xs={12} sm={2}>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="mie" />
                </FormGroup>
              </Grid>
              <Grid item xs={12} sm={2}>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="jue" />
                </FormGroup>
              </Grid>
              <Grid item xs={12} sm={2}>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="vie" />
                </FormGroup>
              </Grid>
              <Grid item xs={12} sm={2}>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="sab" />
                </FormGroup>
              </Grid>
              <Grid item xs={12} sm={2}>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="dom" />
                </FormGroup>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={1.5} sx={{ mt: 2 }} >
                <h5> Costo:    $</h5>
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  fullWidth
                  id="costo"
                  name="costo"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={4} sx={{ mt: 2 }} >
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mb: 2 }}
                >
                  Crear Curso
                </Button>
              </Grid>

              <Grid item xs={12} sm={4} sx={{ mt: 2 }} />

              <Grid item xs={12} sm={4} sx={{ mt: 2 }} >
                <Link to='/cursosprofesor'>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mb: 2 }}
                  >
                    Cancelar Curso
                  </Button>
                </Link>
              </Grid>
            </Grid>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default CrearCursos