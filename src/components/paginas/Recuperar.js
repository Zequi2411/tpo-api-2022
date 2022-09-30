import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';




const theme = createTheme();

function Recuperar() {

    // const RecuperarUsuario = ({onAdd}) => {
    //     const [email, setEmail] = useState('')
    // }


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    // onAdd({email})
    // setEmail('')
    
    console.log({
      email: data.get('email'),
      respuesta: data.get('respuesta'),
      password: data.get('contraseña')
    });
  };

  const onSubmit = (e) => {
    e.preventDefault()
    // if(!email){
    //   alert('Por Favor Ingresar un Email')
    //   return  
    // }
  }


  const opciones = [
    {label: '¿Cual es tu comida favorita?'},
    {label: '¿Cual es tu libro favorito?'},
    {label: '¿Cual es el nombre de tu primer mascota?'}
  ]

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="s" style={{ height:"500px" }}>
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
            <BuildCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Recuperar
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Dirección"
              name="email"
              autoComplete="email"
              autoFocus
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
                />
              </Grid>
            </Grid>
            <TextField
              margin="normal"
              required
              fullWidth
              name="contraseña"
              label="Ingresar Nueva Contraseña"
              type="password"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onSubmit={onSubmit}
            >
            Cambiar de Contraseña
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Recuperar;