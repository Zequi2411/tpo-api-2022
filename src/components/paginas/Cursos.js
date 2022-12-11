import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';





function Cursos() {
  const [value, setValue] = React.useState();
  const [resultsList, setResultsList] = React.useState([
    {
      title: "Inglés americano",
      materia: "Inglés",
      profesor: "Julieta",
      ubicacion: "Buenos Aires",
      tipo: "Grupal",
      frecuencia: "Semanal",
      price: "$20000",
      image: "/images/idiomas.jpg",
      description: "Es mi idioma preferido , después del castellano. Con estás clases intento Lograr independencia económica y de cargas horarias. Cambiar la profesión",
      rating: 0,
    },
    {
      title: "Inglés americano",
      materia: "Inglés",
      profesor: "Julieta",
      ubicacion: "Buenos Aires",
      tipo: "Grupal",
      frecuencia: "Semanal",
      price: "$20000",
      image: "/images/idiomas.jpg",
      description: "Es mi idioma preferido , después del castellano. Con estás clases intento Lograr independencia económica y de cargas horarias. Cambiar la profesión",
      rating: 0,
    },
    {
      title: "Inglés americano",
      materia: "Inglés",
      profesor: "Julieta",
      ubicacion: "Buenos Aires",
      tipo: "Grupal",
      frecuencia: "Semanal",
      price: "$20000",
      image: "/images/idiomas.jpg",
      description: "Es mi idioma preferido , después del castellano. Con estás clases intento Lograr independencia económica y de cargas horarias. Cambiar la profesión",
      rating: 0,
    }
  ]);
  
  return (
    <Grid container >
      <Grid container xs={12} alignItems="center" sx={{marginTop:2, marginLeft:6, marginBottom:2,}}>
        <Grid item>
          <Button href="/buscarcurso">Buscar Clases</Button>
        </Grid>
        <Grid item>
          <SearchIcon />
        </Grid>
      </Grid>
      <Grid container xs={12} >
      <Grid container xs={7}>
      {resultsList.map((singleResult, index) => (
      <Grid container xs={12} justifyContent={"center"} sx={{marginTop:2, marginBottom:3,}}>
        <Grid container xs={10} sx={{backgroundColor: "#e1f7f1",border: " 2px solid #117c6f", borderRadius:2}} justifyContent={"center"} >
          <Grid container xs={4} alignItems="center" direction={"column"} justifyContent={"center"}>
            <Grid item alignContent={"center"}>
              <Typography>Calificación</Typography>
            </Grid>
            <Grid item alignItems={"center"}>
              <Rating
                name="calificacion"
                value={singleResult.rating}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Grid>
          </Grid>
          <Grid container xs={8} direction={"column"}>
            <Grid container xs={12} sx={{marginBottom:2}}>
              <Grid item xs={12} sx={{marginBottom:1}}>
                <Typography variant="h5">{singleResult.title}</Typography>
              </Grid>
              <Grid item xs={12} sx={{ marginRight: 6 }}>
                <Divider />
              </Grid>
            </Grid>
            <Grid container xs={12}>
              <Grid container xs={3} direction="column">
                <Grid item xs={12}>
                  <Typography>Horario:</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Días:</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Frecuencia: {singleResult.frecuencia}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Tipo: {singleResult.tipo}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Costo: {singleResult.price}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Estado:</Typography>
                </Grid>
              </Grid>
              <Grid container xs={7} justifyContent="center" alignItems="center" direction={"column"}>
                <Grid item alignContent={"center"} >
                  <Typography>Comentario</Typography>
                </Grid>
                <Grid item xs={12} alignItems={"center"}>
                  <TextField
                    id="comentario"
                    multiline
                    rows={3}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid container xs={2} justifyContent={"center"} alignItems="flex-end" marginBottom={5}>
                <Grid item alignItems={"center"} >
                  <Button>Enviar</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid container xs={12} justifyContent={"center"} marginLeft={5} marginBottom={2}>
              <Grid item alignItems={"center"}>
                <Button>Finalizar</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      ))}
      </Grid>
      <Grid container name="perfil" xs={5} alignItems={"flex-start"} sx={{backgroundColor: "#e1f7f1",border: " 2px solid #117c6f", marginTop:2, marginBottom:3, height:"700px"}} >

      <Grid container name="perfil" xs={3.5} sx={{ backgroundColor: "#e1f7f1", border: " 2px solid #117c6f", marginTop: 2, marginBottom: 3, }} >
        <div className='cursosPerfil'>
          <div className='cursosPerfilFoto'><Avatar sx={{ width: 100, height: 100 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg"/></div>
          <div><Stack direction="row" spacing={2}>
            <Button variant="contained" component="label">
              Upload
              <input hidden accept="image/*" multiple type="file" />
            </Button>
            <IconButton color="primary" aria-label="upload picture" component="label">
              <input hidden accept="image/*" type="file" />
              <PhotoCamera />
            </IconButton>
          </Stack></div>
          <div>Nombre: *nombre*</div>
          <div>Correo: *email*</div>
          <div>Telefono: *telefono*</div>
        </div>
      </Grid>
    
  
    </Grid>
    </Grid>
  )
}

export default Cursos