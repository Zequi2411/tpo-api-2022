import '../../App.css';
import { Link } from "react-router-dom";
export const Item = ({ id, title, materia, ubicacion, tipo, frecuencia, price, image }) => {
    return (
        <div className="ItemPadre">
            <div className="ItemHijo">
                <img width={"200px"} src={image} alt={title} />
                <h2>{title}</h2>
                <h3>{materia}</h3>
                <h4>{ubicacion}</h4>
                <h5>{tipo}</h5>
                <h5>{frecuencia}</h5>
                <h6>{price}</h6>
                <Link to={'/detail/'+ id} className='ItemButton'> Detalles </Link> 
            </div>
        </div>
    )
}