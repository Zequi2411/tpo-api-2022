import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';

const theme = createTheme();


function CrearCursos() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          nombrecurso: data.get('nombrecurso'),
          nombremateria: data.get('nombremateria'),
          costo: data.get('costo'),
        });
      };
    
    
      const opcionesinicio = [
        {label: '8:00'},
        {label: '8:30'},
        {label: '9:00'},
        {label: '9:30'},
        {label: '10:00'},
        {label: '10:30'},
        {label: '11:00'},
        {label: '11:30'},
        {label: '12:00'},
        {label: '12:30'},
        {label: '13:00'},
        {label: '13:30'},
        {label: '14:00'},
        {label: '14:30'},
        {label: '15:00'},
        {label: '15:30'},
        {label: '16:00'},
        {label: '16:30'},
        {label: '17:00'},
        {label: '17:30'},
        {label: '18:00'},
        {label: '18:30'},
        {label: '19:00'},
        {label: '19:30'},
        {label: '20:00'},
        {label: '20:30'},
      ]

      const opcionesfin = [
        {label: '8:30'},
        {label: '9:00'},
        {label: '9:30'},
        {label: '10:00'},
        {label: '10:30'},
        {label: '11:00'},
        {label: '11:30'},
        {label: '12:00'},
        {label: '12:30'},
        {label: '13:00'},
        {label: '13:30'},
        {label: '14:00'},
        {label: '14:30'},
        {label: '15:00'},
        {label: '15:30'},
        {label: '16:00'},
        {label: '16:30'},
        {label: '17:00'},
        {label: '17:30'},
        {label: '18:00'},
        {label: '18:30'},
        {label: '19:00'},
        {label: '19:30'},
        {label: '20:00'},
        {label: '20:30'},
        {label: '21:00'},
      ]
    
    
      return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="1920px" style={{ height:"800px" }}>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 10,
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
                  <Grid item xs={12} sm={4} sx={{ mt:2 }} >
                    <h5> Ingresar Nombre del Curso: </h5>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <TextField
                      required
                      fullWidth
                      id="nombrecurso"
                      label="Nombre del Curso"
                      name="nombrecurso"
                    />
                  </Grid>
                </Grid>
                
                <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} sm={4} sx={{ mt:2 }} >
                    <h5> Ingresar nombre de la Materia: </h5>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <TextField
                      required
                      fullWidth
                      id="nombremateria"
                      label="Nombre de la Materia"
                      name="nombremateria"
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
                      renderInput={(params) => <TextField {...params} label="Horario de Fin" />}
                    />
                  </Grid>
                </Grid>
                
                <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} sm={2}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="lun" />
                  </FormGroup>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="mar" />
                  </FormGroup>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="mie" />
                  </FormGroup>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="jue" />
                  </FormGroup>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="vie" />
                  </FormGroup>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="sab" />
                  </FormGroup>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="dom" />
                  </FormGroup>
                </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt:1 }}>
                  <Grid item xs={12} sm={1.5} sx={{ mt:2 }} >
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

                <Grid container spacing={2} sx={{ mt:1 }}>
                    <Grid item xs={12} sm={4} sx={{ mt:2 }} >  
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mb: 2 }}
                        >
                        Crear Curso
                        </Button>
                    </Grid>

                    <Grid item xs={12} sm={4} sx={{ mt:2 }} />
                    
                    <Grid item xs={12} sm={4} sx={{ mt:2 }} >
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