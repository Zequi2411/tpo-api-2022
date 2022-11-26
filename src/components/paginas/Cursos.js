import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';

function Cursos() {
  const [value, setValue] = React.useState();
  
  return (
    <Grid container>
      <Grid container xs={12} alignItems="center" sx={{marginTop:2, marginLeft:6, marginBottom:2,}}>
        <Grid item>
          <Button href="/buscarcurso">Buscar Clases</Button>
        </Grid>
        <Grid item>
          <SearchIcon />
        </Grid>
      </Grid>
      <Grid container xs={7} justifyContent={"center"} sx={{marginTop:2, marginBottom:3,}}>
        <Grid container xs={10} sx={{backgroundColor: "#e1f7f1",border: " 2px solid #117c6f",}} justifyContent={"center"} >
          <Grid container xs={4} alignItems="center" direction={"column"} justifyContent={"center"}>
            <Grid item alignContent={"center"}>
              <Typography>Calificación</Typography>
            </Grid>
            <Grid item alignItems={"center"}>
              <Rating
                name="calificacion"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Grid>
          </Grid>
          <Grid container xs={8} direction={"column"}>
            <Grid container xs={12} sx={{marginBottom:2}}>
              <Grid item xs={12} sx={{marginBottom:1}}>
                <Typography variant="h5">Texto ejemplo. Vamos Argentina Todavia</Typography>
              </Grid>
              <Grid item xs={12} sx={{marginRight:6}}>
                <Divider />
              </Grid> 
            </Grid>
            <Grid container xs={12}>
              <Grid container xs={3} direction="column">
                 <Grid item xs={12}>
                  <Typography>Horario:</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Dias:</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Frecuencia:</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Tipo:</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Costo:</Typography>
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
      <Grid container name="perfil" xs={3.5} sx={{backgroundColor: "#e1f7f1",border: " 2px solid #117c6f", marginTop:2, marginBottom:3,}} >

      </Grid>
    

    </Grid>
  )
}

export default Cursos