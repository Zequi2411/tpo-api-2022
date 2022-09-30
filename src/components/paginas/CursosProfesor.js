
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


function CursosProfesor() {



    return(
        <div>
        <article className='e'>
            <Link to='/crearcursos'>
                <Button variant="contained">
                    Crear Curso
                </Button>
            </Link>
        </article>
        <article className='a'>
            <Button variant="contained">
                Modificar Curso
            </Button>
        </article>
        <article>
            <Link to='/solicitud'>
                <Button variant="contained">
                    Solicitudes
                </Button>
            </Link>
        </article>
        </div>
    )
}

export default CursosProfesor