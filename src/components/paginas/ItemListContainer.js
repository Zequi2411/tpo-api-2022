/* import data from '../CursosSearch/mockData';
import { useEffect, useState } from "react";
import { Item } from '../Item/Item';
import '../../App.css';

const ItemListConteiner = () => {
  const [productList, setProductList] = useState([]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    getProducts.then((response) => {
      setProductList(response);
    })
      .catch((error) => console.log(error));
  }, []);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });

  return (
    <div className='divPadreItemListContainer'>
      <div>
        <input type="text" placeholder="¿Que queres aprender?" onChange={(e) => setQuery(e.target.value)}></input>
        <button type="submit"><img src="/images/search.png"></img></button>
        
        {productList.filter(product=>product.title.toLowerCase().includes(query)).map((product) => (
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
    </div>
  )
}

export default ItemListConteiner */