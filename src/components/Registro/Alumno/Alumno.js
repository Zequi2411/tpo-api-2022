import React from 'react'
import Button from '@mui/material/Button'

const Alumno = ({onAlumno}) => {
  return (
    <div>
      <Button sx={{color:"black"}} fullWidth onClick={onAlumno}>Alumno</Button>
    </div>
  )
}

export default Alumno
