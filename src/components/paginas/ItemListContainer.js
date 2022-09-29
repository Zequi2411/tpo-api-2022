import data from '../CursosSearch/mockData';
import { useEffect, useState } from "react";
import { ItemList } from '../ItemList/ItemList';
import '../../App.css';
import CursosSearch from '../CursosSearch/CursosSearch';

const ItemListConteiner = () => {
  const [productList, setProductList] = useState([]);

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
      <div className='ILCdiv'>
        <CursosSearch/>
        <ItemList lista={productList}/>
      </div>
    </div>
  )
}

export default ItemListConteiner