import data from '../CursosSearch/mockData';
import { useEffect, useState } from "react";
import { ItemList } from '../ItemList/ItemList';
import '../../App.css';

const ItemListConteiner = ({ greeting }) => {
  const [productList, setProductList] = useState([]);
  const [search, setSearch] = useState("");

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
    <div className="divPadreItemListConteiner">
      <h1> {greeting} </h1>

      <table className='table table-striped table-hover mt-5 shadow-lg'>
        <thead>
          <tr className='bg-curso text-white'>
            <th>NOMBRE</th>
            <th>MATERIA</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>

      <ItemList lista={productList}/>
    </div>
  )
}

export default ItemListConteiner