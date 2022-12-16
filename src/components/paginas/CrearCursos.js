import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
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

  const handleChange1 = (event) => {
    setClase(event.target.value);
  };

  const handleChange2 = (event) => {
    setFrecuencia(event.target.value);
  };

  const handleChange3 = (event) => {
    setHoraInicio(event.target.value);
  };

  const handleChange4 = (event) => {
    setHoraFin(event.target.value);
  };

  const handleChange5 = (event) => {
    setDias(event.target.value);
  };

  const [horaFin, setHoraFin] = useState('');

  const [dias, setDias] = useState('');

  const [tipoClase, setClase] = useState('');

  const [tipoFrecuencia, setFrecuencia] = useState('');

  const [costo, setCosto] = useState('');



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
    {
      value: '8:00',
      label: '8:00'
    },
    {
      value: '8:30',
      label: '8:30'
    },
    {
      value: '9:00',
      label: '9:00'
    },
    {
      value: '9:30',
      label: '9:30'
    },
    {
      value: '10:00',
      label: '10:00'
    },
    {
      value: '10:30',
      label: '10:30'
    },
    {
      value: '11:30',
      label: '11:30'
    },
    {
      value: '12:00',
      label: '12:00'
    },
    {
      value: '12:30',
      label: '12:30'
    },
    {
      value: '13:00',
      label: '13:00'
    },
    {
      value: '13:30',
      label: '13:30'
    },
    {
      value: '14:00',
      label: '14:00'
    },
    {
      value: '14:30',
      label: '14:30'
    },
    {
      value: '15:00',
      label: '15:00'
    },
    {
      value: '15:30',
      label: '15:30'
    },
    {
      value: '16:00',
      label: '16:00'
    },
    {
      value: '16:30',
      label: '16:30'
    },
    {
      value: '17:00',
      label: '17:00'
    },
    {
      value: '17:30',
      label: '17:30'
    },
    {
      value: '18:00',
      label: '18:00'
    },

    {
      value: '18:30',
      label: '18:30'
    },
    {
      value: '19:00',
      label: '19:00'
    },
    {
      value: '19:30',
      label: '19:30'
    },
    {
      value: '20:00',
      label: '20:00'
    },
    {
      value: '20:30',
      label: '20:30'
    },
  ]

  const opcionesfin = [
    {
      value: '8:30',
      label: '8:30'
    },
    {
      value: '9:00',
      label: '9:00'
    },
    {
      value: '9:30',
      label: '9:30'
    },
    {
      value: '10:00',
      label: '10:00'
    },
    {
      value: '10:30',
      label: '10:30'
    },
    {
      value: '11:30',
      label: '11:30'
    },
    {
      value: '12:00',
      label: '12:00'
    },
    {
      value: '12:30',
      label: '12:30'
    },
    {
      value: '13:00',
      label: '13:00'
    },
    {
      value: '13:30',
      label: '13:30'
    },
    {
      value: '14:00',
      label: '14:00'
    },
    {
      value: '14:30',
      label: '14:30'
    },
    {
      value: '15:00',
      label: '15:00'
    },
    {
      value: '15:30',
      label: '15:30'
    },
    {
      value: '16:00',
      label: '16:00'
    },
    {
      value: '16:30',
      label: '16:30'
    },
    {
      value: '17:00',
      label: '17:00'
    },
    {
      value: '17:30',
      label: '17:30'
    },
    {
      value: '18:00',
      label: '18:00'
    },

    {
      value: '18:30',
      label: '18:30'
    },
    {
      value: '19:00',
      label: '19:00'
    },
    {
      value: '19:30',
      label: '19:30'
    },
    {
      value: '20:00',
      label: '20:00'
    },
    {
      value: '20:30',
      label: '20:30'
    },
    {
      value: '21:00',
      label: '21:00'
    },
  ]

  const Dias = [
    {
      value:'Lunes',
      label:'Lunes'
    },
    {
      value:'Martes',
      label:'Martes'
    },
    {
      value:'Miercoles',
      label:'Miercoles'
    },
    {
      value:'Jueves',
      label:'Jueves'
    },
    {
      value:'Viernes',
      label:'Viernes'
    },
    {
      value:'Sabado',
      label:'Sabado'
    },
    {
      value:'Domingo',
      label:'Domingo'
    },
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
    const formData = new URLSearchParams();
    formData.append("nombre", nombrecurso);
    formData.append("materia", nombremateria);
    formData.append("tipo", tipoClase);
    formData.append("frecuencia", tipoFrecuencia);
    formData.append("horainicio", horainicio);
    formData.append("horaFin", horaFin);
    formData.append("costo", costo);
    formData.append("dias", dias);

    console.log(formData);

    try {
      let response = await fetch('http://localhost:4000/cursos/agregarCurso', {
        method: 'POST', // or 'PUT'
        mode: "cors",
        headers: {
          'Accept': 'application/x-www-form-urlencoded',
          // 'x-access-token': WebToken.webToken,
          'Origin': 'http://localhost:3000',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData,

      });

      let rdo = response.status;
      switch (rdo) {
        case 200: {
          return { rdo: 0, mensaje: "El curso se cargo con exito" }; //correcto
        }
        default: {
          //otro error
          return { rdo: 1, mensaje: "Ha ocurrido un error" };
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };

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
              <TextField
                id="horainicio"
                select
                label="Seleccione la Hora de Inicio"
                value={horainicio}
                onChange={handleChange3}
                fullWidth
              >
                {opcionesinicio.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                id="horafin"
                select
                label="Seleccione la Hora de Fin"
                value={horaFin}
                onChange={handleChange4}
                fullWidth
              >
                {opcionesfin.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  value={tipoClase}
                  onChange={handleChange1}
                  label="Seleccione el Tipo de Clase"
                >
                  {Clases.map((option) => (
                    <MenuItem key={option.value} value={option.value} onChange={(e) => setClase(e.target.value)}>
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
                  onChange={handleChange2}
                  label="Seleccione la Frecuencia"
                >
                  {Frecuencias.map((option) => (
                    <MenuItem key={option.value} value={option.value} onChange={(e) => setFrecuencia(e.target.value)}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12}>
              <TextField
                id="dia"
                select
                multiple
                label="Seleccione el Día de Cursada"
                value={dias}
                onChange={handleChange5}
                fullWidth
              >
                {Dias.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
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
                  type="text"
                  value={costo}
                  onChange={(e) => setCosto(e.target.value)}
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
/*   ) : (
    <Grid container xs={12} height="300px" justifyContent={"center"}>
      <Grid item>
        <Typography variant="h3">No tiene acceso a esta página</Typography>
      </Grid>
    </Grid> */
  );
}

export default CrearCursos