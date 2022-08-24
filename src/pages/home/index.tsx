import React, {useState, useEffect, useCallback} from 'react';
import { api } from '../../services/api';
import { Product } from '../../store/reducers/items/reducer';
import {useDispatch} from 'react-redux';
import { AddProduct } from '../../store/reducers/items/actions';


export function Home() {

  const dispatch = useDispatch();

  const [listProducts, setListProducts] = useState<Product[]>([]);

 const handleAddProduct = useCallback((product: any) => {
  dispatch(AddProduct(product));
 }, [dispatch]);

  useEffect(() => {
    api.get('products').then((r:any) => {
      setListProducts(r.data);
    });
  },[]);

  return (
    <main>
      <h1>Lista de produtos</h1>
      {
        listProducts.map((product)=>(
          <article key={product.id}>
            <strong> {product.title}</strong> {" - "}
            <span> {product.price}</span> {" - "}

            <button onClick={() => handleAddProduct(product)} type="button">Comprar</button>
          </article>
        ))
      }
        
    </main>
  );
}