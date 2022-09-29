import '../../App.css';
import { Link } from "react-router-dom";
export const Item = ({ id, title, materia, ubicacion, tipo, frecuencia, price, image, descripcion }) => {
    return (
        <div className='IPadre'>
            <div className='IH1'>
                <h2>{title}</h2>
                <Link to={'/detail/' + id} className='ItemButton'> Detalles </Link>
            </div>
            <div className='IH2'>
                <div className='IN1'>
                    <img width={"200px"} src={image} alt={title} />
                </div>
                <div className='IN2'>
                    <div>
                        {ubicacion} | {materia}
                    </div>
                    <div>
                        <p>{descripcion}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}