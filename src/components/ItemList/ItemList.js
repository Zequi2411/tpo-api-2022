import '../../App.css';
import { Item } from '../Item/Item';
export const ItemList = ({ lista }) => {
  return (
    <div className="ItemListPadre">
      {lista.map((product) => (
        <Item
          key={product.id}
          title={product.title}
          materia={product.materia}
          ubicacion={product.ubicacion}
          tipo={product.tipo}
          frecuencia={product.frecuencia}
          price={product.price}
          image={product.image}
          id={product.id}
          descripcion={product.description}
        />
      ))}
    </div>
  );
};
