import Grid from '@mui/material/Grid'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';

const AgregarAlumno = ({onAlumno}) => {

    const [fechaSeleccionada, CambiarFechaSeleccionada] = useState(new Date());

  return (
        <Grid container spacing={2} sx={{ mt: 1 }}>
        
        </Grid>
  )
}

export default AgregarAlumno
